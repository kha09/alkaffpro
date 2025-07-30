import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { DollarSign, FileText, Users, TrendingUp, Search, Plus, Download } from "lucide-react"

export default function ArabicDashboard() {
  return (
    <div className="min-h-screen bg-[#f9fafb]" dir="rtl">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-[#111827]">لوحة تحكم الكاف</h1>
          <div className="flex items-center gap-4">
            <Select defaultValue="ar">
              <SelectTrigger className="w-20">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ar">العربية</SelectItem>
                <SelectItem value="en">English</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#4b5563] mb-1">إجمالي الأرباح</p>
                  <p className="text-2xl font-bold text-[#111827]">25,600$</p>
                </div>
                <div className="w-12 h-12 bg-[#f3f4f6] rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-[#4b5563]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#4b5563] mb-1">طلبات قيد المعالجة</p>
                  <p className="text-2xl font-bold text-[#111827]">128</p>
                </div>
                <div className="w-12 h-12 bg-[#f3f4f6] rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-[#4b5563]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#4b5563] mb-1">عدد الشركاء</p>
                  <p className="text-2xl font-bold text-[#111827]">18</p>
                </div>
                <div className="w-12 h-12 bg-[#f3f4f6] rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#4b5563]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#4b5563] mb-1">عدد المنتجات</p>
                  <p className="text-2xl font-bold text-[#111827]">255</p>
                </div>
                <div className="w-12 h-12 bg-[#f3f4f6] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#4b5563]" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Orders Table */}
        <Card className="bg-white mb-8">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-[#111827]">إدارة الطلبات</CardTitle>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 ml-2" />
                  تصدير البيانات
                </Button>
                <Button size="sm" className="bg-[#111827] hover:bg-[#374151]">
                  <Plus className="w-4 h-4 ml-2" />
                  إضافة طلب
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4 mb-4">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#4b5563] w-4 h-4" />
                <Input placeholder="البحث في الطلبات..." className="pr-10" />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="كل الحالات" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">كل الحالات</SelectItem>
                  <SelectItem value="pending">قيد المعالجة</SelectItem>
                  <SelectItem value="completed">مكتمل</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="sm">
                تحديث
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#e5e7eb]">
                    <th className="text-right p-3 text-sm font-medium text-[#4b5563]">إجراءات</th>
                    <th className="text-right p-3 text-sm font-medium text-[#4b5563]">معلومات</th>
                    <th className="text-right p-3 text-sm font-medium text-[#4b5563]">الحالة</th>
                    <th className="text-right p-3 text-sm font-medium text-[#4b5563]">تاريخ الطلب</th>
                    <th className="text-right p-3 text-sm font-medium text-[#4b5563]">المبلغ</th>
                    <th className="text-right p-3 text-sm font-medium text-[#4b5563]">اسم الطالب</th>
                    <th className="text-right p-3 text-sm font-medium text-[#4b5563]">رقم الطلب</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[#f3f4f6]">
                    <td className="p-3">
                      <Button variant="outline" size="sm">
                        عرض
                      </Button>
                    </td>
                    <td className="p-3 text-sm text-[#111827]">مسدد بالكامل</td>
                    <td className="p-3">
                      <Badge variant="secondary" className="bg-[#f3f4f6] text-[#4b5563]">
                        مكتمل
                      </Badge>
                    </td>
                    <td className="p-3 text-sm text-[#4b5563]">2025-03-15</td>
                    <td className="p-3 text-sm text-[#111827]">قيد المعالجة</td>
                    <td className="p-3 text-sm text-[#111827]">صالح ياسين</td>
                    <td className="p-3 text-sm text-[#111827]">#2025-231</td>
                  </tr>
                  <tr className="border-b border-[#f3f4f6]">
                    <td className="p-3">
                      <Button variant="outline" size="sm">
                        عرض
                      </Button>
                    </td>
                    <td className="p-3 text-sm text-[#111827]">بيانات ناقصة</td>
                    <td className="p-3">
                      <Badge variant="secondary" className="bg-[#f3f4f6] text-[#4b5563]">
                        جاري
                      </Badge>
                    </td>
                    <td className="p-3 text-sm text-[#4b5563]">2025-02-28</td>
                    <td className="p-3 text-sm text-[#111827]">جاري</td>
                    <td className="p-3 text-sm text-[#111827]">عبدالله سالم</td>
                    <td className="p-3 text-sm text-[#111827]">#2025-189</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Additional Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Invoices Management */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-[#111827]">إدارة الفواتير والمعاملات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-[#f9fafb] rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-[#111827]">صالح ياسين</p>
                    <p className="text-xs text-[#4b5563]">رقم الفاتورة: INV-2025-0123</p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-[#111827]">1500$</p>
                    <p className="text-xs text-[#4b5563]">2025-03-01</p>
                  </div>
                  <Button variant="outline" size="sm">
                    عرض
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#f9fafb] rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-[#111827]">محمد أحمد</p>
                    <p className="text-xs text-[#4b5563]">رقم الفاتورة: INV-2025-0110</p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-[#111827]">950$</p>
                    <p className="text-xs text-[#4b5563]">2025-02-28</p>
                  </div>
                  <Button variant="outline" size="sm">
                    عرض
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Staff Management */}
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-[#111827]">إدارة الوكلاء</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-[#f9fafb] rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-[#111827]">أحمد محمود</p>
                    <p className="text-xs text-[#4b5563]">مطور</p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-[#111827]">45</p>
                    <p className="text-xs text-[#4b5563]">عدد المعاملات</p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-[#111827]">4500$</p>
                    <p className="text-xs text-[#4b5563]">الراتب</p>
                  </div>
                  <Button variant="outline" size="sm">
                    عرض
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 bg-[#f9fafb] rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-[#111827]">مريم سالم</p>
                    <p className="text-xs text-[#4b5563]">مصممة</p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-[#111827]">27</p>
                    <p className="text-xs text-[#4b5563]">عدد المعاملات</p>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-[#111827]">3200$</p>
                    <p className="text-xs text-[#4b5563]">الراتب</p>
                  </div>
                  <Button variant="outline" size="sm">
                    عرض
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="bg-white lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-[#111827]">التقارير والمعاملات</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#4b5563] mb-2">التقرير الشهري - الطلبات</p>
                  <p className="text-xs text-[#4b5563] mb-4">2025</p>
                  <div className="h-32 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
                    <span className="text-[#4b5563] text-sm">رسم بياني الطلبات (شهري)</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-[#4b5563] mb-2">التقرير السنوي - الموظفين</p>
                  <p className="text-xs text-[#4b5563] mb-4">2025</p>
                  <div className="h-32 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
                    <span className="text-[#4b5563] text-sm">رسم بياني الوكلاء (سنوي)</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-[#111827]">الدخل/الأرباح</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-[#4b5563] mb-4">2025</p>
              <div className="h-40 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
                <span className="text-[#4b5563] text-sm">رسم بياني</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
