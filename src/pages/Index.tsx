import React, { useState } from 'react';
import LoginPage from '@/components/LoginPage';
import Dashboard from '@/components/Dashboard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Eye, Monitor } from 'lucide-react';

const Index = () => {
  const [currentView, setCurrentView] = useState<'demo' | 'login' | 'dashboard'>('demo');

  if (currentView === 'login') {
    return <LoginPage />;
  }

  if (currentView === 'dashboard') {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 w-full max-w-4xl animate-fade-in-up">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-primary p-4 rounded-full shadow-elegant">
              <Monitor className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold gradient-text mb-4">
            سامانه مدیریت راننده
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            رابط کاربری مدرن و مینیمال برای مدیریت وضعیت مالی و اسنادی رانندگان
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="card-modern animate-scale-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5 text-primary" />
                نمایش صفحه ورود
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                صفحه ورود با طراحی مدرن، انیمیشن‌های نرم و المان‌های تعاملی
              </p>
              <Button
                onClick={() => setCurrentView('login')}
                className="btn-primary w-full flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                مشاهده صفحه ورود
              </Button>
            </CardContent>
          </Card>

          <Card className="card-modern animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Monitor className="w-5 h-5 text-primary" />
                نمایش داشبورد
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                داشبورد کامل با نمایش آمار، فیلترها و قابلیت دانلود گزارش
              </p>
              <Button
                onClick={() => setCurrentView('dashboard')}
                className="btn-primary w-full flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                مشاهده داشبورد
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Features */}
        <Card className="card-modern animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <CardHeader>
            <CardTitle className="text-center">ویژگی‌های طراحی</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">✨</span>
                </div>
                <h3 className="font-semibold">طراحی مینیمال</h3>
                <p className="text-sm text-muted-foreground">
                  رابط کاربری تمیز و مدرن با تمرکز بر تجربه کاربری
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">🎯</span>
                </div>
                <h3 className="font-semibold">المان‌های تعاملی</h3>
                <p className="text-sm text-muted-foreground">
                  افکت‌های hover و انیمیشن‌های نرم برای بهبود تعامل
                </p>
              </div>
              
              <div className="space-y-2">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">📱</span>
                </div>
                <h3 className="font-semibold">ریسپانسیو</h3>
                <p className="text-sm text-muted-foreground">
                  سازگار با تمام اندازه صفحه‌ها و دستگاه‌ها
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-8 text-sm text-muted-foreground">
          <p>ساخته شده با تکنولوژی‌های مدرن - React, TypeScript, Tailwind CSS</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
