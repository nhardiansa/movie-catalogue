import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';

console.log('Hello Coders!');

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  content: document.querySelector('#mainContent'),
  drawer: document.querySelector('#navigationDrawer'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
