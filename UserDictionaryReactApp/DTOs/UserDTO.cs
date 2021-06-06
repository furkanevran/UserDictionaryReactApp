using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace UserDictionaryReactApp.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public DateTime BirthDate { get; set; }
        public string Location { get; set; }
        public string PhotoFileName { get; set; }

        public ICollection<ContactInformationDTO> ContactInformations { get; set; }// = new Collection<ContactInformationDTO>();
    }
}
