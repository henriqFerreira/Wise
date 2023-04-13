using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using wise.api.IServices;
using wise.api.Models;
using wise.api.Models.VM;

namespace wise.api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AccountController : ControllerBase 
{
    private UserManager<AspNetUser> _userManager;
    private SignInManager<AspNetUser> _signInManager;
    private readonly IServiceToken _serviceToken;
    public AccountController(
        UserManager<AspNetUser> userManager,
        SignInManager<AspNetUser> signInManager,
        IServiceToken serviceToken
    )
    {
        _userManager = userManager;
        _signInManager = signInManager;
        _serviceToken = serviceToken;
    }

    [HttpGet("Index")]
    [Authorize]
    public IActionResult Index()
    {
        return Ok(new
        {
            Ok = true,
            Title = "Sucesso",
            Message = "Token validado"
        });
    }

    [HttpPost("LogIn")]
    [AllowAnonymous]
    public async Task<IActionResult> LogIn([FromBody] LogInVM model)
    {
        if (!ModelState.IsValid) return BadRequest(new { Ok = false, Title = "Failed", Message = "Incorrect credentials!" });

        var AspNetUser = _userManager.GetByEmail(model.Email, "User");

        if (AspNetUser == null) return BadRequest(new { Ok = false, Title = "Failed", Message = "Incorrect credentials!" });

        var signInResult = await _signInManager.PasswordSignInAsync(AspNetUser, model.Password, false, false);

        if (!signInResult.Succeeded) return BadRequest(new { Ok = false, Title = "Failed", Message = "Incorrect credentials!" });

        var token = _serviceToken.GenerateToken(AspNetUser);

        return Ok(new 
        {
            Ok = true,
            Title = "Success",
            Message = "User logged.",
            Data = AspNetUser.User,
            Token = token
        });  
    }

    [HttpPost("GerarAdmin")]
    [AllowAnonymous]
    public async Task<IActionResult> gerarAdmin()
    {
        string UserName = "Admin";
        string FirstName = "Admin";
        string LastName = "Admin";
        string Email = "admin@wise.com";
        string Password = "!@Admin1@3";
        bool success = false;

        AspNetUser user = new AspNetUser
        {
            UserName = UserName,
            Email = Email,
            TwoFactorEnabled = false,
            User = new User
            {
                UserName = UserName,
                FirstName = FirstName,
                LastName = LastName,
                Email = Email,
                Password = Password
            }
        };

        var result = await _userManager.CreateAsync(user, Password);
        success = result.Succeeded;
        
        if (success)
        {
            return Ok(new { Ok = true, Title = "Success", Message = "Admin created", Data = user });
        }

        return BadRequest(new { Ok = false, Title = "Failed", Message = "Failed admin creation" });
    }
}