"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import type { Product } from "@/types/product";

export function ProductGallery({ product }: { product: Product }) {
  const images = product.gallery;
  const [selected, setSelected] = useState(0);
  const thumbnails = useRef<(HTMLButtonElement | null)[]>([]);
  const dots = useRef<(HTMLButtonElement | null)[]>([]);
  const pointer = useRef<{ x: number; y: number } | null>(null);

  function navigate(
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
    controls: typeof thumbnails,
  ) {
    let next = index;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % images.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index - 1 + images.length) % images.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = images.length - 1;
    else return;
    event.preventDefault();
    setSelected(next);
    controls.current[next]?.focus();
  }

  return (
    <section
      className="relative isolate overflow-hidden rounded-card bg-[#f0f0f0] max-md:mb-[calc(16px-var(--section-gap))]"
      data-multiple={images.length > 1}
      aria-label={`${product.name} gallery`}
    >
      <div
        className="relative mx-auto h-[clamp(340px,110vw,560px)] w-full touch-pan-y overflow-hidden md:h-[min(680px,65vw)] md:w-[min(640px,72%)] md:touch-auto"
        onPointerDown={(event) => {
          pointer.current = { x: event.clientX, y: event.clientY };
        }}
        onPointerUp={(event) => {
          const start = pointer.current;
          pointer.current = null;
          if (!start || images.length < 2) return;
          const x = event.clientX - start.x;
          const y = event.clientY - start.y;
          if (Math.abs(x) < 40 || Math.abs(x) < Math.abs(y)) return;
          setSelected((index) =>
            Math.min(Math.max(index + (x < 0 ? 1 : -1), 0), images.length - 1),
          );
        }}
        onPointerCancel={() => {
          pointer.current = null;
        }}
      >
        {images.map((image, index) => (
          <div
            key={image.src}
            aria-hidden={index !== selected}
            className={`gallery-layer absolute inset-0 motion-reduce:transition-none [&_img]:object-contain md:[&_img]:scale-110 md:[&_img]:object-cover ${index === selected ? "opacity-100" : "opacity-0"}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt={image.alt}
              draggable={false}
              fetchPriority={index === 0 ? "high" : "auto"}
              loading={index === 0 || index === selected ? "eager" : "lazy"}
              decoding="async"
              src={image.src}
              className="extracted-fill"
            />
          </div>
        ))}
      </div>
      {images.length > 1 && (
        <>
          <fieldset
            className="absolute inset-x-0 bottom-4 m-0 flex min-w-0 items-center justify-center gap-0 border-0 p-0 md:hidden"
            aria-label="Gallery images"
          >
            {images.map((image, index) => (
              <button
                key={image.src}
                ref={(element) => {
                  dots.current[index] = element;
                }}
                type="button"
                className="grid size-6 place-items-center after:size-1.5 after:rounded-full after:bg-[#20202066] after:transition-colors after:duration-180 after:ease-[ease] after:content-[''] aria-current:after:bg-foreground motion-reduce:after:transition-none"
                aria-label={`Show image ${index + 1} of ${images.length}: ${image.label}`}
                aria-current={selected === index ? "true" : undefined}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => navigate(event, index, dots)}
              />
            ))}
          </fieldset>
          <fieldset
            className="absolute top-1/2 right-6 m-0 hidden min-w-0 -translate-y-1/2 flex-col gap-3 rounded-[80px] border-0 bg-[#e5e5e580] p-2.5 md:flex lg:right-8"
            aria-label="Choose a product image"
          >
            {images.map((image, index) => (
              <button
                key={image.src}
                ref={(element) => {
                  thumbnails.current[index] = element;
                }}
                aria-label={`Show ${image.label.toLowerCase()}`}
                aria-pressed={selected === index}
                type="button"
                className="relative h-[84px] w-16 overflow-hidden rounded-full bg-white opacity-65 transition-[opacity,box-shadow] duration-180 ease-[ease] hover:opacity-100 aria-pressed:opacity-100 aria-pressed:shadow-[0_0_0_2px_#727272] motion-reduce:transition-none lg:h-[108px] lg:w-[82px] [&_img]:object-cover"
                tabIndex={0}
                onClick={() => setSelected(index)}
                onKeyDown={(event) => navigate(event, index, thumbnails)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt=""
                  loading="lazy"
                  decoding="async"
                  src={image.src}
                  className="extracted-fill"
                />
              </button>
            ))}
          </fieldset>
        </>
      )}
    </section>
  );
}
