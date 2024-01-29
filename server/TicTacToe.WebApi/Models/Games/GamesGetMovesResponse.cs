namespace TicTacToe.WebApi.Models.Games;

public class GamesGetMovesResponse
{
    public IEnumerable<MoveDTO> Moves { get; set; } = [];
}
