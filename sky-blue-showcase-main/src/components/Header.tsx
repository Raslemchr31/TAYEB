import { Phone, MapPin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass shadow-soft" dir="rtl">
      {/* Top bar */}
      <div className="bg-primary/10 py-2 hidden md:block">
        <div className="container-rtl flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:0771640848" className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span>0771 64 08 48</span>
            </a>
            <span className="flex items-center gap-2 text-foreground/80">
              <MapPin className="w-4 h-4" />
              <span>بوقادير، ولاية الشلف</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://www.facebook.com/Mr.Tayeb1infinity/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="py-3">
        <div className="container-rtl flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Mr.Tayeb Logo" 
              className="w-14 h-14 rounded-full object-contain shadow-soft"
            />
            <div className="hidden sm:block">
              <h1 className="font-cairo font-bold text-xl text-foreground">Mr.Tayeb</h1>
              <p className="text-xs text-muted-foreground">طاولات التفصيل القابلة للطي</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("hero")} 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              الرئيسية
            </button>
            <button 
              onClick={() => scrollToSection("products")} 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              منتجاتنا
            </button>
            <button 
              onClick={() => scrollToSection("features")} 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              المميزات
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              تواصل معنا
            </button>
          </div>

          <Button 
            onClick={() => scrollToSection("products")}
            className="gradient-primary text-primary-foreground shadow-soft hover:shadow-card transition-all"
          >
            اطلب الآن
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
