import SectionDescription from "../global/SectionDescription";
import SectionTitle from "../global/SectionTitle";

export default async function QualificationsSectionHeading() {
  const sectionDataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/sections-info/78`,
  );
  const sectionData = await sectionDataResponse.json();

  return (
    <div className="grid gap-6 lg:grid-cols-3 lg:gap-20">
      <SectionTitle title={sectionData?.acf?.title} />
      <SectionDescription
        description={sectionData?.acf?.description}
        className="col-span-2"
      />
    </div>
  );
}
