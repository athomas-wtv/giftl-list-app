using Microsoft.AspNetCore.Mvc;

[Route("api/{controller}")]
public class UserController : Controller
{
    [HttpPost, Route("register")]
    public IActionResult AddUser(User newUser)
    {
        // Add code to add user
        return Ok();
    }
}