"use client"
import { ChevronUp, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const slideInfo = [
  {
    image: '/hedgehog.png',
    imageAlt: "Hedgehog landing page",
    h2: 'Hedgehog Finances App',
    p: 'Real time stock tracking app built with Next.js and Tailwind, using MongDB,Prisma ORM , Next-auth and cron-job.org',
    p1: 'Check out the live app here:',
    link1URL: 'https://hedgehog-finances-nine.vercel.app/',
    link1Text: 'Hedgehog App',
    p2: 'See the Github repo here:',
    link2URL: 'https://github.com/patrickfoulger1/hedgehog-finances',
    link2Text: 'Hedgehog Repo'
  },
  {
    image: '/nnc-news.png',
    imageAlt: 'NNC News dashboard page',
    h2: 'NNC News',
    p: 'Articles platform app developed using NodeJS, ExpressJS for backend and React on the front end.',
    p1: 'See live version here:',
    link1URL: 'https://nnc-andi.netlify.app/',
    link1Text: 'NNC News',
    p2: 'See the Github repo here:',
    link2URL: "https://github.com/aeriallistique/nc-news-react?tab=readme-ov-file",
    link2Text: 'Github repo'
  },
]


const WorkPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const isScrolling = useRef(false)
  const handleNext = (e: React.MouseEvent<HTMLElement> | WheelEvent) => {
    e.preventDefault()
    setCurrentSlide((prev) => prev < 3 ? prev + 1 : prev)
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
      {slideInfo.map((slide, index) => (
        <section
          key={Date.now() * Math.random()}
          className={`w-full absolute ${currentSlide === index ? "top-0 bottom-0 visible" : "-translate-y-200 opacity-0"} flex flex-col lg:flex-row transition-all duration-700`} >
          <figure className="w-full h-9/12 lg:w-9/12">
            <img className="w-full h-full object-contain bg-gray-200" src={slide.image} alt={slide.imageAlt} />
          </figure>
          <aside className="w-full flex flex-col flex-1 justify-between bg-gray-700 text-amber-50">
            <div className="p-4 lg:h-10/12 lg:flex lg:flex-col lg:justify-center ">
              <h2 className=" my-2 text-lg lg:text-xl lg:border-b lg:mb-8 lg:pb-4">{slide.h2}</h2>
              <p className="text-sm font-extralight mb-1 lg:border-b lg:mb-8 lg:pb-4">{slide.p}</p>
              <p className="text-sm font-extralight mb-1 lg:border-b lg:mb-8 lg:pb-4">{slide.p1}
                <Link href={slide.link1URL}
                  target="_blank"
                  className="ml-2 font-medium underline hover:text-blue-400" id="lab_exp">{slide.link1Text}</Link></p>
              <p className="text-sm font-extralight mb-1 lg:border-b lg:mb-8 lg:pb-4">{slide.p2}
                <Link href={slide.link2URL}
                  target="_blank"
                  className="ml-2 font-medium underline hover:text-blue-400" id="lab_exp">{slide.link2Text}</Link></p>
            </div>
            <div className="flex pl-4 lg:h-1/10">
              <button className={`cursor-pointer hover:text-gray-300 ${currentSlide === 3 ? 'hidden' : ''}`}
                onClick={(e) => handleNext(e)}>
                <ChevronDown size={42} />
              </button>
              <button className="cursor-pointer hover:text-gray-300"
                onClick={(e) => handlePrev(e)}
              >
                <ChevronUp size={42} />
              </button>
            </div>
          </aside>
        </section>
      ))}
    </main>
  )
}

export default WorkPage;

