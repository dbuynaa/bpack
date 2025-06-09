"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  MapPin,
  Package,
  Shield,
  Star,
  Truck,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}

      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 lg:py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10" />
        <div className="container relative mx-auto px-4">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center space-x-2 rounded-full bg-blue-100 px-3 py-2 font-medium text-blue-800 text-sm lg:px-4">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-blue-600" />
                  <span className="text-xs lg:text-sm">
                    Монголын тэргүүлэгч хүргэлтийн үйлчилгээ
                  </span>
                </div>
                <h1 className="font-bold text-3xl text-gray-900 leading-tight sm:text-4xl lg:text-5xl xl:text-6xl">
                  <span className="text-blue-600">Улаанбаатар</span> хотод{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    хурдан, найдвартай
                  </span>{" "}
                  илгээмжийн үйлчилгээ
                </h1>
                <p className="mx-auto max-w-2xl text-gray-600 text-lg leading-relaxed lg:mx-0 lg:text-xl">
                  Монголын өвөрмөц газарзүйд тохирсон хүргэлтийн шийдэл.
                  Улаанбаатар хотод өдрийн дотор хүргэлт, бүх аймагт үндэсний
                  хүргэлт.
                </p>
              </div>
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <Link href="/book">
                  <Button
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-base shadow-lg hover:from-blue-700 hover:to-blue-800 sm:w-auto lg:px-8 lg:py-6 lg:text-lg"
                  >
                    Хүргэлт захиалах
                    <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                  </Button>
                </Link>
                <Link href="/quote">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-blue-200 px-6 py-4 text-base text-blue-700 hover:bg-blue-50 sm:w-auto lg:px-8 lg:py-6 lg:text-lg"
                  >
                    Үнэ авах
                  </Button>
                </Link>
              </div>
              <div className="flex items-center justify-center space-x-4 pt-4 sm:space-x-8 lg:justify-start">
                <div className="text-center">
                  <div className="font-bold text-blue-600 text-xl lg:text-2xl">
                    50,000+
                  </div>
                  <div className="text-gray-600 text-xs lg:text-sm">
                    Хүргэгдсэн багц
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-blue-600 text-xl lg:text-2xl">
                    98.5%
                  </div>
                  <div className="text-gray-600 text-xs lg:text-sm">
                    Цаг тухайд нь
                  </div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-blue-600 text-xl lg:text-2xl">
                    24/7
                  </div>
                  <div className="text-gray-600 text-xs lg:text-sm">
                    Дэмжлэг
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 lg:mt-0">
              <div className="absolute inset-0 rotate-2 transform rounded-2xl bg-gradient-to-r from-blue-400 to-indigo-500 opacity-20 lg:rotate-3 lg:rounded-3xl" />
              <div className="-rotate-1 relative transform rounded-2xl bg-white p-4 shadow-2xl lg:rounded-3xl lg:p-8">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="TengerPack хүргэлтийн үйлчилгээ"
                  width={400}
                  height={300}
                  className="h-auto w-full rounded-xl lg:rounded-2xl"
                />
                <div className="-top-2 lg:-top-4 -right-2 lg:-right-4 absolute rounded-full bg-green-500 px-2 py-1 font-medium text-white text-xs shadow-lg lg:px-4 lg:py-2 lg:text-sm">
                  Амьд хяналт
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="mb-4 font-bold text-3xl text-gray-900 lg:mb-6 lg:text-4xl">
              Яагаад TengerPack сонгох вэ?
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 text-lg lg:text-xl">
              Бид Монголын өвөрмөц газарзүй, уур амьсгалын нөхцөлийг ойлгож,
              өргөн тал нутаг, хотын төвүүдэд найдвартай хүргэлт хийдэг
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            <Card className="group border-0 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center lg:p-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 transition-transform group-hover:scale-110 lg:mb-6 lg:h-16 lg:w-16 lg:rounded-2xl">
                  <Clock className="h-6 w-6 text-white lg:h-8 lg:w-8" />
                </div>
                <h3 className="mb-3 font-semibold text-gray-900 text-lg lg:mb-4 lg:text-xl">
                  Өдрийн дотор хүргэлт
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed lg:text-base">
                  Улаанбаатар хотод хурдан хүргэлт, ихэвчлэн 2-4 цагийн дотор.
                  Яаралтай илгээмжийн хувьд тусгай үйлчилгээ.
                </p>
              </CardContent>
            </Card>
            <Card className="group border-0 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-6 text-center lg:p-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 transition-transform group-hover:scale-110 lg:mb-6 lg:h-16 lg:w-16 lg:rounded-2xl">
                  <MapPin className="h-6 w-6 text-white lg:h-8 lg:w-8" />
                </div>
                <h3 className="mb-3 font-semibold text-gray-900 text-lg lg:mb-4 lg:text-xl">
                  Бодит цагийн хяналт
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed lg:text-base">
                  GPS хяналттайгаар илгээмжээ алхам бүрд нь дагаж мөрдөх. SMS
                  болон имэйл мэдэгдэл автоматаар илгээнэ.
                </p>
              </CardContent>
            </Card>
            <Card className="group border-0 bg-gradient-to-br from-purple-50 to-violet-50 shadow-lg transition-all duration-300 hover:shadow-xl sm:col-span-2 lg:col-span-1">
              <CardContent className="p-6 text-center lg:p-8">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 transition-transform group-hover:scale-110 lg:mb-6 lg:h-16 lg:w-16 lg:rounded-2xl">
                  <Shield className="h-6 w-6 text-white lg:h-8 lg:w-8" />
                </div>
                <h3 className="mb-3 font-semibold text-gray-900 text-lg lg:mb-4 lg:text-xl">
                  Аюулгүй & Даатгалтай
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed lg:text-base">
                  Бүх илгээмж даатгалтай бөгөөд хамгийн их анхаарлаар харьцдаг.
                  Хүргэлтийн баталгаа зураг, гарын үсэгтэй.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="bg-gradient-to-br from-gray-50 to-blue-50 py-12 lg:py-20"
      >
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="mb-4 font-bold text-3xl text-gray-900 lg:mb-6 lg:text-4xl">
              Хэрхэн ажилладаг
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl">
              Илгээмжээ хүргүүлэх энгийн 4 алхам
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {[
              {
                step: "1",
                title: "Онлайн захиалах",
                description:
                  "Манай вэбсайт эсвэл мобайл апп-аар хэдхэн минутын дотор захиалах",
                icon: Package,
                color: "from-blue-500 to-blue-600",
              },
              {
                step: "2",
                title: "Бид авна",
                description:
                  "Манай мэргэжлийн жолооч таны байршилд ирж илгээмжийг авна",
                icon: Truck,
                color: "from-green-500 to-green-600",
              },
              {
                step: "3",
                title: "Бодит цагийн хяналт",
                description:
                  "GPS хяналттайгаар илгээмжийн замыг амьд дагаж мөрдөх",
                icon: MapPin,
                color: "from-purple-500 to-purple-600",
              },
              {
                step: "4",
                title: "Аюулгүй хүргэлт",
                description:
                  "Хүргэлтийн нотолгоотойгоор илгээмжийг аюулгүй хүргэнэ",
                icon: CheckCircle,
                color: "from-orange-500 to-orange-600",
              },
            ].map((item, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-4 lg:mb-6">
                  <div
                    className={`h-16 w-16 bg-gradient-to-r lg:h-20 lg:w-20 ${item.color} mx-auto flex items-center justify-center rounded-2xl shadow-lg transition-transform group-hover:scale-110 lg:rounded-3xl`}
                  >
                    <item.icon className="h-8 w-8 text-white lg:h-10 lg:w-10" />
                  </div>
                  <div className="-top-1 lg:-top-2 -right-1 lg:-right-2 absolute flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md lg:h-8 lg:w-8">
                    <span className="font-bold text-gray-700 text-xs lg:text-sm">
                      {item.step}
                    </span>
                  </div>
                </div>
                <h3 className="mb-2 font-semibold text-base text-gray-900 lg:mb-3 lg:text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed lg:text-base">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="mb-4 font-bold text-3xl text-gray-900 lg:mb-6 lg:text-4xl">
              Манай үйлчилгээ
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl">
              Таны бүх хэрэгцээнд зориулсан иж бүрэн хүргэлтийн шийдэл
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {[
              {
                title: "Өдрийн дотор хүргэлт",
                description:
                  "Улаанбаатар хотод 2-4 цагийн дотор хурдан хүргэлт",
                price: "₮15,000-аас",
                gradient: "from-blue-500 to-blue-600",
                popular: true,
              },
              {
                title: "Маргаашийн хүргэлт",
                description: "Монгол даяар найдвартай маргаашийн хүргэлт",
                price: "₮8,000-аас",
                gradient: "from-green-500 to-green-600",
              },
              {
                title: "Товлосон хүргэлт",
                description: "Тодорхой өдөр, цагт хүргэлтээ төлөвлөх",
                price: "₮10,000-аас",
                gradient: "from-purple-500 to-purple-600",
              },
              {
                title: "Тусгай хүргэлт",
                description: "Хэврэг, эмнэлгийн, температурын хяналттай зүйлс",
                price: "Тусгай үнэ",
                gradient: "from-orange-500 to-orange-600",
              },
              {
                title: "Бизнесийн шийдэл",
                description: "Их хэмжээний гэрээ, тогтмол бизнесийн хүргэлт",
                price: "Хэмжээний хөнгөлөлт",
                gradient: "from-indigo-500 to-indigo-600",
              },
              {
                title: "Үндэсний хүргэлт",
                description: "Монголын 21 аймагт хүргэлт",
                price: "₮25,000-аас",
                gradient: "from-red-500 to-red-600",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className={`group relative overflow-hidden border-0 shadow-lg transition-all duration-300 hover:shadow-xl ${
                  service.popular ? "ring-2 ring-blue-500" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute top-3 right-3 rounded-full bg-blue-500 px-2 py-1 font-medium text-white text-xs lg:top-4 lg:right-4 lg:px-3">
                    Хамгийн их эрэлттэй
                  </div>
                )}
                <CardContent className="p-6 lg:p-8">
                  <div
                    className={`h-10 w-10 bg-gradient-to-r lg:h-12 lg:w-12 ${service.gradient} mb-4 flex items-center justify-center rounded-lg transition-transform group-hover:scale-110 lg:mb-6 lg:rounded-xl`}
                  >
                    <Package className="h-5 w-5 text-white lg:h-6 lg:w-6" />
                  </div>
                  <h3 className="mb-3 font-semibold text-gray-900 text-lg lg:mb-4 lg:text-xl">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-gray-600 text-sm leading-relaxed lg:mb-6 lg:text-base">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-base text-blue-600 lg:text-lg">
                      {service.price}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-xs group-hover:bg-blue-50 lg:text-sm"
                    >
                      Дэлгэрэнгүй
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 py-12 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="mb-4 font-bold text-3xl text-gray-900 lg:mb-6 lg:text-4xl">
              Үйлчлүүлэгчдийн сэтгэгдэл
            </h2>
            <p className="text-gray-600 text-lg lg:text-xl">
              Манай үйлчилгээнд сэтгэл хангалуун үйлчлүүлэгчдийн үнэн сэтгэгдэл
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {[
              {
                name: "Батбаяр",
                role: "Бизнес эрхлэгч",
                content:
                  "Маш сайн үйлчилгээ! Чухал баримт бичгээ Дархан руу тэр өдрөөр нь хүргүүлсэн. Маш мэргэжлийн.",
                rating: 5,
              },
              {
                name: "Оюунаа",
                role: "Онлайн худалдан авагч",
                content:
                  "Бодит цагийн хяналт гайхалтай! Илгээмж хаана байгааг замын туршид нь харж байсан.",
                rating: 5,
              },
              {
                name: "Эмч Мөнх-Эрдэнэ",
                role: "Эмнэлэг",
                content:
                  "Монголын хамгийн сайн хүргэлтийн үйлчилгээ. Эмнэлгийн хангамжийг маш болгоомжтой харьцдаг.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="group border-0 bg-white shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <CardContent className="p-6 lg:p-8">
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400 lg:h-5 lg:w-5"
                      />
                    ))}
                  </div>
                  <p className="mb-4 text-gray-600 text-sm italic leading-relaxed lg:mb-6 lg:text-base">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-blue-600 lg:h-12 lg:w-12">
                      <Users className="h-5 w-5 text-white lg:h-6 lg:w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm lg:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600 text-xs lg:text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 py-12 text-white lg:py-20">
        <div className="absolute inset-0 bg-black/10" />
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="mb-4 font-bold text-3xl lg:mb-6 lg:text-4xl">
            Илгээмжээ илгээхэд бэлэн үү?
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg opacity-90 lg:mb-8 lg:text-xl">
            Монгол даяарх олон мянган сэтгэл хангалуун үйлчлүүлэгчдэд нэгдээрэй.
            Өнөөдөр л эхний хүргэлтээ захиалаарай.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/book">
              <Button
                size="lg"
                variant="secondary"
                className="w-full bg-white px-6 py-4 text-base text-blue-700 shadow-lg hover:bg-gray-100 sm:w-auto lg:px-8 lg:py-6 lg:text-lg"
              >
                Одоо захиалах
                <ArrowRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
              </Button>
            </Link>
            <Link href="/quote">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-white px-6 py-4 text-base text-white hover:bg-white hover:text-blue-700 sm:w-auto lg:px-8 lg:py-6 lg:text-lg"
              >
                Үнэ авах
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
