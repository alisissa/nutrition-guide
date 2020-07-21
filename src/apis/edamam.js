import axios from 'axios';

let params = {
  app_id: 'a964ef11',
  app_key: '8f4d505a189b4087ecd8e5abfcedcd20'
}

export const EDAMAM = axios.create({
  baseURL: `https://api.edamam.com/api/food-database/v2/`,
  params
})
