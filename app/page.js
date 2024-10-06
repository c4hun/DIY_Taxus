import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import ChercherSection from "../components/Home/ChercherSection";
import GoogleMapSection from "../components/Home/GoogleMapSection";

export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
        <ChercherSection />
      </div>
      <div className="col-span-2">
        <GoogleMapSection />
      </div>
    </div>
  );
}
