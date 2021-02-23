using Interfaces.Users;
using Services;

namespace API.Services
{
    public class UserService : IUserService
    {
        private readonly GiftContext giftContext;
        public UserService(GiftContext giftContext)
        {
            this.giftContext = giftContext;
        }
        public void Register(IUser User)
        {
            throw new System.NotImplementedException();
        }
    }
}