"use client"
import { ChevronUp, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { slideInfo } from "../utils/helper"



const WorkPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isScrolling = useRef(false)
  const handleNext = (e: React.MouseEvent<HTMLElement> | WheelEvent) => {
    e.preventDefault()
    setCurrentSlide((prev) => prev < slideInfo.length - 1 ? prev + 1 : prev)
  }
  const handlePrev = (e: React.MouseEvent<HTMLElement> | WheelEvent) => {
    e.preventDefault()
    setCurrentSlide((prev) => prev > 0 ? prev - 1 : prev)
  }

  const handleScroll = (e: WheelEvent) => {
    if (isScrolling.current) return
    isScrolling.current = true;
    setTimeout(() => (isScrolling.current = false), 1800);

    if (e.deltaY > 0) {
      handleNext(e)
    } else if (e.deltaY < 0) {
      handlePrev(e)
    }
  }

  useEffect(() => {
    window.addEventListener('wheel', handleScroll)
    return () => window.removeEventListener('wheel', handleScroll)
  }, [])

  return (
    <main className="w-full h-full flex flex-col relative">
      <section
        className={`w-full h-full absolute flex flex-col lg:flex-row transition-all duration-1000 ease-in-out  opacity-100 ${currentSlide === 0 ? "" : "-translate-y-full opacity-0"} `} >
        <figure className="w-full h-9/12 lg:w-9/12 lg:h-full">
          <img className="w-full h-full object-contain bg-gray-200" src={slideInfo[0].image} alt={slideInfo[0].imageAlt} />
        </figure>
        <aside className="w-full flex flex-col flex-1 justify-between bg-gray-700 text-amber-50">
          <div className="p-4 lg:h-10/12 lg:flex lg:flex-col lg:justify-center ">
            <h2 className=" my-2 text-lg lg:text-xl lg:border-b lg:mb-8 lg:pb-4">{slideInfo[0].h2}</h2>
            <p className="text-sm font-extralight mb-1 lg:border-b lg:mb-8 lg:pb-4">{slideInfo[0].p}</p>
            <p className="text-sm font-extralight mb-1 lg:border-b lg:mb-8 lg:pb-4">{slideInfo[0].p1}
              <Link href={slideInfo[0].link1URL}
                target="_blank"
                className="ml-2 font-medium underline hover:text-blue-400" id="lab_exp">{slideInfo[0].link1Text}</Link></p>
            <p className="text-sm font-extralight mb-1 lg:border-b lg:mb-8 lg:pb-4">{slideInfo[0].p2}
              <Link href={slideInfo[0].link2URL}
                target="_blank"
                className="ml-2 font-medium underline hover:text-blue-400" id="lab_exp">{slideInfo[0].link2Text}</Link></p>
          </div>
          <div className="flex pl-4 lg:h-1/10">
            <button className="cursor-pointer hover:text-gray-300"
              onClick={(e) => handleNext(e)}>
              <ChevronDown size={42} />
            </button>
            <button
              className={`cursor-pointer hover:text-gray-300 ${currentSlide === 0 ? 'hidden' : ''}`}

              onClick={(e) => handlePrev(e)}
            >
              <ChevronUp size={42} />
            </button>
          </div>
        </aside>
      </section>
      {/* SECOND SLIDE */}

      <section
        className={`w-full h-full absolute flex flex-col lg:flex-row transition-all duration-1000 ease-in-out ${currentSlide === 1 ? "" : "-translate-y-full opacity-0"} `} >
        <figure
          className="w-full h-9/12 lg:w-9/12 lg:h-full">
          <img className="w-full h-full object-contain bg-gray-200" src={slideInfo[1].image} alt={slideInfo[1].imageAlt} />
        </figure>
        <aside className="w-full flex flex-col flex-1 justify-between bg-gray-700 text-amber-50">
          <div className="p-4 lg:h-10/12 lg:flex lg:flex-col lg:justify-center ">
            <h2 className=" my-2 text-lg lg:text-xl lg:border-b lg:mb-8 lg:pb-4">{slideInfo[1].h2}</h2>
            <p className="text-sm font-extralight mb-1 lg:border-b lg:mb-8 lg:pb-4">{slideInfo[1].p}</p>
            <p className="text-sm font-extralight mb-1 lg:border-b lg:mb-8 lg:pb-4">{slideInfo[1].p1}
              <Link href={slideInfo[1].link1URL}
                target="_blank"
                className="ml-2 font-medium underline hover:text-blue-400" id="lab_exp">{slideInfo[1].link1Text}</Link></p>
            <p className="text-sm font-extralight mb-1 lg:border-b lg:mb-8 lg:pb-4">{slideInfo[1].p2}
              <Link href={slideInfo[1].link2URL}
                target="_blank"
                className="ml-2 font-medium underline hover:text-blue-400" id="lab_exp">{slideInfo[1].link2Text}</Link></p>
          </div>
          <div className="flex pl-4 lg:h-1/10">
            <button className="cursor-pointer hover:text-gray-300"
              onClick={(e) => handleNext(e)}>
              <ChevronDown size={42} />
            </button>
            <button
              className={`cursor-pointer hover:text-gray-300 ${currentSlide === 0 ? 'hidden' : ''}`}

              onClick={(e) => handlePrev(e)}
            >
              <ChevronUp size={42} />
            </button>
          </div>
        </aside>
      </section>
      {/* THIRD SLIDE */}
      <section
        className={`w-full h-full absolute flex flex-col lg:flex-row transition-all duration-1000 ease-in-out  ${currentSlide === 2 ? "" : "-translate-y-full opacity-0"} `} >
        <figure
          className="w-full h-9/12 lg:w-9/12 lg:h-full">
          <img className="w-full h-full object-contain bg-gray-200" src={slideInfo[2].image} alt={slideInfo[2].imageAlt} />
        </figure>
        <aside className="w-full flex flex-col flex-1 justify-between bg-gray-700 text-amber-50">
          <div className="p-4 lg:h-10/12 lg:flex lg:flex-col lg:justify-center ">
            <h2 className=" my-2 text-lg lg:text-xl lg:border-b lg:mb-8 lg:pb-4">{slideInfo[2].h2}</h2>
            <p className="text-sm font-extralight mb-1 lg:border-b lg:mb-8 lg:pb-4">{slideInfo[2].p}</p>
            <p className="text-sm font-extralight mb-1 lg:border-b lg:mb-8 lg:pb-4">{slideInfo[2].p1}
              <Link href={slideInfo[2].link1URL}
                target="_blank"
                className="ml-2 font-medium underline hover:text-blue-400" id="lab_exp">{slideInfo[2].link1Text}</Link></p>
            <p className="text-sm font-extralight mb-1 lg:border-b lg:mb-8 lg:pb-4">{slideInfo[2].p2}
              <Link href={slideInfo[2].link2URL}
                target="_blank"
                className="ml-2 font-medium underline hover:text-blue-400" id="lab_exp">{slideInfo[2].link2Text}</Link></p>
          </div>
          <div className="flex pl-4 lg:h-1/10">
            <button className="cursor-pointer hover:text-gray-300"
              onClick={(e) => handleNext(e)}>
              <ChevronDown size={42} />
            </button>
            <button
              className={`cursor-pointer hover:text-gray-300 ${currentSlide === 0 ? 'hidden' : ''}`}

              onClick={(e) => handlePrev(e)}
            >
              <ChevronUp size={42} />
            </button>
          </div>
        </aside>
      </section>

    </main>
  )
}

export default WorkPage;

