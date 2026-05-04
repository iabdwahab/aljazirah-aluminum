import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function ContactLink() {
  const t = await getTranslations("ContactLink");

  return (
    <Link
      href="/"
      className="block w-fit rounded-full bg-linear-to-b from-brand-gold-start to-brand-gold-end px-32 py-3 font-bold text-white"
    >
      {t("text")}
    </Link>
  );
}
