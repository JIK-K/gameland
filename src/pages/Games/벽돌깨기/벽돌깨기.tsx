import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TopBar from "../../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Canvas = styled.canvas`
  border: 2px solid black;
`;

interface Brick {
  x: number;
  y: number;
  status: number;
}

const 벽돌깨기: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 7;
    let dy = -7;

    const ballRadius = 10;
    const ballColor = "red";

    const paddleHeight = 20;
    const paddleWidth = 120;
    let paddleX = (canvas.width - paddleWidth) / 2;

    let rightPressed = false;
    let leftPressed = false;

    const brickRowCount = 5;
    const brickColumnCount = 9;
    const brickWidth = 75;
    const brickHeight = 20;
    const brickPadding = 10;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 30;
    const bricks: Brick[][] = [];
    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }

    const getBrickColor = (row: number) => {
      switch (row) {
        case 0:
          return "red";
        case 1:
          return "orange";
        case 2:
          return "yellow";
        case 3:
          return "green";
        case 4:
          return "blue";
        default:
          return "black";
      }
    };

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = ballColor;
      ctx.fill();
      ctx.closePath();
    };

    const drawPaddle = () => {
      ctx.beginPath();
      ctx.rect(
        paddleX,
        canvas.height - paddleHeight,
        paddleWidth,
        paddleHeight
      );
      ctx.fillStyle = "black";
      ctx.fill();
      ctx.closePath();
    };

    const drawBricks = () => {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status === 1) {
            const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
            const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = getBrickColor(r);
            ctx.fill();
            ctx.closePath();
          }
        }
      }
    };

    const collisionDetection = () => {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          const brick = bricks[c][r];
          if (brick.status === 1) {
            if (
              x > brick.x &&
              x < brick.x + brickWidth &&
              y > brick.y &&
              y < brick.y + brickHeight
            ) {
              dx = (Math.random() - 0.5) * 100; // x 방향을 랜덤하게 변경
              dy = -dy;
              brick.status = 0;
            }
          }
        }
      }
    };

    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
      }
    };

    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBricks();
      drawBall();
      drawPaddle();
      collisionDetection();

      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if (y + dy < ballRadius) {
        dy = -dy;
      } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
          dy = -dy;
        } else {
          document.location.reload();
          clearInterval(interval);
        }
      }

      if (rightPressed && paddleX < canvas.width - paddleWidth) {
        paddleX += 7;
      } else if (leftPressed && paddleX > 0) {
        paddleX -= 7;
      }

      x += dx;
      y += dy;
    };

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);

    const interval = setInterval(draw, 10);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", keyDownHandler);
      document.removeEventListener("keyup", keyUpHandler);
    };
  }, []);

  return (
    <Background>
      <TopBar />
      <div style={{ color: "white", fontWeight: "bold" }}>
        절대못깨는 블록깨기
      </div>
      <Canvas
        style={{ height: "100vh", backgroundColor: "white" }}
        ref={canvasRef}
        width={800}
        height={600}
      />
    </Background>
  );
};

export default 벽돌깨기;
