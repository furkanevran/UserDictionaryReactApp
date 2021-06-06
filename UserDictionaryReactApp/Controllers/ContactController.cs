using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserDictionaryReactApp.Data;
using UserDictionaryReactApp.Models;

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
        public async Task<StatusCodeResult> Add([FromBody] ContactInformation contact)
        {
            _logger.LogInformation("Add ContactInformation called");
            var user = await _context.Users.FindAsync(contact.UserId);
            if (user == null)
            {
                return BadRequest();
            }

            user.ContactInformations.Add(contact);

            if (await _context.SaveChangesAsync() == 0)
            {
                _logger.LogInformation("Add ContactInformation failed with data:  \n" + JsonConvert.SerializeObject(contact));
                return StatusCode(500);
            }

            _logger.LogInformation("Add ContactInformation success");
            return Ok();
        }
    }
}
