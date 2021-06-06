using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UserDictionaryReactApp.Models;

namespace UserDictionaryReactApp.RequestModels
{
    public class UpdateContactInformationRequestModel
    {
        public ContactType Type { get; set; }
        public string Value { get; set; }
    }
}
