import React from 'react'

function Schemes({Schemes})  {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
      {Schemes.map((cat, index) => (
        <button
          className="bg-neutral-950 border-[#946f6f] border border-solid py-4 rounded-lg text-sm sm:text-base text-[#946f6f] hover:bg-[#946f6f] hover:text-neutral-950 transition-colors duration-300"
          key={index}
          onClick={() => onCategorySelect(cat.name)}
        >
          <p className="capitalize">{cat.name.replaceAll("_", " ")}</p>
        </button>
      ))}
    </div>
  )
}

export default Schemes