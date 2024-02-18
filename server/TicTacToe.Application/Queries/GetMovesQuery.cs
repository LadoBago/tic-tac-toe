using MediatR;
using TicTacToe.Application.Models;

namespace TicTacToe.Application.Queries;

public class GetMovesQuery : IRequest<IEnumerable<Move>>
{
}
