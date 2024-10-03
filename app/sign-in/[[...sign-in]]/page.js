import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div>
        <Image
          src="/TaxusBanner.png"
          width={700}
          height={1000}
          className="object-contain h-full w-full"
        />
        <div className=" absolute top-20 left-12">
          <SignIn />
        </div>
      </div>
    </>
  );
}
