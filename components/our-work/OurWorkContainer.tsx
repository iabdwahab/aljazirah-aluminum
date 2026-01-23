import { OurWorkInterface } from "@/types/ourWork";
import OurWorkCard from "./OurWorkCard";

export default async function OurWorkContainer() {
  const ourWorkResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/our-work?per_page=100`,
  );
  const ourWorkList: OurWorkInterface[] = await ourWorkResponse.json();

  return (
    <div className="container grid gap-10 bg-black lg:grid-cols-2">
      {ourWorkList.map((workItem, index) => (
        <OurWorkCard
          key={index}
          image={workItem.acf.image}
          title={workItem.acf.title}
          description={workItem.acf.description}
        />
      ))}
    </div>
  );
}
