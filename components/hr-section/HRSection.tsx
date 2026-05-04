import { HRSectionCardInterface } from "@/types/hrSectionCards";
import HRSectionCard from "./HRSectionCard";
import HRSectionHeading from "./HRSectionHeading";
import { getLocale } from "next-intl/server";

export default async function HRSection() {
  const locale = await getLocale();

  const cardsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/hr-section-cards`,
  );
  const cardsList = await cardsResponse.json();

  return (
    <section className="container my-14">
      <HRSectionHeading />
      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        {cardsList.map((card: HRSectionCardInterface, index: number) => (
          <HRSectionCard key={index} data={card} locale={locale} />
        ))}
      </div>
    </section>
  );
}
