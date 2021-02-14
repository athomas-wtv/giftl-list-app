using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

[EnableCors]
[Route("api/{controller}")]
public class UserController : Controller
{
    [HttpGet, Route("test")]
    public string GetTest()
    {
        return "Hello there good look'n!";
    }

    [HttpPost, Route("register")]
    public IActionResult AddUser([FromBody] User newUser)
    {
        // Add code to add user
        return Ok(newUser);
    }
}