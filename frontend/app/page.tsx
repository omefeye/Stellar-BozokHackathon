import Link from "next/link"
import { ArrowRight, Leaf, ShoppingBag, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProductCard from "@/components/product-card"

export default function Home() {
  // Featured products with eco ratings
  const featuredProducts = [
    {
      id: 1,
      name: "Bamboo Toothbrush Set",
      price: 12.99,
      ecoRating: 5,
      image: "/toothbrush.jpeg?height=200&width=200",
      description: "100% biodegradable bamboo toothbrushes",
    },
    {
      id: 2,
      name: "Reusable Coffee Cup",
      price: 24.99,
      ecoRating: 4,
      image: "/cup.jpeg?height=200&width=200",
      description: "Sustainable coffee cup made from recycled materials",
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      ecoRating: 5,
      image: "/tshirt.jpeg?height=200&width=200",
      description: "Ethically produced organic cotton t-shirt",
    },
    {
      id: 4,
      name: "Solar Power Bank",
      price: 49.99,
      ecoRating: 4,
      image: "/powerbank.jpeg?height=200&width=200",
      description: "Charge your devices with solar energy",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white dark:from-green-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <Badge className="bg-green-500 hover:bg-green-600">Eco-Friendly Shopping</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Shop Sustainably, Earn Eco Points
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Discover environmentally friendly products and make a positive impact with every purchase.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/products">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Browse Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/register">
                  <Button variant="outline">Create Account</Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square overflow-hidden rounded-xl">
                <img
                  src="/download.jpeg?height=500&width=500"
                  alt="Eco-friendly products"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Eco Products</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover our top-rated sustainable products that help reduce your environmental footprint.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link href="/products">
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 hover:text-green-700"
              >
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50 dark:bg-green-950">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose GreenShopping?</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform makes sustainable shopping easy, rewarding, and impactful.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <Card>
              <CardHeader>
                <Leaf className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Eco Ratings</CardTitle>
                <CardDescription>
                  Every product is rated based on its environmental impact, helping you make informed choices.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <Star className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Earn Eco Points</CardTitle>
                <CardDescription>
                  Collect points with every sustainable purchase and redeem them for exclusive rewards.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <ShoppingBag className="w-12 h-12 text-green-600 mb-4" />
                <CardTitle>Sustainable Recommendations</CardTitle>
                <CardDescription>
                  Get personalized product suggestions based on your preferences and eco-friendly goals.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
