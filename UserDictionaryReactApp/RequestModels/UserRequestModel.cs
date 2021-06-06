using Microsoft.AspNetCore.Http;
using System;
using UserDictionaryReactApp.Models;

namespace UserDictionaryReactApp.RequestModels
{
    public class UserRequestModel : User
    {
        public IFormFile Photo { get; set; }
    }
}
