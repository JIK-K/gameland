import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import TopBar from "../../common/components/topbar/topBar";

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
`;

const Body = styled.div`
  height: 100vh;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1%;
  padding: 15px;
`;

const AboutPage: React.FC = () => {
  const [borderColor, setBorderColor] = useState<string>("red");

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [lastX, setLastX] = useState<number>(0);
  const [lastY, setLastY] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomColor = getRandomColor();
      setBorderColor(randomColor);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();

    const handleMouseDown = (event: MouseEvent) => {
      setIsDrawing(true);
      setLastX(event.clientX - rect.left);
      setLastY(event.clientY - rect.top);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDrawing || !ctx) return;

      const currentX = event.clientX - rect.left;
      const currentY = event.clientY - rect.top;

      ctx.beginPath();
      ctx.moveTo(lastX, lastY);
      ctx.lineTo(currentX, currentY);
      ctx.stroke();

      setLastX(currentX);
      setLastY(currentY);
    };

    const handleMouseUp = () => {
      setIsDrawing(false);
    };

    const handleMouseLeave = () => {
      setIsDrawing(false);
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDrawing, lastX, lastY]);

  const getRandomColor = (): string => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <Background style={{ border: `5px dashed ${borderColor}` }}>
      <TopBar />
      <Body>
        <canvas
          ref={canvasRef}
          width="1000"
          height="1000"
          style={{ border: "1px solid #000" }}
        ></canvas>
      </Body>
    </Background>
  );
};

export default AboutPage;
