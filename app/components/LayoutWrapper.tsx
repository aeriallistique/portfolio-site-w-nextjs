"use client"

import { usePathname } from "next/navigation"

export const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()
  const paths = ['/lab', '/world-time', '/blog', '/blog/']

  const heightClass = paths.some(str => pathname.includes(str)) ? '' : 'h-screen'

  return (
    <div
      className={`max-w-screen ${heightClass} flex flex-col bg-white`}
    >
      {children}
    </div>
  )

}