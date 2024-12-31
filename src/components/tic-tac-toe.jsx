
import logicTicTacToe from '../hooks/logic-tic-tac-toe';



function TicTacToe() {
    const {board, handleClick, resetGame, StatusMessage} = logicTicTacToe();
  
    return (
      <div className="game">
        <div className="turn">
          {StatusMessage()}
        </div>
  
        <div className="board">
          {board.map((b, index) => {
            return (
              <button
                className="btn"
                key={index}
                onClick={() => handleClick(index)}
                disabled={b !== null}
              >
                {b}
              </button>
            );
          })}
        </div>
        <button className="reset" onClick={resetGame}>
            Reset the Game
          </button>
      </div>
    );
  }
  
  export default TicTacToe;