import HeroSection from "../global/HeroSection";

export default async function HomeHeroSection() {
  const dataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/sections-info/108`,
  );
  const sectionData: {
    acf: {
      title: string;
      description: string;
    };
  } = await dataResponse.json();

  return (
    <HeroSection
      title={sectionData.acf.title}
      description={sectionData.acf.description}
    />
  );
}
