using wise.api.Models;

namespace wise.api.IServices;

public interface IServiceToken {
    string GenerateToken(AspNetUser user);
    CookieOptions GenerateCookies();
}