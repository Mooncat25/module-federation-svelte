import './app.css'
import App from './App.svelte'
import { initFederation } from '@softarc/native-federation'

(async () => {
  await initFederation({
		'remote': 'http://localhost:4174/remoteEntry.json'
  });
  
  const app = new App({
    target: document.getElementById('app')!,
  })
})();