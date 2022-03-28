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

        /// <summary>
        /// Create an intern
        /// </summary>
        /// <param name="intern"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateIntern([FromBody] Intern intern)
        {
            if (intern == null)
                return BadRequest("Intern is null");
            if (intern.Id == null)
            {
                intern.Id = Guid.NewGuid();
            }
            await _internCollectionService.Create(intern);
            return Ok(await _internCollectionService.GetAll());
        }

        /// <summary>
        /// Update an intern
        /// </summary>
        /// <param name="id"></param>
        /// <param name="intern"></param>
        /// <returns></returns>
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateIntern(Guid id, [FromBody] Intern intern)
        {
            if (intern == null)
            {
                return BadRequest("Intern can't be null");
            }

            if (await _internCollectionService.Get(id) == null)
            {
                await _internCollectionService.Create(intern);
                return Ok("Intern with this id was not found but got created now");
            }

            await _internCollectionService.Update(id, intern);

            return Ok(await _internCollectionService.GetAll());
        }

        /// <summary>
        /// Delete intern
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteIntern(Guid id)
        {
            if (await _internCollectionService.Delete(id) == false)
            {
                return NotFound($"No intern found with id {id}");
            }
            return Ok(await _internCollectionService.GetAll());
        }
    }
}
