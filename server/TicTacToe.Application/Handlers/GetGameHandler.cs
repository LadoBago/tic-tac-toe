using MediatR;
using TicTacToe.Domain.Models;
using TicTacToe.Application.Queries;

namespace TicTacToe.Application.Handlers;

public class GetGameHandler : IRequestHandler<GetGameQuery, Game>
{
    public Task<Game> Handle(GetGameQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

}
