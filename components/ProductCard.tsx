import Image from "next/image";
import { ProductCardProps } from "@/types";

interface ProductProps {
  product: ProductCardProps;
}

const ProductCard = ({ product }: ProductProps) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    category,
    thumbnail,
    images,
  } = product;
  return (
    <div className="product-card group">
      <div className="product-card__content">
        <h4 className="product-card__content-title">{title}</h4>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-semibold">$</span>
        {price}
        <span className="self-end text-[14px] font-medium">/now</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={images[0]}
          alt={title}
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ProductCard;
