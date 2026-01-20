export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="font-black text-4xl leading-15.25 bg-linear-to-b from-[#8A5F00] to-[#F0A500] text-transparent bg-clip-text">
      {title}
    </h2>
  );
}
