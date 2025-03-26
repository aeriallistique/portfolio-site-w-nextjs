"use client"
import { useState, useEffect } from "react";

const winCombo = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];
let circleTurn = false;

const TicTacToe = () => {
  const CLASSX = "classX";
  const CLASSC = "classC";

  useEffect(() => {
    startGame();
  }, []);

  function startGame() {
    const cells = document.querySelectorAll("[data-cell]");
    const grid = document.getElementById("grid");

    // Clear all cells & reset listeners
    cells.forEach(cell => {
      cell.classList.remove(CLASSX, CLASSC, "disabled");
      cell.replaceWith(cell.cloneNode(true)); // Remove all previous listeners
    });

    const updatedCells = document.querySelectorAll("[data-cell]");

    updatedCells.forEach(cell => {
      cell.addEventListener("click", playerMove, { once: true });
    });

    setGridClass();
  }

  function playerMove(e: Event) {
    const cell = e.target as HTMLElement;
    const currentClass = circleTurn ? CLASSC : CLASSX;

    if (cell.classList.contains(CLASSX) || cell.classList.contains(CLASSC)) return;

    cell.classList.add(currentClass);

    if (checkWin(currentClass)) {
      document.getElementById("modal")?.classList.add("show");
      document.getElementById("header")!.innerText = `${circleTurn ? "O's" : "X's"} Win!!!`;
      return;
    }

    if (checkDraw()) {
      document.getElementById("modal")?.classList.add("show");
      document.getElementById("header")!.innerText = `It's a DRAW !!`;
      return;
    }

    // Swap turns
    circleTurn = !circleTurn;
    setGridClass();
  }

  function setGridClass() {
    const grid = document.getElementById("grid");
    if (!grid) return;

    grid.classList.remove(CLASSX, CLASSC);
    grid.classList.add(circleTurn ? CLASSC : CLASSX);
  }

  function checkWin(currentClass: string) {
    const cells = document.querySelectorAll("[data-cell]");
    return winCombo.some(combo => {
      return combo.every(index => {
        return cells[index].classList.contains(currentClass);
      });
    });
  }

  function checkDraw() {
    const cells = Array.from(document.querySelectorAll("[data-cell]"));
    return cells.every(cell => cell.classList.contains(CLASSX) || cell.classList.contains(CLASSC));
  }

  function restartGame() {
    document.querySelector(".modal")?.classList.remove("show");
    startGame();
  }

  return (
    <main className="flex justify-center items-center h-full relative bg-gray-200">
      <div className="grid grid-cols-3 gap-2 mt-5" id="grid">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="cell border w-16 h-16 flex justify-center items-center text-2xl font-bold" data-cell></div>
        ))}
      </div>

      <div className="modal hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-75 flex justify-center items-center" id="modal">
        <div className="bg-white p-5 rounded-md shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-3" id="header">X's Win !!!</h3>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" id="btn" onClick={restartGame}>Restart</button>
        </div>
      </div>
    </main>
  );
};

export default TicTacToe;
