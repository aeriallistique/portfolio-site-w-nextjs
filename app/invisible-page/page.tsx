"use client"
import { useEffect, useRef } from "react"
import { TouchObject, Colors } from "../utils/helper"

const InvisiblePage = () => {
  // let ongoingTouches = [] as Array<TouchObject>
  // const colorChoice = colorForTouch()
  let color = Colors[Math.floor(Math.random() * Colors.length)];
  let painting = false as Boolean;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const cvs = document.getElementById('canvas') as HTMLCanvasElement
    if (!cvs) return

    const ctx = cvs.getContext('2d')
    if (!ctx) return

    onScreenResize()

    canvasRef.current = cvs;
    ctxRef.current = ctx;

    function onScreenResize() {
      cvs.width = window.innerWidth;
      cvs.height = window.innerHeight;
    }
    // cvs.addEventListener("touchstart", handleStart, false)
    // cvs.addEventListener("touchend", handleEnd, false)
    // cvs.addEventListener("touchcancel", handleCancel, false)
    // cvs.addEventListener("touchmove", handleMove, false)
    cvs.addEventListener('mousedown', startPos);
    cvs.addEventListener('mouseup', endPos);
    cvs.addEventListener('mousemove', draw);
    window.addEventListener('resize', onScreenResize)

    return () => {
      // cvs.removeEventListener("touchstart", handleStart);
      // cvs.removeEventListener("touchmove", handleMove);
      // cvs.removeEventListener("touchend", handleEnd);
      // cvs.removeEventListener("touchcancel", handleCancel);
      cvs.removeEventListener('mousedown', startPos);
      cvs.removeEventListener('mouseup', endPos);
      cvs.removeEventListener('mousemove', draw);
      window.removeEventListener('resize', onScreenResize)

    };
  }, [])




  function startPos(e: MouseEvent) {
    painting = true;
    draw(e)
  }
  function endPos() {
    const ctx = ctxRef.current;
    if (!ctx) return;
    painting = false;
    ctx.beginPath()
  }

  function draw(e: MouseEvent) {
    const ctx = ctxRef.current;
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    if (!ctx) return;
    ctx.lineWidth = 200;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color
    ctx.lineTo(x, y);
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(x, y);

  }


  return (
    <div className="relative bg-white text-white  w-full h-full z-50">
      <div className=" z-50">
        <canvas id="canvas" className="absolute top-0 left-0 w-full h-full">
          Your browser does not support canvas element.
        </canvas>
        <div className="text-white pointer-events-none p-2 z-10 h-full w-full absolute top-0 left-0 flex flex-col justify-center items-center">

          <h1 className="text-6xl text-center w-10/12 h-2/12 flex flex-col justify-center items-center">Hi! I am Andrei,<br />
            <span className="text-sm block text-center">( but you can call me Andi. )</span>
          </h1>
          <aside className="text-center">
            <h2 className="text-3xl mb-2">What can I help with?</h2>
            <h5>A nice website?</h5>
            <h5>An interactive screen build?</h5>
            <h5>An interesting landing page?</h5>
            <h5>A large scare project?</h5>
          </aside>
          <details className="absolute top-0 right-0 pointer-events-auto cursor-pointer w-6/12 text-right text-sm p-2">
            <summary>Did you know...</summary>
            <p>Did you know that on the 27-28th of August 2024 I broke the Guinness World Record for most pull-ups in 24 hours by performing 9001 pull-ups?</p>
          </details>
        </div>

      </div>
    </div>
  )
}

export default InvisiblePage




// function handleStart(e: TouchEvent) {
//   e.preventDefault()
//   const ctx = ctxRef.current;
//   if (!ctx) return;

//   let touches = e.changedTouches;
//   for (let i = 0; i < touches.length; i++) {
//     ongoingTouches.push(copyTouch(touches[i]))
//     ctx.beginPath()
//     ctx.lineTo(e.pageX, e.pageY - 150)
//     ctx.lineWidth = 8;
//     ctx.lineCap = 'round'
//     ctx.strokeStyle = colorChoice;
//     ctx.fill();
//   }
// }

// function handleMove(e: TouchEvent) {
//   e.preventDefault()
//   const ctx = ctxRef.current;
//   if (!ctx) return;

//   let touches = e.changedTouches;
//   for (let i = 0; i < touches.length; i++) {
//     let idx = ongoingTouchIndexById(touches[i].identifier);
//     if (idx >= 0) {
//       ctx.beginPath();
//       ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY - 150);
//       ctx.lineTo(touches[i].pageX, touches[i].pageY - 150);
//       ctx.lineWidth = 100;
//       ctx.lineCap = 'round'
//       ctx.strokeStyle = colorChoice;
//       ctx.stroke();

//       ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
//     } else {
//       console.log("can't figure out which touch to continue");
//     }
//   }
// }

// function handleEnd(e: TouchEvent) {
//   e.preventDefault()
//   const ctx = ctxRef.current;
//   if (!ctx) return;

//   let touches = e.changedTouches;
//   for (let i = 0; i < touches.length; i++) {
//     let idx = ongoingTouchIndexById(touches[i].identifier);

//     if (idx >= 0) {
//       ctx.lineWidth = 12;
//       ctx.lineCap = 'round';
//       ctx.fillStyle = colorChoice;
//       ctx.beginPath();
//       ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
//       ctx.lineTo(touches[i].pageX, touches[i].pageY);
//       ctx.arc(touches[i].pageX, touches[i].pageY, 12, 0, 2 * Math.PI, false);  // a circle at the end
//       ongoingTouches.splice(idx, 1);  // remove it;
//     } else {
//       console.log("can't figure out which touch to end");
//     }
//   }
// }

// function handleCancel(e: TouchEvent) {
//   e.preventDefault()
//   let touches = e.changedTouches;
//   for (var i = 0; i < touches.length; i++) {
//     var idx = ongoingTouchIndexById(touches[i].identifier);
//     ongoingTouches.splice(idx, 1);
//   }
// }

// function colorForTouch() {
//   let colorArray = ['blue', 'red', 'green', 'pink', 'violet', 'yellow', 'purple', 'gray'];
//   let index = Math.floor(Math.random() * colorArray.length);
//   let color = colorArray[index];
//   return color;
// }

// function ongoingTouchIndexById(idToFind: number) {
//   for (let i = 0; i < ongoingTouches.length; i++) {
//     let id = ongoingTouches[i].identifier;

//     if (id === idToFind) {
//       return i;
//     }
//   }
//   return -1;    // not found
// }

// function copyTouch({ identifier, pageX, pageY }: TouchObject) {
//   return { identifier, pageX, pageY };
// }