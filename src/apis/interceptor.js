import store from '@/store/index';
import { EDAMAM } from './edamam';

export default function setup() {
  EDAMAM.interceptors.response.use(responseSuccesInterceptor, responseErrorInterceptor);
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