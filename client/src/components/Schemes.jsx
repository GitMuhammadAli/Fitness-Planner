import React, { useState } from 'react';

function Schemes({ Schemes, sendSchemes , selectedScheme, setSelectedScheme }) {
  const [Scheme, setScheme] = useState(null);

  const onCategorySelect = (e) => {
    const selected = Schemes.find(scheme => scheme.name === e);
    setScheme(selected);
    sendSchemes(selected.name);
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {Schemes.map((cat, index) => (
        <button
        className={`border-[#946f6f] border border-solid py-4 rounded-lg text-sm sm:text-base transition-all duration-150 ease-in-out focus:outline-none ${
          selectedScheme === cat.name
            ? "bg-[#946f6f] text-neutral-950"
            : "bg-neutral-950 text-[#946f6f] hover:bg-[#946f6f] hover:text-neutral-950 active:bg-[#7a5c5c] active:text-white"
        }`}
        key={index}
        onClick={() => {
          onCategorySelect(cat.name);
          setSelectedScheme(cat.name); 
        }}
        >
          <p className="capitalize">{cat.name.replaceAll("_", " ")}</p>
        </button>
      ))}




    </div>
  );
}

export default Schemes;
