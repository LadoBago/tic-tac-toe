using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TicTacToe.Domain.Models
{
    public enum GameStatuses
    {
        Created = 0,
        Abandoned = 1,
        InPorgress = 2,
        Finished = 3
    }
}
