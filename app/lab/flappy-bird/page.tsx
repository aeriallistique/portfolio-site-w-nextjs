"use client"
import { useEffect, useRef } from "react"
import sprite from '@/public/sprite.png'

const FlappyBird = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  let frames = 0
  const DEGREE = Math.PI / 180


  const startBtn = {
    x: 120,
    y: 263,
    h: 29,
    w: 83
  }
  const state = {
    current: 0,
    getReady: 0,
    game: 1,
    over: 2
  }


  useEffect(() => {
    const cvs = document.getElementById('mycanvas') as HTMLCanvasElement
    if (!cvs) return
    const ctx = cvs.getContext('2d')
    if (!ctx) return
    canvasRef.current = cvs;
    ctxRef.current = ctx;

    const spriteImg = new Image()
    spriteImg.src = (sprite as any).src || sprite;


    const bg = {
      sX: 0,
      sY: 0,
      w: 275,
      h: 226,
      x: 0,
      y: cvs.height - 226,
      draw: function () {
        ctx.drawImage(spriteImg, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h)

        ctx.drawImage(spriteImg, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h)

      }
    }

    const fg = {
      sX: 276,
      sY: 0,
      w: 224,
      h: 112,
      x: 0,
      y: cvs.height - 112,
      dx: 2,
      draw: function () {
        ctx.drawImage(spriteImg, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h)
        ctx.drawImage(spriteImg, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, cvs.width, this.h);
      },
      update: function () {
        if (state.current === state.game) {
          this.x = (this.x - this.dx) % (this.w / 2)
        }
      }
    }

    const bird = {
      animation: [
        { sX: 276, sY: 112 },
        { sX: 276, sY: 139 },
        { sX: 276, sY: 164 },
        { sX: 276, sY: 139 }
      ],
      x: 50,
      y: 150,
      w: 34,
      h: 26,
      radius: 12,

      frame: 0,

      gravity: 0.15,
      jump: 2.5,
      speed: 0,
      rotation: 0,
      period: 0,
      draw: function () {
        let bird = this.animation[this.frame]
        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)
        ctx.drawImage(spriteImg, bird.sX, bird.sY, this.w, this.h, -this.w / 2, -this.h / 2, this.w, this.h);
        ctx.restore()
      },
      flap: function () {
        this.speed = - this.jump;
      },
      update: function () {
        //if game state is get ready, the bird must fla slowly
        this.period = state.current === state.getReady ? 10 : 5;

        this.frame += frames % this.period == 0 ? 1 : 0;
        this.frame = this.frame % this.animation.length;
        if (state.current === state.getReady) {
          this.y = 150 //reset position of the bird after game over
          this.rotation = 0 * DEGREE;
        } else {
          this.speed += this.gravity;
          this.y += this.speed;
          if (this.y + this.h / 2 >= cvs.height - fg.h) {
            this.y = cvs.height - fg.h - this.h / 2
            if (state.current === state.game) {
              state.current = state.over
            }
          }
          if (this.speed >= this.jump) {
            this.rotation = 90 * DEGREE;
            this.frame = 1
          } else {
            this.rotation = -25 * DEGREE;
          }
        }
      },
      speedReset: function () {
        this.speed = 0;
      }
    }

    const getReady = {
      sX: 0,
      sY: 228,
      w: 173,
      h: 152,
      x: cvs.width / 2 - 173 / 2,
      y: 80,

      draw: function () {
        if (state.current == state.getReady) {
          ctx.drawImage(spriteImg, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h)
        }
      }
    }

    const gameOver = {
      sX: 175,
      sY: 228,
      w: 225,
      h: 202,
      x: cvs.width / 2 - 225 / 2,
      y: 90,

      draw: function () {
        if (state.current == state.over) {
          ctx.drawImage(spriteImg, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h)
        }
      }
    }

    const pipes = {
      position: [{ x: 0, y: 0 }],
      top: {
        sX: 553,
        sY: 0
      },
      bottom: {
        sX: 502,
        sY: 0
      },

      w: 53,
      h: 400,
      gap: 85,
      maxYPos: -150,
      dx: 2,

      draw: function () {
        for (let i = 0; i < this.position.length; i++) {
          let p = this.position[i];

          let topYPos = p.y;
          let bottomYPos = p.y + this.h + this.gap;

          ctx.drawImage(spriteImg, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);
          ctx.drawImage(spriteImg, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);
        }
      },

      update: function () {
        if (state.current !== state.game) return;

        if (frames % 100 == 0) {
          this.position.push({
            x: cvs.width,
            y: this.maxYPos * (Math.random() + 1)
          });
        }
        for (let i = 0; i < this.position.length; i++) {
          let p = this.position[i];


          let bottomPipeYPos = p.y + this.h + this.gap;

          //collistion detections
          if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > p.y && bird.y - bird.radius < p.y + this.h) {
            state.current = state.over;
          }

          if (bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > bottomPipeYPos && bird.y - bird.radius < bottomPipeYPos + this.h) {
            state.current = state.over;
          }

          //move the pipes to the left
          p.x -= this.dx;

          //if pipes go beyond the canvas
          if (p.x + this.w <= 0) {
            this.position.shift();
            score.value += 1;
            // SCORE_S.play();
            score.best = Math.max(score.value, score.best);
            localStorage.setItem("best", score.best);
          }
        }
      },

      reset: function () {
        this.position = [];
      }
    }

    const score = {
      best: typeof window !== 'undefined' ?
        parseInt(localStorage.getItem("best") || "0") : "0",
      value: '0',

      draw: function () {
        ctx.fillStyle = "#FFF";

        if (state.current === state.game) {
          ctx.lineWidth = 2;
          ctx.font = " 35px Teko";
          ctx.fillText(this.value, cvs.width / 2, 50);
          ctx.strokeText(this.value, cvs.width / 2, 50);
        } else if (state.current === state.over) {

          ctx.font = "25px Teko";
          ctx.fillText(this.value, 225, 186);
          ctx.strokeText(this.value, 225, 186);

          ctx.fillText(this.best, 225, 228);
          ctx.strokeText(this.best, 225, 228);
        }
      },
      reset: function () {
        this.value = "0";
      }
    }

    function draw() {
      ctx.fillStyle = "#70c5ce";
      ctx.fillRect(0, 0, cvs.width, cvs.height);

      bg.draw()
      pipes.draw()
      fg.draw()
      bird.draw()
      getReady.draw()
      gameOver.draw()
      score.draw()
    }

    function update() {
      bird.update();
      fg.update();
      pipes.update();
    };

    function loop() {
      update();
      draw();
      frames++;

      requestAnimationFrame(loop);

    }
    loop();




    function handleCanvasClick(e: MouseEvent) {
      e.preventDefault()
      switch (state.current) {
        case state.getReady:
          state.current = state.game;
          break;
        case state.game:
          bird.flap()
          break;
        case state.over:
          const rect = cvs.getBoundingClientRect()
          let clickX = e.clientX - rect.left
          let clickY = e.clientY - rect.top
          // CHECK IF CLICK HAPPENED ON THE BUTTON
          if (clickX >= 0 && clickX <= cvs.width && clickY >= startBtn.y && clickY <= startBtn.y + startBtn.h) {
            pipes.reset()
            bird.speedReset()
            score.reset()
            state.current = state.getReady
          }
          break;
      }
    }

    cvs.addEventListener('click', handleCanvasClick)


    return () => {
      cvs.removeEventListener('click', handleCanvasClick)
    }

  }, [])




  return (
    <>
      <canvas
        className="border block mx-auto mt-12"
        id="mycanvas"
        width="520"
        height="680">

      </canvas>
    </>
  )
}

export default FlappyBird