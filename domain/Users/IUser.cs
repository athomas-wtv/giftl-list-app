using System;

namespace Interfaces.Users
{
    public interface IUser
    {
        int Id { get; set; }
        string FirstName { get; set; }
        string LastName { get; set; }
        string Username { get; set; }
        string EmailAddress { get; set; }
        string Address1 { get; set; }
        string Address2 { get; set; }
        string City { get; set; }
        string State { get; set; }
        string Country { get; set; }
        int PostalCode { get; set; }
        string PasswordHash { get; set; }
        string PasswordSalt { get; set; }
        DateTime LastTimeLoggedIn { get; set; }
    }
}