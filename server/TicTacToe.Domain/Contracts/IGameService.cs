using System;
using System.Collections.Generic;
using System.Text;
using TicTacToe.Domain.Models;

namespace TicTacToe.Domain.Contracts
{
    internal interface IGameService
    {
        Game AddGame(Game game);
        Game GetGameById(string id);
        Game SaveGame(Game game);
    }
}
