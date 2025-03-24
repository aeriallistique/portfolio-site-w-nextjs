"use client"

import { usePathname } from "next/navigation"

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const heightClass = pathname === '/lab' ? '' : 'h-screen'

  return (
    <div
      className={`max-w-screen ${heightClass} flex flex-col bg-white`}
    >
      {children}
    </div>
  )

}