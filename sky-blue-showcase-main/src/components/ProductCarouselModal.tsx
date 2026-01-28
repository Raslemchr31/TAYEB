import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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

interface ProductCarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

const ProductCarouselModal = ({ isOpen, onClose, product }: ProductCarouselModalProps) => {
  if (!isOpen || !product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-cairo font-bold text-foreground">
            {product.nameAr}
          </DialogTitle>
        </DialogHeader>
        <div className="p-6 pt-0">
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="flex aspect-video items-center justify-center">
                    <img
                      src={image}
                      alt={`${product.nameAr} - Image ${index + 1}`}
                      className="object-cover w-full h-full rounded-md"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductCarouselModal;
