"use client"
import Link from "next/link"
import { Leaf, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/components/ui/use-toast"

interface Product {
  id: number
  name: string
  price: number
  ecoRating: number
  image: string
  description: string
}

export default function ProductCard({ product }: { product: Product }) {
  const { toast } = useToast()

  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <Link href={`/products/${product.id}`}>
        <div className="overflow-hidden">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-cover transition-transform hover:scale-105"
          />
        </div>
      </Link>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{product.name}</CardTitle>
          <div className="flex items-center bg-green-100 dark:bg-green-900 px-2 py-1 rounded-full">
            <Leaf className="h-3 w-3 text-green-600 dark:text-green-400 mr-1" />
            <span className="text-xs font-medium text-green-600 dark:text-green-400">{product.ecoRating}/5</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
      </CardHeader>
      <CardFooter className="p-4 pt-0 flex justify-between items-center">
        <span className="font-bold">GST {product.price.toFixed(2)}</span>
        <Button size="sm" onClick={addToCart} className="bg-green-600 hover:bg-green-700">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
