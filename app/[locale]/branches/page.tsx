export default async function Page({
  params,
}: {
  params: Promise<{ locale: "en" | "ar" }>;
}) {
  const { locale } = await params;

  const dataResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/branches`,
  );
  const brnachesList: {
    id: number;
    acf: {
      title: {
        en: string;
        ar: string;
      };
      location: {
        en: string;
        ar: string;
      };
      working_hours: {
        en: string;
        ar: string;
      };
      phone: string;
      gmaps_src: string;
    };
  }[] = await dataResponse.json();

  return (
    <section className="container pt-40">
      <h1 className="mb-4 text-4xl font-bold">
        {locale === "en" ? "Our Branches" : "فروعنا المختلفة"}
      </h1>
      <p>
        {locale === "en"
          ? "Discover our branches across Saudi Arabia and get in touch with us."
          : "استكشف فروعنا المختلفة ومعلومات التواصل الخاصة بها."}
      </p>

      {brnachesList.map((branch) => (
        <div
          key={branch.id}
          className="dark:border-brand-gold-end/20 border-brand-gold-end/60 mt-12 mb-20 grid h-auto grid-cols-1 gap-8 overflow-hidden rounded-xl border shadow-lg md:grid-cols-2 lg:h-[500px] lg:gap-0"
        >
          {/* Branch Info Card */}
          <div className="bg-primary text-primary-foreground flex flex-col justify-center p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold">
              {branch.acf.title[locale as "en" | "ar"]}.
            </h2>
            <div className="bg-primary-foreground/20 mb-8 h-px w-full" />

            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="bg-background text-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01" />
                    <path d="M16 6h.01" />
                    <path d="M12 6h.01" />
                    <path d="M12 10h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 10h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 10h.01" />
                    <path d="M8 14h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold">
                    {locale === "en" ? "Address" : "العنوان"}
                  </h3>
                  <p className="leading-relaxed opacity-90">
                    {branch.acf.location[locale as "en" | "ar"]}
                  </p>
                </div>
              </div>

              <hr className="border-gray-300/60" />

              {/* Working Hours */}
              <div className="flex items-start gap-5">
                <div className="bg-background text-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold">
                    {locale === "en" ? "Working Hours" : "ساعات العمل"}
                  </h3>
                  <p className="leading-relaxed opacity-90">
                    {branch.acf.working_hours[locale as "en" | "ar"]}
                  </p>
                </div>
              </div>

              <hr className="border-gray-300/60" />

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="bg-background text-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 text-xl font-semibold">
                    {locale === "en" ? "Phone" : "الهاتف"}
                  </h3>
                  <p className="leading-relaxed opacity-90" dir="ltr">
                    {branch.acf.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="h-64 w-full md:h-full lg:h-full">
            <iframe
              src={branch.acf.gmaps_src}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full"
            ></iframe>
          </div>
        </div>
      ))}
    </section>
  );
}
