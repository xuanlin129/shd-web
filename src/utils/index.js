import { getOutlet } from 'reconnect.js';
import router from '../router';

const LoadingOutlet = getOutlet('loading');

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function setLoading(loading, params) {
  const { message = '' } = params || {};
  setTimeout(() => {
    LoadingOutlet.update({ loading: loading, message: message });
  }, 0);
}

async function navigate(path) {
  if (router.state.location.pathname === path) {
    console.log('path not changed');
    return;
  }
  setLoading(true);
  await delay(500);
  router.navigate(path);
  setLoading(false);
}

export { delay, setLoading, navigate };
