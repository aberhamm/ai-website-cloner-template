import { productGrids } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductGrids() {
  return (
    <section className="px-4 lg:px-6">
      {productGrids.map((grid, i) => (
        <div key={i} className={grid.layout}>
          {grid.products.map((p) => (
            <ProductCard key={p.id} product={p} className={p.colSpan} />
          ))}
        </div>
      ))}
    </section>
  );
}
