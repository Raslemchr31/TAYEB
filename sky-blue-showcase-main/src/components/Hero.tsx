import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import tableShowcase from "@/assets/products/table-showcase.jpg";

const Hero = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen gradient-hero overflow-hidden pt-32" dir="rtl">
      {/* Decorative elements */}
      <div className="decorative-circle w-96 h-96 -top-48 -right-48" />
      <div className="decorative-circle w-64 h-64 bottom-20 -left-32" />
      
      <div className="container-rtl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>صناعة جزائرية بجودة عالية</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-bold leading-tight text-foreground">
              طاولات التفصيل
              <span className="block text-primary mt-2">القابلة للطي</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              حوّلي مساحتك الصغيرة إلى ورشة خياطة متكاملة مع طاولاتنا العملية والمتينة. 
              تصميم أنيق يناسب البيوت وورشات الخياطة.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToProducts}
                size="lg" 
                className="gradient-primary text-primary-foreground shadow-card hover:shadow-elevated transition-all px-8"
              >
                اطلب الآن
              </Button>
              <Button 
                onClick={scrollToProducts}
                size="lg" 
                variant="outline" 
                className="border-2 border-primary/30 hover:bg-primary/5 px-8"
              >
                اكتشف المنتجات
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
              <div>
                <p className="text-3xl font-cairo font-bold text-primary">+500</p>
                <p className="text-sm text-muted-foreground">عميل راضٍ</p>
              </div>
              <div>
                <p className="text-3xl font-cairo font-bold text-primary">5</p>
                <p className="text-sm text-muted-foreground">موديلات متنوعة</p>
              </div>
              <div>
                <p className="text-3xl font-cairo font-bold text-primary">48</p>
                <p className="text-sm text-muted-foreground">ولاية للتوصيل</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-float hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform rotate-3" />
              <img 
                src={tableShowcase}
                alt="طاولة التفصيل القابلة للطي"
                className="relative rounded-3xl shadow-elevated w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card shadow-card rounded-2xl p-4 animate-pulse-soft">
              <p className="text-sm text-muted-foreground">ابتداءً من</p>
              <p className="text-2xl font-cairo font-bold text-primary">15,000 دج</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToProducts} className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
