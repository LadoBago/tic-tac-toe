namespace TicTacToe.WebApi.Models.Games;

public class MoveDTO
{
    public string MoveId { get;set; } = string.Empty;
    public short SquareIndex { get; set; }
    public char Xor0 { get; set; }

    public static MoveDTO Empty => new ();
}
