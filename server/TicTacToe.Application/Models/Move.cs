namespace TicTacToe.Application.Models;

public class Move
{
    public string MoveId { get;set; } = string.Empty;
    public string PlayerName { get; set; } = string.Empty;
    public short SquareIndex { get; set; }
    public char Xor0 { get; set; }    
}
