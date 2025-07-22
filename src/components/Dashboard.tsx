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
        <div className="mb-8 animate-slide-up">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="bg-gradient-primary p-6 rounded-3xl shadow-elegant mb-4">
              <User className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-2">
              سلام سیدرضا جمشیدی 👋
            </h1>
            <p className="text-xl text-muted-foreground">
              سلامت تو مهمه... سرعت مجاز یادت نره 🚛
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="h-14 text-lg flex items-center gap-3 border-2"
            >
              <LogOut className="w-6 h-6" />
              خروج از سامانه
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-modern animate-scale-in bg-card/95" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className={`p-6 rounded-2xl bg-primary/10`}>
                    <stat.icon className="w-12 h-12 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg text-muted-foreground mb-2">
                      {stat.title}
                    </p>
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl font-bold text-foreground">
                        {stat.value}
                      </span>
                      {stat.unit && (
                        <span className="text-lg text-muted-foreground">
                          {stat.unit}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Actions */}
        <div className="space-y-6">
          {/* Download Report Button */}
          <Card className="card-modern animate-fade-in-up bg-card/95">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <div className="p-6 bg-primary/10 rounded-2xl">
                    <Download className="w-12 h-12 text-primary" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  دانلود گزارش
                </h2>
                <p className="text-lg text-muted-foreground">
                  گزارش کامل بارنامه‌ها و مطالبات شما
                </p>
              </div>
              
              <Button
                onClick={handleDownload}
                className="btn-primary w-full h-20 text-2xl font-bold rounded-2xl"
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    در حال آماده سازی...
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <Download className="w-6 h-6" />
                    دانلود گزارش کامل
                  </div>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Status Cards */}
          <div className="space-y-4">
            <Card className="card-modern bg-card/95">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="p-6 bg-green-500/10 rounded-2xl">
                    <FileText className="w-12 h-12 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      بارنامه‌های تایید شده
                    </h3>
                    <p className="text-lg text-muted-foreground mb-2">
                      آخرین بروزرسانی: امروز
                    </p>
                    <div className="text-3xl font-bold text-green-500">
                      18 مورد
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="card-modern bg-card/95">
              <CardContent className="p-8">
                <div className="flex items-center gap-6">
                  <div className="p-6 bg-yellow-500/10 rounded-2xl">
                    <Calendar className="w-12 h-12 text-yellow-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      بارنامه‌های در انتظار
                    </h3>
                    <p className="text-lg text-muted-foreground mb-2">
                      نیاز به بررسی
                    </p>
                    <div className="text-3xl font-bold text-yellow-500">
                      6 مورد
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
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