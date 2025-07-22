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
      
      <div className="relative z-10 w-full max-w-lg px-4 animate-fade-in-up">
        <Card className="card-modern shadow-elegant border-0 bg-card/95 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-primary p-6 rounded-3xl shadow-elegant">
                <Truck className="w-12 h-12 text-white" />
              </div>
            </div>
            <CardTitle className="text-4xl font-bold gradient-text mb-3">
              سامانه راننده
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              برای ورود اطلاعات خود را وارد کنید
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-8 px-6 pb-8">
            <form onSubmit={handleLogin} className="space-y-8">
              <div className="space-y-4">
                <Label htmlFor="nationalCode" className="text-lg font-bold flex items-center gap-3 text-foreground">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  کد ملی شما
                </Label>
                <Input
                  id="nationalCode"
                  type="text"
                  placeholder="مثال: 1234567890"
                  value={nationalCode}
                  onChange={(e) => setNationalCode(e.target.value)}
                  className="input-modern h-16 text-right text-xl px-6 border-2"
                  required
                />
              </div>

              <div className="space-y-4">
                <Label htmlFor="smartCard" className="text-lg font-bold flex items-center gap-3 text-foreground">
                  <div className="p-2 bg-primary/10 rounded-xl">
                    <CreditCard className="w-6 h-6 text-primary" />
                  </div>
                  شماره کارت هوشمند
                </Label>
                <Input
                  id="smartCard"
                  type="text"
                  placeholder="مثال: 123456789"
                  value={smartCardNumber}
                  onChange={(e) => setSmartCardNumber(e.target.value)}
                  className="input-modern h-16 text-right text-xl px-6 border-2"
                  required
                />
              </div>

              <Button
                type="submit"
                className="btn-primary w-full h-20 text-2xl font-bold rounded-2xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                    لطفا صبر کنید...
                  </div>
                ) : (
                  'ورود به سامانه'
                )}
              </Button>
            </form>
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