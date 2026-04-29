import Image from "next/image";
import SectionTitle from "../global/SectionTitle";
import CustomersList from "./CustomersList";

interface CustomerInterface {
  id: number;
  acf: {
    customer_image: string | null;
  };
}

export default async function CustomersSection() {
  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/customers`,
  );
  const productsList: CustomerInterface[] = await productsResponse.json();

  return (
    <section className="my-20">
      <div className="container mb-10 text-center">
        <SectionTitle title="عملاؤنا" />
      </div>

      <CustomersList customersList={productsList} />
    </section>
  );
}
