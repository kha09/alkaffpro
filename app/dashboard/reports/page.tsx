import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, TrendingDown, DollarSign, Users, Package, Download } from "lucide-react"

export default function ReportsPage() {
  return (
    <div className="p-6 space-y-6" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#111827]">التقارير والمعلومات</h1>
          <p className="text-[#4b5563] mt-1">تحليل البيانات والإحصائيات</p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="month">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">هذا الأسبوع</SelectItem>
              <SelectItem value="month">هذا الشهر</SelectItem>
              <SelectItem value="quarter">هذا الربع</SelectItem>
              <SelectItem value="year">هذا العام</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="w-4 h-4 ml-2" />
            تصدير التقرير
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">إجمالي المبيعات</p>
                <p className="text-2xl font-bold text-[#111827]">125,430$</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">+12.5%</span>
                </div>
              </div>
              <DollarSign className="w-8 h-8 text-[#4b5563]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">عدد العملاء</p>
                <p className="text-2xl font-bold text-[#111827]">2,847</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">+8.2%</span>
                </div>
              </div>
              <Users className="w-8 h-8 text-[#4b5563]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">المنتجات المباعة</p>
                <p className="text-2xl font-bold text-[#111827]">15,642</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="w-4 h-4 text-red-600" />
                  <span className="text-sm text-red-600">-2.1%</span>
                </div>
              </div>
              <Package className="w-8 h-8 text-[#4b5563]" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-[#4b5563]">معدل التحويل</p>
                <p className="text-2xl font-bold text-[#111827]">3.2%</p>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600">+0.5%</span>
                </div>
              </div>
              <BarChart3 className="w-8 h-8 text-[#4b5563]" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>المبيعات الشهرية</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <BarChart3 className="w-12 h-12 text-[#4b5563] mx-auto mb-2" />
                <p className="text-[#4b5563]">رسم بياني للمبيعات الشهرية</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>نمو العملاء</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-[#f3f4f6] rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-[#4b5563] mx-auto mb-2" />
                <p className="text-[#4b5563]">رسم بياني لنمو العملاء</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Reports */}
      <Card>
        <CardHeader>
          <CardTitle>التقارير التفصيلية</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="sales" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="sales">تقرير المبيعات</TabsTrigger>
              <TabsTrigger value="customers">تقرير العملاء</TabsTrigger>
              <TabsTrigger value="products">تقرير المنتجات</TabsTrigger>
              <TabsTrigger value="agents">تقرير الوكلاء</TabsTrigger>
            </TabsList>
            <TabsContent value="sales" className="mt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="text-sm text-[#4b5563]">مبيعات اليوم</p>
                    <p className="text-xl font-bold text-[#111827]">8,450$</p>
                  </div>
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="text-sm text-[#4b5563]">مبيعات الأسبوع</p>
                    <p className="text-xl font-bold text-[#111827]">52,300$</p>
                  </div>
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="text-sm text-[#4b5563]">مبيعات الشهر</p>
                    <p className="text-xl font-bold text-[#111827]">125,430$</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="customers" className="mt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="text-sm text-[#4b5563]">عملاء جدد اليوم</p>
                    <p className="text-xl font-bold text-[#111827]">23</p>
                  </div>
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="text-sm text-[#4b5563]">عملاء نشطون</p>
                    <p className="text-xl font-bold text-[#111827]">1,847</p>
                  </div>
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="text-sm text-[#4b5563]">إجمالي العملاء</p>
                    <p className="text-xl font-bold text-[#111827]">2,847</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="products" className="mt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="text-sm text-[#4b5563]">منتجات مباعة اليوم</p>
                    <p className="text-xl font-bold text-[#111827]">156</p>
                  </div>
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="text-sm text-[#4b5563]">أكثر المنتجات مبيعاً</p>
                    <p className="text-xl font-bold text-[#111827]">منتج أ</p>
                  </div>
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="text-sm text-[#4b5563]">المخزون المنخفض</p>
                    <p className="text-xl font-bold text-[#111827]">12</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="agents" className="mt-6">
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="text-sm text-[#4b5563]">عدد الوكلاء النشطين</p>
                    <p className="text-xl font-bold text-[#111827]">18</p>
                  </div>
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="text-sm text-[#4b5563]">أفضل وكيل</p>
                    <p className="text-xl font-bold text-[#111827]">أحمد محمود</p>
                  </div>
                  <div className="p-4 bg-[#f9fafb] rounded-lg">
                    <p className="text-sm text-[#4b5563]">إجمالي العمولات</p>
                    <p className="text-xl font-bold text-[#111827]">12,450$</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
