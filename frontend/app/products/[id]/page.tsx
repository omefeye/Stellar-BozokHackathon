"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Heart, Leaf, ShoppingCart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"

export default function ProductPage({ params }: { params: { id: string } }) {
  const { toast } = useToast()
  const [quantity, setQuantity] = useState(1)

  // This would normally fetch from an API based on the ID
  const product = {
    id: Number.parseInt(params.id),
    name: "Bamboo Toothbrush Set",
    price: 12.99,
    ecoRating: 5,
    image: "/toothbrushls.jpeg?height=500&width=500",
    description:
      "Our bamboo toothbrush is 100% biodegradable and made from sustainably harvested bamboo. Each toothbrush features medium-soft bristles that are effective yet gentle on your gums. By choosing our bamboo toothbrushes, you're making a simple switch that has a big impact on reducing plastic waste.",
    features: [
      "100% biodegradable bamboo handle",
      "BPA-free nylon bristles",
      "Plastic-free packaging",
      "Set of 4 toothbrushes",
      "Medium-soft bristles",
    ],
    sustainability: [
      "Made from sustainably harvested bamboo",
      "Reduces plastic waste by 99% compared to conventional toothbrushes",
      "Compostable handle",
      "Carbon-neutral shipping",
      "For every purchase, we plant a tree",
    ],
    ecoImpact:
      "By switching to bamboo toothbrushes, you can prevent approximately 4 plastic toothbrushes from entering landfills and oceans each year. Over a lifetime, that's hundreds of plastic toothbrushes saved!",
  }

  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} ${product.name} ${quantity > 1 ? "have" : "has"} been added to your cart.`,
    })
  }

  const addToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`,
    })
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <Link
        href="/products"
        className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground mb-6"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="overflow-hidden rounded-lg border">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-auto object-cover aspect-square"
          />
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <div className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-700 dark:bg-green-900 dark:text-green-300">
                <Leaf className="mr-1 h-3.5 w-3.5" />
                Eco Rating: {product.ecoRating}/5
              </div>
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold">GST {product.price.toFixed(2)}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="w-8 text-center">{quantity}</span>
              <Button variant="outline" size="icon" onClick={() => setQuantity(quantity + 1)}>
                +
              </Button>
            </div>
            <Button className="flex-1 bg-green-600 hover:bg-green-700" onClick={addToCart}>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
            <Button variant="outline" size="icon" onClick={addToWishlist}>
              <Heart className="h-4 w-4" />
              <span className="sr-only">Add to Wishlist</span>
            </Button>
          </div>

          <Tabs defaultValue="features">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              <TabsTrigger value="impact">Eco Impact</TabsTrigger>
            </TabsList>
            <TabsContent value="features" className="space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="sustainability" className="space-y-4">
              <ul className="list-disc pl-5 space-y-2">
                {product.sustainability.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="impact" className="space-y-4">
              <p>{product.ecoImpact}</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
