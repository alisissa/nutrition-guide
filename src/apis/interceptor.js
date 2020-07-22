import store from '@/store/index';
import { EDAMAM } from './edamam';

export default function setup() {
  EDAMAM.interceptors.response.use(responseSuccesInterceptor, responseErrorInterceptor);
  EDAMAM.interceptors.request.use(config => {
    config.params = {
      app_id: 'a964ef11',
      app_key: '8f4d505a189b4087ecd8e5abfcedcd20',
      ...config.params,
    };
    return config;
  })
}

export function responseSuccesInterceptor(response) {
  return response;
}

export function responseErrorInterceptor(err) {
  let error;
  error = { title: err.response && (err.response.data || err.reponse && err.response.statusText) }
  store.dispatch('setError', error);
  return err;
}