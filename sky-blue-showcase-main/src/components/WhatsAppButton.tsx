import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    const message = "مرحباً، أريد الاستفسار عن طاولات التفصيل القابلة للطي";
    const whatsappUrl = `https://wa.me/213771640848?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
      aria-label="تواصل عبر واتساب"
    >
      <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-foreground text-background text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        تواصل معنا عبر واتساب
      </span>
      
      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </button>
  );
};

export default WhatsAppButton;
