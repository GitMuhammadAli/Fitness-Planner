
import axios from "axios";

export const fetchCategories = () => {
  return axios.get('http://localhost:9000/workoutsCategory', { withCredentials: true });
};
