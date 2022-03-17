using FichaJR.Domain;
using FichaJR.Persistence;
using Microsoft.AspNetCore.Mvc;

namespace FichaJR.API2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FichaController : Controller
    {
        private readonly DataContext _context;
        public FichaController(DataContext context)
        {
            _context = context; 
        }

        [HttpPost]
        public async Task<IActionResult> Create(FichaDto ficha)
        {
            try
            {
                for(var i = 0; i < ficha.Quantidade; i++ )
                {
                    var fichaDb = new Ficha
                    {
                        Celular = ficha.Celular,
                        Nome = ficha.Nome,
                    };
                    _context.Add(fichaDb);                      
                }
                await _context.SaveChangesAsync();
                return Ok();    
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
