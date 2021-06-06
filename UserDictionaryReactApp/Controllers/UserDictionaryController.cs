using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Threading.Tasks;
using UserDictionaryReactApp.Data;
using UserDictionaryReactApp.Models;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;
using UserDictionaryReactApp.Helpers;
using UserDictionaryReactApp.RequestModels;
using AutoMapper;

namespace UserDictionaryReactApp.Controllers
{
    [Route("api/[controller]")]
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
        [Route(nameof(Add))]

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


        [HttpPut]
        [Route(nameof(Update) + "/{id:int}")]
        public async Task<JsonResult> Update(int id, [FromForm] UserRequestModel user)
        {
            _logger.LogInformation("Update User called");
            var userInDb = await _context.Users.FindAsync(id);
            user.PhotoFileName = userInDb.PhotoFileName;

            if (userInDb == null)
            {
                return new JsonResult(new { }) { StatusCode = 404 };
            }

            if (user.Photo != null)
            {
                user.PhotoFileName = _fileHelper.CopyFile(user.Photo);
                _logger.LogInformation("User photo saved to " + user.PhotoFileName);
            }

            var updatedUser = _mapper.Map(user, userInDb);
            _context.Entry(userInDb).CurrentValues.SetValues(updatedUser);

            // If no item changed on database we couldn't save the user
            if (_context.SaveChanges() == 0)
            {
                _logger.LogInformation("Update User failed with data: \n" + JsonConvert.SerializeObject(user));
                return new JsonResult(new { }) { StatusCode = 500 };
            }

            _logger.LogInformation($"User {user.FirstName} updated successfully");
            return new JsonResult(userInDb);
        }
    }
}
