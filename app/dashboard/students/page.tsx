"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import {
  Search,
  Plus,
  Download,
  Filter,
  Eye,
  Edit,
  Trash2,
  Users,
  GraduationCap,
  BookOpen,
  Phone,
  Mail,
  Calendar,
} from "lucide-react"

interface Student {
  id: string
  name: string
  email: string
  phone: string
  studentId: string
  major: string
  status: "تم الدفع" | "لم يكمل الدفع" | "تم رفع البيانات" | "لم يتم رفع البيانات"
  enrollmentDate: string
  avatar?: string
}

export default function StudentsPage() {
  const [students, setStudents] = useState<Student[]>([
    {
      id: "1",
      name: "أحمد محمد علي",
      email: "ahmed.ali@university.edu",
      phone: "+966 50 123 4567",
      studentId: "STU-2023-001",
      major: "علوم الحاسوب",
      status: "تم الدفع",
      enrollmentDate: "2023-09-01",
    },
    {
      id: "2",
      name: "فاطمة أحمد سالم",
      email: "fatima.salem@university.edu",
      phone: "+966 55 987 6543",
      studentId: "STU-2022-045",
      major: "إدارة الأعمال",
      status: "تم رفع البيانات",
      enrollmentDate: "2022-09-01",
    },
    {
      id: "3",
      name: "محمد سالم الأحمد",
      email: "mohammed.ahmed@university.edu",
      phone: "+966 56 456 7890",
      studentId: "STU-2021-089",
      major: "الهندسة المدنية",
      status: "لم يكمل الدفع",
      enrollmentDate: "2021-09-01",
    },
    {
      id: "4",
      name: "نور الدين يوسف",
      email: "nour.youssef@university.edu",
      phone: "+966 54 321 0987",
      studentId: "STU-2024-012",
      major: "الطب",
      status: "لم يتم رفع البيانات",
      enrollmentDate: "2024-09-01",
    },
    {
      id: "5",
      name: "عائشة محمود حسن",
      email: "aisha.hassan@university.edu",
      phone: "+966 53 789 0123",
      studentId: "STU-2023-067",
      major: "الصيدلة",
      status: "تم الدفع",
      enrollmentDate: "2023-09-01",
    },
    {
      id: "6",
      name: "يوسف عبدالله النور",
      email: "youssef.nour@university.edu",
      phone: "+966 52 654 3210",
      studentId: "STU-2022-134",
      major: "القانون",
      status: "تم رفع البيانات",
      enrollmentDate: "2022-09-01",
    },
  ])

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null)
  const [formData, setFormData] = useState<Partial<Student>>({})

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.studentId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || student.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleAddStudent = () => {
    if (formData.name && formData.email && formData.phone && formData.major) {
      const newStudent: Student = {
        id: Date.now().toString(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        studentId: `STU-${new Date().getFullYear()}-${String(students.length + 1).padStart(3, "0")}`,
        major: formData.major,
        status: "لم يكمل الدفع",
        enrollmentDate: new Date().toISOString().split("T")[0],
      }
      setStudents([...students, newStudent])
      setFormData({})
      setIsAddDialogOpen(false)
    }
  }

  const handleEditStudent = () => {
    if (selectedStudent && formData.name && formData.email && formData.phone && formData.major) {
      const updatedStudents = students.map((student) =>
        student.id === selectedStudent.id ? { ...student, ...formData } : student,
      )
      setStudents(updatedStudents)
      setFormData({})
      setSelectedStudent(null)
      setIsEditDialogOpen(false)
    }
  }

  const handleDeleteStudent = (studentId: string) => {
    setStudents(students.filter((student) => student.id !== studentId))
  }

  const openEditDialog = (student: Student) => {
    setSelectedStudent(student)
    setFormData(student)
    setIsEditDialogOpen(true)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "تم الدفع":
        return "bg-green-100 text-green-800"
      case "لم يكمل الدفع":
        return "bg-red-100 text-red-800"
      case "تم رفع البيانات":
        return "bg-blue-100 text-blue-800"
      case "لم يتم رفع البيانات":
        return "bg-yellow-100 text-yellow-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="p-6 space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#111827]">إدارة الطلاب</h1>
          <p className="text-[#4b5563] mt-1">إدارة بيانات الطلاب والمتدربين</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 ml-2" />
            تصدير
          </Button>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-[#111827] hover:bg-[#374151]">
                <Plus className="w-4 h-4 ml-2" />
                طالب جديد
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>إضافة طالب جديد</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">الاسم الكامل</Label>
                  <Input
                    id="name"
                    value={formData.name || ""}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="أدخل الاسم الكامل"
                  />
                </div>
                <div>
                  <Label htmlFor="email">البريد الإلكتروني</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email || ""}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="student@university.edu"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">رقم الهاتف</Label>
                  <Input
                    id="phone"
                    value={formData.phone || ""}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+966 50 123 4567"
                  />
                </div>
                <div>
                  <Label htmlFor="major">التخصص</Label>
                  <Input
                    id="major"
                    value={formData.major || ""}
                    onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                    placeholder="أدخل التخصص"
                  />
                </div>
                <div className="flex gap-2 pt-4">
                  <Button onClick={handleAddStudent} className="flex-1">
                    إضافة الطالب
                  </Button>
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)} className="flex-1">
                    إلغاء
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">إجمالي الطلاب</p>
                <p className="text-2xl font-bold text-[#111827]">{students.length}</p>
              </div>
              <Users className="w-8 h-8 text-[#4b5563]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">تم الدفع</p>
                <p className="text-2xl font-bold text-[#10b981]">
                  {students.filter((s) => s.status === "تم الدفع").length}
                </p>
              </div>
              <GraduationCap className="w-8 h-8 text-[#10b981]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">تم رفع البيانات</p>
                <p className="text-2xl font-bold text-[#3b82f6]">
                  {students.filter((s) => s.status === "تم رفع البيانات").length}
                </p>
              </div>
              <BookOpen className="w-8 h-8 text-[#3b82f6]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">لم يكمل الدفع</p>
                <p className="text-2xl font-bold text-[#ef4444]">
                  {students.filter((s) => s.status === "لم يكمل الدفع").length}
                </p>
              </div>
              <Users className="w-8 h-8 text-[#ef4444]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Students Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>قائمة الطلاب</CardTitle>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4b5563] w-4 h-4" />
                <Input
                  placeholder="البحث في الطلاب..."
                  className="pr-10 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحالات</SelectItem>
                  <SelectItem value="تم الدفع">تم الدفع</SelectItem>
                  <SelectItem value="لم يكمل الدفع">لم يكمل الدفع</SelectItem>
                  <SelectItem value="تم رفع البيانات">تم رفع البيانات</SelectItem>
                  <SelectItem value="لم يتم رفع البيانات">لم يتم رفع البيانات</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 ml-2" />
                فلترة
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStudents.map((student) => (
              <Card key={student.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={student.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {student.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-[#111827]">{student.name}</h3>
                        <p className="text-sm text-[#4b5563]">{student.studentId}</p>
                      </div>
                    </div>
                    <Badge className={getStatusColor(student.status)}>{student.status}</Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#4b5563]">
                      <BookOpen className="w-4 h-4" />
                      <span>{student.major}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#4b5563]">
                      <Phone className="w-4 h-4" />
                      <span>{student.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#4b5563]">
                      <Mail className="w-4 h-4" />
                      <span>{student.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#4b5563]">
                      <Calendar className="w-4 h-4" />
                      <span>{student.enrollmentDate}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Eye className="w-4 h-4 ml-2" />
                      عرض
                    </Button>
                    <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" onClick={() => openEditDialog(student)}>
                          <Edit className="w-4 h-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-md">
                        <DialogHeader>
                          <DialogTitle>تعديل بيانات الطالب</DialogTitle>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="edit-name">الاسم الكامل</Label>
                            <Input
                              id="edit-name"
                              value={formData.name || ""}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="edit-email">البريد الإلكتروني</Label>
                            <Input
                              id="edit-email"
                              type="email"
                              value={formData.email || ""}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="edit-phone">رقم الهاتف</Label>
                            <Input
                              id="edit-phone"
                              value={formData.phone || ""}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="edit-major">التخصص</Label>
                            <Input
                              id="edit-major"
                              value={formData.major || ""}
                              onChange={(e) => setFormData({ ...formData, major: e.target.value })}
                            />
                          </div>
                          <div>
                            <Label htmlFor="edit-status">الحالة</Label>
                            <Select
                              value={formData.status || ""}
                              onValueChange={(value) =>
                                setFormData({ ...formData, status: value as Student["status"] })
                              }
                            >
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="تم الدفع">تم الدفع</SelectItem>
                                <SelectItem value="لم يكمل الدفع">لم يكمل الدفع</SelectItem>
                                <SelectItem value="تم رفع البيانات">تم رفع البيانات</SelectItem>
                                <SelectItem value="لم يتم رفع البيانات">لم يتم رفع البيانات</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="flex gap-2 pt-4">
                            <Button onClick={handleEditStudent} className="flex-1">
                              حفظ التغييرات
                            </Button>
                            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)} className="flex-1">
                              إلغاء
                            </Button>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>تأكيد الحذف</AlertDialogTitle>
                          <AlertDialogDescription>
                            هل أنت متأكد من حذف الطالب "{student.name}"؟ لا يمكن التراجع عن هذا الإجراء.
                          </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>إلغاء</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => handleDeleteStudent(student.id)}
                            className="bg-red-600 hover:bg-red-700"
                          >
                            حذف
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
