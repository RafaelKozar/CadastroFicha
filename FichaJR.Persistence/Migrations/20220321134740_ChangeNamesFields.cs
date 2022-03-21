using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace FichaJR.Persistence.Migrations
{
    public partial class ChangeNamesFields : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Nome",
                table: "Fichas",
                newName: "Phone");

            migrationBuilder.RenameColumn(
                name: "Celular",
                table: "Fichas",
                newName: "Name");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Phone",
                table: "Fichas",
                newName: "Nome");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Fichas",
                newName: "Celular");
        }
    }
}
