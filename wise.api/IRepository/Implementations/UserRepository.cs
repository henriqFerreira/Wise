using wise.api.Models;

namespace wise.api.IRepository.Implementations;

public class UserRepository : IUserRepository
{
    public static User Get(string email)
    {
        var users = new List<User>();

        users.Add(new User
            {
                Id = 1,
                FirstName = "Henrique",
                LastName = "Pinto Ferreira Neto",
                Email = "henrique@gmail.com",
                UserName = "henriquepfn"
            });

        users.Add(new User
            {
                Id = 2,
                FirstName = "Larissa",
                LastName = "Marques da Silva",
                Email = "larissa@gmail.com",
                UserName = "larissams"
            });
        
        return users.Where(x => x.Email == email).FirstOrDefault();
    }
}