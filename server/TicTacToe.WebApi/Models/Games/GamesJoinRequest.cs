namespace TicTacToe.WebApi.Models.Games;

public class GamesJoinRequest
{
    public Guid GameId { get; set; }
    public string PlayerName { get; set; } = String.Empty;
}
