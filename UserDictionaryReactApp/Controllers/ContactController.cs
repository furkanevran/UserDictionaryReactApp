using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserDictionaryReactApp.Data;
using UserDictionaryReactApp.Models;
using UserDictionaryReactApp.RequestModels;

namespace UserDictionaryReactApp.Controllers
{
    [Route("api/[controller]")]
    public class ContactController : Controller
    {
        private readonly ILogger<ContactController> _logger;
        private readonly UserDictionaryContext _context;

        public ContactController(
            ILogger<ContactController> logger,
            UserDictionaryContext context)
        {
            _logger = logger;
            _context = context;
        }

        [HttpPost]
        [Route(nameof(Add))]
        public async Task<JsonResult> Add([FromBody] ContactInformation contact)
        {
            _logger.LogInformation("Add ContactInformation called");

            var user = await _context.Users.AnyAsync(x => x.Id == contact.UserId);
            if (!user)
            {
                return new JsonResult(new { }) { StatusCode = 400 };
            }

            var contactInDb = await _context.ContactInformations.AddAsync(contact);

            if (await _context.SaveChangesAsync() == 0)
            {
                _logger.LogInformation("Add ContactInformation failed with data:  \n" + JsonConvert.SerializeObject(contact));
                return new JsonResult(new { }) { StatusCode = 500 };
            }

            _logger.LogInformation("Add ContactInformation success");
            return new JsonResult(new { id = contactInDb.CurrentValues["Id"] });
        }

        [HttpPut]
        [Route(nameof(Update) + "/{id:int}")]
        public async Task<StatusCodeResult> Update(int id, [FromBody] UpdateContactInformationRequestModel contact)
        {
            _logger.LogInformation("Update ContactInformation called");

            var contactInDb = await _context.ContactInformations.FindAsync(id);
            if (contactInDb == null)
            {
                return NotFound();
            }

            contactInDb.Type = contact.Type;
            contactInDb.Value = contact.Value;

            if (await _context.SaveChangesAsync() == 0)
            {
                _logger.LogInformation("Update ContactInformation failed with data:  \n" + JsonConvert.SerializeObject(contact));
                return StatusCode(500);
            }

            _logger.LogInformation("Update ContactInformation success");
            return Ok();
        }

        [HttpDelete]
        [Route(nameof(Delete) + "/{id:int}")]
        public async Task<StatusCodeResult> Delete(int id)
        {
            _logger.LogInformation("Delete ContactInformation called");
            var contactInDb = await _context.ContactInformations.FindAsync(id);
            if (contactInDb == null)
            {
                return NotFound();
            }

            _context.Entry(contactInDb).State = EntityState.Deleted;

            if (await _context.SaveChangesAsync() == 0)
            {
                _logger.LogInformation("Delete ContactInformation failed with data id: " + id);
                return StatusCode(500);
            }

            _logger.LogInformation("Delete ContactInformation success");
            return Ok();
        }
    }
}
