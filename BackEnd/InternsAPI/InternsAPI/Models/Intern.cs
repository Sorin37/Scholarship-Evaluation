using System;

namespace InternsAPI.Models
{
    public class Intern
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
        public string DateOfBirth { get; set; }
    }
}
