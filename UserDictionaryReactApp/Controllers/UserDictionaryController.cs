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

            var photoPath = _fileHelper.CopyFile(user.Photo);
            _logger.LogInformation("User photo saved to " + photoPath);
            var newUser = await _context.Users.AddAsync(new User
            {
                FirstName = user.FirstName,
                Surname = user.Surname,
                Email = user.Email,
                BirthDate = user.BirthDate,
                Location = user.Location,
                PhotoFileName = photoPath
            });

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
