'use client'
import React, { useEffect, useState } from "react"
import { TimezoneButons, MainClock } from "../utils/helper";

const WorldTime = () => {
  const [timezone, setTimezone] = useState(0)
  const [bgColor, setBgColor] = useState('bg-gray-200')
  let day;
  let seconds;
  let minutes;
  let hours;

  useEffect(() => {
    let hoursEl = document.querySelector('.hours') as HTMLElement | null;
    let minutesEl = document.querySelector('.minutes') as HTMLElement | null;
    let secondsEl = document.querySelector('.seconds') as HTMLElement | null;

    function setClock() {
      day = new Date();
      seconds = (day.getSeconds()) / 60;
      minutes = (seconds + day.getMinutes()) / 60;
      hours = (minutes + day.getHours() + timezone) / 12;

      setRotation(secondsEl, seconds);
      setRotation(minutesEl, minutes);
      setRotation(hoursEl, hours);
    }

    const setRotation = (element: HTMLElement | null, rotationRatio: number) => {
      if (!element) return;
      element.style.setProperty('--rotation', `${rotationRatio * 360}`)
    }

    setClock();
    const interval = setInterval(setClock, 1000);

    return () => {
      clearInterval(interval)
    }
  }, [timezone, bgColor])

  const handleClick = (e: React.MouseEvent) => {
    const time = (e.target as HTMLElement).dataset.time;
    if (time) setTimezone(Number(time))
    const color = (e.target as HTMLElement).dataset.color;
    if (color) setBgColor(color)
  }

  return (
    <div className="h-screen mt-4 bg-gray-200">
      <div className="timezone-container">
        {TimezoneButons.map((zone, index) => (
          <button
            key={`${Math.random() * index}`}
            id={zone.id}
            className={zone.class}
            data-time={zone.data}
            data-color={zone.color}
            onClick={handleClick}
          >
            {zone.text}
          </button>
        ))}
      </div>

      <div className={`container ${bgColor}`}>
        <div className="hand seconds"></div>
        <div className="hand minutes"></div>
        <div className="hand hours"></div>
        {MainClock.map((el, index) => (
          <div
            key={`${Math.random() * index}`}
            className={el.class}>
            <span className={el.spanClass}>
              {el.spanText}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}
export default WorldTime