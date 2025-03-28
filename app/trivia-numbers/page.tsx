'use client'

import { useEffect, useState } from "react"
import { getDateFact, Months } from "../utils/helper"

const TriviaNumbers = () => {
  const [month, setMonth] = useState(0)
  const [daysInMonth, setDaysInMonth] = useState(31)
  const [day, setDay] = useState(0)
  const [dateFact, setDateFact] = useState('')

  useEffect(() => {
    if (month === 2) setDaysInMonth(28);
    else if ([4, 6, 9, 11].includes(month)) setDaysInMonth(30);
    else setDaysInMonth(31);
  }, [month]);

  const handleDateFactSubmit = async (e: SubmitEvent) => {
    e.preventDefault()
    const fact = await getDateFact(month, day)
    setDateFact(fact)
  }

  return (
    <div className="w-11/12 mx-auto ">
      <header className="bg-gray-200 p-2 w-full flex flex-row-reverse h-30 mx-auto justify-around items-center rounded-t relative">
        <figure className="w-20 h-20 absolute top-3 right-2 p-1">
          <img src="./logo.png" className="w-full h-full object-contain" alt="yello lightbulb logo" />
        </figure>
        <div className="title text-center flex flex-col w-8/12 ">
          <h2 className="text-xl"> WELCOME </h2>
          <h3>to Knowledge by Numbers...Knowmbers</h3>
        </div>
      </header>
      <div className="bg-green-50 p-2 h-28||w-auto flex flex-col justify-center items-center border-b">
        <h4 className="mb-2">Pick a date to learn a random fact.</h4>
        <form
          onSubmit={(e) => { handleDateFactSubmit(e) }}
          className="w-full flex justify-center"
          action="submit">
          <label className="mr-2" htmlFor="month">On</label>
          <select
            className="bg-green-300 mr-2 pl-1 rounded cursor-pointer"
            name="month"
            id="month"
            onChange={(e) => { setMonth(Number(e.target.value)) }
            }
          >
            <option value="0">Month</option>
            {Months.map((month, index) => (
              <option key={`${Math.random() * index}`} value={month.value}>{month.month}</option>
            ))}
          </select>
          <label htmlFor="day" className="mr-2">of:</label>
          <select
            className={month === 0 ? `disabled bg-gray-300 mr-2 pl-1 rounded cursor-not-allowed` : `bg-green-300 mr-2 pl-1 rounded cursor-pointer`}
            name="day"
            id="day"
            onChange={(e) => { setDay(Number(e.target.value)) }}
          >
            <option defaultValue="" disabled selected >Day</option>
            {/* render days of the month  */}
            {[...Array(daysInMonth)].map((_, index) => (
              <option
                key={index + 1}
                value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <button className={day === 0 ? 'disabled bg-gray-300 px-2 rounded cursor-not-allowed' : `bg-green-300 px-2 rounded cursor-pointer hover:bg-green-200`}>Get fact</button>
        </form>
        <h5 className="text-center pt-2">{dateFact}</h5>
      </div>

      <div className="bg-green-50 p-2 h-28 flex flex-col justify-center items-center border-b">
        <h4 className="mb-2">Choose a year to reveal some trivia.</h4>
        <form className="" action="year_fact">
          <input className="border-b border-green-500 outline-none w-18" type="text" id="year" placeholder="Year.." pattern="[0-9]{4}" title="4 digit number: e.g. 1234" required />
          <button className="bg-green-300 px-2 rounded cursor-pointer hover:bg-green-200 ml-2">Get fact</button>
        </form>
        <h5 className=""></h5>
      </div>

      <div className="bg-green-50 p-2 h-28 flex flex-col justify-center items-center border-b">
        <h4 className="mb-2">Input a number to find out a mathematical fact about it.</h4>
        <form action="math_fact">

          {/* ONLY NUMBERS ADD REGEX !!!!!!!!!!!!!! */}
          <input
            type="text"
            id="math"
            placeholder="Number..."
            className="border-b border-green-500 outline-none w-18"
            onKeyDown={(e) => {
              if (!/^[0-9]$/.test(e.key) && e.key !== 'Backspace') {
                e.preventDefault()
              }
            }}
            onPaste={(e) => {
              const pasted = e.clipboardData.getData('text')
              if (!/^\d+$/.test(pasted)) { e.preventDefault() }
            }}
          />
          <button className="bg-green-300 px-2 rounded cursor-pointer hover:bg-green-200 ml-2">Get fact</button>
        </form>
        <h5 className=""></h5>
      </div>

      <div className="bg-green-50 p-2 h-28 flex flex-col justify-center items-center border-b">
        <h4 className="mb-2">Input a number to get some trivia.</h4>
        <form action="trivia_fact">
          {/* ONLY NUMBERS ADD REGEX !!!!!!!!!!!!!! */}
          <input
            type="text"
            id="trivia"
            placeholder="Number..."
            className="border-b border-green-500 outline-none w-18"
            onKeyDown={(e) => {
              if (!/^[0-9]$/.test(e.key) && e.key !== 'Backspace') {
                e.preventDefault()
              }
            }}
            onPaste={(e) => {
              const pasted = e.clipboardData.getData('text')
              if (!/^\d+$/.test(pasted)) { e.preventDefault() }
            }}
          />
          <button className="bg-green-300 px-2 rounded cursor-pointer hover:bg-green-200 ml-2" >Get fact</button>
        </form>
        <h5 className=""></h5>
      </div>

      <div className="bg-green-50 p-2 h-28 flex flex-col justify-center items-center border-b">
        <h4 className="mb-2">Click here for some random trivia.</h4>
        <button className="bg-green-300 px-2 rounded cursor-pointer hover:bg-green-200 ml-2" id="random">Go</button>
        <h5 className=""></h5>
      </div>
    </div >
  )
}

export default TriviaNumbers