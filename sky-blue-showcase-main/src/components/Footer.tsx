import { Phone, MapPin, Facebook, Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background" dir="rtl">
      <div className="container-rtl py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Mr.Tayeb Logo" 
                className="w-14 h-14 rounded-full object-contain bg-background"
              />
              <div>
                <h3 className="font-cairo font-bold text-xl">Mr.Tayeb</h3>
                <p className="text-sm opacity-70">طاولات التفصيل القابلة للطي</p>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              نقدم أفضل طاولات التفصيل القابلة للطي بجودة عالية ومواد متينة. صناعة جزائرية تضاهي المستورد.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-cairo font-bold text-lg">روابط سريعة</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <a href="#hero" className="hover:opacity-100 transition-opacity">الرئيسية</a>
              </li>
              <li>
                <a href="#products" className="hover:opacity-100 transition-opacity">منتجاتنا</a>
              </li>
              <li>
                <a href="#features" className="hover:opacity-100 transition-opacity">المميزات</a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-opacity">تواصل معنا</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-cairo font-bold text-lg">تواصل معنا</h4>
            <div className="space-y-3 text-sm">
              <a href="tel:0771640848" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="w-4 h-4" />
                <span dir="ltr">0771 64 08 48</span>
              </a>
              <p className="flex items-center gap-2 opacity-70">
                <MapPin className="w-4 h-4" />
                <span>بوقادير، ولاية الشلف</span>
              </p>
              <a
                href="https://www.facebook.com/Mr.Tayeb1infinity/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
              >
                <Facebook className="w-4 h-4" />
                <span>@Mr.Tayeb1infinity</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-8 pt-8 text-center text-sm opacity-60">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} Mr.Tayeb - جميع الحقوق محفوظة
            <Heart className="w-4 h-4 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
