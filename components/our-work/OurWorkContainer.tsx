import { OurWorkInterface } from "@/types/ourWork";
import OurWorkCard from "./OurWorkCard";
import { getLocale } from "next-intl/server";
import { getLocalizedText } from "@/lib/i18n-utils";

export default async function OurWorkContainer() {
  const locale = await getLocale();

  const ourWorkResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/our-work?per_page=100`,
  );
  const ourWorkList: OurWorkInterface[] = await ourWorkResponse.json();

  return (
    <div className="bg-bg-dark py-20">
      <div className="container grid gap-10 lg:grid-cols-2">
        {ourWorkList.map((workItem, index) => (
          <OurWorkCard
            key={index}
            image={workItem.acf.image}
            title={getLocalizedText(workItem.acf.title, locale)}
            description={getLocalizedText(workItem.acf.description, locale)}
          />
        ))}
      </div>
    </div>
  );
}
