"use client"

import React, { useEffect, useState, useRef } from "react"

const mouse = {
  x: null as number | null,
  y: null as number | null,
  radius: 150
}

const TextEffect = () => {
  const [displayWord, setDisplayWord] = useState('Hover Me!')
  const [inputDisplayWord, setInputDisplayWord] = useState('')
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let updateMousePosition: ((event: MouseEvent | TouchEvent) => void) | null = null;

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!inputDisplayWord.trim()) return;
    setDisplayWord(inputDisplayWord);
    setInputDisplayWord("");
  };

  useEffect(() => {
    if (!displayWord) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particleArray: Particle[] = [];
    let adjustX = 5;
    let adjustY = 5;

    updateMousePosition = (event: MouseEvent | TouchEvent) => {
      if ("touches" in event) {
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
      } else {
        mouse.x = event.x;
        mouse.y = event.y;
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("touchmove", updateMousePosition);

    let valueForMobile = 20;
    const isWindowNarrow = () => {
      valueForMobile = 10;
      return window.innerWidth < 575;
    };

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = isWindowNarrow() ? ".5rem Verdana" : "1.2vw Arial";
    ctx.fillText(displayWord, 0, 30);
    const textCoordinates = ctx.getImageData(0, 0, 100, 100);

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 40 + 2;
      }

      draw() {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        if (mouse.x === null || mouse.y === null) return;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;

        if (distance < mouse.radius) {
          this.x -= directionX;
          this.y -= directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 5;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 5;
          }
        }
      }
    }

    const init = () => {
      particleArray = [];
      for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
          if (textCoordinates.data[(y * 4 * textCoordinates.width) + (x * 4) + 3] > 128) {
            let positionX = x + adjustX;
            let positionY = y + adjustY;
            particleArray.push(
              new Particle(positionX * (valueForMobile * 1.5), positionY * (valueForMobile * 1.5))
            );
          }
        }
      }
    };
    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
      }
      connect();
      requestAnimationFrame(animate);
    };
    animate();

    function connect() {
      let opacityValue = 1;
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          let dx = particleArray[a].x - particleArray[b].x;
          let dy = particleArray[a].y - particleArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < valueForMobile * 2) {
            opacityValue = 1 - distance / (valueForMobile * 2);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    return () => {
      if (updateMousePosition) {
        window.removeEventListener("mousemove", updateMousePosition);
        window.removeEventListener("touchmove", updateMousePosition);
      }
    };
  }, [displayWord]);


  return (
    <>
      <form className="form bg-gray-200 h-[50px] flex justify-center items-center relative">
        <input
          type="text"
          placeholder="give me a text to animate..."
          value={inputDisplayWord}
          className="input-field   bg-white py-1.5 px-2 outline-0 rounded-xs"
          id="input"
          max={10}
          onChange={(e) => setInputDisplayWord(e.target.value)}
        />
        <button
          className="button px-2 py-1 border border-blue-300 rounded-xs cursor-pointer bg-blue-300 transform duration-300 hover:scale-105 hover:bg-blue-200"
          id='btn'
          onClick={handleButtonClick}
        >Draw</button>
      </form>
      <canvas
        ref={canvasRef}
        className="h-[calc(90vh-30px)] bg-gray-300 relative top-0 bottom-0 left-0 cursor-pointer text-center"
        id="canvas1">
      </canvas>
    </>
  )
}
export default TextEffect