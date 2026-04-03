import { useState } from 'react'
import './App.css'

function Square({ className, label, size, onClick }) {
  return (
    <button className={className} style={{ width: size, height: size }} onClick={onClick}>
      {label}
    </button>
  );
}

const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function calculateWinner(board) {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

function App() {
  const [showBlankPage, setShowBlankPage] = useState(false)
  const [board, setBoard] = useState(Array(9).fill(null));
  const winner = calculateWinner(board);
  const movesPlayed = board.filter(Boolean).length;
  const currentTurn = movesPlayed % 2 === 0 ? "x" : "o";
  const isDraw = !winner && movesPlayed === board.length;

  function getStatusMessage() {
    if (winner) {
      return `Winner: ${winner.toUpperCase()}`;
    }

    if (isDraw) {
      return "It's a draw!";
    }

    return `Current turn: ${currentTurn.toUpperCase()}`;
  }

  function handleSquareClick(index) {
    if (board[index] !== null || winner) {
      return;
    }

    const nextBoard = [...board];
    nextBoard[index] = currentTurn;
    setBoard(nextBoard);
  }

  function startGame() {
    setBoard(Array(9).fill(null));
    setShowBlankPage(true);
  }

  if (showBlankPage) {
    return (
      <div className="App">
        <h1>{getStatusMessage()}</h1>
        {[0, 3, 6].map((rowStart) => (
          <div className="board-row" key={rowStart}>
            {board.slice(rowStart, rowStart + 3).map((square, offset) => {
              const index = rowStart + offset;

              return (
                <Square
                  key={index}
                  className="Tic Tac Toe Box"
                  label={square || ""}
                  size="200px"
                  onClick={() => handleSquareClick(index)}
                />
              );
            })}
          </div>
        ))}
        <Square
          className="Start Game"
          label="Play Again"
          size="100px"
          onClick={startGame}
        />
      </div>
    )
  }

  return (
    <div className="App">
      <h1>I don't know how to code</h1>
      <div className="board-row">
        <Square
          className="Start Game"
          label="Start Game!"
          size="100px"
          onClick={startGame}
        />
      </div>
    </div>
  )
}


export default App
