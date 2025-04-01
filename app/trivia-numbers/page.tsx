'use client'

import { FormEvent, useEffect, useState } from "react"
import { getDateFact, getNumberTrivia, getRandomFact, Months } from "../utils/helper"

const TriviaNumbers = () => {
  const [month, setMonth] = useState(0)
  const [daysInMonth, setDaysInMonth] = useState(31)
  const [day, setDay] = useState(0)
  const [dateFact, setDateFact] = useState('')
  const [yearFact, setYearFact] = useState('')
  const [mathFact, setMathFact] = useState('')
  const [numberTriviaFact, setNumberTriviaFact] = useState('')
  const [category, setCategory] = useState('')
  const [randomFact, setRandomFact] = useState('')
  const [year, setYear] = useState(0)
  const [number, setNumber] = useState(0)
  const [error, setError] = useState(false)

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
  const handleYearFactSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const fact = await getNumberTrivia(year, 'year')
    setYearFact(fact)
  }

  const handleNumberFact = async (e: FormEvent) => {
    e.preventDefault();
    const formElement = e.currentTarget;
    const valueText = formElement.getAttribute("aria-valuetext") ?? "";
    const fact = await getNumberTrivia(number, valueText)
    if (valueText === 'math') {
      setMathFact(fact)
    } else {
      setNumberTriviaFact(fact)
    }
  }

  const handleRandomFact = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const fact = await getRandomFact(category)
      setRandomFact(fact)
    } catch (error) {
      console.log(error);
      setError(true)
    }

  }

  return (
    <div className="w-11/12 mx-auto ">
      <header className="bg-gray-200 p-2 w-full flex flex-row-reverse h-30 mx-auto justify-around items-center rounded-t relative">
        <figure className="w-20 h-20 absolute top-3 right-2 p-1">
          <img src="./logo.png" className="w-full h-full object-contain" alt="yello lightbulb logo" />
        </figure>
        <div className="title text-center flex flex-col w-8/12 ">
          <h2 className="text-xl"> WELCOME </h2>
          <h3>to Knowledge by Numbers...Knownbers</h3>
        </div>
      </header>
      <div className="bg-green-50 p-2 min-h-30 w-auto flex flex-col justify-center items-center border-b">
        <h4 className="mb-2">Pick a date to learn a random fact.</h4>
        <form
          onSubmit={(e) => { handleDateFactSubmit(e) }}
          className="w-full flex justify-center"
          action="submit">
          <label className="mr-2 mt-auto" htmlFor="month">On</label>
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
          <label htmlFor="day" className="mr-2 mt-auto ">of:</label>
          <select
            className={month === 0 ? `disabled bg-gray-300 mr-2 pl-1 rounded cursor-not-allowed` : `bg-green-300 mr-2 pl-1 rounded cursor-pointer`}
            name="day"
            id="day"
            onChange={(e) => { setDay(Number(e.target.value)) }}
          >
            <option defaultValue="" disabled >Day</option>
            {/* render days of the month  */}
            {[...Array(daysInMonth)].map((_, index) => (
              <option
                key={index + 1}
                value={index + 1}>
                {index + 1}
              </option>
            ))}
          </select>
          <button className={day === 0 ? 'disabled bg-gray-300 p-1 rounded cursor-not-allowed' : `bg-green-300 p-1 rounded cursor-pointer hover:bg-green-200`}>Get fact</button>
        </form>
        <h5 className="text-center pt-2">{dateFact}</h5>
      </div>

      <div className="bg-green-50 p-2 min-h-30 w-auto flex flex-col justify-center items-center border-b">
        <h4 className="mb-2">Choose a year to reveal some trivia.</h4>
        <form
          className=""
          action="submit"
          onSubmit={(e) => { handleYearFactSubmit(e) }}
        >
          <input
            className="border-b border-green-500 outline-none w-18"
            type="text"
            id="year"
            placeholder="Year.."
            pattern="[0-9]{4}"
            title="4 digit number: e.g. 1234"

            required
            onChange={(e) => setYear(Number(e.target.value))}
          />
          <button
            className={year === 0 ? `disabled bg-gray-300 p-1 cursor-not-allowed rounded ml-2` : `bg-green-300 p-1 rounded cursor-pointer hover:bg-green-200 ml-2`}
          >Get fact</button>
        </form>
        <h5 className="text-center pt-2">{yearFact}</h5>
      </div>

      <div className="bg-green-50 p-2 min-h-30 w-auto  flex flex-col justify-center items-center border-b">
        <h4 className="mb-2">Input a number to find out a mathematical fact about it.</h4>
        <form
          action="math_fact"
          aria-valuetext="math"
          onSubmit={(e) => { handleNumberFact(e) }}
        >
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
            onChange={(e) => { setNumber(Number(e.target.value)) }}
          />
          <button className="bg-green-300 p-1 rounded cursor-pointer hover:bg-green-200 ml-2">Get fact</button>
        </form>
        <h5 className="text-center pt-2">{mathFact}</h5>
      </div>

      <div className="bg-green-50 p-2 min-h-30 w-auto  flex flex-col justify-center items-center border-b">
        <h4 className="mb-2">Input a number to get some trivia.</h4>
        <form
          action="submit"
          aria-valuetext="trivia"
          onSubmit={(e) => { handleNumberFact(e) }}
        >
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
          <button className="bg-green-300 p-1 rounded cursor-pointer hover:bg-green-200 ml-2" >Get fact</button>
        </form>
        <h5 className="text-center pt-2">{numberTriviaFact}</h5>
      </div>

      <div className="bg-green-50 p-2 min-h-30 w-auto  flex flex-col justify-center items-center border-b">
        <h4 className="mb-2">Click here for a random fact.</h4>
        <form
          action="submit"
          aria-valuetext="trivia"
          onSubmit={(e) => { handleRandomFact(e) }}
        >
          <select
            name="category"
            id="category"
            className="cursor-pointer mr-2 p-1 rounded  hover:bg-green-200"
            onChange={(e) => { setCategory(e.target.value) }}
          >
            <option value="trivia">Random Trivia</option>
            <option value="year">Random Year</option>
            <option value="date">Random Date</option>
            <option value="math">Random Math</option>
          </select>

          <button
            className={category === "" ? `disabled bg-gray-300 rounded p-1 cursor-not-allowed` : `bg-green-300 p-1 rounded cursor-pointer hover:bg-green-200 ml-2`} >Get random fact</button>
        </form>
        <h5 className="">{!error ? randomFact : 'Something went wrong! Please try again'}</h5>
      </div>
    </div >
  )
}

export default TriviaNumbers