namespace InternsAPI.Settings
{
    public class MongoDBSettings : IMongoDBSettings
    {
        public string InternCollectionName { get; set; }
        public string ConnectionString { get ; set; }
        public string DatabaseName { get ; set ; }
    }
}
