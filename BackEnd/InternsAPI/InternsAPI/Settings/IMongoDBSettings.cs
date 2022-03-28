namespace InternsAPI.Settings
{
    public interface IMongoDBSettings
    {
        string InternCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }

}
