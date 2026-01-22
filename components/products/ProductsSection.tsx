import SectionTitle from "../global/SectionTitle";
import ProductsContainer from "./ProductsContainer";

export default function ProductsSection() {
  return (
    <section className="container my-10">
      <SectionTitle title="منتجاتنـــــــــــــــــــا" className="mb-8" />
      <ProductsContainer />
    </section>
  );
}
