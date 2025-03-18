"use client"
import { ChevronUp, ChevronDown } from "lucide-react"
import { useState } from "react"


const WorkPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const handleNext = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setCurrentSlide((prev) => prev < 3 ? prev + 1 : prev)
  }
  const handlePrev = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setCurrentSlide((prev) => prev > 0 ? prev - 1 : prev)
  }

  return (
    <main className="w-full h-full flex flex-col relative">
      <section className={`w-full h-full absolute ${currentSlide === 0 ? "top-0 bottom-0 visible" : "-translate-y-200 opacity-0"} flex flex-col transition-all duration-700`} >
        <figure className="w-full h-9/12">
          <img className="w-full h-full object-cover" src="/oneArm.jpg" alt="Hand stand on one arm" />
        </figure>
        <aside className="w-full flex flex-col flex-1 justify-between bg-gray-700 text-amber-50">
          <div className="p-4">
            <h2 className=" my-2 text-lg">Hi, I am a professional acrobat turned full stack web developer.</h2>
            <p className="text-sm font-extralight mb-1">I'm available for work.</p>
            <p className="text-sm font-extralight mb-1">Check out my <a href="lab.html" className="lab-experiment" id="lab_exp">lab projects.</a></p>
            <p className="text-sm font-extralight">Scroll down to see a few projects I have had the pleasure to produce.</p>
          </div>
          <div className="flex pl-4">
            <button
              id="up"
              className={`${currentSlide === 0 ? 'hidden' : ""} cursor-pointer hover:text-gray-300`}
              onClick={(e) => handlePrev(e)}
            >
              <ChevronUp size={42} className="pointer-events-none" />
            </button>
            <button
              id="down"
              className="cursor-pointer hover:text-gray-300"
              onClick={(e) => handleNext(e)}
            >
              <ChevronDown size={42} className="pointer-events-none" />
            </button>
          </div>
        </aside>
      </section>
      {/* SECOND SLIDE */}

      <section className={`w-full absolute ${currentSlide === 1 ? "top-0 bottom-0 visible" : "-translate-y-200 opacity-0"} flex flex-col transition-all duration-700`} >
        <figure className="w-full h-9/12">
          <img className="w-full h-full object-cover" src="/meathook.jpg" alt="Hand stand on one arm" />
        </figure>
        <aside className="w-full flex flex-col flex-1 justify-between bg-gray-700 text-amber-50">
          <div className="p-4">
            <h2 className=" my-2 text-lg">Big project name here too</h2>
            <p className="text-sm font-extralight mb-1">Project name here.</p>
            <p className="text-sm font-extralight mb-1">Check out my <a href="lab.html" className="lab-experiment" id="lab_exp">lab projects.</a></p>
            <p className="text-sm font-extralight">Scroll down to see a few projects I have had the pleasure to produce.</p>
          </div>
          <div className="flex pl-4">
            <button className="cursor-pointer hover:text-gray-300"
              onClick={(e) => handleNext(e)}>
              <ChevronDown size={42} />
            </button>
            <button className="cursor-pointer hover:text-gray-300"
              onClick={(e) => handlePrev(e)}
            >
              <ChevronUp size={42} className="" />
            </button>
          </div>
        </aside>
      </section>

      <section className={`w-full absolute ${currentSlide === 2 ? "top-0 bottom-0 visible" : "-translate-y-200 opacity-0"} flex flex-col transition-all duration-700`} >
        <figure className="w-full h-9/12">
          <img className="w-full h-full object-cover" src="/meathook.jpg" alt="Hand stand on one arm" />
        </figure>
        <aside className="w-full flex flex-col flex-1 justify-between bg-gray-700 text-amber-50">
          <div className="p-4">
            <h2 className=" my-2 text-lg">Big project 2222</h2>
            <p className="text-sm font-extralight mb-1">Project name 222222here.</p>
            <p className="text-sm font-extralight mb-1">Check out my <a href="lab.html" className="lab-experiment" id="lab_exp">lab projects.</a></p>
            <p className="text-sm font-extralight">Scroll down to see a few projects I have had the pleasure to produce.</p>
          </div>
          <div className="flex pl-4">
            <button className="cursor-pointer hover:text-gray-300"
              onClick={(e) => handleNext(e)}>
              <ChevronDown size={42} />
            </button>
            <button className="cursor-pointer hover:text-gray-300"
              onClick={(e) => handlePrev(e)}
            >
              <ChevronUp size={42} className="" />
            </button>
          </div>
        </aside>
      </section>

      <section className={`w-full absolute ${currentSlide === 3 ? "top-0 bottom-0 visible" : "-translate-y-200 opacity-0"} flex flex-col transition-all duration-700`} >
        <figure className="w-full h-9/12">
          <img className="w-full h-full object-cover" src="/meathook.jpg" alt="Hand stand on one arm" />
        </figure>
        <aside className="w-full flex flex-col flex-1 justify-between bg-gray-700 text-amber-50">
          <div className="p-4">
            <h2 className=" my-2 text-lg">Big project 33333333</h2>
            <p className="text-sm font-extralight mb-1">Project 333333.</p>
            <p className="text-sm font-extralight mb-1">Check out my <a href="lab.html" className="lab-experiment" id="lab_exp">lab projects.</a></p>
            <p className="text-sm font-extralight">Scroll down to see a few projects I have had the pleasure to produce.</p>
          </div>
          <div className="flex pl-4">
            <button className={`cursor-pointer hover:text-gray-300 ${currentSlide === 3 ? 'hidden' : ''}`}
              onClick={(e) => handleNext(e)}>
              <ChevronDown size={42} />
            </button>
            <button className="cursor-pointer hover:text-gray-300"
              onClick={(e) => handlePrev(e)}
            >
              <ChevronUp size={42} className="" />
            </button>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default WorkPage;