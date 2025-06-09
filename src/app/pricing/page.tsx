import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Check, Package, Truck, Zap } from "lucide-react";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-6xl">
          {/* Header Section */}
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-bold text-4xl text-gray-900">
              Монгол дахь үнийн мэдээлэл
            </h1>
            <p className="mx-auto max-w-3xl text-gray-600 text-xl">
              Ямар нэгэн далд төлбөргүй, гэнэтийн зүйлгүй. Танд хамгийн
              тохиромжтой хүргэлтийн сонголтыг сонгоорой.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <Card className="relative">
              <CardHeader className="pb-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="mb-2 text-2xl">Стандарт</CardTitle>
                <div className="font-bold text-3xl text-gray-900">₮8,000</div>
                <p className="text-gray-600">
                  Улаанбаатар хотод дараа өдөр нь хүргэнэ
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Дараа өдөр нь хүргэх</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Бодит цагийн хяналт</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Анхан шатны даатгал багтсан</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>SMS мэдэгдэл</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>5 кг хүртэл</span>
                  </li>
                </ul>
                <Link href="/book">
                  <Button className="w-full" variant="outline">
                    Стандарт сонгох
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative border-2 border-blue-500">
              <div className="-top-4 -translate-x-1/2 absolute left-1/2 transform">
                <span className="rounded-full bg-blue-600 px-4 py-1 font-medium text-sm text-white">
                  Хамгийн их эрэлттэй
                </span>
              </div>
              <CardHeader className="pb-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="mb-2 text-2xl">Экспресс</CardTitle>
                <div className="font-bold text-3xl text-gray-900">₮15,000</div>
                <p className="text-gray-600">
                  Улаанбаатар хотод тухайн өдөртөө хүргэнэ
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Тухайн өдөртөө хүргэх (2-4 цаг)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Тэргүүлэх зэрэглэлийн үйлчилгээ</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>GPS-ийн шууд хяналт</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Сайжруулсан даатгал</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>SMS + И-мэйл мэдэгдэл</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>10 кг хүртэл</span>
                  </li>
                </ul>
                <Link href="/book">
                  <Button className="w-full">Экспресс сонгох</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="relative">
              <CardHeader className="pb-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                  <Truck className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="mb-2 text-2xl">Премиум</CardTitle>
                <div className="font-bold text-3xl text-gray-900">₮25,000</div>
                <p className="text-gray-600">Бүх аймагт хүргэх</p>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Улс даяар хүргэх</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>2-3 хоногийн дотор хүргэх</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Мэргэжлийн ажиллагаа</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Бүрэн даатгалын хамрах хүрээ</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>Зориулалтын дэмжлэг</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-600" />
                    <span>25 кг хүртэл</span>
                  </li>
                </ul>
                <Link href="/book">
                  <Button className="w-full" variant="outline">
                    Премиум сонгох
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Additional Services */}
          <div className="mb-12">
            <h2 className="mb-8 text-center font-bold text-3xl">
              Нэмэлт үйлчилгээ
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="mb-2 font-semibold">
                    Эмзэг барааг болгоомжтой хүргэх
                  </h3>
                  <p className="mb-2 font-bold text-2xl text-blue-600">
                    +₮5,000
                  </p>
                  <p className="text-gray-600 text-sm">
                    Эмзэг зүйлийг онцгой анхаарах
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="mb-2 font-semibold">Гарын үсэг зуруулах</h3>
                  <p className="mb-2 font-bold text-2xl text-blue-600">
                    +₮2,000
                  </p>
                  <p className="text-gray-600 text-sm">
                    Хүргэлтийн баталгаажуулалт
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="mb-2 font-semibold">Эм, эмнэлгийн хэрэгсэл</h3>
                  <p className="mb-2 font-bold text-2xl text-blue-600">
                    +₮8,000
                  </p>
                  <p className="text-gray-600 text-sm">
                    Температурын хяналттай тээвэрлэлт
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <h3 className="mb-2 font-semibold">Нэмэлт даатгал</h3>
                  <p className="mb-2 font-bold text-2xl text-blue-600">
                    +₮5,000
                  </p>
                  <p className="text-gray-600 text-sm">
                    ₮1 сая хүртэлх хамрах хүрээ
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* B2B Pricing */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-center text-2xl">
                Бизнесийн шийдэл
              </CardTitle>
              <p className="text-center text-gray-600">
                Бөөний хямдрал ба бизнесийн захиалгат шийдэл
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center">
                  <h3 className="mb-2 font-semibold">Эхлэгч</h3>
                  <p className="mb-2 font-bold text-xl">10-50 хүргэлт/сар</p>
                  <p className="font-medium text-blue-600">10% хямдрал</p>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 font-semibold">Өсөлт</h3>
                  <p className="mb-2 font-bold text-xl">51-200 хүргэлт/сар</p>
                  <p className="font-medium text-blue-600">20% хямдрал</p>
                </div>
                <div className="text-center">
                  <h3 className="mb-2 font-semibold">Корпораци</h3>
                  <p className="mb-2 font-bold text-xl">200+ хүргэлт/сар</p>
                  <p className="font-medium text-blue-600">Захиалгат үнэ</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button size="lg">Борлуулалтын багтай холбогдох</Button>
              </div>
            </CardContent>
          </Card>

          {/* FAQ */}
          <div className="mb-12">
            <h2 className="mb-8 text-center font-bold text-3xl">
              Үнийн мэдээллийн ДТХ
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold">
                    Ямар нэгэн далд төлбөр бий юу?
                  </h3>
                  <p className="text-gray-600">
                    Ямар нэгэн далд төлбөргүй. Бүх зардлыг ил тод харуулсан
                    болно.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold">
                    Төлбөрийн ямар хэлбэрүүдийг хүлээн авах вэ?
                  </h3>
                  <p className="text-gray-600">
                    Бид кредит/дебит карт, банкны шилжүүлэг, бэлэн мөнгөөр
                    төлбөр тооцоо хийх боломжтой.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold">Буцаан олголт хийх үү?</h3>
                  <p className="text-gray-600">
                    Хэрэв бид цуцалбал бүрэн буцаан олголт хийнэ. Хэрэв та
                    ачилтын өмнө цуцалбал хэсэгчилсэн буцаан олголт хийнэ.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <h3 className="mb-2 font-semibold">
                    Жин хэрхэн тооцоолох вэ?
                  </h3>
                  <p className="text-gray-600">
                    Бид бодит жин эсвэл эзэлхүүний жинг ашигладаг.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* CTA */}
          <Card className="bg-blue-600 text-center text-white">
            <CardContent className="pt-8 pb-8">
              <h2 className="mb-4 font-bold text-3xl">Эхлэхэд бэлэн үү?</h2>
              <p className="mb-6 text-xl opacity-90">
                Шууд үнийн санал аваарай эсвэл хүргэлтээ захиалаарай
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/quote">
                  <Button size="lg" variant="secondary">
                    Үнийн санал авах
                  </Button>
                </Link>
                <Link href="/book">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    Хүргэлт захиалах
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
