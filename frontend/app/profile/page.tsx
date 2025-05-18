"use client"

import Link from "next/link"
import { CreditCard, Leaf, Package, ShoppingBag, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function ProfilePage() {
  // Sample user data
  const user = {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    ecoPoints: 235,
    nextReward: 300,
    joinDate: "January 15, 2023",
    orders: [
      {
        id: "ORD-12345",
        date: "May 10, 2023",
        total: 42.98,
        status: "Delivered",
        items: [
          {
            id: 1,
            name: "Bamboo Toothbrush Set",
            price: 12.99,
            quantity: 1,
            ecoRating: 5,
          },
          {
            id: 3,
            name: "Organic Cotton T-Shirt",
            price: 29.99,
            quantity: 1,
            ecoRating: 5,
          },
        ],
      },
      {
        id: "ORD-12346",
        date: "April 22, 2023",
        total: 74.97,
        status: "Delivered",
        items: [
          {
            id: 2,
            name: "Reusable Coffee Cup",
            price: 24.99,
            quantity: 1,
            ecoRating: 4,
          },
          {
            id: 6,
            name: "Beeswax Food Wraps",
            price: 15.99,
            quantity: 3,
            ecoRating: 5,
          },
        ],
      },
    ],
    achievements: [
      {
        id: 1,
        name: "First Purchase",
        description: "Made your first eco-friendly purchase",
        date: "January 20, 2023",
        icon: ShoppingBag,
      },
      {
        id: 2,
        name: "Plastic Saver",
        description: "Purchased 5 plastic-alternative products",
        date: "March 15, 2023",
        icon: Leaf,
      },
      {
        id: 3,
        name: "Eco Explorer",
        description: "Tried products from 3 different eco categories",
        date: "April 30, 2023",
        icon: Package,
      },
    ],
  }

  // Calculate progress to next reward
  const progressPercentage = (user.ecoPoints / user.nextReward) * 100

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>
          <p className="text-muted-foreground">Manage your account and track your eco impact</p>
        </div>
        <Button variant="outline">Edit Profile</Button>
      </div>

      <div className="grid gap-8 mt-8 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardHeader>
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-green-100 dark:bg-green-900 mb-4">
              <User className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <CardTitle className="text-center">{user.name}</CardTitle>
            <CardDescription className="text-center">{user.email}</CardDescription>
            <CardDescription className="text-center">Member since {user.joinDate}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Leaf className="h-4 w-4 mr-2 text-green-600" />
                    <span className="font-medium">Eco Points</span>
                  </div>
                  <span className="font-bold">{user.ecoPoints}</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
                <p className="text-xs text-muted-foreground text-center">
                  {user.nextReward - user.ecoPoints} more points until your next reward
                </p>
              </div>

              <div className="pt-4">
                <h3 className="font-medium mb-2">Quick Links</h3>
                <div className="grid gap-2">
                  <Link href="/products">
                    <Button variant="outline" className="w-full justify-start">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      Browse Products
                    </Button>
                  </Link>
                  <Link href="/cart">
                    <Button variant="outline" className="w-full justify-start">
                      <ShoppingBag className="mr-2 h-4 w-4" />
                      View Cart
                    </Button>
                  </Link>
                  <Button variant="outline" className="w-full justify-start">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Payment Methods
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="md:col-span-2">
          <Tabs defaultValue="orders">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="orders">Order History</TabsTrigger>
              <TabsTrigger value="achievements">Eco Achievements</TabsTrigger>
            </TabsList>
            <TabsContent value="orders" className="space-y-4 pt-4">
              {user.orders.map((order) => (
                <Card key={order.id}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base">Order {order.id}</CardTitle>
                      <Badge variant="outline">{order.status}</Badge>
                    </div>
                    <CardDescription>
                      {order.date} • GST {order.total.toFixed(2)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex items-center justify-between text-sm">
                          <div className="flex items-center">
                            <span>
                              {item.quantity}x {item.name}
                            </span>
                            <div className="ml-2 flex items-center text-green-600">
                              <Leaf className="h-3 w-3 mr-0.5" />
                              <span className="text-xs">{item.ecoRating}/5</span>
                            </div>
                          </div>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
            <TabsContent value="achievements" className="space-y-4 pt-4">
              {user.achievements.map((achievement) => (
                <Card key={achievement.id}>
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 shrink-0">
                      <achievement.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">{achievement.name}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      <p className="text-xs text-muted-foreground mt-1">Achieved on {achievement.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-center space-x-4 text-muted-foreground">
                    <Leaf className="h-5 w-5" />
                    <span>More eco achievements coming soon!</span>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
