using Microsoft.AspNetCore.Mvc;
using TicTacToe.WebApi.Models.Games;

namespace TicTacToe.WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GamesController : ControllerBase
{
    [HttpPost]
    [Route("WithOpponent")]
    public async Task<ActionResult<GamesWithOpponentResponse>> WithOpponent([FromBody]GamesWithOpponentRequest request)
    {
        await Task.CompletedTask;
        return Ok();
    }

    [HttpPost]
    [Route("WithCpu")]
    public async Task<ActionResult<GamesWithCpuResponse>> WithCpu([FromBody]GamesWithCpuRequest request)
    {
        await Task.CompletedTask;
        return Ok();
    }

    [HttpGet]
    [Route("{gameId:guid}/moves")]
    public async Task<ActionResult<GamesGetMovesResponse>> GetMoves([FromRoute]Guid gameId)
    {
        await Task.CompletedTask;
        return Ok();
    }

    [HttpPost]
    [Route("{gameId:guid}/moves")]
    public async Task<ActionResult> MakeMove([FromRoute]Guid gameId, [FromBody]GamesMakeMoveRequest request)
    {
        await Task.CompletedTask;
        return Ok();
    }

    [HttpPost]
    [Route("{gameId:guid}/join")]
    public async Task<ActionResult> Join([FromRoute]Guid gameId, GamesJoinRequest request)
    {
        await Task.CompletedTask;
        return Ok();
    }
}
