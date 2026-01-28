import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <Features />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
