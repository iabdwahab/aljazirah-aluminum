"use client";

import Image from "next/image";

interface CustomerInterface {
  id: number;
  acf: {
    customer_image: string | null;
  };
}

export default function CustomersList({
  customersList,
}: {
  customersList: CustomerInterface[];
}) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-20">
      {customersList.map((customer) => (
        <div key={customer.id}>
          <Image
            src={customer.acf.customer_image || "/customers/customer-1.svg"}
            alt="صورة العميل"
            width={150}
            height={150}
            className="mx-auto h-24 w-50 object-contain grayscale-100 transition-all duration-300 hover:scale-105 hover:grayscale-0"
          />
        </div>
      ))}
    </div>
  );
}
