import { QualificationInterface } from "@/types/qualifications";
import QualificationsSwiper from "./QualificationsSwiper";

export default async function QualificationsSwiperContainer() {
  const qualificationsResponse = await fetch(
    `${process.env.NEXT_PUBLIC_WORDPRESS_ACF_API_URL}/qualification-slides?per_page=100`,
  );
  const qualificationsList: QualificationInterface[] =
    await qualificationsResponse.json();

  return <QualificationsSwiper qualificationsList={qualificationsList} />;
}
