export default function SectionTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={`bg-linear-to-b from-brand-gold-start to-brand-gold-end bg-clip-text text-4xl leading-15.25 font-black text-transparent ${className}`}
    >
      {title}
    </h2>
  );
}
