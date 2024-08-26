import axios from "axios";

const BASE_URL = 'http://localhost:9000';

export const fetchCategories = () => {
  return axios.get(`${BASE_URL}/workoutsCategory`, { withCredentials: true });
};

export const fetchScheme = () => {
  return axios.get(`${BASE_URL}/workoutsSchemes`, { withCredentials: true });
};

export const fetchIndividualTypeWorkouts = () => {
  return axios.get(`${BASE_URL}/individualType`, { withCredentials: true });
};

export const fetchBroSplitTypeWorkouts = () => {
  return axios.get(`${BASE_URL}/broSplitWorkouts`, { withCredentials: true });
};

export const fetchBodybuilderTypeSplitWorkouts = () => {
  return axios.get(`${BASE_URL}/bodybuilderSplitWorkouts`, { withCredentials: true });
};

export const fetchUpperLowerTypeWorkouts = () => {
  return axios.get(`${BASE_URL}/upperLowerWorkouts`, { withCredentials: true });
};

export const fetchExercises = () => {
  return axios.get(`${BASE_URL}/exercises`, { withCredentials: true });
};

export const senddata = (data) => {
  return axios.post(`${BASE_URL}/data`, data, { withCredentials: true });
};

export const ProceedData = (data) => {
  return axios.post(`${BASE_URL}/data`, data, { withCredentials: true });
};