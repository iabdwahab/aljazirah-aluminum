import Image from "next/image";

export default async function PortfolioSection() {
  const portfolioResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/portfolio?per_page=100`,
  );
  const portfolioList: { id: number; acf: { image: string | false } }[] =
    await portfolioResponse.json();
  console.log(portfolioList);

  const firstGroupClassNames = [
    "lg:row-span-2 lg:col-start-1",
    "lg:row-span-2 lg:col-start-1",
    "lg:row-span-1 lg:row-start-1 lg:col-start-2",
    "lg:row-span-2 lg:row-start-2 lg:col-start-2",
    "lg:row-span-1 lg:row-start-4 lg:col-start-2",
  ];

  const lastGroupClassNames = ["lg:col-span-1", "lg:col-span-2"];

  return (
    <section className="bg-black py-16">
      <div className="container space-y-4">
        <div className="grid grid-rows-[300px] gap-4 md:grid-cols-2 lg:grid-rows-[repeat(4,300px)]">
          {portfolioList.slice(0, 5).map((portfolioItem, index) => (
            <div
              key={portfolioItem.id}
              className={`${firstGroupClassNames[index]}`}
            >
              <Image
                key={portfolioItem.id}
                src={portfolioItem.acf.image || "/portfolio/work-1.png"}
                alt="صورة المعرض"
                className={`h-full w-full rounded-lg object-cover object-bottom`}
                width={556}
                height={388}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-rows-[300px] gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-[600px]">
          {portfolioList.slice(5).map((portfolioItem, index) => (
            <div
              key={portfolioItem.id}
              className={`${lastGroupClassNames[index]}`}
            >
              <Image
                key={portfolioItem.id}
                src={portfolioItem.acf.image || "/portfolio/work-1.png"}
                alt="صورة المعرض"
                className={`h-full w-full rounded-lg object-cover object-bottom`}
                width={556}
                height={388}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
