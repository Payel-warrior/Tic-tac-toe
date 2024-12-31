
import {useState} from "react";

const initialBoard = () => Array(9).fill(null);

const LogicTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isXNext, setIsXNext] = useState(true);

  const WINNING_PATTERNS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const calculateWinner = (currValue) => {
    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const [a, b, c] = WINNING_PATTERNS[i];
      if (
        currValue[a] &&
        currValue[a] === currValue[b] &&
        currValue[a] === currValue[c]
      ) {
        return currValue[a];
      }
    }

    return null;
  };

  const handleClick = (index) => {
    // check winner
    const winner = calculateWinner(board);
    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const StatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `Player ${winner} wins!`;
    if (!board.includes(null)) return `It's a draw!!`;
    return `Player ${isXNext ? "X" : "O"}'s turn !!`;
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setIsXNext(true);
  };

  return {board, handleClick, calculateWinner, StatusMessage, resetGame};
};

export default LogicTicTacToe;