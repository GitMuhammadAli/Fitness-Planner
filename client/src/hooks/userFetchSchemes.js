import { useEffect, useState } from "react";
import { fetchScheme } from "../Api/index";

export default function useFetchScheme() {
  const [schemes, setSchemes] = useState([]);
  const [Schemeerror, setSchemeError] = useState(null);

  useEffect(() => {
    const getSchemes = async () => {
      try {
        const response = await fetchScheme();
        setSchemes(response.data);
      } catch (error) {
        setSchemeError(error.message);
      }
    };

    getSchemes();
  }, []);

  return { schemes, error: Schemeerror };
}
