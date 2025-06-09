import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-white lg:py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/tengerpack-logo.png"
                alt="TengerPack Logo"
                width={32}
                height={32}
              />
              <div>
                <span className="font-bold text-lg lg:text-xl">TengerPack</span>
                <p className="text-blue-400 text-xs">Тэнгэрийн багц</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed lg:text-base">
              Монголын хамгийн найдвартай хүргэлтийн үйлчилгээ, манай үзэсгэлэнт
              орны бүх булан бүрийг холбодог.
            </p>
            <div className="flex space-x-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                <span className="font-bold text-xs">f</span>
              </div>
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                <span className="font-bold text-xs">@</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-base lg:text-lg">
              Үйлчилгээ
            </h3>
            <ul className="space-y-2 text-gray-400 text-sm lg:space-y-3 lg:text-base">
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Өдрийн дотор хүргэлт
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Маргаашийн хүргэлт
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Товлосон хүргэлт
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Бизнесийн шийдэл
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-base lg:text-lg">Компани</h3>
            <ul className="space-y-2 text-gray-400 text-sm lg:space-y-3 lg:text-base">
              <li>
                <Link
                  href="/about"
                  className="transition-colors hover:text-white"
                >
                  Бидний тухай
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Ажлын байр
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Нууцлалын бодлого
                </Link>
              </li>
              <li>
                <Link href="#" className="transition-colors hover:text-white">
                  Үйлчилгээний нөхцөл
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-semibold text-base lg:text-lg">
              Холбоо барих
            </h3>
            <div className="space-y-2 text-gray-400 text-sm lg:space-y-3 lg:text-base">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>+976 7000-1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>info@tengerpack.mn</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4" />
                <span>Улаанбаатар, Монгол</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-gray-800 border-t pt-6 text-center text-gray-400 text-sm lg:pt-8 lg:text-base">
          <p>&copy; 2024 TengerPack. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
