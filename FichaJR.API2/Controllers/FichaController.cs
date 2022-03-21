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
        public async Task<IActionResult> CreateTicket(FichaDto ficha)
        {
            try
            {
                for(var i = 0; i < ficha.Quantity; i++ )
                {
                    var fichaDb = new Ficha
                    {
                        Phone = ficha.Phone,
                        Name = ficha.Name,
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
