namespace TicTacToe.WebApi.Models.Games;

public class GameDTO
{
    public string GameId { get; set; } = string.Empty;
    public string? PlayerNameX { get; set; }
    public string? PlayerName0 { get; set; }
    public char[] Position { get; set; } = [];
    public byte BoardSize { get; set; }    
}
