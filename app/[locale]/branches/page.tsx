export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;
  return (
    <section className="container pt-40">
      <h1 className="mb-4 text-4xl font-semibold">
        {locale === "en" ? "Our Branches" : "فروعنا المختلفة"}
      </h1>
      <p>
        {locale === "en"
          ? "Discover our branches across Saudi Arabia and get in touch with us."
          : "استكشف فروعنا المختلفة ومعلومات التواصل الخاصة بها."}
      </p>
    </section>
  );
}
