using MediatR;
using Microsoft.AspNetCore.Mvc;
using TicTacToe.Application.Commands;
using TicTacToe.WebApi.Models.Games;

namespace TicTacToe.WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GamesController(IMediator mediator) : ControllerBase
{
    private readonly IMediator mediator = mediator;

    [HttpPost]
    [Route("WithOpponent")]
    public async Task<ActionResult<GamesWithOpponentResponse>> WithOpponent([FromBody]GamesWithOpponentRequest request)
    {
        var game = await mediator.Send(new CreateGameCommand());
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
    [Route("{gameId}")]
    public async Task<ActionResult<GamesGetSingleResponse>> GetSingle([FromRoute]string gameId)
    {
        await Task.CompletedTask;
        return Ok();
    }
    [HttpGet]
    [Route("{gameId}/moves")]
    public async Task<ActionResult<GamesGetMovesResponse>> GetMoves([FromRoute]string gameId)
    {
        await Task.CompletedTask;
        return Ok();
    }

    [HttpPost]
    [Route("{gameId}/moves")]
    public async Task<ActionResult> MakeMove([FromRoute]string gameId, [FromBody]GamesMakeMoveRequest request)
    {
        await Task.CompletedTask;
        return Ok();
    }

    [HttpPost]
    [Route("{gameId}/join")]
    public async Task<ActionResult> Join([FromRoute]string gameId, GamesJoinRequest request)
    {
        await Task.CompletedTask;
        return Ok();
    }
}
