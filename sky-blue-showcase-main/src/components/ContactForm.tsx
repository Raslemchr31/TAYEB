import { useState } from "react";
import { Send, Phone, MapPin, Clock, Facebook, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

// Form submission URL - Replace with your Google Sheets Web App URL
const GOOGLE_SHEETS_URL = "YOUR_GOOGLE_SHEETS_WEB_APP_URL";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    wilaya: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // If Google Sheets URL is configured, submit to it
      if (GOOGLE_SHEETS_URL !== "YOUR_GOOGLE_SHEETS_WEB_APP_URL") {
        await fetch(GOOGLE_SHEETS_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            type: "استفسار",
            timestamp: new Date().toISOString(),
          }),
        });
      }

      toast({
        title: "تم إرسال رسالتك بنجاح! ✓",
        description: "سنتواصل معك في أقرب وقت ممكن",
      });

      // Reset form
      setFormData({
        name: "",
        phone: "",
        wilaya: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى أو التواصل عبر الواتساب",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const message = "مرحباً، أريد الاستفسار عن طاولات التفصيل القابلة للطي";
    const whatsappUrl = `https://wa.me/213771640848?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-background" dir="rtl">
      <div className="container-rtl">
        <div className="text-center mb-16">
          <span className="text-primary font-medium">تواصل معنا</span>
          <h2 className="text-3xl md:text-4xl font-cairo font-bold text-foreground mt-2">
            لديك استفسار؟
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            للطلب اضغط على "اطلب الآن" في المنتج المطلوب، أو أرسل لنا رسالة للاستفسار
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-card rounded-3xl p-8 shadow-card">
            <h3 className="text-xl font-cairo font-bold text-foreground mb-6">أرسل لنا رسالة</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    الاسم *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك"
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    رقم الهاتف *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="0771234567"
                    required
                    className="bg-background"
                    dir="ltr"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="wilaya" className="block text-sm font-medium text-foreground mb-2">
                  الولاية
                </label>
                <Input
                  id="wilaya"
                  name="wilaya"
                  value={formData.wilaya}
                  onChange={handleChange}
                  placeholder="مثال: الشلف"
                  className="bg-background"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  رسالتك *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="اكتب استفسارك هنا..."
                  rows={4}
                  required
                  className="bg-background"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 gradient-primary text-primary-foreground shadow-soft hover:shadow-card transition-all gap-2"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "جاري الإرسال..." : "إرسال"}
                </Button>
                <Button
                  type="button"
                  onClick={handleWhatsApp}
                  variant="outline"
                  className="flex-1 border-2 border-primary text-primary hover:bg-primary/5 gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  واتساب
                </Button>
              </div>
            </form>

            {/* Note about Google Sheets */}
            <p className="text-xs text-muted-foreground mt-4 text-center">
              * لربط النموذج مع Google Sheets، قم بتحديث GOOGLE_SHEETS_URL في الكود
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Info cards */}
            <div className="space-y-4">
              <a
                href="tel:0771640848"
                className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">اتصل بنا</p>
                  <p className="text-primary font-cairo text-lg" dir="ltr">0771 64 08 48</p>
                </div>
              </a>

              <div className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">العنوان</p>
                  <p className="text-muted-foreground">بوقادير، ولاية الشلف، الجزائر</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-soft">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">أوقات العمل</p>
                  <p className="text-muted-foreground">السبت - الخميس: 8:00 - 18:00</p>
                </div>
              </div>

              <a
                href="https://www.facebook.com/Mr.Tayeb1infinity/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-soft hover:shadow-card transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Facebook className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">تابعنا على فيسبوك</p>
                  <p className="text-primary">@Mr.Tayeb1infinity</p>
                </div>
              </a>
            </div>

            {/* Google Map */}
            <div className="bg-card rounded-3xl overflow-hidden shadow-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51739.40621440847!2d1.0826!3d36.067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12881f7a0a1b1b1b%3A0x1b1b1b1b1b1b1b1b!2sBoukadir%2C%20Chlef%2C%20Algeria!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="موقعنا على الخريطة"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
