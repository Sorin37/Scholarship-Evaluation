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

        public Task<bool> Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public Task<Intern> Get(Guid id)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Intern>> GetAll()
        {
            var result = await _interns.FindAsync(intern => true);
            return result.ToList();
        }

        public Task<bool> Update(Guid id, Intern model)
        {
            throw new NotImplementedException();
        }
    }
}
