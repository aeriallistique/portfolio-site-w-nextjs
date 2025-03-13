"use client"

import { login } from "@/actions/auth"
import { signIn } from "@/auth"
import { FaGoogle } from "react-icons/fa"

export default function SignIn() {
  return (
    <div
      onClick={() => login("google")}
      className="text-white cursor-pointer mt-6 h-12 bg-black rounded-md p-4 flex justify-center items-center  hover:bg-amber-50 hover:text-black">
      <FaGoogle className="text-white" />
      <p className="test-white">Login with Google</p>
    </div>

  )
} 