import SectionTitle from "../global/SectionTitle";
import CustomersList from "./CustomersList";
import { getTranslations } from "next-intl/server";

interface CustomerInterface {
  id: number;
  acf: {
    customer_image: string | null;
  };
}

export default async function CustomersSection() {
  const t = await getTranslations("CustomersSection");

  const productsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/customers`,
  );
  const productsList: CustomerInterface[] = await productsResponse.json();

  return (
    <section className="container my-20">
      <div className="mb-10 text-center">
        <SectionTitle title={t("title")} />
      </div>

      <CustomersList customersList={productsList} />
    </section>
  );
}
