import AboutUsSectionTypeCard from "./AboutUsSectionTypeCard";
import AboutUsSectionTypeSection from "./AboutUsSectionTypeSection";

export default async function AboutUsSection({
  type = "section",
  className = "",
}: {
  type?: "card" | "section";
  className?: string;
}) {
  const dataResponse = await fetch(`
    ${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/sections-info/68`);

  const data = await dataResponse.json();

  if (type === "card") {
    return <AboutUsSectionTypeCard data={data} className={className} />;
  }

  return <AboutUsSectionTypeSection data={data} className={className} />;
}
