using API.Services;
using Interfaces.Users;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Models.Users;

[EnableCors]
[Route("api/{controller}")]
public class UserController : ControllerBase
{
    public readonly IUserService userService;

    public UserController(IUserService userService)
    {
        this.userService = userService;
    }

    [HttpGet, Route("test")]
    public string GetTest()
    {
        return "Hello there good look'n!";
    }

    [HttpPost, Route("register")]
    public IActionResult RegisterUser([FromBody] User newUser)
    {
        this.userService.RegisterUser(newUser);
        return Ok();
    }
}