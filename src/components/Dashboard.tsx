import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Download, 
  TrendingUp, 
  Calendar, 
  Truck, 
  DollarSign,
  ChevronDown,
  User,
  ArrowLeft,
  LogOut 
} from 'lucide-react';

const Dashboard = () => {
  const [selectedYear, setSelectedYear] = useState('همه سال‌ها');
  const [selectedMonth, setSelectedMonth] = useState('همه ماه‌ها');
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  const stats = [
    {
      title: 'تعداد بارنامه',
      value: '24',
      icon: FileText,
      trend: '+12%',
      color: 'text-primary'
    },
    {
      title: 'مطالبات',
      value: '2,500,000',
      unit: 'تومان',
      icon: DollarSign,
      trend: '+8%',
      color: 'text-green-500'
    },
    {
      title: 'سفرهای ماه',
      value: '18',
      icon: Truck,
      trend: '+5%',
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-background to-accent/3"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 animate-slide-up">
          <div className="flex items-center gap-4">
            <div className="bg-gradient-primary p-3 rounded-xl shadow-elegant">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">
                سلام سیدرضا جمشیدی چطوری؟
              </h1>
              <p className="text-muted-foreground">
                سلامت تو مهمه... سرعت مجاز یادت نره 🚛
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              className="interactive-hover flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              بازگشت
            </Button>
            
            <Button
              variant="ghost"
              className="interactive-hover flex items-center gap-2"
            >
              <LogOut className="w-4 h-4" />
              خروج
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-modern animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold">
                        {stat.value}
                      </span>
                      {stat.unit && (
                        <span className="text-sm text-muted-foreground">
                          {stat.unit}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      <TrendingUp className="w-3 h-3 text-green-500" />
                      <span className="text-xs text-green-500">
                        {stat.trend}
                      </span>
                    </div>
                  </div>
                  <div className={`p-3 rounded-xl bg-accent/10 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Financial Status */}
          <Card className="card-modern lg:col-span-2 animate-fade-in-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                وضعیت بارنامه‌ها
              </CardTitle>
              <CardDescription>
                گزارش کامل بارنامه‌ها و وضعیت مالی
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Filters */}
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="input-modern h-12">
                      <SelectValue placeholder="انتخاب سال" />
                      <ChevronDown className="w-4 h-4 opacity-50" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border border-border rounded-modern">
                      <SelectItem value="همه سال‌ها">همه سال‌ها</SelectItem>
                      <SelectItem value="1403">1403</SelectItem>
                      <SelectItem value="1402">1402</SelectItem>
                      <SelectItem value="1401">1401</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex-1">
                  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger className="input-modern h-12">
                      <SelectValue placeholder="انتخاب ماه" />
                      <ChevronDown className="w-4 h-4 opacity-50" />
                    </SelectTrigger>
                    <SelectContent className="bg-popover border border-border rounded-modern">
                      <SelectItem value="همه ماه‌ها">همه ماه‌ها</SelectItem>
                      <SelectItem value="دی">دی</SelectItem>
                      <SelectItem value="آذر">آذر</SelectItem>
                      <SelectItem value="آبان">آبان</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Status Items */}
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-accent/5 rounded-xl border border-border/50 interactive-hover">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="font-medium">بارنامه‌های تایید شده</p>
                      <p className="text-sm text-muted-foreground">آخرین بروزرسانی: امروز</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-500 border-green-500/20">
                    18 مورد
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-4 bg-accent/5 rounded-xl border border-border/50 interactive-hover">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-blue-500" />
                    <div>
                      <p className="font-medium">بارنامه‌های در انتظار</p>
                      <p className="text-sm text-muted-foreground">نیاز به بررسی</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-yellow-500/10 text-yellow-500 border-yellow-500/20">
                    6 مورد
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions Panel */}
          <Card className="card-modern animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-primary" />
                عملیات
              </CardTitle>
              <CardDescription>
                دانلود گزارش‌ها و مدارک
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={handleDownload}
                className="btn-primary w-full h-12 flex items-center gap-2"
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    در حال دانلود...
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4" />
                    دانلود گزارش کامل
                  </>
                )}
              </Button>

              <div className="space-y-2 pt-4 border-t border-border">
                <h4 className="font-medium text-sm text-muted-foreground">فایل‌های اخیر</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-accent/5 interactive-hover">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">گزارش دی ماه</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 rounded-lg bg-accent/5 interactive-hover">
                    <FileText className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">گزارش آذر ماه</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>نسخه 0.1.0 - تماس با ما - © 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;