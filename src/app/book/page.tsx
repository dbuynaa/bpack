"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
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
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  Clock,
  CreditCard,
  MapPin,
  Package,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BookDelivery() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Pickup Information
    pickupName: "",
    pickupPhone: "",
    pickupAddress: "",
    pickupCity: "",
    pickupTime: "",

    // Delivery Information
    deliveryName: "",
    deliveryPhone: "",
    deliveryAddress: "",
    deliveryCity: "",
    deliveryInstructions: "",

    // Package Details
    packageType: "standard",
    weight: "",
    length: "",
    width: "",
    description: "",
    value: "",

    // Delivery Options
    deliveryType: "next-day",
    scheduledDate: "",
    scheduledTime: "",
    signature: false,
    insurance: false,
    sms: true,

    // Payment
    paymentMethod: "card",
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
    postal: "",
  });

  const totalSteps = 5;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const calculateTotal = () => {
    let total = 8000; // Base price

    if (formData.deliveryType === "same-day") total += 7000;
    if (formData.deliveryType === "scheduled") total += 2000;
    if (formData.packageType === "fragile") total += 5000;
    if (formData.packageType === "medical") total += 8000;
    if (formData.signature) total += 2000;
    if (formData.insurance) total += 5000;

    return total;
  };

  const getStepTitle = (step: number) => {
    switch (step) {
      case 1:
        return "Авах мэдээлэл";
      case 2:
        return "Хүргэх мэдээлэл";
      case 3:
        return "Багцын мэдээлэл";
      case 4:
        return "Хүргэлтийн сонголт";
      case 5:
        return "Төлбөр & Баталгаажуулалт";
      default:
        return "";
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
            <CardHeader className="rounded-t-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4 lg:p-6">
              <CardTitle className="flex items-center space-x-2 text-blue-800 text-lg lg:text-xl">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 lg:h-8 lg:w-8">
                  <MapPin className="h-3 w-3 text-white lg:h-4 lg:w-4" />
                </div>
                <span>Авах мэдээлэл</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 lg:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="pickup-name"
                    className="font-medium text-gray-700 text-sm lg:text-base"
                  >
                    Холбоо барих нэр *
                  </Label>
                  <Input
                    id="pickup-name"
                    placeholder="Таны бүтэн нэр"
                    value={formData.pickupName}
                    onChange={(e) =>
                      updateFormData("pickupName", e.target.value)
                    }
                    className="mt-1 border-gray-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="pickup-phone"
                    className="font-medium text-gray-700 text-sm lg:text-base"
                  >
                    Утасны дугаар *
                  </Label>
                  <Input
                    id="pickup-phone"
                    placeholder="+976 XXXX XXXX"
                    value={formData.pickupPhone}
                    onChange={(e) =>
                      updateFormData("pickupPhone", e.target.value)
                    }
                    className="mt-1 border-gray-200 focus:border-blue-500"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="pickup-address"
                  className="font-medium text-gray-700 text-sm lg:text-base"
                >
                  Авах хаяг *
                </Label>
                <Textarea
                  id="pickup-address"
                  placeholder="Дүүрэг, хороо, байшингийн дэлгэрэнгүй хаяг"
                  value={formData.pickupAddress}
                  onChange={(e) =>
                    updateFormData("pickupAddress", e.target.value)
                  }
                  className="mt-1 border-gray-200 focus:border-blue-500"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="pickup-city"
                    className="font-medium text-gray-700 text-sm lg:text-base"
                  >
                    Хот/Аймаг *
                  </Label>
                  <Select
                    value={formData.pickupCity}
                    onValueChange={(value) =>
                      updateFormData("pickupCity", value)
                    }
                  >
                    <SelectTrigger className="mt-1 border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Хот сонгох" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ulaanbaatar">Улаанбаатар</SelectItem>
                      <SelectItem value="darkhan">Дархан</SelectItem>
                      <SelectItem value="erdenet">Эрдэнэт</SelectItem>
                      <SelectItem value="choibalsan">Чойбалсан</SelectItem>
                      <SelectItem value="murun">Мөрөн</SelectItem>
                      <SelectItem value="other">Бусад</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="pickup-time"
                    className="font-medium text-gray-700 text-sm lg:text-base"
                  >
                    Авах цаг
                  </Label>
                  <Select
                    value={formData.pickupTime}
                    onValueChange={(value) =>
                      updateFormData("pickupTime", value)
                    }
                  >
                    <SelectTrigger className="mt-1 border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Цаг сонгох" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">
                        Өглөө (9:00 - 12:00)
                      </SelectItem>
                      <SelectItem value="afternoon">
                        Өдөр (12:00 - 17:00)
                      </SelectItem>
                      <SelectItem value="evening">
                        Орой (17:00 - 20:00)
                      </SelectItem>
                      <SelectItem value="anytime">Ямар ч цагт</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 2:
        return (
          <Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
            <CardHeader className="rounded-t-lg bg-gradient-to-r from-green-50 to-emerald-50 p-4 lg:p-6">
              <CardTitle className="flex items-center space-x-2 text-green-800 text-lg lg:text-xl">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-green-600 lg:h-8 lg:w-8">
                  <MapPin className="h-3 w-3 text-white lg:h-4 lg:w-4" />
                </div>
                <span>Хүргэх мэдээлэл</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 lg:p-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="delivery-name"
                    className="font-medium text-gray-700 text-sm lg:text-base"
                  >
                    Хүлээн авагчийн нэр *
                  </Label>
                  <Input
                    id="delivery-name"
                    placeholder="Хүлээн авагчийн бүтэн нэр"
                    value={formData.deliveryName}
                    onChange={(e) =>
                      updateFormData("deliveryName", e.target.value)
                    }
                    className="mt-1 border-gray-200 focus:border-green-500"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="delivery-phone"
                    className="font-medium text-gray-700 text-sm lg:text-base"
                  >
                    Утасны дугаар *
                  </Label>
                  <Input
                    id="delivery-phone"
                    placeholder="+976 XXXX XXXX"
                    value={formData.deliveryPhone}
                    onChange={(e) =>
                      updateFormData("deliveryPhone", e.target.value)
                    }
                    className="mt-1 border-gray-200 focus:border-green-500"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="delivery-address"
                  className="font-medium text-gray-700 text-sm lg:text-base"
                >
                  Хүргэх хаяг *
                </Label>
                <Textarea
                  id="delivery-address"
                  placeholder="Дүүрэг, хороо, байшингийн дэлгэрэнгүй хаяг"
                  value={formData.deliveryAddress}
                  onChange={(e) =>
                    updateFormData("deliveryAddress", e.target.value)
                  }
                  className="mt-1 border-gray-200 focus:border-green-500"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <Label
                    htmlFor="delivery-city"
                    className="font-medium text-gray-700 text-sm lg:text-base"
                  >
                    Хот/Аймаг *
                  </Label>
                  <Select
                    value={formData.deliveryCity}
                    onValueChange={(value) =>
                      updateFormData("deliveryCity", value)
                    }
                  >
                    <SelectTrigger className="mt-1 border-gray-200 focus:border-green-500">
                      <SelectValue placeholder="Хот сонгох" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ulaanbaatar">Улаанбаатар</SelectItem>
                      <SelectItem value="darkhan">Дархан</SelectItem>
                      <SelectItem value="erdenet">Эрдэнэт</SelectItem>
                      <SelectItem value="choibalsan">Чойбалсан</SelectItem>
                      <SelectItem value="murun">Мөрөн</SelectItem>
                      <SelectItem value="other">Бусад</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="delivery-instructions"
                    className="font-medium text-gray-700 text-sm lg:text-base"
                  >
                    Тусгай заавар
                  </Label>
                  <Input
                    id="delivery-instructions"
                    placeholder="Орцны хаалга, давхар гэх мэт"
                    value={formData.deliveryInstructions}
                    onChange={(e) =>
                      updateFormData("deliveryInstructions", e.target.value)
                    }
                    className="mt-1 border-gray-200 focus:border-green-500"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 3:
        return (
          <Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
            <CardHeader className="rounded-t-lg bg-gradient-to-r from-purple-50 to-violet-50 p-4 lg:p-6">
              <CardTitle className="flex items-center space-x-2 text-lg text-purple-800 lg:text-xl">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-600 lg:h-8 lg:w-8">
                  <Package className="h-3 w-3 text-white lg:h-4 lg:w-4" />
                </div>
                <span>Багцын мэдээлэл</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 lg:p-6">
              <div>
                <Label className="font-medium text-gray-700 text-sm lg:text-base">
                  Багцын төрөл *
                </Label>
                <RadioGroup
                  value={formData.packageType}
                  onValueChange={(value) =>
                    updateFormData("packageType", value)
                  }
                  className="mt-3"
                >
                  <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label
                      htmlFor="standard"
                      className="flex-1 cursor-pointer text-sm lg:text-base"
                    >
                      Стандарт багц
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                    <RadioGroupItem value="fragile" id="fragile" />
                    <Label
                      htmlFor="fragile"
                      className="flex-1 cursor-pointer text-sm lg:text-base"
                    >
                      Эмзэг зүйлс (+₮5,000)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                    <RadioGroupItem value="documents" id="documents" />
                    <Label
                      htmlFor="documents"
                      className="flex-1 cursor-pointer text-sm lg:text-base"
                    >
                      Бичиг баримт
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                    <RadioGroupItem value="medical" id="medical" />
                    <Label
                      htmlFor="medical"
                      className="flex-1 cursor-pointer text-sm lg:text-base"
                    >
                      Эмнэлгийн хэрэгсэл (+₮8,000)
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label
                    htmlFor="weight"
                    className="font-medium text-gray-700 text-sm lg:text-base"
                  >
                    Жин (кг) *
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="0.5"
                    value={formData.weight}
                    onChange={(e) => updateFormData("weight", e.target.value)}
                    className="mt-1 border-gray-200 focus:border-purple-500"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="length"
                    className="font-medium text-gray-700 text-sm lg:text-base"
                  >
                    Урт (см)
                  </Label>
                  <Input
                    id="length"
                    type="number"
                    placeholder="20"
                    value={formData.length}
                    onChange={(e) => updateFormData("length", e.target.value)}
                    className="mt-1 border-gray-200 focus:border-purple-500"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="width"
                    className="font-medium text-gray-700 text-sm lg:text-base"
                  >
                    Өргөн (см)
                  </Label>
                  <Input
                    id="width"
                    type="number"
                    placeholder="15"
                    value={formData.width}
                    onChange={(e) => updateFormData("width", e.target.value)}
                    className="mt-1 border-gray-200 focus:border-purple-500"
                  />
                </div>
              </div>
              <div>
                <Label
                  htmlFor="description"
                  className="font-medium text-gray-700 text-sm lg:text-base"
                >
                  Багцын тайлбар *
                </Label>
                <Textarea
                  id="description"
                  placeholder="Багцын агуулгын товч тайлбар"
                  value={formData.description}
                  onChange={(e) =>
                    updateFormData("description", e.target.value)
                  }
                  className="mt-1 border-gray-200 focus:border-purple-500"
                />
              </div>
              <div>
                <Label
                  htmlFor="value"
                  className="font-medium text-gray-700 text-sm lg:text-base"
                >
                  Зарласан үнэ (₮)
                </Label>
                <Input
                  id="value"
                  type="number"
                  placeholder="50000"
                  value={formData.value}
                  onChange={(e) => updateFormData("value", e.target.value)}
                  className="mt-1 border-gray-200 focus:border-purple-500"
                />
              </div>
            </CardContent>
          </Card>
        );

      case 4:
        return (
          <Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
            <CardHeader className="rounded-t-lg bg-gradient-to-r from-orange-50 to-amber-50 p-4 lg:p-6">
              <CardTitle className="flex items-center space-x-2 text-lg text-orange-800 lg:text-xl">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-600 lg:h-8 lg:w-8">
                  <Clock className="h-3 w-3 text-white lg:h-4 lg:w-4" />
                </div>
                <span>Хүргэлтийн сонголтууд</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-4 lg:p-6">
              <div>
                <Label className="font-medium text-gray-700 text-sm lg:text-base">
                  Хүргэлтийн төрөл *
                </Label>
                <RadioGroup
                  value={formData.deliveryType}
                  onValueChange={(value) =>
                    updateFormData("deliveryType", value)
                  }
                  className="mt-3"
                >
                  <div className="flex items-center space-x-2 rounded-lg border-2 border-blue-200 bg-blue-50 p-3 lg:p-4">
                    <RadioGroupItem value="same-day" id="same-day" />
                    <Label
                      htmlFor="same-day"
                      className="flex-1 cursor-pointer font-medium text-sm lg:text-base"
                    >
                      Өнөөдөр хүргэх (+₮7,000)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 lg:p-4">
                    <RadioGroupItem value="next-day" id="next-day" />
                    <Label
                      htmlFor="next-day"
                      className="flex-1 cursor-pointer text-sm lg:text-base"
                    >
                      Маргааш хүргэх (Стандарт)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 lg:p-4">
                    <RadioGroupItem value="scheduled" id="scheduled" />
                    <Label
                      htmlFor="scheduled"
                      className="flex-1 cursor-pointer text-sm lg:text-base"
                    >
                      Товлосон цагт хүргэх (+₮2,000)
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              {formData.deliveryType === "scheduled" && (
                <div className="grid gap-4 rounded-lg bg-gray-50 p-4 sm:grid-cols-2">
                  <div>
                    <Label
                      htmlFor="scheduled-date"
                      className="font-medium text-gray-700 text-sm lg:text-base"
                    >
                      Хүргэх өдөр *
                    </Label>
                    <Input
                      id="scheduled-date"
                      type="date"
                      value={formData.scheduledDate}
                      onChange={(e) =>
                        updateFormData("scheduledDate", e.target.value)
                      }
                      className="mt-1 border-gray-200 focus:border-orange-500"
                    />
                  </div>
                  <div>
                    <Label
                      htmlFor="scheduled-time"
                      className="font-medium text-gray-700 text-sm lg:text-base"
                    >
                      Хүргэх цаг *
                    </Label>
                    <Select
                      value={formData.scheduledTime}
                      onValueChange={(value) =>
                        updateFormData("scheduledTime", value)
                      }
                    >
                      <SelectTrigger className="mt-1 border-gray-200 focus:border-orange-500">
                        <SelectValue placeholder="Цаг сонгох" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="morning">
                          Өглөө (9:00 - 12:00)
                        </SelectItem>
                        <SelectItem value="afternoon">
                          Өдөр (12:00 - 17:00)
                        </SelectItem>
                        <SelectItem value="evening">
                          Орой (17:00 - 20:00)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                  <Checkbox
                    id="signature"
                    checked={formData.signature}
                    onCheckedChange={(checked) =>
                      updateFormData("signature", checked)
                    }
                  />
                  <Label
                    htmlFor="signature"
                    className="flex-1 cursor-pointer text-sm lg:text-base"
                  >
                    Гарын үсэг зурах шаардлагатай (+₮2,000)
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50">
                  <Checkbox
                    id="insurance"
                    checked={formData.insurance}
                    onCheckedChange={(checked) =>
                      updateFormData("insurance", checked)
                    }
                  />
                  <Label
                    htmlFor="insurance"
                    className="flex-1 cursor-pointer text-sm lg:text-base"
                  >
                    Нэмэлт даатгал (+₮5,000)
                  </Label>
                </div>
                <div className="flex items-center space-x-3 rounded-lg border border-green-200 bg-green-50 p-3">
                  <Checkbox
                    id="sms"
                    checked={formData.sms}
                    onCheckedChange={(checked) =>
                      updateFormData("sms", checked)
                    }
                  />
                  <Label
                    htmlFor="sms"
                    className="flex-1 cursor-pointer text-green-700 text-sm lg:text-base"
                  >
                    SMS мэдэгдэл (Үнэгүй)
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>
        );

      case 5:
        return (
          <div className="space-y-6">
            <Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
              <CardHeader className="rounded-t-lg bg-gradient-to-r from-indigo-50 to-blue-50 p-4 lg:p-6">
                <CardTitle className="flex items-center space-x-2 text-indigo-800 text-lg lg:text-xl">
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-indigo-600 lg:h-8 lg:w-8">
                    <CreditCard className="h-3 w-3 text-white lg:h-4 lg:w-4" />
                  </div>
                  <span>Төлбөрийн мэдээлэл</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 lg:p-6">
                <div>
                  <Label className="font-medium text-gray-700 text-sm lg:text-base">
                    Төлбөрийн арга *
                  </Label>
                  <RadioGroup
                    value={formData.paymentMethod}
                    onValueChange={(value) =>
                      updateFormData("paymentMethod", value)
                    }
                    className="mt-3"
                  >
                    <div className="flex items-center space-x-2 rounded-lg border-2 border-indigo-200 bg-indigo-50 p-3 lg:p-4">
                      <RadioGroupItem value="card" id="card" />
                      <Label
                        htmlFor="card"
                        className="flex-1 cursor-pointer font-medium text-sm lg:text-base"
                      >
                        Кредит/Дебит карт
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 lg:p-4">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label
                        htmlFor="cash"
                        className="flex-1 cursor-pointer text-sm lg:text-base"
                      >
                        Авахдаа бэлнээр
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-lg border border-gray-200 p-3 hover:bg-gray-50 lg:p-4">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label
                        htmlFor="bank"
                        className="flex-1 cursor-pointer text-sm lg:text-base"
                      >
                        Банкны шилжүүлэг
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
                {formData.paymentMethod === "card" && (
                  <div className="space-y-4 rounded-lg bg-gray-50 p-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <Label
                          htmlFor="card-number"
                          className="font-medium text-gray-700 text-sm lg:text-base"
                        >
                          Картын дугаар *
                        </Label>
                        <Input
                          id="card-number"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) =>
                            updateFormData("cardNumber", e.target.value)
                          }
                          className="mt-1 border-gray-200 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="card-name"
                          className="font-medium text-gray-700 text-sm lg:text-base"
                        >
                          Карт эзэмшигчийн нэр *
                        </Label>
                        <Input
                          id="card-name"
                          placeholder="Картан дээрх нэр"
                          value={formData.cardName}
                          onChange={(e) =>
                            updateFormData("cardName", e.target.value)
                          }
                          className="mt-1 border-gray-200 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div>
                        <Label
                          htmlFor="expiry"
                          className="font-medium text-gray-700 text-sm lg:text-base"
                        >
                          Дуусах хугацаа *
                        </Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={(e) =>
                            updateFormData("expiry", e.target.value)
                          }
                          className="mt-1 border-gray-200 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="cvv"
                          className="font-medium text-gray-700 text-sm lg:text-base"
                        >
                          CVV *
                        </Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={(e) =>
                            updateFormData("cvv", e.target.value)
                          }
                          className="mt-1 border-gray-200 focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="postal"
                          className="font-medium text-gray-700 text-sm lg:text-base"
                        >
                          Шуудангийн код
                        </Label>
                        <Input
                          id="postal"
                          placeholder="14200"
                          value={formData.postal}
                          onChange={(e) =>
                            updateFormData("postal", e.target.value)
                          }
                          className="mt-1 border-gray-200 focus:border-indigo-500"
                        />
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Order Summary */}
            <Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
              <CardHeader className="rounded-t-lg bg-gradient-to-r from-green-600 to-emerald-600 p-4 text-white lg:p-6">
                <CardTitle className="flex items-center space-x-2 text-lg lg:text-xl">
                  <CheckCircle className="h-5 w-5" />
                  <span>Захиалгын хураангуй</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-4 lg:p-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Авах:</span>
                    <span className="font-medium">
                      {formData.pickupAddress || "Тодорхойгүй"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Хүргэх:</span>
                    <span className="font-medium">
                      {formData.deliveryAddress || "Тодорхойгүй"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Багцын төрөл:</span>
                    <span className="font-medium">
                      {formData.packageType === "standard" && "Стандарт багц"}
                      {formData.packageType === "fragile" && "Эмзэг зүйлс"}
                      {formData.packageType === "documents" && "Бичиг баримт"}
                      {formData.packageType === "medical" &&
                        "Эмнэлгийн хэрэгсэл"}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Хүргэлтийн төрөл:</span>
                    <span className="font-medium">
                      {formData.deliveryType === "same-day" && "Өнөөдөр хүргэх"}
                      {formData.deliveryType === "next-day" && "Маргааш хүргэх"}
                      {formData.deliveryType === "scheduled" &&
                        "Товлосон цагт хүргэх"}
                    </span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="flex items-center justify-between font-bold text-xl">
                    <span>Нийт дүн:</span>
                    <span className="text-blue-600">
                      ₮{calculateTotal().toLocaleString()}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="border-blue-100 border-b bg-white/95 shadow-sm backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 lg:py-4">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-700 hover:bg-blue-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Нүүр хуудас руу буцах</span>
                <span className="sm:hidden">Буцах</span>
              </Button>
            </Link>
            <div className="flex items-center space-x-3">
              <Image
                src="/images/tengerpack-logo.png"
                alt="TengerPack Logo"
                width={28}
                height={28}
                className="lg:h-8 lg:w-8"
              />
              <h1 className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text font-bold text-lg text-transparent lg:text-2xl">
                Хүргэлт захиалах
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 lg:py-8">
        <div className="mx-auto max-w-4xl">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="font-bold text-gray-900 text-xl lg:text-2xl">
                Алхам {currentStep} / {totalSteps}: {getStepTitle(currentStep)}
              </h2>
              <div className="text-gray-600 text-sm">
                {Math.round((currentStep / totalSteps) * 100)}% дууссан
              </div>
            </div>
            <div className="h-2 w-full rounded-full bg-gray-200">
              <div
                className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
            <div className="mt-2 flex justify-between text-gray-500 text-xs">
              <span>Авах мэдээлэл</span>
              <span>Хүргэх мэдээлэл</span>
              <span>Багцын мэдээлэл</span>
              <span>Хүргэлтийн сонголт</span>
              <span>Төлбөр</span>
            </div>
          </div>

          {/* Step Content */}
          <div className="mb-8">{renderStepContent()}</div>

          {/* Navigation Buttons */}
          <div className="flex flex-col justify-between gap-4 sm:flex-row">
            <Button
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 1}
              className="order-2 border-gray-200 text-gray-700 hover:bg-gray-50 sm:order-1"
            >
              <ChevronLeft className="mr-2 h-4 w-4" />
              Өмнөх алхам
            </Button>

            {currentStep < totalSteps ? (
              <Button
                onClick={nextStep}
                className="order-1 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg hover:from-blue-700 hover:to-indigo-700 sm:order-2"
              >
                Дараах алхам
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button className="order-1 bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg hover:from-green-700 hover:to-emerald-700 sm:order-2">
                Захиалга баталгаажуулах
                <CheckCircle className="ml-2 h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Quick Summary (visible on all steps except last) */}
          {currentStep < totalSteps && (
            <Card className="mt-8 border-0 bg-blue-50/50 shadow-lg backdrop-blur-sm">
              <CardContent className="p-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Тооцоолсон үнэ:</span>
                  <span className="font-bold text-blue-600 text-lg">
                    ₮{calculateTotal().toLocaleString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
