import axios from "axios";

export const fetchCategories = () => {
  return axios.get('http://localhost:9000/workoutsCategory', { withCredentials: true });
};

export const fetchScheme = () => {
  return axios.get('http://localhost:9000/workoutsSchemes', { withCredentials: true });
};

export const fetchIndividualTypeWorkouts = () => {
  return axios.get('http://localhost:9000/individualType', { withCredentials: true });
};

export const fetchBroSplitTypeWorkouts = () => {
  return axios.get('http://localhost:9000/broSplitWorkouts', { withCredentials: true });
};

export const fetchBodybuilderTypeSplitWorkouts = () => {
  return axios.get('http://localhost:9000/bodybuilderSplitWorkouts', { withCredentials: true });
};

export const fetchUpperLowerTypeWorkouts = () => {
  return axios.get('http://localhost:9000/upperLowerWorkouts', { withCredentials: true });
};

export const fetchExercises = () => {
  return axios.get('http://localhost:9000/exercises', { withCredentials: true });
};

export const senddata = (data) => {
  return axios.post('http://localhost:9000/data', data, { withCredentials: true });
};



export const ProceedData = (data) => {
  return axios.post('http://localhost:9000/data', data, { withCredentials: true });
};