import axios from 'axios';

export const EDAMAM = axios.create({
  baseURL: `https://api.edamam.com/api/food-database/v2/`
})
