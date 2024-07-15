using MediatR;
using TicTacToe.Application.Commands;
using TicTacToe.Domain.Models;

namespace TicTacToe.Application.Handlers;

public class CreateGameHandler : IRequestHandler<CreateGameCommand, Game>
{
    public Task<Game> Handle(CreateGameCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
