"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 border-blue-100 border-b bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <Image
                  src="/public/web-app-manifest-512x512.png"
                  alt="BPACK Logo"
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

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMobileMenu}
                className="text-gray-700 hover:bg-blue-50"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl">
            <div className="flex h-full flex-col">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-gray-200 p-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/public/web-app-manifest-512x512.png"
                    alt="BPACK Logo"
                    width={32}
                    height={32}
                    className="drop-shadow-md"
                  />
                  <div>
                    <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text font-bold text-transparent text-lg">
                      BPACK
                    </span>
                    <p className="font-medium text-blue-600 text-xs">
                      Хүргэлтийн үйлчилгээ
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMobileMenu}
                  className="text-gray-700 hover:bg-gray-100"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              {/* Navigation Links */}
              <div className="flex-1 overflow-y-auto p-4">
                <div className="space-y-2">
                  <Link
                    href="/pricing"
                    onClick={closeMobileMenu}
                    className="flex w-full items-center rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    Үнэ
                  </Link>
                  <Link
                    href="/about"
                    onClick={closeMobileMenu}
                    className="flex w-full items-center rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    Бидний тухай
                  </Link>
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="flex w-full items-center rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    Холбоо барих
                  </Link>
                  <Link
                    href="/track"
                    onClick={closeMobileMenu}
                    className="flex w-full items-center rounded-lg px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
                  >
                    Илгээмж хайх
                  </Link>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 space-y-3">
                  <Link href="/quote" onClick={closeMobileMenu}>
                    <Button
                      variant="outline"
                      className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
                    >
                      Үнэ авах
                    </Button>
                  </Link>
                  <Link href="/book" onClick={closeMobileMenu}>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg hover:from-blue-700 hover:to-blue-800">
                      Хүргэлт захиалах
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-200 p-4">
                <div className="text-center text-gray-500 text-sm">
                  <p>© 2024 BPACK</p>
                  <p>Хүргэлтийн үйлчилгээ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;