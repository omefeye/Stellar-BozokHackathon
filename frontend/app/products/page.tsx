"use client"

import { useState } from "react"
import { Filter, Leaf, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ProductCard from "@/components/product-card"

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [ecoRatingFilter, setEcoRatingFilter] = useState([1])
  const [categoryFilters, setCategoryFilters] = useState<string[]>([])

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Bamboo Toothbrush Set",
      price: 12.99,
      ecoRating: 5,
      image: "/toothbrushls.jpeg?height=200&width=200",
      description: "100% biodegradable bamboo toothbrushes",
      category: "Personal Care",
    },
    {
      id: 2,
      name: "Reusable Coffee Cup",
      price: 24.99,
      ecoRating: 4,
      image: "/cup.jpeg?height=200&width=200",
      description: "Sustainable coffee cup made from recycled materials",
      category: "Kitchen",
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      price: 29.99,
      ecoRating: 5,
      image: "/tshirt.jpeg?height=200&width=200",
      description: "Ethically produced organic cotton t-shirt",
      category: "Clothing",
    },
    {
      id: 4,
      name: "Solar Power Bank",
      price: 49.99,
      ecoRating: 4,
      image: "/powerbank.jpeg?height=200&width=200",
      description: "Charge your devices with solar energy",
      category: "Electronics",
    },
    {
      id: 5,
      name: "Recycled Paper Notebook",
      price: 8.99,
      ecoRating: 3,
      image: "/defter.jpeg?height=200&width=200",
      description: "Notebook made from 100% recycled paper",
      category: "Stationery",
    },
    {
      id: 6,
      name: "Beeswax Food Wraps",
      price: 15.99,
      ecoRating: 5,
      image: "/wrap.jpeg?height=200&width=200",
      description: "Reusable food wraps made from organic cotton and beeswax",
      category: "Kitchen",
    },
    {
      id: 7,
      name: "Biodegradable Phone Case",
      price: 19.99,
      ecoRating: 4,
      image: "/case.jpeg?height=200&width=200",
      description: "Phone case made from biodegradable materials",
      category: "Electronics",
    },
    {
      id: 8,
      name: "Organic Shampoo Bar",
      price: 9.99,
      ecoRating: 5,
      image: "/shampoo.jpeg?height=200&width=200",
      description: "Zero waste shampoo bar with natural ingredients",
      category: "Personal Care",
    },
  ]

  // Get unique categories
  const categories = [...new Set(products.map((product) => product.category))]

  // Filter products based on search query, eco rating, and categories
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesEcoRating = product.ecoRating >= ecoRatingFilter[0]
    const matchesCategory = categoryFilters.length === 0 || categoryFilters.includes(product.category)

    return matchesSearch && matchesEcoRating && matchesCategory
  })

  const handleCategoryChange = (category: string) => {
    setCategoryFilters((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Eco-Friendly Products</h1>
          <p className="text-muted-foreground">Discover sustainable products for a greener lifestyle</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative w-full md:w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Products</SheetTitle>
                <SheetDescription>Refine your product search with eco-friendly filters</SheetDescription>
              </SheetHeader>
              <div className="grid gap-6 py-6">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Minimum Eco Rating</h3>
                  <div className="flex items-center space-x-4">
                    <Slider
                      defaultValue={[1]}
                      max={5}
                      min={1}
                      step={1}
                      value={ecoRatingFilter}
                      onValueChange={setEcoRatingFilter}
                      className="flex-1"
                    />
                    <div className="flex items-center rounded-md border px-2 py-1">
                      <Leaf className="h-4 w-4 text-green-600 mr-1" />
                      <span>{ecoRatingFilter[0]}/5</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-sm font-medium">Categories</h3>
                  <div className="grid gap-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          id={category}
                          checked={categoryFilters.includes(category)}
                          onCheckedChange={() => handleCategoryChange(category)}
                        />
                        <Label htmlFor={category}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
          <p className="text-lg font-medium">No products found</p>
          <p className="text-muted-foreground">Try adjusting your filters or search query</p>
        </div>
      )}
    </div>
  )
}
