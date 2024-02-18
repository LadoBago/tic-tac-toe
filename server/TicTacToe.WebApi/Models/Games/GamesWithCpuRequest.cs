namespace TicTacToe.WebApi.Models.Games;

public class GamesWithCpuRequest
{
    public string PlayerName { get; set; } = String.Empty;
    public string BotName { get; set; } = string.Empty;
    public bool PlaysWithX { get; set; }
    public byte BoardSize { get; set; }
}    

