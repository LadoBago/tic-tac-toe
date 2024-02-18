using MediatR;
using TicTacToe.Application.Models;

namespace TicTacToe.Application.Queries;

public class GetGameQuery : IRequest<Game>
{
}
