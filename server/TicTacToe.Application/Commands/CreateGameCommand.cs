using MediatR;
using TicTacToe.Domain.Models;

namespace TicTacToe.Application.Commands;

public class CreateGameCommand : IRequest<Game>
{
}
