import { Shield, Truck, Palette, Wrench, Star, Clock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "جودة عالية",
    description: "خشب HDF مستورد، حديد 12 مم متين وصوليد",
  },
  {
    icon: Palette,
    title: "طلاء إيبوكسي",
    description: "طلاء مضاد للصدأ يدوم لسنوات طويلة",
  },
  {
    icon: Wrench,
    title: "عجلات ممتازة",
    description: "أفضل جودة متوفرة في السوق، سوداء ومتينة",
  },
  {
    icon: Star,
    title: "تشطيب PVC",
    description: "حواف PVC بالماكينة لمظهر أنيق ومتين",
  },
  {
    icon: Truck,
    title: "توصيل لكل الولايات",
    description: "نوصل لجميع ولايات الوطن بأسعار مناسبة",
  },
  {
    icon: Clock,
    title: "تصميم عملي",
    description: "قابلة للطي لتوفير المساحة عند عدم الاستخدام",
  },
];

const Features = () => {
  return (
    <section id="features" className="section-padding gradient-hero" dir="rtl">
      <div className="container-rtl">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">لماذا نحن؟</span>
          <h2 className="text-3xl md:text-4xl font-cairo font-bold text-foreground mt-2">
            مميزات منتجاتنا
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            نستخدم أفضل المواد الأولية لضمان جودة عالية ومتانة تدوم لسنوات
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-card transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-cairo font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Materials section */}
        <div className="mt-20 bg-card rounded-3xl p-8 md:p-12 shadow-card">
          <h3 className="text-2xl font-cairo font-bold text-foreground mb-8 text-center">
            المواد الأولية المستخدمة
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-xl bg-sky-light/50">
              <p className="text-3xl mb-2">🪵</p>
              <p className="font-bold text-foreground">خشب HDF</p>
              <p className="text-sm text-muted-foreground">مستورد عالي الجودة</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-sky-light/50">
              <p className="text-3xl mb-2">🔩</p>
              <p className="font-bold text-foreground">حديد 12 مم</p>
              <p className="text-sm text-muted-foreground">متين وصوليد</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-sky-light/50">
              <p className="text-3xl mb-2">🎨</p>
              <p className="font-bold text-foreground">طلاء إيبوكسي</p>
              <p className="text-sm text-muted-foreground">مضاد للصدأ</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-sky-light/50">
              <p className="text-3xl mb-2">⚙️</p>
              <p className="font-bold text-foreground">عجلات سوداء</p>
              <p className="text-sm text-muted-foreground">أفضل جودة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
