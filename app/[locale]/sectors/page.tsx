import Image from "next/image";

export default async function page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;

  const dataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/sectors`,
  );
  const sectorsList: {
    acf: {
      title: { en: string; ar: string };
      image: string | false;
    };
  }[] = await dataResponse.json();

  return (
    <section className="container mt-30">
      <h1 className="mb-6 text-3xl font-bold">
        {locale === "en" ? "Our Sectors" : "قطاعاتنا"}
      </h1>

      <div className="grid gap-2 overflow-hidden rounded-lg md:grid-cols-2 lg:grid-cols-4">
        {sectorsList.map((sector, index) => (
          <div
            key={index}
            className="border-brand-gold-start rounded-lg border"
          >
            {sector.acf.image && (
              <Image
                src={sector.acf.image}
                alt={sector.acf.title[locale]}
                width={400}
                height={300}
                className="h-80 w-full rounded-t-md object-cover"
              />
            )}
            <h2 className="my-4 text-center text-xl font-bold">
              {sector.acf.title[locale]}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
