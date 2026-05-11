import Image from "next/image";

interface ProductCardProps {
  id: string;
  acf: {
    title: { en: string; ar: string };
    description: { en: string; ar: string };
    main_image: string | false;
    more_images: {
      image_1: string | false;
      image_2: string | false;
      image_3: string | false;
      image_4: string | false;
      image_5: string | false;
      image_6: string | false;
    };
  };
  locale: "en" | "ar";
}

export default function PageProductCard({ acf, locale, id }: ProductCardProps) {
  return (
    <div
      key={id}
      className="grid items-start rounded-xl border border-gray-500/50 px-4 py-10 lg:grid-cols-2"
    >
      <div className="lg:sticky lg:top-40">
        <Image
          src={acf.main_image || "/placeholder.png"}
          alt={acf.title[locale as "en" | "ar"]}
          width={400}
          height={300}
          className="mx-auto max-h-100 object-contain"
        />
      </div>
      <div>
        <h3 className="mb-4 text-3xl font-semibold">
          {acf.title[locale as "en" | "ar"]}
        </h3>
        <div
          dangerouslySetInnerHTML={{
            __html: acf.description[locale as "en" | "ar"],
          }}
        ></div>

        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {Object.values(acf.more_images).map((img, idx) =>
            img ? (
              <Image
                key={idx}
                src={img}
                alt={acf.title[locale as "en" | "ar"]}
                width={400}
                height={300}
                className="h-100 w-full object-cover"
              />
            ) : null,
          )}
        </div>
      </div>
    </div>
  );
}
