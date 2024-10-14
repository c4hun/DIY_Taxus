"use client";
import React, { useContext, useEffect } from "react";
import InputItem from "./InputItem";
import { SourceContext } from "@/context/SourceContext";
import { DestinationContext } from "@/context/DestinationContext";

function ChercherSection() {
  const { source, setSource } = useContext(SourceContext);
  const { destination, setDestination } = useContext(DestinationContext);

  useEffect(() => {
    if (source) {
      console.log(source);
    }
    if (destination) {
      console.log(destination);
    }
  }, [source, destination]);
  return (
    <div className="p-3 md:p-6 border-[3px] rounded-xl">
      <p className="text-[33px] font-bold">Chercher un taxi</p>
      <InputItem type="source" />
      <InputItem type="Votre destination" />

      <button className="p-3 bg-violet-600 w-full mt-7 text-white rounded-lg">
        Tout de suite
      </button>
    </div>
  );
}

export default ChercherSection;
