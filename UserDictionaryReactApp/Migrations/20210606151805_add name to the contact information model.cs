using Microsoft.EntityFrameworkCore.Migrations;

namespace UserDictionaryReactApp.Migrations
{
    public partial class addnametothecontactinformationmodel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "ContactInformations",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Name",
                table: "ContactInformations");
        }
    }
}
