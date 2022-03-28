using InternsAPI.Models;
using InternsAPI.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace InternsAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class InternController : ControllerBase
    {
        IInternCollectionService _internCollectionService;

        public InternController(IInternCollectionService internCollectionService)
        {
            _internCollectionService = internCollectionService ?? throw new ArgumentNullException(nameof(internCollectionService));
        }

        /// <summary>
        /// Get all interns
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<IActionResult> GetInterns()
        {
            return Ok(await _internCollectionService.GetAll());
        }

        [HttpPost]
        public async Task<IActionResult> CreateNote([FromBody] Intern intern)
        {
            if (intern == null)
                return BadRequest("Note is null");
            if (intern.Id == null)
            {
                intern.Id = Guid.NewGuid();
            }
            await _internCollectionService.Create(intern);
            return Ok(await _internCollectionService.GetAll());
        }
    }
}
