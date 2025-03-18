"use client"
import Link from "next/link";
import React from "react";
import { auth } from "@/auth";
import Logout from "./Logout";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  // const session = await auth()
  const path = usePathname()
  const navLinks = [
    { href: "/", label: "ABOUT" },
    { href: "/work", label: "WORK" },
    { href: "/lab", label: "LAB" },
    { href: "/contact", label: "CONTACT" },
    { href: "/blog", label: "BLOG" },
  ]

  return (
    <nav className=" bg-white w-10/12 h-20 mx-auto flex  items-center justify-between z-50">
      <div className="flex flex-col sm:flex-row w-full items-center justify-between my-4 text-xl">
        <Link className="font-extralight" href="/">ANDREI <b>TAZLAUANU</b></Link>
        <div className="flex items-center gap-x-5">
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
    </nav>
  )
}

export default Navbar