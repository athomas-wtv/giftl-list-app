using System;
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
        return "Hi, Earth!";
    }

    [HttpPost, Route("register")]
    public IActionResult RegisterUser([FromBody] User newUser)
    {
        if(newUser.PasswordHash == null)
            newUser.PasswordHash = "asdfasffasdfasf";
        
        if(newUser.PasswordSalt == null)
            newUser.PasswordSalt = "oijfsf";

        try
        {
            this.userService.RegisterUser(newUser);
            return Ok();
        }
        catch (Exception ex)
        {
            // Console.WriteLine(ex.Message);
            return Content(ex.Message);
        }
    }
}