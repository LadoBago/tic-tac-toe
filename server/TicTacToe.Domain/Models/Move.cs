namespace TicTacToe.Domain.Models
{
    public class Move
    {
        public string Id { get;set; } = string.Empty;
        public string PlayerName { get; set; } = string.Empty;
        public short SquareIndex { get; set; }
        public char Xor0 { get; set; }    
    }
}
