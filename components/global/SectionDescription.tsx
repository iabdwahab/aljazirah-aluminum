export default function SectionDescription({
  description,
  className = "",
}: {
  description: string;
  className?: string;
}) {
  return (
    <p className={`leading-8.25 font-medium text-text-primary ${className}`}>
      {description}
    </p>
  );
}
