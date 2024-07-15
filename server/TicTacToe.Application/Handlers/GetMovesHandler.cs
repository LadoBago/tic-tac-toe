using MediatR;
using TicTacToe.Domain.Models;
using TicTacToe.Application.Queries;

namespace TicTacToe.Application.Handlers;

public class GetMovesHandler : IRequestHandler<GetMovesQuery, IEnumerable<Move>>
{
    public Task<IEnumerable<Move>> Handle(GetMovesQuery request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

}
