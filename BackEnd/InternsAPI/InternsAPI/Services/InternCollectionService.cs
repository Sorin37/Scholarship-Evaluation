using InternsAPI.Models;
using InternsAPI.Settings;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace InternsAPI.Services
{
    public class InternCollectionService : IInternCollectionService
    {
        private readonly IMongoCollection<Intern> _interns;
        public InternCollectionService(IMongoDBSettings mongoDBSettings)
        {
            var client = new MongoClient(mongoDBSettings.ConnectionString);
            var database = client.GetDatabase(mongoDBSettings.DatabaseName);
            _interns = database.GetCollection<Intern>(mongoDBSettings.InternCollectionName);

        }
        public async Task<bool> Create(Intern intern)
        {
            await _interns.InsertOneAsync(intern);
            return true;
        }

        public async Task<bool> Delete(Guid id)
        {
            var result = await _interns.DeleteOneAsync(intern => intern.Id == id);
            if (result.IsAcknowledged && result.DeletedCount == 0)
            {
                return false;
            }
            return true;

        }

        public async Task<Intern> Get(Guid id)
        {
            return (await _interns.FindAsync(intern => intern.Id == id)).FirstOrDefault();
        }

        public async Task<List<Intern>> GetAll()
        {
            var result = await _interns.FindAsync(intern => true);
            return result.ToList();
        }

        public async Task<bool> Update(Guid id, Intern intern)
        {
            intern.Id = id;
            var result = await _interns.ReplaceOneAsync(n => n.Id == id, intern);

            if (!result.IsAcknowledged && result.ModifiedCount == 0)
            {
                await _interns.InsertOneAsync(intern);
                return false;
            }
            return true;
        }
    }
}
