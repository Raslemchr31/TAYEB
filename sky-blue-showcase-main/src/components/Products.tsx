import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import OrderModal from "./OrderModal";
import ProductCarouselModal from "./ProductCarouselModal"; // Import the new modal

// Import product images
import newImageIMG20250605081055 from "@/assets/new-products/IMG20250605081053.jpg";
import newImageIMG20250605082953 from "@/assets/new-products/IMG20250605082953.jpg";
import newImage9ca315d9551409a0e941465c6d13f43c8 from "@/assets/new-products/9ca315d9551409a0e941465c6d13f43c_8.jpeg";
import newImage9f8ca1de0fe208549195298fc7f5232b9 from "@/assets/new-products/9f8ca1de0fe208549195298fc7f5232b_9.jpeg";
import newImage91bf153a722aa5b6f3372df7d97e852711 from "@/assets/new-products/91bf153a722aa5b6f3372df7d97e8527_11.jpeg";
import newImageb12813c3a030dac344dff08ae990780e1 from "@/assets/new-products/b12813c3a030dac344dff08ae990780e_1.jpeg";
import newImageIMG20250530215110 from "@/assets/new-products/IMG20250530215110.jpg";
import newImageIMG20250605080254 from "@/assets/new-products/IMG20250605080254.jpg";
import newImageIMG20250605080256 from "@/assets/new-products/IMG20250605080256.jpg";
import newImageIMG20250605080258 from "@/assets/new-products/IMG20250605080258.jpg";
import newImageIMG20250605081911 from "@/assets/new-products/IMG20250605081911.jpg";
import newImageOrcaImage1256197463 from "@/assets/new-products/orca-image--1256197463.jpeg";
import newImageOrcaImage1885493409 from "@/assets/new-products/orca-image--1885493409.jpeg";
import newImageReceived942391677768380 from "@/assets/new-products/received_942391677768380.jpeg";
import newImageCreation1545701639386594 from "@/assets/new-products/___creation_1545701639386594.jpeg";
import newImage1a527920ef9a11f09a84597cc24b4054 from "@/assets/new-products/1a527920-ef9a-11f0-9a84-597cc24b4054.png";
import newImage6bec02550b9b0bff1618a221ef500a466 from "@/assets/new-products/6bec02550b9b0bff1618a221ef500a46_6.jpeg";
import newImage6d41e58675e6cfc6ac7e2a7bcb9f47b35 from "@/assets/new-products/6d41e58675e6cfc6ac7e2a7bcb9f47b3_5.jpeg";
import newImage27c6b7d029288718231b1e7f1c5543f27 from "@/assets/new-products/27c6b7d029288718231b1e7f1c5543f2_7.jpeg";
import newImage96f414235fb8e09bdd7af11b0e171d963 from "@/assets/new-products/96f414235fb8e09bdd7af11b0e171d96_3.jpeg";
import newImage1729541438044 from "@/assets/new-products/1729541438044.jpg";
import newImage1729541449851 from "@/assets/new-products/1729541449851.jpg";
import newImage1748109946146 from "@/assets/new-products/1748109946146.jpg";
import newImage1750830526344 from "@/assets/new-products/1750830526344.jpg";
import newImageFe75b67b127f77760914964b0ea78bb74 from "@/assets/new-products/fe75b67b127f77760914964b0ea78bb7_4.jpeg";
import newImageReceived1293390441784496 from "@/assets/new-products/received_1293390441784496.jpeg";
import newImageTable2 from "@/assets/new-products/table2.jpeg";

interface Product {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  price: number;
  images: string[];
  features: string[];
  dimensions: string;
  colors: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "طابل فصالة منزلية",
    nameAr: "طاولة تفصيل عادية",
    description: "هذي تجي بلا طاجيرات أبعاد تاعها 90/180 وارتفاع 90 كي تتطوى يرجع فيها 30 سم وتجي ب6 عجلات",
    price: 15000,
    images: [
      newImageTable2,
      newImageReceived1293390441784496,
      newImage1729541438044,
      newImage1729541449851,
      newImageCreation1545701639386594,
      newImage1750830526344,
    ],
    features: ["قابلة للطي", "6 عجلات متحركة", "سطح عمل واسع", "سهلة التخزين"],
    dimensions: "90×180 سم - ارتفاع 90 سم - تطوى إلى 30 سم",
    colors: ["أبيض", "ماروني", "بيج"],
  },
  {
    id: 2,
    name: "طاولة تفصيل برفوف",
    nameAr: "طاولة تفصيل مع رفوف",
    description: "نفس خصائص طاولة العادية برك تجي زايدا بليطاجار",
    price: 17000,
    images: [newImage1748109946146],
    features: ["رفوف تخزين إضافية", "6 عجلات متحركة", "قابلة للطي", "مساحة تنظيم أكبر"],
    dimensions: "90×180 سم - ارتفاع 90 سم - مع رفين للتخزين",
    colors: ["أبيض", "ماروني", "بيج"],
  },
  {
    id: 3,
    name: "طابل فصالة plus",
    nameAr: "طاولة تفصيل بلس",
    description: "هذي يجي سوكل تاعها كامل حديد حتى مع حواف Hdf هذي النسخة المطورة تاع طاولة تفصيل برفوف أقوى وأمتن",
    price: 20000,
    images: [
      newImage6bec02550b9b0bff1618a221ef500a466,
      newImage6d41e58675e6cfc6ac7e2a7bcb9f47b35,
      newImageFe75b67b127f77760914964b0ea78bb74,
      newImage27c6b7d029288718231b1e7f1c5543f27,
      newImage96f414235fb8e09bdd7af11b0e171d963,
      newImageb12813c3a030dac344dff08ae990780e1,
      newImageIMG20250530215110,
      newImage9ca315d9551409a0e941465c6d13f43c8,
      newImage9f8ca1de0fe208549195298fc7f5232b9,
      newImage91bf153a722aa5b6f3372df7d97e852711,
    ],
    features: ["هيكل حديد متين", "حواف HDF", "رفوف تخزين", "الأقوى والأمتن"],
    dimensions: "90×180 سم - ارتفاع 90 سم - هيكل معدني كامل",
    colors: ["ماروني/أبيض", "بيج/أبيض"],
  },
  {
    id: 4,
    name: "طابل فصالة 120/200",
    nameAr: "طاولة تفصيل كبيرة",
    description: "تجي بنفس سيستام تاع طابلة فصالة plus إختلاف انو تجي ب8 عجلات وكي تتطوى يرحع فيها 120/90/45",
    price: 30000,
    images: [
      newImageOrcaImage1256197463,
      newImageOrcaImage1885493409,
      newImageReceived942391677768380,
    ],
    features: ["8 عجلات متحركة", "مساحة أكبر", "هيكل Plus متطور", "مثالية للورشات"],
    dimensions: "120×200 سم - تطوى إلى 120×90×45 سم",
    colors: ["ماروني/أبيض", "بيج/أبيض"],
  },
  {
    id: 5,
    name: "طابل فصالة للورشات ومدارس تعليم الخياطة",
    nameAr: "طاولة ورشات ومدارس الخياطة",
    description: "150/200 تجي ديمونطابل ونخدموها سور كموند",
    price: 35000,
    images: [
      newImageIMG20250605080258,
      newImageIMG20250605081911,
      newImageIMG20250605080256,
      newImageIMG20250605080254,
      newImageIMG20250605081055,
      newImageIMG20250605082953,
    ],
    features: ["150×200 سم", "قابلة للتفكيك", "تصنع حسب الطلب", "للاستخدام المهني"],
    dimensions: "150×200 سم - قابلة للتفكيك",
    colors: ["حسب الطلب"],
  },
];

interface ProductCardProps {
  product: Product;
  onOrder: (product: Product) => void;
  onImageClick: (product: Product) => void; // New prop for image click
}

const ProductCard = ({ product, onOrder, onImageClick }: ProductCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-elevated transition-all duration-300 bg-card">
      {/* Image container with click handler */}
      <div
        className="relative h-72 overflow-hidden bg-muted cursor-pointer"
        onClick={() => onImageClick(product)} // Attach click handler here
      >
        <img
          src={product.images[0]} // Display first image as thumbnail
          alt={product.nameAr}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Price badge */}
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full font-cairo font-bold">
          {product.price.toLocaleString()} دج
        </div>
      </div>

      <CardContent className="p-6 space-y-4" dir="rtl">
        <div>
          <h3 className="text-xl font-cairo font-bold text-foreground">{product.nameAr}</h3>
          <p className="text-muted-foreground mt-1 text-sm">{product.description}</p>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {product.features.slice(0, 3).map((feature, idx) => (
            <span
              key={idx}
              className="text-xs bg-sky-light text-sky-dark px-3 py-1 rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Dimensions */}
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">الأبعاد: </span>
          {product.dimensions}
        </p>

        {/* Colors */}
        <p className="text-sm text-muted-foreground">
          <span className="font-medium text-foreground">الألوان: </span>
          {product.colors.join("، ")}
        </p>

        {/* Order button */}
        <Button
          onClick={() => onOrder(product)}
          className="w-full gradient-primary text-primary-foreground shadow-soft hover:shadow-card transition-all gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          اطلب الآن
        </Button>
      </CardContent>
    </Card>
  );
};

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [carouselProduct, setCarouselProduct] = useState<Product | null>(null);
  const [isCarouselModalOpen, setIsCarouselModalOpen] = useState(false);

  const handleOrder = (product: Product) => {
    setSelectedProduct(product);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setSelectedProduct(null);
  };

  const handleImageClick = (product: Product) => {
    setCarouselProduct(product);
    setIsCarouselModalOpen(true);
  };

  const handleCloseCarouselModal = () => {
    setIsCarouselModalOpen(false);
    setCarouselProduct(null);
  };

  return (
    <>
      <section id="products" className="section-padding bg-background" dir="rtl">
        <div className="container-rtl">
          <div className="text-center mb-16">
            <span className="text-primary font-medium">تشكيلتنا</span>
            <h2 className="text-3xl md:text-4xl font-cairo font-bold text-foreground mt-2">
              منتجاتنا المميزة
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              اختاري الطاولة المناسبة لاحتياجاتك من تشكيلتنا المتنوعة، كل منتج مصنوع بعناية من مواد عالية الجودة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOrder={handleOrder}
                onImageClick={handleImageClick} // Pass the new handler
              />
            ))}
          </div>
        </div>
      </section>

      <OrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        product={selectedProduct ? { name: selectedProduct.nameAr, price: selectedProduct.price } : null}
      />

      <ProductCarouselModal
        isOpen={isCarouselModalOpen}
        onClose={handleCloseCarouselModal}
        product={carouselProduct}
      />
    </>
  );
};

export default Products;

