export default function SectionDescription({
  description,
}: {
  description: string;
}) {
  return <p className="font-medium leading-8.25">{description}</p>;
}
