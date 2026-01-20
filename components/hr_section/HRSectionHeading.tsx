import SectionDescription from "../global/SectionDescription";
import SectionTitle from "../global/SectionTitle";

export default async function HRSectionHeading() {
  const sectionDataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/sections-info/54`,
  );
  const sectionData = await sectionDataResponse.json();

  const statisticsList: {
    number: string;
    text: string;
  }[] = Object.values(sectionData?.acf?.statistics);

  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <div>
        <SectionTitle title={sectionData?.acf?.title} />
        <SectionDescription description={sectionData?.acf?.description} />
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {statisticsList.map((statistic, index) => (
          <div key={index} className="mt-6">
            <h3 className="text-[164px] text-[#D19101]  leading-35">
              {statistic.number.padStart(2, "0")}
            </h3>
            <p className="font-medium text-[#D19101] text-center">
              {statistic.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
