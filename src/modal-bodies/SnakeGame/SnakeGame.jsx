import React, { useState, useRef, useEffect } from "react";
import { useInterval } from "./useInterval";
import {
  SNAKE_START,
  APPLE_START,
  SCALE,
  SPEED,
  DIRECTIONS,
} from "./SnakeConstants";

export default function SnakeGame({boardSize}) {
  const canvasRef = useRef();
  const myRef = useRef()
  const [showGameMenu, setGameToMenu] = useState(true);
  const [snake, setSnake] = useState(SNAKE_START);
  const [apple, setApple] = useState(APPLE_START);
  const [dir, setDir] = useState([0, -1]);
  const [speed, setSpeed] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  const controlKeycodes = [37, 38, 39, 40, 87, 65, 83, 68];
  const appleImage = new Image();
  appleImage.src = './apple.png'

  useInterval(() => gameLoop(), speed);

  const endGame = () => {
    setSpeed(null);
    setGameOver(true);
    setGameToMenu(true)
  };

  const moveSnake = ({ keyCode }) => {
    if (controlKeycodes.includes(keyCode)) {
      setDir(DIRECTIONS[keyCode]);
    }
  };

  const createApple = () =>
    apple.map((_a, i) => Math.floor(Math.random() * (boardSize / SCALE)));

  const checkCollision = (piece, snk = snake) => {
    if (
      piece[0] * SCALE >= boardSize ||
      piece[0] < 0 ||
      piece[1] * SCALE >= boardSize ||
      piece[1] < 0
    )
      return true;

    for (const segment of snk) {
      if (piece[0] === segment[0] && piece[1] === segment[1]) return true;
    }
    return false;
  };

  const checkAppleCollision = (newSnake) => {
    if (newSnake[0][0] === apple[0] && newSnake[0][1] === apple[1]) {
      let newApple = createApple();
      while (checkCollision(newApple, newSnake)) {
        newApple = createApple();
      }
      setApple(newApple);
      return true;
    }
    return false;
  };

  const gameLoop = () => {
    if (!gameOver && !showGameMenu) {
      const snakeCopy = JSON.parse(JSON.stringify(snake));
      const newSnakeHead = [snakeCopy[0][0] + dir[0], snakeCopy[0][1] + dir[1]];
      snakeCopy.unshift(newSnakeHead);
      if (checkCollision(newSnakeHead)) endGame();
      if (!checkAppleCollision(snakeCopy)) snakeCopy.pop();
      setSnake(snakeCopy);
    }
  };

  const startGame = () => {
    setSnake(SNAKE_START);
    setApple(APPLE_START);
    setDir([0, -1]);
    setSpeed(SPEED);
    setGameOver(false);
    setGameToMenu(false)
    
  };

  useEffect(() => {
     if(myRef.current) {
      myRef.current.focus() 
     }
    if (!gameOver && !showGameMenu) {
      const context = canvasRef.current.getContext("2d");
      context.setTransform(SCALE, 0, 0, SCALE, 0, 0);
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.fillStyle = "pink";
      snake.forEach(([x, y]) => context.fillRect(x, y, 1, 1));
      context.drawImage(appleImage, apple[0], apple[1], 1, 1)
    }
  }, [snake, apple, gameOver, showGameMenu]);

  return (
      <div className="relative mx-auto h-full w-full flex items-center justify-center">
        {showGameMenu && (
          <div className="text-center pb-20">
            {gameOver && <div className="mb-2">GAME OVER!</div>}
            <h4 className="snake-font text-5xl">Snake</h4>
            <button onClick={startGame} className="mt-6 py-1 px-4 rounded-md bg-blue-600">
              Start Game
            </button>
          </div>
        )}
        {!gameOver && !showGameMenu && (
          <div
            role="button"
            className="outline-none"
            tabIndex="0"
            onKeyDown={(e) => moveSnake(e)}
            ref={myRef}
          >
            <canvas
              className="snake-canvas mx-auto rounded-sm"
              ref={canvasRef}
              width={`${boardSize}px`}
              height={`${boardSize}px`}
            />
          </div>
        )}

        
      </div>
  );
}
