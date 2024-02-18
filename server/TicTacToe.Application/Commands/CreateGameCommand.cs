using MediatR;
using TicTacToe.Application.Models;

namespace TicTacToe.Application.Commands;

public class CreateGameCommand : IRequest<Game>
{
}
