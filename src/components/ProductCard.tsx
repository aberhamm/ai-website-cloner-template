import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const [defaultImg, hoverImg] = product.images;

  return (
    <Link href={`/product/${product.id}`} className={cn("group block", className)}>
      <div className="relative overflow-hidden bg-[#d2cac3] dark:bg-neutral-800">
        {/* default image */}
        <Image
          src={defaultImg}
          alt={product.title}
          width={400}
          height={533}
          sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
          className="aspect-large h-full w-full object-cover"
        />
        {/* hover image — clipped to zero width by default, reveals left→right on hover */}
        <Image
          src={hoverImg}
          alt={product.title}
          width={400}
          height={533}
          sizes="(min-width:1024px) 25vw, (min-width:768px) 33vw, 50vw"
          className="aspect-large absolute inset-0 h-full w-full scale-[1.2] object-cover transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] [clip-path:polygon(0%_0%,_0%_0%,_0%_100%,_0%_100%)] [filter:brightness(400%)_contrast(150%)] group-hover:scale-[1] group-hover:[clip-path:polygon(0%_0%,_100%_0%,_100%_100%,_0%_100%)] group-hover:[filter:brightness(100%)_contrast(100%)]"
        />
      </div>

      <div className="mt-3 flex flex-col justify-between gap-2 text-lg leading-5 md:flex-row">
        <p>{product.title}</p>
        <p>
          <span>{product.price}</span>
        </p>
      </div>

      <div className="mt-[6px] flex items-center gap-1 text-[11px] uppercase">
        <div className="h-2 w-2 rounded-full bg-current" />
        <span>{product.category}</span>
      </div>
    </Link>
  );
}
