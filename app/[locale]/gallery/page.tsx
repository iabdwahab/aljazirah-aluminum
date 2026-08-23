import Image from "next/image";

export default async function page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;

  const dataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/gallery`,
  );

  const galleryList: {
    acf: {
      image: string | false;
    };
  }[] = await dataResponse.json();

  return (
    <section className="container py-34">
      <h1 className="py-6 text-center text-3xl font-bold">
        {locale === "en" ? "Gallery" : "معرض الصور"}
      </h1>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {galleryList.map((item, index) => (
          <div key={index} className="overflow-hidden rounded-sm">
            <Image
              src={item.acf.image || "/placeholder.png"}
              alt={`Gallery Image ${index + 1}`}
              width={400}
              height={400}
              className="h-[300px] w-full rounded-sm object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
