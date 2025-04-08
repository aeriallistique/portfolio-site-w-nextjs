"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { auth } from "@/auth";
import Logout from "./Logout";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenu, setIsMenu] = useState(false)
  // const session = await auth()
  const path = usePathname()


  const navLinks = [
    { href: "/", label: "ABOUT" },
    { href: "/work", label: "WORK" },
    { href: "/lab", label: "LAB" },
    { href: "/contact", label: "CONTACT" },
    { href: "/blog", label: "BLOG" },
  ]

  useEffect(() => {
    setIsMenu(false)
  }, [path])

  const handleHamburgerMenu = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    setIsMenu(prev => !prev);
  }

  return (
    <div className="w-full bg-white z-50 overflow-hidden h-18">
      <nav className="h-full bg-white w-full md:w-10/12 py-2 sm:px-4 mx-auto flex  items-center justify-between">
        <div className="flex flex-col ml-4 sm:ml-0 sm:flex-row sm:text-xl sm:w-full items-center justify-between my-4 text-lg relative ">
          <Link className="font-extralight" href="/">ANDREI <b>TAZLAUANU</b></Link>
          <div className="hidden sm:visible  sm:flex sm:items-center gap-x-5 ">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`hoverEffect ${path === href ? "activeLink" : ''}`}
              >
                {label}
              </Link>
            ))}
          </div>
          {/* <div className="flex items-center gap-x-5">
          {!session?.user ? (
            <Link href="/sign-in">
              <div className="bg-blue-600 text-white text-sm px-4 py-2 rounded-sm">Login</div>
            </Link>
          ) : (
            <>
              <div className="flex items-center gap-x-2 text-sm">
                {session?.user?.name}
                {session?.user?.image && (
                  <Image
                    className="rounded-full"
                    width={30}
                    height={30}
                    alt="User Avatar"
                    src={session?.user?.image || ""}
                  />
                )}
              </div>
              <Logout />
            </>
          )}
        </div> */}
        </div>
        {/* insert hamburger menu here */}
        <button
          onClick={(e) => handleHamburgerMenu(e)}
          className={`${isMenu ? 'transform -rotate-90 ' : ''} transition duration-700 sm:hidden mr-8 cursor-pointer border rounded p-1`}>
          <Menu className="" />
        </button>
        <div className={!isMenu ? `hidden` : `w-full h-6/12 absolute translate-y-65  bg-white  flex flex-col justify-center items-center opacity-95  transform transition duration-700`} >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={` text-3xl hoverEffect my-4`}
            >
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Navbar