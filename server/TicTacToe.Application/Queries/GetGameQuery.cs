using MediatR;
using TicTacToe.Domain.Models;

namespace TicTacToe.Application.Queries;

public class GetGameQuery : IRequest<Game>
{
}
