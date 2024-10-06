import React from "react";
import InputItem from "./InputItem";

function ChercherSection() {
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
