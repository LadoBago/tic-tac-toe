namespace TicTacToe.WebApi.Models.Games;

public class GamesMakeMoveRequest
{
    public MoveDTO Move { get; set; } = MoveDTO.Empty;
}
