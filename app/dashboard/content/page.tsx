"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue 
} from "@/components/ui/select"
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table"
import { 
  PlusCircle,
  Edit3,
  Trash2,
  Save,
  X
} from "lucide-react"

export default function ContentManagementPage() {
  const [language, setLanguage] = useState<"ENGLISH" | "ARABIC">("ENGLISH")
  const [isEditing, setIsEditing] = useState(false)
  const [isAddingSlide, setIsAddingSlide] = useState(false)

  // For demonstration purposes - in a real app, this would come from database
  const [heroContent, setHeroContent] = useState({
    title: "ابدأ رحلتك الجامعية معنا",
    subtitle: "التقديم أصبح أسهل من أي وقت مضى!",
    description: "منصة ذكية تربطك بأفضل الجامعات والتخصصات حول العالم، خطوة بخطوة.",
    image: "/images/students-campus.png",
  })

  const [heroSlides, setHeroSlides] = useState([
    {
      id: 1,
      title: "ابدأ رحلتك الجامعية معنا",
      subtitle: "التقديم أصبح أسهل من أي وقت مضى!",
      description: "منصة ذكية تربطك بأفضل الجامعات والتخصصات حول العالم، خطوة بخطوة.",
      image: "/images/students-campus.png",
      order: 0,
    },
    {
      id: 2,
      title: "ابدأ رحلتك الجامعية معنا",
      subtitle: "التقديم أصبح أسهل من أي وقت مضى!",
      description: "منصة ذكية تربطك بأفضل الجامعات والتخصصات حول العالم، خطوة بخطوة.",
      image: "/images/students-studying.png",
      order: 1,
    }
  ])

  const handleSave = () => {
    // In a real implementation, this would save to database
    setIsEditing(false)
  }

  const handleAddSlide = () => {
    setIsAddingSlide(true)
  }

  const handleSaveSlide = () => {
    // In a real implementation, this would save to database
    setIsAddingSlide(false)
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">إدارة المحتوى</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hero Content Section */}
        <Card>
          <CardHeader>
            <CardTitle>محتوى الشاشة الرئيسية</CardTitle>
            <CardDescription>إدارة محتوى شاشة البداية (Hero Section) باللغتين</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <Label className="mb-2 block">اختر اللغة</Label>
              <Select value={language} onValueChange={(value) => setLanguage(value as "ENGLISH" | "ARABIC")}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر اللغة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ENGLISH">الإنجليزية</SelectItem>
                  <SelectItem value="ARABIC">العربية</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block">العنوان</Label>
                    <Input 
                      defaultValue={heroContent.title} 
                      placeholder="عنوان الشاشة الرئيسية" 
                    />
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">العنوان الفرعي</Label>
                    <Input 
                      defaultValue={heroContent.subtitle} 
                      placeholder="عنوان فرعي الشاشة الرئيسية" 
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block">الوصف</Label>
                    <Textarea 
                      defaultValue={heroContent.description} 
                      placeholder="وصف الشاشة الرئيسية" 
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block">رابط الصورة</Label>
                    <Input 
                      defaultValue={heroContent.image} 
                      placeholder="رابط الصورة" 
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button type="button" className="flex items-center" onClick={handleSave}>
                      <Save className="h-4 w-4 ml-2" />
                      حفظ التغييرات
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                    >
                      <X className="h-4 w-4 ml-2" />
                      إلغاء
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p><span className="font-semibold">العنوان:</span> {heroContent.title}</p>
                    <p><span className="font-semibold">العنوان الفرعي:</span> {heroContent.subtitle}</p>
                    <p><span className="font-semibold">الوصف:</span> {heroContent.description}</p>
                    {heroContent.image && (
                      <p><span className="font-semibold">الصورة:</span> {heroContent.image}</p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      onClick={() => setIsEditing(true)}
                      className="flex items-center"
                    >
                      <Edit3 className="h-4 w-4 ml-2" />
                      تعديل
                    </Button>
                    <Button 
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                    >
                      إلغاء
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Hero Slides Section */}
        <Card>
          <CardHeader>
            <CardTitle>شرائح الشاشة الرئيسية</CardTitle>
            <CardDescription>إدارة شرائح العرض التلقائي للشاشة الرئيسية</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <Label className="mb-2 block">اختر اللغة</Label>
              <Select value={language} onValueChange={(value) => setLanguage(value as "ENGLISH" | "ARABIC")}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="اختر اللغة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ENGLISH">الإنجليزية</SelectItem>
                  <SelectItem value="ARABIC">العربية</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              {isAddingSlide ? (
                <div className="space-y-4">
                  <div>
                    <Label className="mb-2 block">العنوان</Label>
                    <Input 
                      placeholder="عنوان الشريحة" 
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block">العنوان الفرعي</Label>
                    <Input 
                      placeholder="عنوان فرعي الشريحة" 
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block">الوصف</Label>
                    <Textarea 
                      placeholder="وصف الشريحة" 
                    />
                  </div>

                  <div>
                    <Label className="mb-2 block">رابط الصورة</Label>
                    <Input 
                      placeholder="رابط الصورة" 
                    />
                  </div>

                  <div className="flex gap-2">
                    <Button type="button" className="flex items-center" onClick={handleSaveSlide}>
                      <Save className="h-4 w-4 ml-2" />
                      حفظ الشريحة
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => setIsAddingSlide(false)}
                    >
                      <X className="h-4 w-4 ml-2" />
                      إلغاء
                    </Button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">الشرائح المتاحة</h3>
                    <Button 
                      onClick={handleAddSlide}
                      className="flex items-center"
                    >
                      <PlusCircle className="h-4 w-4 ml-2" />
                      إضافة شريحة
                    </Button>
                  </div>

                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>الترتيب</TableHead>
                        <TableHead>العنوان</TableHead>
                        <TableHead>الإجراءات</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {heroSlides.map((slide) => (
                        <TableRow key={slide.id}>
                          <TableCell>{slide.order}</TableCell>
                          <TableCell className="max-w-xs truncate">{slide.title}</TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                              >
                                <Edit3 className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                className="text-red-500"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
