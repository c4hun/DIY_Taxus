import React from "react";
import Image from "next/image";

function InputItem({ type }) {
  return (
    <div className="bg-slate-400 p-3 rounded-lg mt-3 flex items-center gap-4">
      <Image
        src={type == "source" ? "/source.png" : "/dest.png"}
        width={27}
        height={27}
      />
      <input
        type="text"
        placeholder={type == "source" ? "Ma location" : "Votre destination"}
        className="bg-transparent w-full outline-none"
      />
    </div>
  );
}

export default InputItem;
