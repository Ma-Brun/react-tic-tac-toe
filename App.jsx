import { useState } from 'react'
import './App.css'

function Square({ className, label, size, onClick }) {
  return (
    <button className={className} style={{ width: size, height: size }} onClick={onClick}>
      {label}
    </button>
  );
}

function checkTurn(currentTurn) {
  if (currentTurn === "x") {
    return "o";
  } else {
    return "x";
  }
}

function App() {
  const [showBlankPage, setShowBlankPage] = useState(false)
  const [currentTurn, setCurrentTurn] = useState("x");
  const [board, setBoard] = useState(Array(9).fill(null));

  function handleSquareClick(index) {
    if (board[index] !== null) {
      return;
    }

    const nextBoard = [...board];
    nextBoard[index] = currentTurn;
    setBoard(nextBoard);
    setCurrentTurn(checkTurn(currentTurn));
  }

  function startGame() {
    setBoard(Array(9).fill(null));
    setCurrentTurn("x");
    setShowBlankPage(true);
  }

  if (showBlankPage) {
    return (
      <div className="App">
        <h1>Current turn: {currentTurn.toUpperCase()}</h1>
        <div className="board-row1">
          <Square className ="Tic Tac Toe Box" label={board[0] || ""} size="200px" onClick={() => handleSquareClick(0)}/>
          <Square className ="Tic Tac Toe Box" label={board[1] || ""} size="200px" onClick={() => handleSquareClick(1)}/>
          <Square className ="Tic Tac Toe Box" label={board[2] || ""} size="200px" onClick={() => handleSquareClick(2)}/>
        </div>
        <div className="board-row2">
          <Square className ="Tic Tac Toe Box" label={board[3] || ""} size="200px" onClick={() => handleSquareClick(3)}/>
          <Square className ="Tic Tac Toe Box" label={board[4] || ""} size="200px" onClick={() => handleSquareClick(4)}/>
          <Square className ="Tic Tac Toe Box" label={board[5] || ""} size="200px" onClick={() => handleSquareClick(5)}/>
        </div>
        <div className="board-row3">
          <Square className ="Tic Tac Toe Box" label={board[6] || ""} size="200px" onClick={() => handleSquareClick(6)}/>
          <Square className ="Tic Tac Toe Box" label={board[7] || ""} size="200px" onClick={() => handleSquareClick(7)}/>
          <Square className ="Tic Tac Toe Box" label={board[8] || ""} size="200px" onClick={() => handleSquareClick(8)}/>
        </div>
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
