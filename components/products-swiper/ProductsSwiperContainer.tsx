import { ProductCardInterface } from "@/types/productsCards";
import ProductsSwiper from "./ProductsSwiper";

export default async function ProductsSwiperContainer() {
  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/products?per_page=11`,
  );
  const productsList: ProductCardInterface[] = await productsResponse.json();

  return (
    <section>
      <ProductsSwiper productsList={productsList} />
    </section>
  );
}
