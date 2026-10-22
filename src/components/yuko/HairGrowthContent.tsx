/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { products } from "@/types/product";
import { ProductGallery } from "./ProductGallery";
import { PurchaseOptions } from "./PurchaseOptions";
import { ProductAccordion } from "./ProductAccordion";

export function HairGrowthContent() {
  const product = products[2];
  return (
    <main
      id="main"
      className="pt-11 max-md:flex max-md:flex-col max-md:gap-section max-md:pt-8"
    >
      <ProductGallery product={product} />
      <section
        className="mx-auto max-w-[720px] px-1 text-center md:mt-12 md:mb-24 md:px-4"
        aria-labelledby="product-title"
      >
        <PurchaseOptions product={product} />
        <div>
          <p className="mx-auto mt-6 max-w-[580px] leading-[1.8] text-muted min-[768px]:mt-8">
            {
              "A hair supplement for men, in a simple silver jar. Designed to sit alongside your everyday care, with 60 capsules in each pack. Explore the product details here while we prepare the next update on availability."
            }
          </p>
          <ul
            className="mt-5 flex list-none flex-wrap justify-center gap-2 p-0"
            aria-label="Product information"
          >
            <li className="inline-flex min-h-8 items-center justify-center gap-2 rounded-full px-4 py-2 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none max-md:min-h-10 bg-control text-xs/4">
              {"Hair"}
            </li>
            <li className="inline-flex min-h-8 items-center justify-center gap-2 rounded-full px-4 py-2 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none max-md:min-h-10 bg-control text-xs/4">
              {"60 capsules"}
            </li>
          </ul>
        </div>
      </section>
      <section
        className="mx-1 grid grid-cols-1 gap-6 md:mx-2 md:mb-28 md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-12 md:pt-12 lg:mx-6 lg:gap-[100px]"
        aria-labelledby="details-title"
      >
        <div>
          <h2 id="details-title" className="text-[30px] leading-[1.2]">
            {"The little details."}
          </h2>
          <dl className="mt-8 text-[13px] md:max-w-[380px]">
            <div className="flex justify-between gap-4 border-b border-border py-2.5">
              <dt className="text-muted">{"Category"}</dt>
              <dd className="m-0 text-right">{"Dietary supplement"}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border py-2.5">
              <dt className="text-muted">{"Format"}</dt>
              <dd className="m-0 text-right">{"Capsules"}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border py-2.5">
              <dt className="text-muted">{"Contents"}</dt>
              <dd className="m-0 text-right">{"60 capsules"}</dd>
            </div>
            <div className="flex justify-between gap-4 border-b border-border py-2.5">
              <dt className="text-muted">{"Packaging"}</dt>
              <dd className="m-0 text-right">{"Silver jar"}</dd>
            </div>
          </dl>
        </div>
        <ProductAccordion
          items={[
            ...product.details,
            ...product.faqs.map((faq) => ({
              title: faq.question,
              body: faq.answer,
            })),
            {
              title: "Shipping & returns",
              body: "Free shipping on US orders over $100. Other shipping options, delivery estimates and our returns policy will be available before checkout opens.",
            },
          ]}
        />
      </section>
      <section className="min-w-0" aria-labelledby="related-title">
        <section
          className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-column [&>*]:min-w-0 items-start"
          aria-label="Explore more products"
        >
          <article className="flex flex-col gap-5 md:gap-6">
            <Link
              className="relative block aspect-[432/520] w-full overflow-hidden rounded-card bg-[#f1f1f1] md:aspect-[432/560] [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-500 [&_img]:ease-[ease] hover:[&_img]:scale-[1.025] motion-reduce:[&_img]:transition-none"
              aria-label="View Probiotics"
              href="/products/probiotics"
            >
              <img
                alt="Probiotics in an unbranded brushed silver tin"
                loading="lazy"
                decoding="async"
                src="/images/probiotics.webp"
                className="extracted-fill"
              />
              <span className="inline-flex min-h-8 items-center justify-center gap-2 rounded-full px-4 py-2 text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none absolute top-4 right-4 bg-control backdrop-blur-floating max-md:min-h-8">
                {"Gut"}
              </span>
            </Link>
            <div className="flex flex-col items-center gap-2 text-center md:px-4">
              <h2 className="text-[15px] leading-6 tracking-normal">
                <Link href="/products/probiotics">{"Probiotics"}</Link>
              </h2>
              <p className="text-[13px] leading-6 text-muted">
                {"Lactobacillus & Bifidobacterium cultures."}
              </p>
              <Link
                data-sold-out="false"
                aria-label="View Probiotics, $38"
                className="inline-flex min-h-8 items-center justify-center gap-2 rounded-full px-4 py-2 text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none max-md:min-h-10 bg-control hover:bg-[#20202016] min-w-16 data-[sold-out=true]:opacity-50"
                tabIndex={0}
                href="/products/probiotics"
              >
                {"$38"}
              </Link>
            </div>
          </article>
          <div className="grid place-items-center px-6 py-12 text-center md:aspect-[432/560] md:p-8">
            <h2
              id="related-title"
              className="gradient-text max-w-[180px] text-[15px] leading-6 font-normal tracking-normal text-balance"
            >
              {"A little more everyday care."}
            </h2>
          </div>
          <article className="flex flex-col gap-5 md:gap-6">
            <Link
              className="relative block aspect-[432/520] w-full overflow-hidden rounded-card bg-[#f1f1f1] md:aspect-[432/560] [&_img]:object-cover [&_img]:transition-transform [&_img]:duration-500 [&_img]:ease-[ease] hover:[&_img]:scale-[1.025] motion-reduce:[&_img]:transition-none"
              aria-label="View Hand Lotion"
              href="/products/hand-lotion"
            >
              <img
                alt="Hand Lotion in an unbranded silver 50 ml tube"
                loading="lazy"
                decoding="async"
                src="/images/hand-lotion.webp"
                className="extracted-fill"
              />
              <span className="inline-flex min-h-8 items-center justify-center gap-2 rounded-full px-4 py-2 text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none absolute top-4 right-4 bg-control backdrop-blur-floating max-md:min-h-8">
                {"Hands"}
              </span>
            </Link>
            <div className="flex flex-col items-center gap-2 text-center md:px-4">
              <h2 className="text-[15px] leading-6 tracking-normal">
                <Link href="/products/hand-lotion">{"Hand Lotion"}</Link>
              </h2>
              <p className="text-[13px] leading-6 text-muted">
                {"Daily hand care. Bergamot & Vanilla."}
              </p>
              <Link
                data-sold-out="false"
                aria-label="View Hand Lotion, $32"
                className="inline-flex min-h-8 items-center justify-center gap-2 rounded-full px-4 py-2 text-[13px] leading-4 whitespace-nowrap transition-colors duration-180 ease-[ease] motion-reduce:transition-none max-md:min-h-10 bg-control hover:bg-[#20202016] min-w-16 data-[sold-out=true]:opacity-50"
                tabIndex={0}
                href="/products/hand-lotion"
              >
                {"$32"}
              </Link>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
