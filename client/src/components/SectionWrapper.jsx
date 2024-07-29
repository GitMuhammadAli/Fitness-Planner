import React, { Children, useState } from "react";

export default function SectionWrapper(props) {
  const { id , children, header, title } = props;
  return (
    <section className="min-h-screen flex flex-col gap-10 " id={id} >
      <div className="bg-neutral-950 py-10 gap-4  flex flex-col justify-center items-center p-4">
        <p className="uppercase font-medium">{header}</p>
        <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
          {title[0]} <span className="text-[#946f6f]">{title[1]}</span>
          {title[2]}
        </p>
      </div>
      <div className="flex flex-col gap-10 p-4 max-w-[800px] w-full mx-auto"> 

        {children}
      </div>
    </section>
  );
}
