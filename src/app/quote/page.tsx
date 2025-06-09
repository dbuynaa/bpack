"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
	ArrowLeft,
	Calculator,
	CheckCircle,
	Clock,
	MapPin,
	Package,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function GetQuote() {
	const [quote, setQuote] = useState(null);
	const [formData, setFormData] = useState({
		fromCity: "",
		toCity: "",
		weight: "",
		deliveryType: "next-day",
		packageType: "standard",
	});

	const calculateQuote = () => {
		// Simple quote calculation logic
		let basePrice = 8000; // Base price in MNT

		// Distance multiplier
		if (formData.fromCity !== formData.toCity) {
			if (formData.toCity === "other" || formData.fromCity === "other") {
				basePrice += 15000; // Inter-aimag delivery
			} else {
				basePrice += 5000; // Inter-city delivery
			}
		}

		// Weight multiplier
		const weight = Number.parseFloat(formData.weight) || 1;
		if (weight > 5) {
			basePrice += (weight - 5) * 2000;
		}

		// Delivery type multiplier
		switch (formData.deliveryType) {
			case "same-day":
				basePrice += 7000;
				break;
			case "scheduled":
				basePrice += 2000;
				break;
		}

		// Package type multiplier
		switch (formData.packageType) {
			case "fragile":
				basePrice += 5000;
				break;
			case "medical":
				basePrice += 8000;
				break;
		}

		setQuote({
			basePrice: 8000,
			additionalFees: basePrice - 8000,
			totalPrice: basePrice,
			estimatedTime:
				formData.deliveryType === "same-day"
					? "2-4 цаг"
					: formData.deliveryType === "next-day"
						? "Маргааш"
						: "Товлосон цаг",
		});
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
								Үнэ авах
							</h1>
						</div>
					</div>
				</div>
			</div>

			<div className="container mx-auto px-4 py-6 lg:py-8">
				<div className="mx-auto max-w-6xl">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
						{/* Quote Form */}
						<div className="space-y-6">
							<Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
								<CardHeader className="rounded-t-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4 lg:p-6">
									<CardTitle className="flex items-center space-x-2 text-blue-800 text-lg lg:text-xl">
										<div className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-600 lg:h-8 lg:w-8">
											<MapPin className="h-3 w-3 text-white lg:h-4 lg:w-4" />
										</div>
										<span>Хүргэлтийн байршил</span>
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-4 p-4 lg:p-6">
									<div>
										<Label
											htmlFor="from-city"
											className="font-medium text-gray-700 text-sm lg:text-base"
										>
											Гарал (Авах байршил)
										</Label>
										<Select
											value={formData.fromCity}
											onValueChange={(value) =>
												setFormData({ ...formData, fromCity: value })
											}
										>
											<SelectTrigger className="mt-1 border-gray-200 focus:border-blue-500">
												<SelectValue placeholder="Авах хотыг сонгох" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="ulaanbaatar">Улаанбаатар</SelectItem>
												<SelectItem value="darkhan">Дархан</SelectItem>
												<SelectItem value="erdenet">Эрдэнэт</SelectItem>
												<SelectItem value="choibalsan">Чойбалсан</SelectItem>
												<SelectItem value="murun">Мөрөн</SelectItem>
												<SelectItem value="other">Бусад аймаг</SelectItem>
											</SelectContent>
										</Select>
									</div>
									<div>
										<Label
											htmlFor="to-city"
											className="font-medium text-gray-700 text-sm lg:text-base"
										>
											Очих (Хүргэх байршил)
										</Label>
										<Select
											value={formData.toCity}
											onValueChange={(value) =>
												setFormData({ ...formData, toCity: value })
											}
										>
											<SelectTrigger className="mt-1 border-gray-200 focus:border-blue-500">
												<SelectValue placeholder="Хүргэх хотыг сонгох" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="ulaanbaatar">Улаанбаатар</SelectItem>
												<SelectItem value="darkhan">Дархан</SelectItem>
												<SelectItem value="erdenet">Эрдэнэт</SelectItem>
												<SelectItem value="choibalsan">Чойбалсан</SelectItem>
												<SelectItem value="murun">Мөрөн</SelectItem>
												<SelectItem value="other">Бусад аймаг</SelectItem>
											</SelectContent>
										</Select>
									</div>
								</CardContent>
							</Card>

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
										<Label
											htmlFor="weight"
											className="font-medium text-gray-700 text-sm lg:text-base"
										>
											Багцын жин (кг)
										</Label>
										<Input
											id="weight"
											type="number"
											placeholder="1.0"
											value={formData.weight}
											onChange={(e) =>
												setFormData({ ...formData, weight: e.target.value })
											}
											className="mt-1 border-gray-200 focus:border-purple-500"
										/>
									</div>
									<div>
										<Label className="font-medium text-gray-700 text-sm lg:text-base">
											Багцын төрөл
										</Label>
										<RadioGroup
											value={formData.packageType}
											onValueChange={(value) =>
												setFormData({ ...formData, packageType: value })
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
								</CardContent>
							</Card>

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
											Хүргэлтийн хурд
										</Label>
										<RadioGroup
											value={formData.deliveryType}
											onValueChange={(value) =>
												setFormData({ ...formData, deliveryType: value })
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
								</CardContent>
							</Card>

							<Button
								onClick={calculateQuote}
								className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-base shadow-lg hover:from-blue-700 hover:to-indigo-700 lg:py-6 lg:text-lg"
							>
								<Calculator className="mr-2 h-4 w-4 lg:h-5 lg:w-5" />
								Үнэ тооцох
							</Button>
						</div>

						{/* Quote Results */}
						<div className="space-y-6">
							{quote ? (
								<>
									<Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
										<CardHeader className="rounded-t-lg bg-gradient-to-r from-green-600 to-emerald-600 p-4 text-white lg:p-6">
											<CardTitle className="flex items-center space-x-2 text-lg lg:text-xl">
												<CheckCircle className="h-5 w-5" />
												<span>Таны үнэ</span>
											</CardTitle>
										</CardHeader>
										<CardContent className="space-y-6 p-4 lg:p-6">
											<div className="space-y-3">
												<div className="flex items-center justify-between">
													<span className="text-gray-600 text-sm lg:text-base">
														Хүргэлтийн үндсэн төлбөр
													</span>
													<span className="font-medium text-sm lg:text-base">
														₮{quote.basePrice.toLocaleString()}
													</span>
												</div>
												{quote.additionalFees > 0 && (
													<div className="flex items-center justify-between">
														<span className="text-gray-600 text-sm lg:text-base">
															Нэмэлт төлбөр
														</span>
														<span className="font-medium text-blue-600 text-sm lg:text-base">
															₮{quote.additionalFees.toLocaleString()}
														</span>
													</div>
												)}
												<div className="border-t pt-3">
													<div className="flex items-center justify-between font-bold text-lg lg:text-xl">
														<span>Нийт төсөвт өртөг</span>
														<span className="text-green-600">
															₮{quote.totalPrice.toLocaleString()}
														</span>
													</div>
												</div>
											</div>
											<div className="rounded-lg bg-blue-50 p-3 lg:p-4">
												<h4 className="mb-2 font-medium text-blue-900 text-sm lg:text-base">
													Хүргэлтийн тооцоолсон хугацаа
												</h4>
												<p className="font-medium text-base text-blue-700 lg:text-lg">
													{quote.estimatedTime}
												</p>
											</div>
										</CardContent>
									</Card>

									<Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
										<CardHeader className="rounded-t-lg bg-gradient-to-r from-indigo-50 to-blue-50 p-4 lg:p-6">
											<CardTitle className="text-indigo-800 text-lg lg:text-xl">
												Захиалга хийхэд бэлэн үү?
											</CardTitle>
										</CardHeader>
										<CardContent className="space-y-6 p-4 lg:p-6">
											<p className="text-gray-600 text-sm leading-relaxed lg:text-base">
												Энэхүү үнийн санал 24 цагийн дотор хүчинтэй. Энэ үнийг
												баталгаажуулахын тулд одоо захиалаарай.
											</p>
											<div className="space-y-3">
												<Link href="/book">
													<Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 py-4 text-base shadow-lg hover:from-blue-700 hover:to-indigo-700 lg:py-6 lg:text-lg">
														Энэ хүргэлтийг захиалах
													</Button>
												</Link>
												<Button
													variant="outline"
													className="w-full border-blue-200 py-3 text-blue-700 text-sm hover:bg-blue-50 lg:text-base"
												>
													Үнийн санал хадгалах (PDF)
												</Button>
											</div>
										</CardContent>
									</Card>
								</>
							) : (
								<>
									<Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
										<CardHeader className="rounded-t-lg bg-gradient-to-r from-gray-50 to-slate-50 p-4 lg:p-6">
											<CardTitle className="text-gray-800 text-lg lg:text-xl">
												Үнийн мэдээлэл
											</CardTitle>
										</CardHeader>
										<CardContent className="space-y-6 p-4 lg:p-6">
											<div className="space-y-4">
												<div>
													<h4 className="mb-2 font-medium text-gray-900 text-sm lg:text-base">
														Үндсэн үнэ
													</h4>
													<ul className="space-y-2 text-gray-600 text-xs lg:text-sm">
														<li className="flex justify-between">
															<span>• Улаанбаатар хотод:</span>
															<span className="font-medium">₮8,000</span>
														</li>
														<li className="flex justify-between">
															<span>• Хот хоорондын хүргэлт:</span>
															<span className="font-medium">₮13,000</span>
														</li>
														<li className="flex justify-between">
															<span>• Аймаг хоорондын хүргэлт:</span>
															<span className="font-medium">₮23,000</span>
														</li>
													</ul>
												</div>
												<div>
													<h4 className="mb-2 font-medium text-gray-900 text-sm lg:text-base">
														Нэмэлт үйлчилгээ
													</h4>
													<ul className="space-y-2 text-gray-600 text-xs lg:text-sm">
														<li className="flex justify-between">
															<span>• Өнөөдөр хүргэх:</span>
															<span className="font-medium text-blue-600">
																+₮7,000
															</span>
														</li>
														<li className="flex justify-between">
															<span>• Эмзэг зүйлс:</span>
															<span className="font-medium text-blue-600">
																+₮5,000
															</span>
														</li>
														<li className="flex justify-between">
															<span>• Эмнэлгийн хэрэгсэл:</span>
															<span className="font-medium text-blue-600">
																+₮8,000
															</span>
														</li>
														<li className="flex justify-between">
															<span>• Гарын үсэг зурах:</span>
															<span className="font-medium text-blue-600">
																+₮2,000
															</span>
														</li>
													</ul>
												</div>
												<div>
													<h4 className="mb-2 font-medium text-gray-900 text-sm lg:text-base">
														Жингийн нэмэгдэл
													</h4>
													<p className="text-gray-600 text-xs lg:text-sm">
														5 кг-аас дээш багц: +₮2,000 кг тутамд
													</p>
												</div>
											</div>
										</CardContent>
									</Card>

									<Card className="border-0 bg-white/90 shadow-xl backdrop-blur-sm">
										<CardHeader className="rounded-t-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-4 lg:p-6">
											<CardTitle className="text-blue-800 text-lg lg:text-xl">
												Яагаад TengerPack-г сонгох хэрэгтэй вэ?
											</CardTitle>
										</CardHeader>
										<CardContent className="p-4 lg:p-6">
											<ul className="space-y-3">
												{[
													"Бодит цагийн GPS хяналт",
													"Бүх хүргэлтэд даатгал орсон",
													"Орон нутгийн мэдлэгтэй мэргэжлийн жолооч нар",
													"24/7 харилцагчийн дэмжлэг",
													"Гэрэл зураг бүхий хүргэлтийн баталгаа",
												].map((feature, index) => (
													<li
														key={index}
														className="flex items-center space-x-3"
													>
														<div className="h-2 w-2 rounded-full bg-blue-600" />
														<span className="text-gray-700 text-sm lg:text-base">
															{feature}
														</span>
													</li>
												))}
											</ul>
										</CardContent>
									</Card>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
