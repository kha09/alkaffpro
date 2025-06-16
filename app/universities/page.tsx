"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Search,
  MapPin,
  GraduationCap,
  Filter,
  RotateCcw,
  ChevronDown,
  Star,
  Globe,
  BookOpen,
  Award,
  Users,
  MessageCircle,
  ArrowRight,
  CheckCircle,
  DollarSign,
  Heart,
  Eye,
  Share2,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const universities = [
  {
    id: 1,
    name: "جامعة الوسائط المتعددة ماليزيا",
    nameEn: "Multimedia University Malaysia (MMU)",
    logo: "/placeholder.svg?height=80&width=80",
    location: "سيلانجور، ماليزيا",
    locationEn: "Selangor, Malaysia",
    country: "ماليزيا",
    flag: "🇲🇾",
    courses: 76,
    ranking: "#15",
    tuitionFee: "15,000",
    currency: "RM",
    freeOfferLetter: true,
    rating: 4.5,
    students: "25,000+",
    established: 1996,
    type: "خاصة",
    specializations: ["تقنية المعلومات", "الهندسة", "إدارة الأعمال", "الفنون الإبداعية"],
    features: ["منح دراسية", "سكن جامعي", "تدريب عملي", "شراكات دولية"],
    color: "from-blue-500 to-cyan-500",
    popular: true,
    featured: true,
  },
  {
    id: 2,
    name: "جامعة UCSI ماليزيا",
    nameEn: "UCSI University Malaysia",
    logo: "/placeholder.svg?height=80&width=80",
    location: "كوالالمبور، ماليزيا",
    locationEn: "Kuala Lumpur, Malaysia",
    country: "ماليزيا",
    flag: "🇲🇾",
    courses: 153,
    ranking: "#12",
    tuitionFee: "18,000",
    currency: "RM",
    freeOfferLetter: true,
    rating: 4.7,
    students: "15,000+",
    established: 1986,
    type: "خاصة",
    specializations: ["الطب", "الهندسة", "الأعمال", "الفنون التطبيقية"],
    features: ["اعتماد دولي", "مختبرات متطورة", "برامج تبادل", "دعم مهني"],
    color: "from-red-500 to-pink-500",
    popular: true,
    featured: false,
  },
  {
    id: 3,
    name: "جامعة تايلور ماليزيا",
    nameEn: "Taylor's University Malaysia",
    logo: "/placeholder.svg?height=80&width=80",
    location: "سيلانجور، ماليزيا",
    locationEn: "Selangor, Malaysia",
    country: "ماليزيا",
    flag: "🇲🇾",
    courses: 89,
    ranking: "#18",
    tuitionFee: "20,000",
    currency: "RM",
    freeOfferLetter: true,
    rating: 4.6,
    students: "12,000+",
    established: 1969,
    type: "خاصة",
    specializations: ["الضيافة", "إدارة الأعمال", "الهندسة", "التصميم"],
    features: ["حرم جامعي حديث", "شراكات صناعية", "برامج مزدوجة", "تطوير مهارات"],
    color: "from-purple-500 to-indigo-500",
    popular: false,
    featured: true,
  },
  {
    id: 4,
    name: "جامعة مالايا",
    nameEn: "University of Malaya (UM)",
    logo: "/placeholder.svg?height=80&width=80",
    location: "كوالالمبور، ماليزيا",
    locationEn: "Kuala Lumpur, Malaysia",
    country: "ماليزيا",
    flag: "🇲🇾",
    courses: 200,
    ranking: "#8",
    tuitionFee: "12,000",
    currency: "RM",
    freeOfferLetter: true,
    rating: 4.8,
    students: "28,000+",
    established: 1905,
    type: "حكومية",
    specializations: ["الطب", "القانون", "الهندسة", "العلوم"],
    features: ["أقدم جامعة", "بحوث متقدمة", "مكتبة ضخمة", "تنوع ثقافي"],
    color: "from-green-500 to-emerald-500",
    popular: true,
    featured: true,
  },
  {
    id: 5,
    name: "جامعة نوتنغهام ماليزيا",
    nameEn: "University of Nottingham Malaysia",
    logo: "/placeholder.svg?height=80&width=80",
    location: "سيلانجور، ماليزيا",
    locationEn: "Selangor, Malaysia",
    country: "ماليزيا",
    flag: "🇲🇾",
    courses: 95,
    ranking: "#10",
    tuitionFee: "25,000",
    currency: "RM",
    freeOfferLetter: true,
    rating: 4.9,
    students: "5,000+",
    established: 2000,
    type: "فرع دولي",
    specializations: ["الهندسة", "الأعمال", "علوم الحاسوب", "الطب"],
    features: ["شهادة بريطانية", "أساتذة دوليون", "بحوث عالمية", "تقنيات حديثة"],
    color: "from-orange-500 to-yellow-500",
    popular: false,
    featured: false,
  },
  {
    id: 6,
    name: "جامعة مونتاش ماليزيا",
    nameEn: "Monash University Malaysia",
    logo: "/placeholder.svg?height=80&width=80",
    location: "سيلانجور، ماليزيا",
    locationEn: "Selangor, Malaysia",
    country: "ماليزيا",
    flag: "🇲🇾",
    courses: 110,
    ranking: "#6",
    tuitionFee: "28,000",
    currency: "RM",
    freeOfferLetter: true,
    rating: 4.8,
    students: "8,000+",
    established: 1998,
    type: "فرع دولي",
    specializations: ["الطب", "الهندسة", "تقنية المعلومات", "الأعمال"],
    features: ["شهادة أسترالية", "بحوث متميزة", "تبادل طلابي", "مرافق عالمية"],
    color: "from-teal-500 to-blue-500",
    popular: true,
    featured: true,
  },
]

const levels = [
  { id: "all", name: "جميع المستويات" },
  { id: "foundation", name: "التأسيسي" },
  { id: "diploma", name: "الدبلوم" },
  { id: "bachelor", name: "البكالوريوس" },
  { id: "master", name: "الماجستير" },
  { id: "phd", name: "الدكتوراه" },
]

const locations = [
  { id: "all", name: "جميع المواقع" },
  { id: "kuala-lumpur", name: "كوالالمبور" },
  { id: "selangor", name: "سيلانجور" },
  { id: "penang", name: "بينانغ" },
  { id: "johor", name: "جوهور" },
  { id: "sabah", name: "صباح" },
]

const offerLetterFees = [
  { id: "all", name: "جميع الأنواع" },
  { id: "free", name: "مجاني" },
  { id: "paid", name: "مدفوع" },
]

const sortOptions = [
  { id: "popular", name: "الأكثر شعبية" },
  { id: "ranking", name: "الترتيب" },
  { id: "tuition-low", name: "الرسوم: من الأقل للأعلى" },
  { id: "tuition-high", name: "الرسوم: من الأعلى للأقل" },
  { id: "courses", name: "عدد التخصصات" },
  { id: "rating", name: "التقييم" },
]

export default function UniversitiesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("all")
  const [selectedLocation, setSelectedLocation] = useState("all")
  const [selectedOfferFee, setSelectedOfferFee] = useState("all")
  const [sortBy, setSortBy] = useState("popular")
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  const [favorites, setFavorites] = useState<number[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  // Filter and sort universities
  const filteredUniversities = universities
    .filter((uni) => {
      const matchesSearch =
        uni.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        uni.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
      const matchesLevel = selectedLevel === "all" // In real app, would filter by available levels
      const matchesLocation =
        selectedLocation === "all" ||
        uni.location.includes(locations.find((l) => l.id === selectedLocation)?.name || "")
      const matchesOfferFee =
        selectedOfferFee === "all" ||
        (selectedOfferFee === "free" && uni.freeOfferLetter) ||
        (selectedOfferFee === "paid" && !uni.freeOfferLetter)

      return matchesSearch && matchesLevel && matchesLocation && matchesOfferFee
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "ranking":
          return Number.parseInt(a.ranking.replace("#", "")) - Number.parseInt(b.ranking.replace("#", ""))
        case "tuition-low":
          return Number.parseInt(a.tuitionFee.replace(",", "")) - Number.parseInt(b.tuitionFee.replace(",", ""))
        case "tuition-high":
          return Number.parseInt(b.tuitionFee.replace(",", "")) - Number.parseInt(a.tuitionFee.replace(",", ""))
        case "courses":
          return b.courses - a.courses
        case "rating":
          return b.rating - a.rating
        case "popular":
        default:
          return (b.popular ? 1 : 0) - (a.popular ? 1 : 0)
      }
    })

  const resetFilters = () => {
    setSearchQuery("")
    setSelectedLevel("all")
    setSelectedLocation("all")
    setSelectedOfferFee("all")
    setSortBy("popular")
  }

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dir-rtl text-right" dir="rtl">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 space-x-reverse">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <Link href="/" className="text-2xl font-bold text-gray-900">
                SM Alkaff
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8 space-x-reverse">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                الرئيسية
              </Link>
              <Link href="/universities" className="text-blue-600 font-medium">
                التخصصات والجامعات
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                من نحن
              </Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
                تواصل معنا
              </Link>
            </nav>

            <div className="flex items-center space-x-4 space-x-reverse">
              <Button variant="outline" className="hidden md:inline-flex">
                تسجيل الدخول
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                ابدأ الآن
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">التخصصات والجامعات</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              اكتشف أفضل الجامعات والتخصصات المناسبة لك من مختلف أنحاء العالم
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row-reverse gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-1/4">
            <div className="sticky top-24">
              {/* Mobile Filter Toggle */}
              <div className="lg:hidden mb-4">
                <Button
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="w-full bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 hover:bg-white"
                >
                  <Filter className="h-5 w-5 ml-2" />
                  البحث والتصفية
                  <ChevronDown className={`h-5 w-5 mr-2 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
                </Button>
              </div>

              {/* Filter Panel */}
              <div className={`${isFilterOpen ? "block" : "hidden"} lg:block`}>
                <Card className="bg-white/80 backdrop-blur-lg border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-900">البحث والتصفية</h3>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={resetFilters}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <RotateCcw className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="space-y-6">
                      {/* Search */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">البحث باسم الجامعة</label>
                        <div className="relative">
                          <input
                            type="text"
                            placeholder="أدخل اسم الجامعة"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-3 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        </div>
                      </div>

                      {/* Level of Interest */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">المستوى الدراسي</label>
                        <select
                          value={selectedLevel}
                          onChange={(e) => setSelectedLevel(e.target.value)}
                          className="w-full bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {levels.map((level) => (
                            <option key={level.id} value={level.id}>
                              {level.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Locations */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">الموقع</label>
                        <select
                          value={selectedLocation}
                          onChange={(e) => setSelectedLocation(e.target.value)}
                          className="w-full bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {locations.map((location) => (
                            <option key={location.id} value={location.id}>
                              {location.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Offer Letter Fee */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">رسوم خطاب القبول</label>
                        <select
                          value={selectedOfferFee}
                          onChange={(e) => setSelectedOfferFee(e.target.value)}
                          className="w-full bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          {offerLetterFees.map((fee) => (
                            <option key={fee.id} value={fee.id}>
                              {fee.name}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Apply Filter Button */}
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                        تطبيق التصفية
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Results Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">الجامعات</h2>
                <p className="text-gray-600">
                  إجمالي الجامعات: <span className="font-semibold text-blue-600">{filteredUniversities.length}</span>
                </p>
              </div>

              <div className="flex items-center space-x-4 space-x-reverse">
                {/* Sort */}
                <div className="flex items-center space-x-2 space-x-reverse">
                  <label className="text-sm text-gray-600">ترتيب حسب:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* View Mode */}
                <div className="flex bg-white/60 backdrop-blur-sm border border-gray-200 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded ${viewMode === "list" ? "bg-blue-600 text-white" : "text-gray-600"}`}
                  >
                    <BookOpen className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded ${viewMode === "grid" ? "bg-blue-600 text-white" : "text-gray-600"}`}
                  >
                    <Globe className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Universities List */}
            <div
              className={`space-y-6 ${viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 gap-6 space-y-0" : ""}`}
            >
              {filteredUniversities.map((university) => (
                <Card
                  key={university.id}
                  className="group bg-white/80 backdrop-blur-lg border-0 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02]"
                >
                  <CardContent className="p-0">
                    <div className={`${viewMode === "grid" ? "block" : "flex flex-row-reverse"} h-full`}>
                      {/* University Logo & Info */}
                      <div className={`${viewMode === "grid" ? "p-6" : "flex items-center p-6 flex-1"}`}>
                        <div
                          className={`${viewMode === "grid" ? "text-center" : "flex items-center space-x-6 w-full space-x-reverse"}`}
                        >
                          {/* Logo */}
                          <div className={`relative ${viewMode === "grid" ? "mb-4" : ""}`}>
                            <div
                              className={`absolute inset-0 bg-gradient-to-r ${university.color} opacity-20 rounded-full blur-xl transform scale-150 group-hover:scale-200 transition-transform duration-500`}
                            ></div>
                            <div className="relative">
                              <Image
                                src={university.logo || "/placeholder.svg"}
                                alt={university.name}
                                width={viewMode === "grid" ? 80 : 60}
                                height={viewMode === "grid" ? 80 : 60}
                                className={`${viewMode === "grid" ? "mx-auto" : ""} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                              />
                              {university.featured && (
                                <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-full p-1">
                                  <Award className="h-3 w-3" />
                                </div>
                              )}
                            </div>
                          </div>

                          {/* University Details */}
                          <div className={`${viewMode === "grid" ? "text-center" : "flex-1 text-right"}`}>
                            <div className="flex items-center justify-between mb-2">
                              <div
                                className={`${viewMode === "grid" ? "mx-auto" : ""} flex items-center space-x-2 space-x-reverse`}
                              >
                                {university.popular && (
                                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                                    شائع
                                  </div>
                                )}
                                <div
                                  className={`bg-gradient-to-r ${university.color} text-white px-2 py-1 rounded-full text-xs font-bold`}
                                >
                                  {university.ranking}
                                </div>
                              </div>
                              <button
                                onClick={() => toggleFavorite(university.id)}
                                className="text-gray-400 hover:text-red-500 transition-colors"
                              >
                                <Heart
                                  className={`h-5 w-5 ${favorites.includes(university.id) ? "fill-red-500 text-red-500" : ""}`}
                                />
                              </button>
                            </div>

                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                              {university.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-3">{university.nameEn}</p>

                            <div className="flex items-center justify-center md:justify-start space-x-2 space-x-reverse mb-3">
                              <MapPin className="h-4 w-4 text-gray-500" />
                              <span className="text-sm text-gray-600">{university.location}</span>
                              <span className="text-lg">{university.flag}</span>
                            </div>

                            {university.freeOfferLetter && (
                              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-3">
                                <CheckCircle className="h-4 w-4 ml-1" />
                                خطاب قبول مجاني
                              </div>
                            )}

                            <div className="flex items-center justify-center md:justify-start space-x-4 space-x-reverse text-sm text-gray-600 mb-4">
                              <div className="flex items-center space-x-1 space-x-reverse">
                                <BookOpen className="h-4 w-4" />
                                <span>{university.courses} تخصص</span>
                              </div>
                              <div className="flex items-center space-x-1 space-x-reverse">
                                <Star className="h-4 w-4 text-yellow-500" />
                                <span>{university.rating}</span>
                              </div>
                              <div className="flex items-center space-x-1 space-x-reverse">
                                <Users className="h-4 w-4" />
                                <span>{university.students}</span>
                              </div>
                            </div>

                            {/* Tuition Fee */}
                            <div className="flex items-center justify-center md:justify-start space-x-2 space-x-reverse mb-4">
                              <DollarSign className="h-4 w-4 text-green-600" />
                              <span className="text-lg font-bold text-green-600">
                                {university.tuitionFee} {university.currency}
                              </span>
                              <span className="text-sm text-gray-500">/ سنوياً</span>
                            </div>

                            {/* Specializations */}
                            <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                              {university.specializations.slice(0, 3).map((spec, index) => (
                                <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                  {spec}
                                </span>
                              ))}
                              {university.specializations.length > 3 && (
                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                                  +{university.specializations.length - 3} المزيد
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div
                        className={`${viewMode === "grid" ? "p-6 pt-0" : "flex flex-col justify-center p-6 space-y-3"} ${viewMode === "list" ? "min-w-[200px]" : ""}`}
                      >
                        <Button
                          size={viewMode === "grid" ? "default" : "sm"}
                          className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white transform hover:scale-105 transition-all duration-200"
                        >
                          قدم الآن
                        </Button>
                        <Button
                          size={viewMode === "grid" ? "default" : "sm"}
                          variant="outline"
                          className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
                        >
                          اسألنا
                        </Button>
                        <div className="flex justify-center space-x-2 space-x-reverse mt-2">
                          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                            <Share2 className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                            <MessageCircle className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredUniversities.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">لم نجد أي نتائج</h3>
                <p className="text-gray-500 mb-8">جرب تعديل معايير البحث أو إعادة تعيين التصفية</p>
                <Button onClick={resetFilters} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  إعادة تعيين التصفية
                </Button>
              </div>
            )}

            {/* Load More */}
            {filteredUniversities.length > 0 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 transform hover:scale-105 transition-all duration-200"
                >
                  عرض المزيد من الجامعات
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">لم تجد ما تبحث عنه؟</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              تواصل مع فريق الخبراء لدينا للحصول على استشارة مجانية ومساعدتك في اختيار الجامعة والتخصص المناسب
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 transform hover:scale-105 transition-all duration-200"
              >
                <MessageCircle className="ml-2 h-5 w-5" />
                تحدث مع خبير
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
              >
                <GraduationCap className="ml-2 h-5 w-5" />
                طلب استشارة مجانية
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
