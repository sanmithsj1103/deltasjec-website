import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import { PAGES } from './data.js';

// Every load or refresh starts at the top: no browser scroll restore, and no #section jump
// (a sub-page hash such as #media is kept so that page still opens)
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
const h = window.location.hash.slice(1);
if (h && !PAGES[h]) history.replaceState(null, '', window.location.pathname + window.location.search);
window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

// Enables the "hidden until animated" starting states in the CSS
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);