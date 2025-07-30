import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Search, Plus, Download, Filter, Eye, Edit, Trash2, Package, Clock, CheckCircle, XCircle } from "lucide-react"

export default function OrdersPage() {
  return (
    <div className="p-6 space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#111827]">إدارة الطلبات</h1>
          <p className="text-[#4b5563] mt-1">إدارة جميع الطلبات والمعاملات</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline">
            <Download className="w-4 h-4 ml-2" />
            تصدير
          </Button>
          <Button className="bg-[#111827] hover:bg-[#374151]">
            <Plus className="w-4 h-4 ml-2" />
            طلب جديد
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">إجمالي الطلبات</p>
                <p className="text-2xl font-bold text-[#111827]">1,247</p>
              </div>
              <Package className="w-8 h-8 text-[#4b5563]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">قيد المعالجة</p>
                <p className="text-2xl font-bold text-[#f59e0b]">128</p>
              </div>
              <Clock className="w-8 h-8 text-[#f59e0b]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">مكتملة</p>
                <p className="text-2xl font-bold text-[#10b981]">1,089</p>
              </div>
              <CheckCircle className="w-8 h-8 text-[#10b981]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">ملغية</p>
                <p className="text-2xl font-bold text-[#ef4444]">30</p>
              </div>
              <XCircle className="w-8 h-8 text-[#ef4444]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>قائمة الطلبات</CardTitle>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4b5563] w-4 h-4" />
                <Input placeholder="البحث في الطلبات..." className="pr-10 w-64" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">جميع الحالات</SelectItem>
                  <SelectItem value="pending">قيد المعالجة</SelectItem>
                  <SelectItem value="completed">مكتملة</SelectItem>
                  <SelectItem value="cancelled">ملغية</SelectItem>
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
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e5e7eb]">
                  <th className="text-right p-3 text-sm font-medium text-[#4b5563]">الإجراءات</th>
                  <th className="text-right p-3 text-sm font-medium text-[#4b5563]">الحالة</th>
                  <th className="text-right p-3 text-sm font-medium text-[#4b5563]">المبلغ</th>
                  <th className="text-right p-3 text-sm font-medium text-[#4b5563]">تاريخ الطلب</th>
                  <th className="text-right p-3 text-sm font-medium text-[#4b5563]">العميل</th>
                  <th className="text-right p-3 text-sm font-medium text-[#4b5563]">رقم الطلب</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "#2025-231",
                    client: "صالح ياسين",
                    date: "2025-03-15",
                    amount: "2,500$",
                    status: "مكتمل",
                    statusColor: "bg-green-100 text-green-800",
                  },
                  {
                    id: "#2025-230",
                    client: "فاطمة أحمد",
                    date: "2025-03-14",
                    amount: "1,800$",
                    status: "قيد المعالجة",
                    statusColor: "bg-yellow-100 text-yellow-800",
                  },
                  {
                    id: "#2025-229",
                    client: "محمد علي",
                    date: "2025-03-13",
                    amount: "3,200$",
                    status: "مكتمل",
                    statusColor: "bg-green-100 text-green-800",
                  },
                  {
                    id: "#2025-228",
                    client: "نور الدين",
                    date: "2025-03-12",
                    amount: "950$",
                    status: "ملغي",
                    statusColor: "bg-red-100 text-red-800",
                  },
                  {
                    id: "#2025-227",
                    client: "عائشة سالم",
                    date: "2025-03-11",
                    amount: "4,100$",
                    status: "قيد المعالجة",
                    statusColor: "bg-yellow-100 text-yellow-800",
                  },
                ].map((order) => (
                  <tr key={order.id} className="border-b border-[#f3f4f6] hover:bg-[#f9fafb]">
                    <td className="p-3">
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 bg-transparent">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                    <td className="p-3">
                      <Badge className={order.statusColor}>{order.status}</Badge>
                    </td>
                    <td className="p-3 text-sm font-medium text-[#111827]">{order.amount}</td>
                    <td className="p-3 text-sm text-[#4b5563]">{order.date}</td>
                    <td className="p-3 text-sm text-[#111827]">{order.client}</td>
                    <td className="p-3 text-sm font-medium text-[#111827]">{order.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
