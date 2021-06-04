using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using UserDictionaryReactApp.Data;
using UserDictionaryReactApp.Models;
using Newtonsoft.Json;
using UserDictionaryReactApp.Helpers;
using UserDictionaryReactApp.RequestModels;

namespace UserDictionaryReactApp.Controllers
{
    public class UserDictionaryController : Controller
    {
        private readonly ILogger<UserDictionaryController> _logger;
        private readonly UserDictionaryContext _context;
        private readonly FileHelper _fileHelper;

        public UserDictionaryController(
            ILogger<UserDictionaryController> logger,
            UserDictionaryContext context,
            FileHelper fileHelper)
        {
            _logger = logger;
            _context = context;
            _fileHelper = fileHelper;
        }

        [HttpPost]
        public async Task<JsonResult> Add([FromForm] CreateUserRequestModel user)
        {
            _logger.LogInformation("Add User called");

            string photoFileName = null;

            // User photo is optional so only try to upload and save user photo if it's not null
            if (user.Photo != null)
            {
                photoFileName = _fileHelper.CopyFile(user.Photo);
                _logger.LogInformation("User photo saved to " + photoFileName);
            }

            var newUser = await _context.Users.AddAsync(new User
            {
                FirstName = user.FirstName,
                Surname = user.Surname,
                BirthDate = user.BirthDate,
                Location = user.Location,
                PhotoFileName = photoFileName
            });

            // If no item changed on database we couldn't save the user
            if (_context.SaveChanges() == 0)
            {
                _logger.LogInformation("Add User failed with data: \n"+JsonConvert.SerializeObject(User));

                return new JsonResult(new {}) { StatusCode = 500};
            }

            _logger.LogInformation($"User {user.FirstName} saved successfully");
            return new JsonResult(new { id=newUser.CurrentValues["Id"] });
        }
    }
}
