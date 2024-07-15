namespace TicTacToe.Domain.Models
{
    public class Game
    {
        public string Id { get; set; } = string.Empty;
        public GameModes Mode { get; set; } = GameModes.Unknown;
        public string? PlayerNameX { get; set; }
        public string? PlayerName0 { get; set; }
        public char[] Position { get; set; }
        public byte BoardSize { get; set; }
        public GameStatuses Status { get; set; } = GameStatuses.Created;

    }
}
