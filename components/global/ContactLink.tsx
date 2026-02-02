import Link from "next/link";

export default function ContactLink() {
  return (
    <Link
      href="#"
      className="block w-fit rounded-full bg-linear-to-b from-yellow-800 to-amber-500 px-32 py-3 font-bold text-white"
    >
      تواصل معنا
    </Link>
  );
}
