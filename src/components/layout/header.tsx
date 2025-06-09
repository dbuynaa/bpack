import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="sticky top-0 z-50 border-blue-100 border-b bg-white/95 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <Image
                src="/public/web-app-manifest-512x512.png"
                alt="TengerPack Logo"
                width={40}
                height={40}
                className="drop-shadow-md"
              />
            </div>
            <div>
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text font-bold text-transparent text-xl lg:text-2xl">
                BPACK
              </span>
              <p className="hidden font-medium text-blue-600 text-xs sm:block">
                Хүргэлтийн үйлчилгээ
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-6 lg:flex xl:space-x-8">
            {/* <Link
              href="#services"
              className="font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Үйлчилгээ
            </Link> */}
            {/* <Link
              href="#how-it-works"
              className="font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Хэрхэн ажилладаг
            </Link> */}
            <Link
              href="/pricing"
              className="font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Үнэ
            </Link>
            <Link
              href="/about"
              className="font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Бидний тухай
            </Link>
            <Link
              href="/contact"
              className="font-medium text-gray-700 transition-colors hover:text-blue-600"
            >
              Холбоо барих
            </Link>
            <Link href="/track">
              <Button
                variant="outline"
                className="border-blue-200 text-blue-700 hover:bg-blue-50"
                size="sm"
              >
                Илгээмж хайх
              </Button>
            </Link>
            <Link href="/book">
              <Button
                className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:from-blue-700 hover:to-blue-800"
                size="sm"
              >
                Хүргэлт захиалах
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
