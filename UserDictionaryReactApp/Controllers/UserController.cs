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
using System.Collections.Generic;
using UserDictionaryReactApp.DTOs;
using System.Linq;

namespace UserDictionaryReactApp.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly ILogger<UserController> _logger;
        private readonly UserDictionaryContext _context;
        private readonly FileHelper _fileHelper;
        private readonly IMapper _mapper;

        public UserController(
            ILogger<UserController> logger,
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

        public async Task<JsonResult> Add([FromBody] User user)
        {
            _logger.LogInformation("Add User called");

            if (user.FirstName == null || user.Surname == null)
            {
                return new JsonResult(new { })
                {
                    StatusCode = 400
                };
            }
        

            user.FirstName = user.FirstName.Trim();
            user.Surname = user.Surname.Trim();

            if (string.IsNullOrEmpty(user.FirstName) || string.IsNullOrEmpty(user.Surname))
            {
                return new JsonResult(new { })
                {
                    StatusCode = 400
                };
            }

            var mappedUser = _mapper.Map<User, UserRequestModel>(user);
            var newUser = await _context.Users.AddAsync(mappedUser);

            // If no item changed on database we couldn't save the user
            if (await _context.SaveChangesAsync() == 0)
            {
                _logger.LogInformation("Add User failed with data: \n"+JsonConvert.SerializeObject(user));
                return new JsonResult(new {}) { StatusCode = 500};
            }

            _logger.LogInformation($"User {user.FirstName} saved successfully");
            return new JsonResult(new { id = newUser.CurrentValues["Id"] });
        }


        [HttpPut]
        [Route(nameof(Update) + "/{id:int}")]
        public async Task<JsonResult> Update(int id, [FromBody] User user, [FromQuery] bool? deleteNotExistingContacts)
        {
            _logger.LogInformation("Update User called");

            //var userInDb = await _context.Users.Include(x => x.ContactInformations).SingleOrDefaultAsync(x => x.Id == id);
            var userInDb = await _context.Users.FindAsync(id);

            if (userInDb == null)
            {
                return new JsonResult(new { }) { StatusCode = 404 };
            }

            if (deleteNotExistingContacts == true)
            {
                var infosNotInRequest = await _context.ContactInformations.Where(x => x.UserId == id).ToListAsync();

                for (int i = 0; i < infosNotInRequest.Count; i++)
                {
                    if (user.ContactInformations.All(x => x.Id != infosNotInRequest[i].Id))
                    {
                        infosNotInRequest.RemoveAt(i);
                        i--;
                    }
                }
                _context.ContactInformations.RemoveRange(infosNotInRequest);
            }

            var updatedUser = _mapper.Map(user, userInDb);
            _context.Entry(userInDb).CurrentValues.SetValues(updatedUser);

            // If no item changed on database we couldn't update, user probably sent no changed values
            if (await _context.SaveChangesAsync() == 0)
            {
                return new JsonResult(new { }) { StatusCode = 204 };
            }

            _logger.LogInformation($"User {user.FirstName} updated successfully");
            return new JsonResult(await GetUser(id));
        }

        [HttpDelete]
        [Route(nameof(Delete) + "/{id:int}")]
        public async Task<StatusCodeResult> Delete(int id)
        {
            _logger.LogInformation("Delete User called");
            var userInDb = await _context.Users.FindAsync(id);

            if (userInDb == null)
            {
                return NotFound();
            }

            _context.Entry(userInDb).State = EntityState.Deleted;
            
            if (await _context.SaveChangesAsync() == 0)
            {
                _logger.LogInformation("Delete User failed with id: " + id);
                return StatusCode(500);
            }

            _logger.LogInformation($"User `{id}` deletedsuccessfully");
            return Ok();
        }

        [HttpGet]
        [Route(nameof(GetAllUsers))]
        public async Task<IEnumerable<UserDTO>> GetAllUsers([FromQuery] bool? loadContactInfo)
        {
            List<User> dbUsers;
            if (loadContactInfo == true)
            {
                dbUsers = await _context.Users.Include(x => x.ContactInformations).ToListAsync();
            }
            else
            {
                dbUsers = await _context.Users.ToListAsync();
            }


            var mappedUsers = _mapper.Map<List<User>, List<UserDTO>>(dbUsers);

            //advanced/modified bubble sort
            bool hasSwapped = true;
            for (int i = 1; i < mappedUsers.Count && hasSwapped; i++)
            {
                hasSwapped = false;
                for (int j = 0; j < mappedUsers.Count - i; j++)
                {
                    if (mappedUsers[j].FullName.CompareTo(mappedUsers[j + 1].FullName) == 1)
                    {
                        var temp = mappedUsers[j];
                        mappedUsers[j] = mappedUsers[j + 1];
                        mappedUsers[j + 1] = temp;
                        hasSwapped = true;
                    }
                }
            }

            return mappedUsers;
        }

        [HttpGet]
        [Route(nameof(GetUser) + "/{id:int}")]
        public async Task<UserDTO> GetUser(int id)
        {
            var dbUser = await _context.Users.Include(x => x.ContactInformations).SingleOrDefaultAsync(x => x.Id == id);

            return _mapper.Map<User, UserDTO>(dbUser);
        }
    }
}
