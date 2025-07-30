import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Plus,
  Download,
  Filter,
  Eye,
  Edit,
  Trash2,
  Users,
  DollarSign,
  TrendingUp,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

export default function AgentsPage() {
  return (
    <div className="p-6 space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#111827]">إدارة الوكلاء</h1>
          <p className="text-[#4b5563] mt-1">إدارة الوكلاء والمندوبين</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 ml-2" />
            تصدير
          </Button>
          <Button className="bg-[#111827] hover:bg-[#374151]">
            <Plus className="w-4 h-4 ml-2" />
            وكيل جديد
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">إجمالي الوكلاء</p>
                <p className="text-2xl font-bold text-[#111827]">18</p>
              </div>
              <Users className="w-8 h-8 text-[#4b5563]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">وكلاء نشطون</p>
                <p className="text-2xl font-bold text-[#10b981]">15</p>
              </div>
              <TrendingUp className="w-8 h-8 text-[#10b981]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">إجمالي العمولات</p>
                <p className="text-2xl font-bold text-[#111827]">45,230$</p>
              </div>
              <DollarSign className="w-8 h-8 text-[#4b5563]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">متوسط الأداء</p>
                <p className="text-2xl font-bold text-[#111827]">87%</p>
              </div>
              <TrendingUp className="w-8 h-8 text-[#4b5563]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Agents Grid */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>قائمة الوكلاء</CardTitle>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4b5563] w-4 h-4" />
                <Input placeholder="البحث في الوكلاء..." className="pr-10 w-64" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الوكلاء</SelectItem>
                  <SelectItem value="active">نشط</SelectItem>
                  <SelectItem value="inactive">غير نشط</SelectItem>
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
            {[
              {
                name: "أحمد محمود",
                role: "وكيل أول",
                phone: "+966 50 123 4567",
                email: "ahmed@example.com",
                location: "الرياض",
                sales: "12,450$",
                orders: 45,
                status: "نشط",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                name: "فاطمة علي",
                role: "وكيل مبيعات",
                phone: "+966 55 987 6543",
                email: "fatima@example.com",
                location: "جدة",
                sales: "8,230$",
                orders: 32,
                status: "نشط",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                name: "محمد سالم",
                role: "وكيل إقليمي",
                phone: "+966 56 456 7890",
                email: "mohammed@example.com",
                location: "الدمام",
                sales: "15,680$",
                orders: 58,
                status: "نشط",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                name: "نور الدين",
                role: "وكيل مبيعات",
                phone: "+966 54 321 0987",
                email: "nour@example.com",
                location: "مكة",
                sales: "6,890$",
                orders: 27,
                status: "غير نشط",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                name: "عائشة أحمد",
                role: "وكيل أول",
                phone: "+966 53 789 0123",
                email: "aisha@example.com",
                location: "المدينة",
                sales: "11,340$",
                orders: 41,
                status: "نشط",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                name: "يوسف حسن",
                role: "وكيل مبيعات",
                phone: "+966 52 654 3210",
                email: "youssef@example.com",
                location: "الطائف",
                sales: "9,120$",
                orders: 35,
                status: "نشط",
                avatar: "/placeholder.svg?height=40&width=40",
              },
            ].map((agent, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={agent.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {agent.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-[#111827]">{agent.name}</h3>
                        <p className="text-sm text-[#4b5563]">{agent.role}</p>
                      </div>
                    </div>
                    <Badge
                      className={agent.status === "نشط" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}
                    >
                      {agent.status}
                    </Badge>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#4b5563]">
                      <Phone className="w-4 h-4" />
                      <span>{agent.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#4b5563]">
                      <Mail className="w-4 h-4" />
                      <span>{agent.email}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#4b5563]">
                      <MapPin className="w-4 h-4" />
                      <span>{agent.location}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center p-3 bg-[#f9fafb] rounded-lg">
                      <p className="text-sm text-[#4b5563]">المبيعات</p>
                      <p className="font-semibold text-[#111827]">{agent.sales}</p>
                    </div>
                    <div className="text-center p-3 bg-[#f9fafb] rounded-lg">
                      <p className="text-sm text-[#4b5563]">الطلبات</p>
                      <p className="font-semibold text-[#111827]">{agent.orders}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Eye className="w-4 h-4 ml-2" />
                      عرض
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                      <Trash2 className="w-4 h-4" />
                    </Button>
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
