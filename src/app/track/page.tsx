"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Package,
  Phone,
  Search,
  Truck,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TrackPackage() {
  const [trackingId, setTrackingId] = useState("");
  const [trackingData, setTrackingData] = useState(null);

  const handleTrack = () => {
    // Simulate tracking data
    setTrackingData({
      id: "TGP240001234",
      status: "Замд байна",
      estimatedDelivery: "Өнөөдөр, 15:30",
      currentLocation: "Баянзүрх дүүргийн төв",
      timeline: [
        {
          status: "Багц авлаа",
          location: "Сүхбаатар дүүрэг",
          time: "10:30",
          completed: true,
        },
        {
          status: "Ангилах төвд ирлээ",
          location: "Төв ангилах газар",
          time: "11:45",
          completed: true,
        },
        {
          status: "Хүргэлтэнд гарлаа",
          location: "Баянзүрх дүүргийн төв",
          time: "14:15",
          completed: true,
        },
        {
          status: "Хүргэгдлээ",
          location: "Хүлээн авагчийн хаяг",
          time: "Тооцоолсон: 15:30",
          completed: false,
        },
      ],
      packageInfo: {
        from: "Сүхбаатар дүүрэг, Улаанбаатар",
        to: "Баянзүрх дүүрэг, Улаанбаатар",
        weight: "1.2 кг",
        type: "Стандарт багц",
      },
      recipient: {
        name: "Батбаяр Мөнх",
        phone: "+976 9999 1234",
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-6 lg:py-8">
        <div className="mx-auto max-w-6xl">
          {/* Tracking Input */}
          <Card className="mb-6 border-0 bg-white/90 shadow-xl backdrop-blur-sm lg:mb-8">
            <CardHeader className="rounded-t-lg bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white lg:p-6">
              <CardTitle className="flex items-center space-x-2 text-lg lg:text-xl">
                <Search className="h-5 w-5" />
                <span>Хайх мэдээлэл оруулах</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 lg:p-6">
              <div className="flex flex-col gap-4 sm:flex-row">
                <div className="flex-1">
                  <Label
                    htmlFor="tracking-id"
                    className="font-medium text-gray-700 text-sm lg:text-base"
                  >
                    Хайх дугаар
                  </Label>
                  <Input
                    id="tracking-id"
                    placeholder="Хайх дугаараа оруулна уу (жишээ: TGP240001234)"
                    value={trackingId}
                    onChange={(e) => setTrackingId(e.target.value)}
                    className="mt-1 border-gray-200 py-3 text-base focus:border-blue-500 lg:text-lg"
                  />
                </div>
                <div className="flex items-end">
                  <Button
                    onClick={handleTrack}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 shadow-lg hover:from-blue-700 hover:to-indigo-700 sm:w-auto lg:px-8"
                  >
                    <Search className="mr-2 h-4 w-4" />
                    Илгээмж хайх
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Tracking Results */}
          {trackingData && (
            <div className="space-y-6 lg:space-y-8">
              {/* Status Overview */}
              <Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
                <CardContent className="p-6 lg:p-8">
                  <div className="grid gap-6 sm:grid-cols-3 lg:gap-8">
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 lg:mb-4 lg:h-16 lg:w-16 lg:rounded-2xl">
                        <Package className="h-6 w-6 text-white lg:h-8 lg:w-8" />
                      </div>
                      <h3 className="mb-2 font-semibold text-gray-900 text-sm lg:text-base">
                        Багцын төлөв
                      </h3>
                      <p className="font-medium text-base text-blue-600 lg:text-lg">
                        {trackingData.status}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-green-600 lg:mb-4 lg:h-16 lg:w-16 lg:rounded-2xl">
                        <Clock className="h-6 w-6 text-white lg:h-8 lg:w-8" />
                      </div>
                      <h3 className="mb-2 font-semibold text-gray-900 text-sm lg:text-base">
                        Хүргэх цаг
                      </h3>
                      <p className="font-medium text-base text-green-600 lg:text-lg">
                        {trackingData.estimatedDelivery}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 lg:mb-4 lg:h-16 lg:w-16 lg:rounded-2xl">
                        <MapPin className="h-6 w-6 text-white lg:h-8 lg:w-8" />
                      </div>
                      <h3 className="mb-2 font-semibold text-gray-900 text-sm lg:text-base">
                        Одоогийн байршил
                      </h3>
                      <p className="font-medium text-base text-orange-600 lg:text-lg">
                        {trackingData.currentLocation}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                {/* Tracking Timeline */}
                <Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
                  <CardHeader className="rounded-t-lg bg-gradient-to-r from-purple-50 to-violet-50 p-4 lg:p-6">
                    <CardTitle className="text-lg text-purple-800 lg:text-xl">
                      Хүргэлтийн явц
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 lg:p-6">
                    <div className="space-y-4 lg:space-y-6">
                      {trackingData.timeline.map((event, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-3 lg:space-x-4"
                        >
                          <div
                            className={`flex h-6 w-6 items-center justify-center rounded-full lg:h-8 lg:w-8 ${
                              event.completed
                                ? "bg-gradient-to-r from-green-500 to-green-600 shadow-lg"
                                : "bg-gray-300"
                            }`}
                          >
                            {event.completed ? (
                              <CheckCircle className="h-3 w-3 text-white lg:h-5 lg:w-5" />
                            ) : (
                              <div className="h-2 w-2 rounded-full bg-white lg:h-3 lg:w-3" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4
                              className={`font-medium text-sm lg:text-base ${
                                event.completed
                                  ? "text-gray-900"
                                  : "text-gray-500"
                              }`}
                            >
                              {event.status}
                            </h4>
                            <p className="mt-1 text-gray-600 text-xs lg:text-sm">
                              {event.location}
                            </p>
                            <p className="mt-1 text-gray-500 text-xs lg:text-sm">
                              {event.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Package Details */}
                <div className="space-y-6">
                  <Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
                    <CardHeader className="rounded-t-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4 lg:p-6">
                      <CardTitle className="text-blue-800 text-lg lg:text-xl">
                        Багцын мэдээлэл
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 p-4 lg:space-y-4 lg:p-6">
                      <div>
                        <Label className="font-medium text-gray-600 text-xs lg:text-sm">
                          Хаанаас
                        </Label>
                        <p className="font-medium text-gray-900 text-sm lg:text-base">
                          {trackingData.packageInfo.from}
                        </p>
                      </div>
                      <div>
                        <Label className="font-medium text-gray-600 text-xs lg:text-sm">
                          Хаашаа
                        </Label>
                        <p className="font-medium text-gray-900 text-sm lg:text-base">
                          {trackingData.packageInfo.to}
                        </p>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label className="font-medium text-gray-600 text-xs lg:text-sm">
                            Жин
                          </Label>
                          <p className="font-medium text-gray-900 text-sm lg:text-base">
                            {trackingData.packageInfo.weight}
                          </p>
                        </div>
                        <div>
                          <Label className="font-medium text-gray-600 text-xs lg:text-sm">
                            Төрөл
                          </Label>
                          <p className="font-medium text-gray-900 text-sm lg:text-base">
                            {trackingData.packageInfo.type}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
                    <CardHeader className="rounded-t-lg bg-gradient-to-r from-green-50 to-emerald-50 p-4 lg:p-6">
                      <CardTitle className="text-green-800 text-lg lg:text-xl">
                        Хүлээн авагчийн мэдээлэл
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 p-4 lg:space-y-4 lg:p-6">
                      <div>
                        <Label className="font-medium text-gray-600 text-xs lg:text-sm">
                          Нэр
                        </Label>
                        <p className="font-medium text-gray-900 text-sm lg:text-base">
                          {trackingData.recipient.name}
                        </p>
                      </div>
                      <div>
                        <Label className="font-medium text-gray-600 text-xs lg:text-sm">
                          Утас
                        </Label>
                        <p className="font-medium text-gray-900 text-sm lg:text-base">
                          {trackingData.recipient.phone}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Live Map Placeholder */}
              <Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
                <CardHeader className="rounded-t-lg bg-gradient-to-r from-indigo-50 to-blue-50 p-4 lg:p-6">
                  <CardTitle className="text-indigo-800 text-lg lg:text-xl">
                    Амьд хяналтын газрын зураг
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 lg:p-6">
                  <div className="flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 lg:h-64">
                    <div className="text-center">
                      <Truck className="mx-auto mb-3 h-12 w-12 text-blue-500 lg:mb-4 lg:h-16 lg:w-16" />
                      <p className="font-medium text-base text-blue-700 lg:text-lg">
                        Амьд GPS хяналтын газрын зураг энд харагдана
                      </p>
                      <p className="mt-2 text-blue-600 text-xs lg:text-sm">
                        Таны багц одоо Баянзүрх дүүрэгт байна
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Actions */}
              <Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
                <CardContent className="p-4 lg:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row lg:gap-4">
                    <Button
                      variant="outline"
                      className="flex-1 border-blue-200 text-blue-700 text-sm hover:bg-blue-50 lg:text-base"
                    >
                      <User className="mr-2 h-4 w-4" />
                      Жолоочтой холбогдох
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-green-200 text-green-700 text-sm hover:bg-green-50 lg:text-base"
                    >
                      Хүргэлтийн заавар шинэчлэх
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1 border-orange-200 text-orange-700 text-sm hover:bg-orange-50 lg:text-base"
                    >
                      Хүргэх цаг өөрчлөх
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Help Section */}
          <Card className="mt-6 border-0 bg-white/90 shadow-xl backdrop-blur-sm lg:mt-8">
            <CardHeader className="rounded-t-lg bg-gradient-to-r from-gray-50 to-slate-50 p-4 lg:p-6">
              <CardTitle className="text-gray-800 text-lg lg:text-xl">
                Тусламж хэрэгтэй юу?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 lg:p-6">
              <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
                <div>
                  <h4 className="mb-3 font-medium text-gray-900 text-sm lg:text-base">
                    Хайх дугаараа олохгүй байна уу?
                  </h4>
                  <p className="mb-4 text-gray-600 text-xs leading-relaxed lg:text-sm">
                    Хүргэлт захиалахдаа таны хайх дугаарыг имэйл болон SMS-ээр
                    илгээсэн. Энэ нь "TGP" үсгээр эхэлж дараа нь тоонууд байна.
                  </p>
                </div>
                <div>
                  <h4 className="mb-3 font-medium text-gray-900 text-sm lg:text-base">
                    Багц хөдөлж байхгүй юу?
                  </h4>
                  <p className="mb-4 text-gray-600 text-xs leading-relaxed lg:text-sm">
                    Заримдаа багц боловсруулахын тулд нэг байршилд удаан байж
                    болно. Хэрэв 24+ цагийн турш шинэчлэгдэхгүй бол бидэнтэй
                    холбогдоно уу.
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row lg:gap-4">
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-700 text-sm hover:bg-blue-50 lg:text-base"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Дэмжлэг: +976 7000-1234
                </Button>
                <Button
                  variant="outline"
                  className="border-green-200 text-green-700 text-sm hover:bg-green-50 lg:text-base"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Имэйл: support@tengerpack.mn
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
