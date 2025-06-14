"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <Menu className={`h-6 w-6 ${isOpen ? "hidden" : "block"}`} />
        <X className={`h-6 w-6 ${isOpen ? "block" : "hidden"}`} />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto bg-white p-6 pb-32 shadow-md animate-in slide-in-from-top-1 md:hidden">
          <div className="relative z-20 grid gap-6 rounded-md bg-white p-4">
            <Link
              href="#services"
              className="flex items-center space-x-2 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              <span>Services</span>
            </Link>
            <Link
              href="#about"
              className="flex items-center space-x-2 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              <span>About</span>
            </Link>
            <Link
              href="#case-studies"
              className="flex items-center space-x-2 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              <span>Case Studies</span>
            </Link>
            <Link
              href="#testimonials"
              className="flex items-center space-x-2 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              <span>Testimonials</span>
            </Link>
            <Link
              href="#contact"
              className="flex items-center space-x-2 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              <span>Contact</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
