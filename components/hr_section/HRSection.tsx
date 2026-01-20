import { HRSectionCardInterface } from "@/types/hrSectionCards";
import HRSectionCard from "./HRSectionCard";
import HRSectionHeading from "./HRSectionHeading";

export default async function HRSection() {
  const cardsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/hr-section-cards`,
  );
  const cardsList = await cardsResponse.json();

  return (
    <section className="container my-14">
      <HRSectionHeading />
      <div className="grid lg:grid-cols-2 gap-6 mt-14">
        {cardsList.map((card: HRSectionCardInterface, index: number) => (
          <HRSectionCard key={index} data={card} />
        ))}
      </div>
    </section>
  );
}
