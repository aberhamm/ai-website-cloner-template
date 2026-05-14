import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProductIds, getProductById } from "@/data/products";

export function generateStaticParams() {
  return getAllProductIds().map((id) => ({ id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) notFound();

  const [front, back] = product.images;

  return (
    <main className="px-4 lg:px-6">
      <div className="mt-26 mb-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {/* image */}
        <div className="relative overflow-hidden bg-[#d2cac3] dark:bg-neutral-800">
          <Image
            src={front}
            alt={product.title}
            width={1200}
            height={1600}
            sizes="(min-width:768px) 50vw, 100vw"
            className="aspect-large h-full w-full object-cover"
            priority
          />
        </div>

        {/* details column */}
        <div className="flex flex-col justify-between gap-12 pt-2 md:py-8">
          <div>
            <p className="mb-4 text-xs font-bold uppercase">{product.category}</p>
            <h1 className="text-balance text-5xl leading-[0.95] font-[800] tracking-tight md:text-7xl">
              {product.title}
            </h1>
            <p className="mt-6 text-2xl font-bold">{product.price}</p>
          </div>

          <div className="flex flex-col gap-6">
            <p className="max-w-[42ch] text-sm leading-5 tracking-tight">
              Carefully designed and ethically sourced. Every piece in the LOOKBOOK
              collection is made to be worn — or judged. Or both. Limited run, signed
              by the ++hellohello team.
            </p>

            <button
              type="button"
              className="link-hover inline-block self-start text-2xl font-bold tracking-tight"
            >
              Add to Bag
            </button>

            <Link
              href="/"
              className="link-hover inline-block self-start text-sm tracking-tight uppercase"
            >
              ← Back to Shop
            </Link>
          </div>
        </div>
      </div>

      {/* secondary image */}
      <div className="mb-26 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        <div className="md:col-start-2">
          <div className="relative overflow-hidden bg-[#d2cac3] dark:bg-neutral-800">
            <Image
              src={back}
              alt={`${product.title} alternate view`}
              width={1200}
              height={1600}
              sizes="(min-width:768px) 50vw, 100vw"
              className="aspect-large h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
