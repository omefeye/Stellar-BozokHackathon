import Link from "next/link"
import { Facebook, Instagram, Leaf, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Leaf className="h-5 w-5 text-green-600" />
              <span>GreenShopping</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Making sustainable shopping accessible and rewarding for everyone.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Shop</h3>
            <ul className="grid gap-2 text-sm">
              <li>
                <Link href="/products" className="text-muted-foreground hover:text-foreground">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/products?category=Kitchen" className="text-muted-foreground hover:text-foreground">
                  Kitchen
                </Link>
              </li>
              <li>
                <Link href="/products?category=Personal+Care" className="text-muted-foreground hover:text-foreground">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link href="/products?category=Clothing" className="text-muted-foreground hover:text-foreground">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/products?category=Electronics" className="text-muted-foreground hover:text-foreground">
                  Electronics
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">Account</h3>
            <ul className="grid gap-2 text-sm">
              <li>
                <Link href="/register" className="text-muted-foreground hover:text-foreground">
                  Sign Up
                </Link>
              </li>
              <li>
                <Link href="/register?tab=login" className="text-muted-foreground hover:text-foreground">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/profile" className="text-muted-foreground hover:text-foreground">
                  My Profile
                </Link>
              </li>
              <li>
                <Link href="/cart" className="text-muted-foreground hover:text-foreground">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-base font-medium">About</h3>
            <ul className="grid gap-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 GreenShopping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
