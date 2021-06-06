using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using UserDictionaryReactApp.Data;
using UserDictionaryReactApp.Models;
using Newtonsoft.Json;
using UserDictionaryReactApp.Helpers;
using UserDictionaryReactApp.RequestModels;
using AutoMapper;

namespace UserDictionaryReactApp.Controllers
{
    public class UserDictionaryController : Controller
    {
        private readonly ILogger<UserDictionaryController> _logger;
        private readonly UserDictionaryContext _context;
        private readonly FileHelper _fileHelper;
        private readonly IMapper _mapper;

        public UserDictionaryController(
            ILogger<UserDictionaryController> logger,
            UserDictionaryContext context,
            FileHelper fileHelper,
            IMapper mapper)
        {
            _logger = logger;
            _context = context;
            _fileHelper = fileHelper;
            _mapper = mapper;
        }

        [HttpPost]
        public async Task<JsonResult> Add([FromForm] UserRequestModel user)
        {
            _logger.LogInformation("Add User called");

            // User photo is optional so only try to upload and save user photo if it's not null
            if (user.Photo != null)
            {
                user.PhotoFileName = _fileHelper.CopyFile(user.Photo);
                _logger.LogInformation("User photo saved to " + user.PhotoFileName);
            }

            var mappedUser = _mapper.Map<User, UserRequestModel>(user);
            var newUser = await _context.Users.AddAsync(mappedUser);

            // If no item changed on database we couldn't save the user
            if (_context.SaveChanges() == 0)
            {
                _logger.LogInformation("Add User failed with data: \n"+JsonConvert.SerializeObject(user));

                return new JsonResult(new {}) { StatusCode = 500};
            }

            _logger.LogInformation($"User {user.FirstName} saved successfully");
            return new JsonResult(new { id = newUser.CurrentValues["Id"] });
        }
    }
}
