"use client"
import { loginWithCred } from "@/actions/auth"
import AuthButton from "./AutButton"

const LoginForm = () => {
  return (
    <div>
      <form action={async (formData) => { loginWithCred(formData) }} className="w-full flex flex-col gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email</label>
          <input type="email" name="email" placeholder="Email" id="email" className="w-full mt-1 px-4 p-2 h-10 rounded-md border border-gray-200" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password</label>
          <input type="password" placeholder="password" name="password" id="password" className="w-full mt-1 px-4 p-2 h-10 rounded-md border border-gray-200" />
        </div>
        <div className="mt-4">
          <AuthButton />
        </div>
      </form>
    </div>
  )
}

export default LoginForm