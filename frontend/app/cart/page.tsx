"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Leaf, Trash2, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/components/ui/use-toast"

export default function CartPage() {
  const { toast } = useToast()

  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Bamboo Toothbrush Set",
      price: 12.99,
      quantity: 1,
      ecoRating: 5,
      image: "/toothbrushls.jpeg?height=100&width=100",
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      quantity: 2,
      ecoRating: 5,
      image: "/tshirt.jpeg?height=100&width=100",
    },
  ])

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
    toast({
      title: "Item removed",
      description: "The item has been removed from your cart.",
    })
  }

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 4.99
  const total = subtotal + shipping

  // Calculate eco points (1 point per dollar spent, bonus for high eco ratings)
  const ecoPoints = Math.round(
    total + cartItems.reduce((sum, item) => sum + (item.ecoRating >= 4 ? item.quantity * 5 : 0), 0),
  )

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>
          <p className="text-muted-foreground">Review and checkout your eco-friendly items</p>
        </div>
        <Link href="/products">
          <Button variant="outline" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Continue Shopping
          </Button>
        </Link>
      </div>

      {cartItems.length > 0 ? (
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="h-20 w-20 rounded-md object-cover"
                    />
                    <div className="flex-1 grid gap-1">
                      <div className="flex items-center justify-between">
                        <Link href={`/products/${item.id}`} className="font-medium hover:underline">
                          {item.name}
                        </Link>
                        <div className="flex items-center text-green-600">
                          <Leaf className="h-3.5 w-3.5 mr-1" />
                          <span className="text-xs">{item.ecoRating}/5</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">GST {item.price.toFixed(2)} each</div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </Button>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="font-medium">GST {(item.price * item.quantity).toFixed(2)}</div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                            <span className="sr-only">Remove</span>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>GST {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span>GST {shipping.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between font-medium">
                  <span>Total</span>
                  <span>GST {total.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-green-600 bg-green-50 dark:bg-green-950 p-2 rounded-md">
                  <span className="flex items-center">
                    <Leaf className="h-4 w-4 mr-1" />
                    Eco Points Earned
                  </span>
                  <span className="font-medium">{ecoPoints} points</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Checkout
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
          <div className="rounded-full bg-muted p-6">
            <ShoppingCart className="h-10 w-10 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-medium">Your cart is empty</h2>
          <p className="text-muted-foreground">
            Looks like you haven't added any eco-friendly products to your cart yet.
          </p>
          <Link href="/products">
            <Button className="bg-green-600 hover:bg-green-700">
              Browse Products
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
