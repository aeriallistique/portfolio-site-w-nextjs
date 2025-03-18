"use client"

import { useEffect, useState } from "react"
import { LinkedInIcon } from "../components/SocialsIcons"
import Link from "next/link"
import { Footer } from "../components/Footer"

const ContactPage = () => {
  const [h2Class, setH2Class] = useState(false)
  const [h4Class, setH4Class] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setH2Class(true)
    }, 500)
    setTimeout(() => {
      setH4Class(true)
    }, 900)
  }, [])


  return (
    <>
      <main className="w-full h-full flex justify-center items-center bg-gray-100 text-black font-light">
        <div className="bg-gray-100 w-11/12 md:w-8/12 lg:w-6/12 h-8/12 mx-auto pl-8">
          <h2 className={`text-3xl font-medium text-black mb-4 overflow-hidden opacity-0 transition-all duration-500 ${!h2Class ? "" : "-translate-y-8 opacity-100"}`}>Do you need a web developer?</h2>
          <p className="w-6/12">
            If you have a project in mind, big or small. If you need some help with your web project, I can help. I am available for work, open to opportunities abroad and I can work remotely too.
          </p>

          <h4 className={`text-2xl font-medium text-black mt-12 transition-all duration-500 opacity-0 ${!h4Class ? '' : '-translate-y-4 opacity-100'}`}>Get in touch</h4>
          By e-mail at <Link href="mailto:web.aeriallistique@gmail.com"
            className="hover:text-blue-600 hover:underline">web.aeriallistique@gmail.com </Link>
          <div className="mt-2 flex w-3/12 justify-between items-center">
            <p>Or LinkedIn:</p>
            <LinkedInIcon />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ContactPage