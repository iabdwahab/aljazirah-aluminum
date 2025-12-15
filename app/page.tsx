import ProductCard from "@/components/product_card/ProductCard";
import { productsList } from "@/local_data/products";

export default function Home() {
  const productCardClassNames = [
    "lg:col-span-2 bg-blue-50",
    "lg:row-span-2 bg-blue-100",
    "lg:col-span-2 bg-blue-200",
    "lg:col-span-2 bg-green-50",
    "lg:row-span-2 bg-green-100",
    "lg:col-span-2 bg-green-200",
    "lg:col-start-1 lg:col-span-2 lg:row-span-2 bg-red-50",
    "lg:col-start-1 lg:col-span-2 lg:row-span-2 bg-red-100",
    "lg:col-start-1 lg:col-span-2 lg:row-span-2 bg-red-200",
    "lg:col-start-3 lg:row-start-1 lg:row-span-3 bg-red-300",
    "lg:col-start-3 lg:row-start-4 lg:row-span-3 bg-red-400",
  ];

  const finalProductsList = productsList.map((product, index) => ({
    ...product,
    className: productCardClassNames[index] || "bg-gray-100",
  }));

  return (
    <>
      <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2 container my-4">
        {finalProductsList.slice(0, 3).map((product) => (
          <ProductCard
            key={product.id}
            className={product.className}
            title={product.title}
            features={product.features}
          />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2 container my-4">
        {finalProductsList.slice(3, 6).map((product) => (
          <ProductCard
            key={product.id}
            className={product.className}
            title={product.title}
            features={product.features}
          />
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3 lg:grid-rows-6 container my-4">
        {finalProductsList.slice(6).map((product) => (
          <ProductCard
            key={product.id}
            className={product.className}
            title={product.title}
            features={product.features}
          />
        ))}
      </div>
    </>
  );
}
