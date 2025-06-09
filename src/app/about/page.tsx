import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowLeft,
  Award,
  Clock,
  Heart,
  MapPin,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="mb-6 font-bold text-4xl text-gray-900">
              Монгол улсыг холбож, нэг хүргэлтээр
            </h1>
            <p className="mx-auto max-w-3xl text-gray-600 text-xl">
              2020 онд үүсгэн байгуулагдсан MongolDelivery нь Монгол улсын
              хамгийн найдвартай хүргэлтийн үйлчилгээ болж, манай үзэсгэлэнт
              орны уудам зайг найдвартай, хурдан, аюулгүй багцын хүргэлтээр
              холбож байна.
            </p>
          </div>

          {/* Company Story */}
          <Card className="mb-12">
            <CardContent className="pt-8">
              <div className="grid items-center gap-8 lg:grid-cols-2">
                <div>
                  <h2 className="mb-4 font-bold text-3xl">Бидний түүх</h2>
                  <p className="mb-4 text-gray-600">
                    MongolDelivery нь энгийн ажиглалтаас үүдэлтэй: Монгол орны
                    өвөрмөц газарзүй, тархай бутархай хүн ам нь багцын
                    найдвартай хүргэлтийг хүндрэлтэй болгосон. Манай үүсгэн
                    байгуулагчид Батбаяр, Оюунаа нар Улаанбаатар хотоос Хөвсгөл
                    аймагт байгаа гэр бүлдээ чухал бичиг баримт илгээх гэж
                    байхдаа үүнийг биеэрээ мэдэрсэн.
                  </p>
                  <p className="mb-4 text-gray-600">
                    Тэдний өөрсдийн хэрэгцээнд зориулсан шийдэл нь Монгол орны
                    өнцөг булан бүрийг холбох зорилго болж хурдан өргөжсөн.
                    Өнөөдөр бид Улаанбаатар хотын хөл хөдөлгөөн ихтэй гудамжнаас
                    эхлээд Говийн цөлд байгаа алслагдсан малчин өрхүүд хүртэл
                    бүх 21 аймагт мянга мянган үйлчлүүлэгчдэд үйлчилж байна.
                  </p>
                  <p className="text-gray-600">
                    Бид Монгол орны бэрхшээлийг ойлгож байна - хатуу ширүүн
                    өвөл, уудам зай, өвөрмөц хаягийн систем. Тиймээс бид
                    үйлчилгээгээ Монгол хүмүүс Монголд зориулж бүтээсэн.
                  </p>
                </div>
                <div>
                  <Image
                    src="/placeholder.svg?height=400&width=500"
                    alt="Mongolia landscape with delivery truck"
                    width={500}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Values */}
          <div className="mb-12">
            <h2 className="mb-8 text-center font-bold text-3xl">
              Бидний үнэт зүйлс
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Shield className="mx-auto mb-4 h-12 w-12 text-blue-600" />
                  <h3 className="mb-3 font-semibold text-xl">
                    Найдвартай байдал
                  </h3>
                  <p className="text-gray-600">
                    Бид хүргэхээр амласан зүйлээ биелүүлдэг. Таны багц цаг
                    агаар, зайнаас үл хамааран аюулгүй, цаг тухайд нь очих
                    газартаа хүрдэг.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Heart className="mx-auto mb-4 h-12 w-12 text-red-600" />
                  <h3 className="mb-3 font-semibold text-xl">Олон нийт</h3>
                  <p className="text-gray-600">
                    Бид зөвхөн хүргэлтийн үйлчилгээ биш - бид Монголын нийгмийн
                    нэг хэсэг бөгөөд орон нутгийн бизнес эрхлэгчдийг дэмжиж, гэр
                    бүлийг холбодог.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-8">
                  <Clock className="mx-auto mb-4 h-12 w-12 text-green-600" />
                  <h3 className="mb-3 font-semibold text-xl">Шинэчлэл</h3>
                  <p className="text-gray-600">
                    Бид технологи, үйл явцаа тасралтгүй сайжруулж, илүү сайн,
                    хурдан, үр ашигтай хүргэлтийн үйлчилгээг үзүүлдэг.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Stats */}
          <Card className="mb-12 bg-blue-600 text-white">
            <CardContent className="pt-8">
              <h2 className="mb-8 text-center font-bold text-3xl">
                Бидний нөлөө
              </h2>
              <div className="grid gap-6 text-center md:grid-cols-4">
                <div>
                  <div className="mb-2 font-bold text-4xl">50,000+</div>
                  <p className="opacity-90">Хүргэгдсэн багц</p>
                </div>
                <div>
                  <div className="mb-2 font-bold text-4xl">21</div>
                  <p className="opacity-90">Хамрагдсан аймаг</p>
                </div>
                <div>
                  <div className="mb-2 font-bold text-4xl">98.5%</div>
                  <p className="opacity-90">Цаг тухайд нь хүргэлт</p>
                </div>
                <div>
                  <div className="mb-2 font-bold text-4xl">5,000+</div>
                  <p className="opacity-90">Аз жаргалтай үйлчлүүлэгчид</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Team */}
          <div className="mb-12">
            <h2 className="mb-8 text-center font-bold text-3xl">
              Манай багтай танилцана уу
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Batbayar - CEO"
                    width={150}
                    height={150}
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="font-semibold text-lg">Батбаяр Мөнх</h3>
                  <p className="mb-2 text-blue-600">
                    Гүйцэтгэх захирал & Үүсгэн байгуулагч
                  </p>
                  <p className="text-gray-600 text-sm">
                    Монгол улсын тээврийн салбарт 10+ жилийн туршлагатай ахлах
                    логистикийн менежер асан.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Oyunaa - CTO"
                    width={150}
                    height={150}
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="font-semibold text-lg">Оюунаа Батболд</h3>
                  <p className="mb-2 text-blue-600">
                    Технологийн захирал & Үүсгэн байгуулагч
                  </p>
                  <p className="text-gray-600 text-sm">
                    Монгол улсын өвөрмөц сорилтод зориулсан шийдэл бүтээхэд
                    анхаарлаа хандуулсан технологийн бизнес эрхлэгч.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    alt="Munkh-Erdene - Operations"
                    width={150}
                    height={150}
                    className="mx-auto mb-4 rounded-full"
                  />
                  <h3 className="font-semibold text-lg">Мөнх-Эрдэнэ</h3>
                  <p className="mb-2 text-blue-600">
                    Үйл ажиллагаа хариуцсан захирал
                  </p>
                  <p className="text-gray-600 text-sm">
                    Хүргэлтийн бүх чиглэлд жигд ажиллагааг хангаж, чанарын
                    стандартыг хадгална.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Service Areas */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2 text-center text-2xl">
                <MapPin className="h-6 w-6" />
                <span>Манай үйлчилгээний хүрээ</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 font-semibold text-lg">
                    Томоохон хотууд
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Улаанбаатар (Тэр өдөртөө хүргэлт)</li>
                    <li>• Дархан (Дараа өдөртөө хүргэлт)</li>
                    <li>• Эрдэнэт (Дараа өдөртөө хүргэлт)</li>
                    <li>• Чойбалсан (2 хоногийн хүргэлт)</li>
                    <li>• Мөрөн (2 хоногийн хүргэлт)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-lg">Бүх 21 аймаг</h3>
                  <p className="mb-3 text-gray-600">
                    Бид Монгол орны бүх аймагт, тэр дундаа алслагдсан бүсүүдэд
                    хүргэлт хийдэг. Хүргэлтийн хугацаа байршил, цаг агаарын
                    нөхцөл байдлаас хамаарч өөр өөр байна.
                  </p>
                  <p className="text-gray-500 text-sm">
                    Онцгой алслагдсан газруудад зориулсан тусгай зохицуулалт
                    боломжтой.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Awards & Recognition */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="flex items-center justify-center space-x-2 text-center text-2xl">
                <Award className="h-6 w-6" />
                <span>Шагнал & Хүлээн зөвшөөрөлт</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-yellow-100">
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="mb-2 font-semibold">
                    Шилдэг гарааны бизнес 2022
                  </h3>
                  <p className="text-gray-600">Монголын бизнесийн шагнал</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="mb-2 font-semibold">
                    Хэрэглэгчийн сонголт шагнал
                  </h3>
                  <p className="text-gray-600">
                    Монголын үйлчилгээний шилдэг байдал 2023
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact CTA */}
          <Card className="text-center">
            <CardContent className="pt-8">
              <h2 className="mb-4 font-bold text-2xl">
                Илүү ихийг мэдэхийг хүсэж байна уу?
              </h2>
              <p className="mb-6 text-gray-600">
                Бид тантай холбоо тогтоохдоо баяртай байх болно. Манай
                үйлчилгээний талаар асуух зүйл байгаа эсэх, эсвэл хамтын
                ажиллагааны боломжийг судлахыг хүсч байгаа эсэхээс үл хамааран
                холбоо бариарай.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contact">
                  <Button size="lg">Холбоо барих</Button>
                </Link>
                <Link href="/book">
                  <Button size="lg" variant="outline">
                    Манай үйлчилгээг туршиж үзээрэй
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
