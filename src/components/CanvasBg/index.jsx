"use client";
import { useEffect, useRef } from "react";
import s from "./index.module.scss";
const index = () => {
  const canvasRef = useRef();
  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    const bodyWidth = document.body.offsetWidth;
    const bodyHeight = document.body.scrollHeight;

    canvasRef.current.width = bodyWidth;
    canvasRef.current.height = bodyHeight;

    canvasRef.current.style.height = `${bodyHeight - 150}px`;

    const getRandom = (min, max) => Math.random() * (max - min) + min;

    const drawRandomCircles = (count) => {
      for (let i = 0; i < count; i++) {
        const x = getRandom(0, canvasRef.current.width);
        const y = getRandom(0, canvasRef.current.height);
        const radius = getRandom(2, 5);

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2, true);
        ctx.fillStyle = `#fff`;
        ctx.fill();
        ctx.closePath();
      }
    };

    drawRandomCircles(100);
  }, []);

  return <canvas className={s.canvas} ref={canvasRef} />;
};
export default index;
