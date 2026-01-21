export default function SectionTitle({ title }: { title: string }) {
  return (
    <h2 className="bg-linear-to-b from-[#8A5F00] to-[#F0A500] bg-clip-text text-4xl leading-15.25 font-black text-transparent">
      {title}
    </h2>
  );
}
