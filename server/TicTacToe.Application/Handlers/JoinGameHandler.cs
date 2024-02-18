using MediatR;
using TicTacToe.Application.Commands;

namespace TicTacToe.Application.Handlers;

public class JoinGameHandler : IRequestHandler<JoinGameCommand>
{
    public Task Handle(JoinGameCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }

}
