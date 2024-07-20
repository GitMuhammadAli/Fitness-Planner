import { useEffect, useState } from "react";
import { fetchCategories } from "../Api/index";

export default function useFetchCategories() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchCategories();
    const getCategory = async () => {
      try {
        const fetchCategorie = await fetchCategories();
        setCategories(fetchCategorie.data);
      } catch (error) {
        setError(error.message);
      }
    };

    getCategory();
  }, []);
  return { categories, error };
}
