"use client";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { SourceContext } from "@/context/SourceContext";
import { DestinationContext } from "@/context/DestinationContext";
import ChercherSection from "../components/Home/ChercherSection";
import GoogleMapSection from "../components/Home/GoogleMapSection";
import { useState } from "react";

export default function Home() {
  const [source, setSource] = useState([]);
  const [destination, setDestination] = useState([]);
  return (
    <SourceContext.Provider value={{ source, setSource }}>
      <DestinationContext.Provider value={{ destination, setDestination }}>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <ChercherSection />
          </div>
          <div className="col-span-2">
            <GoogleMapSection />
          </div>
        </div>
      </DestinationContext.Provider>
    </SourceContext.Provider>
  );
}
