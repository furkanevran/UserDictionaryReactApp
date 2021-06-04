using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace UserDictionaryReactApp.Models
{
    public class ContactInformation
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }

        public ContactType Type { get; set; }
        public string Value { get; set; }


        public int UserId { get; set; }

        [ForeignKey(nameof(UserId))]
        public virtual User User { get; set; }
    }

    public enum ContactType
    {
        Phone,
        Email,
        Social,
    }
}
