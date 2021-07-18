using System;
using Data;
using Interfaces.Users;
using Models.Users;

namespace API.Services
{
    public class UserService : IUserService
    {
        private readonly GiftContext giftContext;
        public UserService(GiftContext giftContext)
        {
            this.giftContext = giftContext;
        }

        public void RegisterUser(IUser user)
        {
            this.giftContext.Users.Add((User)user);
            this.giftContext.SaveChanges();
        }
    }
}