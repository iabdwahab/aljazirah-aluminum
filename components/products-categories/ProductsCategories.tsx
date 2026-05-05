import Link from "next/link";
import SectionTitle from "../global/SectionTitle";

export default function ProductsCategories() {
  return (
    <section className="container my-20">
      <SectionTitle title="Products Categories" />

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
        <Link href="/products/windows" className="rounded-md border p-4">
          Windows
        </Link>
        <Link href="/products/doors" className="rounded-md border p-4">
          Doors
        </Link>
        <Link
          href="/products/architectural-facades"
          className="rounded-md border p-4"
        >
          Architectural facades
        </Link>
        <Link
          href="/products/heavenly-illumination"
          className="rounded-md border p-4"
        >
          Heavenly illumination
        </Link>
        <Link href="/products/others" className="rounded-md border p-4">
          Others
        </Link>
      </div>
    </section>
  );
}
