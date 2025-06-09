"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowLeft,
  Clock,
  HeadphonesIcon,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <p className="mx-auto max-w-3xl text-gray-600 text-xl">
              Манай хүргэлтийн үйлчилгээний талаар асуух зүйл байна уу?
              Захиалгатай холбоотой асуудал байна уу? Бид 24/7 танд туслахад
              бэлэн.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Бидэнд захиа илгээх</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="first-name">Овог</Label>
                      <Input id="first-name" placeholder="Таны овог" />
                    </div>
                    <div>
                      <Label htmlFor="last-name">Нэр</Label>
                      <Input id="last-name" placeholder="Таны нэр" />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <Label htmlFor="email">Имэйл</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Утасны дугаар</Label>
                      <Input id="phone" placeholder="+976 XXXX XXXX" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject">Сэдэв</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Сэдэв сонгох" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">Ерөнхий асуулт</SelectItem>
                        <SelectItem value="support">
                          Захиалгын дэмжлэг
                        </SelectItem>
                        <SelectItem value="complaint">Гомдол</SelectItem>
                        <SelectItem value="partnership">
                          Хамтын ажиллагаа
                        </SelectItem>
                        <SelectItem value="feedback">Санал хүсэлт</SelectItem>
                        <SelectItem value="other">Бусад</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="tracking-id">
                      Захиалгын дугаар (хэрэв байгаа бол)
                    </Label>
                    <Input id="tracking-id" placeholder="MD240001234" />
                  </div>
                  <div>
                    <Label htmlFor="message">Зурвас</Label>
                    <Textarea
                      id="message"
                      placeholder="Асуудлаа дэлгэрэнгүй бичнэ үү..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    Илгээх
                  </Button>
                  <p className="text-center text-gray-600 text-sm">
                    Бид ажлын цагаар 2-4 цагийн дотор хариу өгөх болно
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Шуурхай холбоо</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Утасны дэмжлэг</p>
                      <p className="text-gray-600">+976 7000-1234</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Имэйл дэмжлэг</p>
                      <p className="text-gray-600">support@mongoldelivery.mn</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <HeadphonesIcon className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium">Яаралтай шугам</p>
                      <p className="text-gray-600">+976 9999-0000</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5" />
                    <span>Ажлын цаг</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Даваа - Баасан</span>
                    <span className="font-medium">08:00 AM - 08:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Бямба</span>
                    <span className="font-medium">09:00 AM - 06:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ням</span>
                    <span className="font-medium">10:00 AM - 04:00 PM</span>
                  </div>
                  <div className="mt-3 border-t pt-3">
                    <p className="text-gray-600 text-sm">
                      <strong>Яаралтай тусламж:</strong> Хүргэлттэй холбоотой
                      асуудлаар 24/7 ажиллана
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Office Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span>Оффисын байршил</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-medium">МонголDelivery төв байр</p>
                    <p className="text-gray-600">
                      Blue Sky Tower, 17 давхар
                      <br />
                      Энхтайваны өргөн чөлөө 17
                      <br />
                      Сүхбаатар дүүрэг
                      <br />
                      Улаанбаатар 14200
                      <br />
                      Монгол улс
                    </p>
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" className="w-full">
                      Чиглэл авах
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold">Түгээмэл асуултууд</h3>
                  <p className="mb-4 text-gray-600 text-sm">
                    Манай хүргэлтийн үйлчилгээний талаархи түгээмэл асуултанд
                    хурдан хариулт аваарай.
                  </p>
                  <Button variant="outline" className="w-full">
                    FAQ үзэх
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional Support Options */}
          <div className="mt-12">
            <h2 className="mb-8 text-center font-bold text-2xl">
              Бидэнтэй холбогдох бусад арга замууд
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <MessageSquare className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                  <h3 className="mb-2 font-semibold">Шууд чат</h3>
                  <p className="mb-4 text-gray-600">
                    Манай вэбсайтаар дамжуулан манай дэмжлэгийн багтай шууд
                    чатлах
                  </p>
                  <Button variant="outline">Чат эхлүүлэх</Button>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Phone className="mx-auto mb-4 h-12 w-12 text-green-600" />
                  <h3 className="mb-2 font-semibold">WhatsApp</h3>
                  <p className="mb-4 text-gray-600">
                    Шуурхай дэмжлэг авахын тулд WhatsApp-аар мессеж илгээнэ үү
                  </p>
                  <Button variant="outline">Мессеж илгээх</Button>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="mx-auto mb-4 h-12 w-12 text-purple-600" />
                  <h3 className="mb-2 font-semibold">Сошиал медиа</h3>
                  <p className="mb-4 text-gray-600">
                    Шинэчлэлтүүдийг авахын тулд Facebook болон Instagram
                    хуудсаар дагана уу
                  </p>
                  <Button variant="outline">Дагах</Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Emergency Contact */}
          <Card className="mt-12 border-red-200 bg-red-50">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="mb-2 font-semibold text-lg text-red-800">
                  Хүргэлттэй холбоотой яаралтай асуудал байна уу?
                </h3>
                <p className="mb-4 text-red-700">
                  Хэрэв танд ажлын цагаас гадуур хүргэлттэй холбоотой яаралтай
                  асуудал гарвал манай яаралтай дугаарт залгана уу:
                </p>
                <div className="mb-4 font-bold text-2xl text-red-800">
                  +976 9999-0000
                </div>
                <p className="text-red-600 text-sm">
                  Гээгдсэн багц, хүргэлтийн онцгой байдал болон яаралтай
                  тусламжийн үед 24/7 ажиллана
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
