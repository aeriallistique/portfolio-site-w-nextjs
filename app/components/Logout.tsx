"use client"

import { logout } from "@/actions/auth"

const Logout = () => {
  return (
    <div
      onClick={() => logout()}
      className="bg-gray-600 text-white text-sm px-4 py-2 rounded-sm cursor-pointer">
      logout
    </div>
  )
}
export default Logout