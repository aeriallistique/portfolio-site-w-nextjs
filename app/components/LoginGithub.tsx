"use client"
import { login } from "@/actions/auth";
import React from "react";
import { FaGithub } from "react-icons/fa"

const LoginGithub = () => {
  return (
    <div
      onClick={() => login("github")}
      className="text-white cursor-pointer mt-6 h-12 bg-black rounded-md p-4 flex justify-center items-center hover:bg-amber-50 hover:text-black">
      <FaGithub className="text-white" />
      <p className="test-white">Login with Github</p>
    </div>
  )
}

export default LoginGithub