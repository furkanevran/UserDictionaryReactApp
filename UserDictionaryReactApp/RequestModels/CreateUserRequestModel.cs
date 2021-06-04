using Microsoft.AspNetCore.Http;
using System;

namespace UserDictionaryReactApp.RequestModels
{
    public class CreateUserRequestModel
    {
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public DateTime BirthDate { get; set; }
        public string Location { get; set; }

        public IFormFile Photo { get; set; }
    }
}
