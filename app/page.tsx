import ProductCard from "@/components/product_card/ProductCard";

export default function Home() {
  return (
    <>
      <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2 container my-4">
        <ProductCard className="lg:col-span-2 bg-blue-50" />
        <ProductCard className="lg:row-span-2 bg-blue-100" />
        <ProductCard className="lg:col-span-2 bg-blue-200" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2 container my-4">
        <ProductCard className="lg:col-span-2 bg-green-50" />
        <ProductCard className="lg:row-span-2 bg-green-100" />
        <ProductCard className="lg:col-span-2 bg-green-200" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-6 container my-4">
        <ProductCard className="lg:col-start-1 lg:col-span-2 lg:row-span-2 bg-red-50" />
        <ProductCard className="lg:col-start-1 lg:col-span-2 lg:row-span-2 bg-red-100" />
        <ProductCard className="lg:col-start-1 lg:col-span-2 lg:row-span-2 bg-red-200" />
        <ProductCard className="lg:col-start-3 lg:row-start-1 lg:row-span-3 bg-red-300" />
        <ProductCard className="lg:col-start-3 lg:row-start-4 lg:row-span-3 bg-red-400" />
      </div>
    </>
  );
}
