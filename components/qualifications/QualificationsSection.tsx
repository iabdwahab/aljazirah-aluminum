import QualificationsSectionHeading from "./QualificationsSectionHeading";
import QualificationsSwiperContainer from "./QualificationsSwiperContainer";

export default function QualificationsSection() {
  return (
    <section className="my-20">
      <div className="container mb-10">
        <QualificationsSectionHeading />
      </div>

      <div className="pr-10">
        <QualificationsSwiperContainer />
      </div>
    </section>
  );
}
