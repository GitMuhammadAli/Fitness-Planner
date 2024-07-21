import { useEffect, useState } from "react";
import {
  fetchCategories,
  fetchIndividualTypeWorkouts,
  fetchUpperLowerTypeWorkouts,
  fetchBodybuilderTypeSplitWorkouts,
  fetchBroSplitTypeWorkouts 
} from "../Api/index";

export function useFetchCategories() {
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

export function WorkoutindividualType() {
  const [individualType, setIndividualType] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchIndividualTypeWorkouts();
    const getIndividualType = async () => {
      try {
        const fetchIndividualType = await fetchIndividualTypeWorkouts();
        setIndividualType(fetchIndividualType.data);
      } catch (error) {
        setError(error.message);
      }
    };
    getIndividualType();
  }, []);
  return { individualType, error };
}

export function useFetchUpperLowerTypeWorkouts() {
  const [upperLowerType, setUpperLowerType] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUpperLowerType = async () => {
      try {
        const fetchUpperLowerType = await fetchUpperLowerTypeWorkouts();
        setUpperLowerType(fetchUpperLowerType.data);
      } catch (error) {
        setError(error.message);
      }
    };
    getUpperLowerType();
  }, []);

  return { upperLowerType, error };
}


export function useFetchBodybuilderSplitTypeWorkouts() {
  const [bodybuilderSplitType, setBodybuilderSplitType] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBodybuilderSplitType = async () => {
      try {
        const fetchBodybuilderSplitType = await fetchBodybuilderTypeSplitWorkouts();
        setBodybuilderSplitType(fetchBodybuilderSplitType.data);
      } catch (error) {
        setError(error.message);
      }
    };
    getBodybuilderSplitType();
  }, []);

  return { bodybuilderSplitType, error };
}


export function useFetchBroSplitTypeWorkouts() {
  const [broSplitType, setBroSplitType] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getBroSplitType = async () => {
      try {
        const fetchBroSplitType = await fetchBroSplitTypeWorkouts();
        setBroSplitType(fetchBroSplitType.data);
      } catch (error) {
        setError(error.message);
      }
    };
    getBroSplitType();
  }, []);

  return { broSplitType, error };
}