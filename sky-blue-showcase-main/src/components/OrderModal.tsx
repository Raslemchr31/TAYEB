import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { algeriaLocations, Wilaya, Commune } from "@/data/algeria-locations";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

// Form submission URL - Replace with your Google Sheets Web App URL
const GOOGLE_SHEETS_URL = "YOUR_GOOGLE_SHEETS_WEB_APP_URL";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    price: number;
  } | null;
}

const OrderModal = ({ isOpen, onClose, product }: OrderModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    color: "",
  });
  const [shipmentOption, setShipmentOption] = useState<"home" | "bureau">("home");
  const [selectedWilaya, setSelectedWilaya] = useState<Wilaya | null>(null);
  const [selectedCommune, setSelectedCommune] = useState<Commune | null>(null);
  const [calculatedPrice, setCalculatedPrice] = useState(0);

  useEffect(() => {
    if (product) {
      const shipmentCost = shipmentOption === "home" ? 2000 : 1800;
      setCalculatedPrice(product.price + shipmentCost);
    }
  }, [product, shipmentOption]);

  if (!isOpen || !product) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            product: product.name,
            price: product.price,
            timestamp: new Date().toISOString(),
          }),
        });
      }

      toast({
        title: "تم إرسال طلبك بنجاح! ✓",
        description: "سنتواصل معك قريباً لتأكيد الطلب",
      });

      // Reset form and close modal
            setFormData({
              name: "",
              phone: "",
              address: "",
              color: "",
            });
            setSelectedWilaya(null);
            setSelectedCommune(null);
            onClose();
          } catch (error) {
            console.error("Error submitting order:", error);
            toast({
              title: "حدث خطأ",
              description: "يرجى المحاولة مرة أخرى",
              variant: "destructive",
            });
          } finally {
            setIsSubmitting(false);
          }
        };
      
        return (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" dir="rtl">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-foreground/60 backdrop-blur-sm"
              onClick={onClose}
            />
      
            {/* Modal */}
            <div className="relative bg-card rounded-3xl shadow-elevated max-w-lg w-full max-h-[90vh] overflow-y-auto animate-scale-in">
              {/* Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between rounded-t-3xl">
                <div>
                  <h2 className="text-xl font-cairo font-bold text-foreground">طلب المنتج</h2>
                  <p className="text-sm text-muted-foreground mt-1">{product.name}</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
      
              {/* Product Summary */}
              <div className="p-6 bg-sky-light/30 border-b border-border">
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-medium">{product.name}</span>
                  <span className="text-primary font-cairo font-bold text-xl">
                    {calculatedPrice.toLocaleString()} دج
                  </span>
                </div>
              </div>
      
              {/* Form */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                {/* Shipment Options */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    طريقة الشحن *
                  </label>
                  <RadioGroup
                    defaultValue="home"
                    name="shipmentOption"
                    onValueChange={(value: "home" | "bureau") => setShipmentOption(value)}
                    className="flex gap-4"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="home" id="shipment-home" />
                      <Label htmlFor="shipment-home">توصيل للمنزل (2000 دج)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="bureau" id="shipment-bureau" />
                      <Label htmlFor="shipment-bureau">استلام من المكتب (1800 دج)</Label>
                    </div>
                  </RadioGroup>
                </div>
      
                <div>
                  <label htmlFor="order-name" className="block text-sm font-medium text-foreground mb-2">
                    الاسم الكامل *
                  </label>
                  <Input
                    id="order-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="أدخل اسمك الكامل"
                    required
                    className="bg-background"
                  />
                </div>
      
                <div>
                  <label htmlFor="order-phone" className="block text-sm font-medium text-foreground mb-2">
                    رقم الهاتف *
                  </label>
                  <Input
                    id="order-phone"
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
      
                {/* Wilaya Selector */}
                <div>
                  <label htmlFor="order-wilaya" className="block text-sm font-medium text-foreground mb-2">
                    الولاية *
                  </label>
                  <select
                    id="order-wilaya"
                    name="wilaya"
                    value={selectedWilaya?.id || ""}
                    onChange={(e) => {
                      const wilayaId = parseInt(e.target.value);
                      const wilaya = algeriaLocations.find((w) => w.id === wilayaId) || null;
                      setSelectedWilaya(wilaya);
                      setSelectedCommune(null); // Reset commune when wilaya changes
                    }}
                    required
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">اختر الولاية</option>
                    {algeriaLocations.map((wilaya) => (
                      <option key={wilaya.id} value={wilaya.id}>
                        {wilaya.name}
                      </option>
                    ))}
                  </select>
                </div>
      
                {/* Commune Selector */}
                <div>
                  <label htmlFor="order-commune" className="block text-sm font-medium text-foreground mb-2">
                    البلدية *
                  </label>
                  <select
                    id="order-commune"
                    name="commune"
                    value={selectedCommune?.name || ""}
                    onChange={(e) => {
                      const communeName = e.target.value;
                      const commune = selectedWilaya?.communes.find((c) => c.name === communeName) || null;
                      setSelectedCommune(commune);
                    }}
                    disabled={!selectedWilaya}
                    required
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">اختر البلدية</option>
                    {selectedWilaya?.communes.map((commune) => (
                      <option key={commune.name} value={commune.name}>
                        {commune.name}
                      </option>
                    ))}
                  </select>
                </div>
      
                <div>
                  <label htmlFor="order-address" className="block text-sm font-medium text-foreground mb-2">
                    العنوان الكامل (اختياري)
                  </label>
                  <Input
                    id="order-address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="الحي، الشارع، رقم المنزل..."
                    className="bg-background"
                  />
                </div>
      
                <div>
                  <label htmlFor="order-color" className="block text-sm font-medium text-foreground mb-2">
                    اللون المطلوب
                  </label>
                  <select
                    id="order-color"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">اختر اللون</option>
                    <option value="أبيض">أبيض</option>
                    <option value="ماروني">ماروني</option>
                    <option value="بيج">بيج</option>
                    <option value="ماروني/أبيض">ماروني/أبيض</option>
                    <option value="بيج/أبيض">بيج/أبيض</option>
                  </select>
                </div>
      
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary text-primary-foreground shadow-soft hover:shadow-card transition-all gap-2 h-12 text-base"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "جاري الإرسال..." : "تأكيد الطلب"}
                </Button>
      
                <p className="text-xs text-muted-foreground text-center">
                  سنتواصل معك لتأكيد الطلب وتحديد موعد التوصيل
                </p>
              </form>
            </div>
          </div>
        );
      };
      
      export default OrderModal;
      
