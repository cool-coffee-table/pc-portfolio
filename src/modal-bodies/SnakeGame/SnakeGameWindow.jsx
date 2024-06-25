import React, { useRef, useState, useEffect } from "react";
import SnakeGame from "./SnakeGame";

export default function SnakeGameWindow() {
  const gameWindowRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        const { width, height } = entry.contentRect;
        setDimensions({ width, height });
      }
    });

    if (gameWindowRef.current) {
      observer.observe(gameWindowRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const constraint = Math.min(dimensions.width, dimensions.height)

  const boardSize = Math.min(800, constraint - 20)

  return (
    <div className="h-full snn" ref={gameWindowRef}>
      <SnakeGame boardSize={boardSize}/>
    </div>
  );
}
