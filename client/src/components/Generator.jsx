import React, { useEffect, useState } from "react";
import axios from "axios";
import SectionWrapper from "./SectionWrapper";

function Header(props) {
  const { index, title, description } = props;
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-2">
        <p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#8d7c7c]">{index}</p>
        <h4 className="text-xl sm:text-2xl md:text-2xl">{title}</h4>
      </div>
      <p className="text-sm sm:text-base mx-auto">{description}</p>
    </div>
  );
}

export default function Generator() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:9000/workoutsCategory', { withCredentials: true })
      .then(response => setCategories(response.data))
      .catch(err => setError(err.message));
  }, []);

  if (error) return <p>Error fetching categories: {error}</p>;

  return (
    <SectionWrapper header={"Produce Your WorkOut"} title={["It's", "Huge ", "o'clock "]}>
      <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to endure."} />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 " >
        {categories.map((cat, index) => (
          <button className=" bg-neutral-950 border-[#946f6f] border border-solid py-4 rounded-lg  text-sm sm:text-base text-[#946f6f] hover:bg-[#946f6f] hover:text-neutral-950 transition-colors duration-300"
          key={index}>
              <p className="capitalize ">{cat.category.replaceAll("_", " ")}</p>
            
          </button>
        ))}
      </div>
    </SectionWrapper>
  );
}
