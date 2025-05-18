"use client"

import { useState } from "react"
import Link from "next/link"
import { Leaf, Menu, Moon, ShoppingCart, Sun, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  // Sample cart count
  const cartCount = 3

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="px-7">
                <Link href="/" className="flex items-center gap-2 font-bold" onClick={() => setIsOpen(false)}>
                  <Leaf className="h-5 w-5 text-green-600" />
                  <span>GreenShopping</span>
                </Link>
              </div>
              <div className="mt-8 flex flex-col gap-4 px-7">
                <Link href="/" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
                <Link href="/products" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Products
                </Link>
                <Link href="/cart" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Cart
                </Link>
                <Link href="/profile" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  My Profile
                </Link>
              </div>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Leaf className="h-5 w-5 text-green-600" />
            <span className="hidden md:inline-block">GreenShopping</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="font-medium transition-colors hover:text-foreground/80">
              Home
            </Link>
            <Link href="/products" className="font-medium transition-colors hover:text-foreground/80">
              Products
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="mr-2"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-green-600">
                  {cartCount}
                </Badge>
              )}
              <span className="sr-only">Cart</span>
            </Button>
          </Link>
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Profile</span>
            </Button>
          </Link>
          <Link href="/register" className="hidden md:block">
            <Button className="bg-green-600 hover:bg-green-700">Sign In</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
