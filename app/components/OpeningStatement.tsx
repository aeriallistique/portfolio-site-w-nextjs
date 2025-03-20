"use client"
import Link from "next/link"
import { GithubIcon, InstaIcon } from "./SocialsIcons"

export const OpeningStatement = () => {
  return (
    <div className="bg-gray-100 mt-8 text-3xl text-black font-normal leading-10">
      <h1>Who am I ?
        <br></br>
        I am an <Link href="" className="title-anchor">[acrobat]</Link>,
        a <br></br>
        <Link href="" className="title-anchor">[Guinness World Record holder]</Link>,
        full stack developer, prototyper, CSS animator, HTLM5 banner developer,
        canvas game developer, JavaScript bug fixer [...]<br></br>
        A full time acrobat turned web developer.
      </h1>

      <h3 className="flex items-center my-6">Find me on:
        <GithubIcon></GithubIcon>
        <InstaIcon></InstaIcon>
      </h3>
    </div>
  )
}