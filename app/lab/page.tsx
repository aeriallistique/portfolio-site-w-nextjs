import Image from "next/image"
import Link from "next/link"
import { linkCards } from "../utils/helper"


const LabPage = () => {

  return (
    <main className="w-full md:w-11/12 lg:10/12 flex flex-col justify-center items-center mx-auto">
      <h1 className="mb-4 p-2">A list of projects where I experiment with different API's and technologies.</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center mx-auto ">
        {linkCards.map((card, index) => (
          <Link
            key={`${Math.random() * index}`}
            href={card.href} className="w-full flex shadow-xl rounded-md flex-col relative group cursor-pointer overflow-hidden">
            <div className="absolute top-0 bottom-0  flex items-center text-center  p-1 bg-white opacity-0 group-hover:opacity-85 group-hover:shadow-2xl transition-all duration-300 ease-in-out">
              <p>{card.hoverDescription}</p>
            </div>
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              width={250}
              height={250}
              className="object-contain bg-gray-300"
            />
            <p className="text-center">{card.projectTitle}</p>
          </Link>
        ))}

      </section>
    </main>
  )
}

export default LabPage