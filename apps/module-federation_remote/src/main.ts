import './app.css'
import App from './App.svelte'
import { initFederation } from '@softarc/native-federation';

(async () => {
  await initFederation();

  const app = new App({
    target: document.getElementById('app')!,
  })

})();