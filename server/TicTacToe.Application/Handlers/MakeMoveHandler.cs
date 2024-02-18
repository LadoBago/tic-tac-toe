using MediatR;
using TicTacToe.Application.Commands;

namespace TicTacToe.Application.Handlers;

public class MakeMoveHandler : IRequestHandler<MakeMoveCommand>
{
    public Task Handle(MakeMoveCommand request, CancellationToken cancellationToken)
    {
        throw new NotImplementedException();
    }
}
