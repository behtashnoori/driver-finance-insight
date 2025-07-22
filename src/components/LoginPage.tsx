import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Truck, User, CreditCard, ArrowLeft, LogOut } from 'lucide-react';

const LoginPage = () => {
  const [nationalCode, setNationalCode] = useState('');
  const [smartCardNumber, setSmartCardNumber] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle login logic here
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
      
      {/* Floating geometric shapes for visual interest */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="relative z-10 w-full max-w-md animate-fade-in-up">
        <Card className="card-modern shadow-elegant border-0">
          <CardHeader className="text-center pb-8">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-primary p-4 rounded-full shadow-elegant">
                <Truck className="w-8 h-8 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold gradient-text mb-2">
              سامانه راننده
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              وارد حساب کاربری خود شوید
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nationalCode" className="text-sm font-medium flex items-center gap-2">
                  <User className="w-4 h-4" />
                  کد ملی
                </Label>
                <Input
                  id="nationalCode"
                  type="text"
                  placeholder="کد ملی خود را وارد کنید"
                  value={nationalCode}
                  onChange={(e) => setNationalCode(e.target.value)}
                  className="input-modern h-12 text-right"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="smartCard" className="text-sm font-medium flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  شماره هوشمند
                </Label>
                <Input
                  id="smartCard"
                  type="text"
                  placeholder="شماره کارت هوشمند"
                  value={smartCardNumber}
                  onChange={(e) => setSmartCardNumber(e.target.value)}
                  className="input-modern h-12 text-right"
                  required
                />
              </div>

              <Button
                type="submit"
                className="btn-primary w-full h-12 text-lg font-medium"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    در حال ورود...
                  </div>
                ) : (
                  'ورود'
                )}
              </Button>
            </form>

            <div className="flex justify-between pt-4 border-t border-border">
              <Button
                variant="ghost"
                className="interactive-hover flex items-center gap-2 text-muted-foreground"
              >
                <ArrowLeft className="w-4 h-4" />
                بازگشت
              </Button>
              
              <Button
                variant="ghost"
                className="interactive-hover flex items-center gap-2 text-muted-foreground"
              >
                <LogOut className="w-4 h-4" />
                خروج
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-6 text-sm text-muted-foreground">
          <p>نسخه 0.1.0 - © 2025 تماس با ما</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;