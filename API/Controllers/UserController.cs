using Microsoft.AspNetCore.Mvc;

[Route("api/{controller}")]
public class UserController : Controller
{
    [HttpGet, Route("add")]
    public IActionResult AddUser(User newUser)
    {
        // Add code to add user
        return Ok();
    }
}