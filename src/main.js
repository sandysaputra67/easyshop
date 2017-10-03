import { render } from 'react-dom'
import 'styles/global.css'
import App from './app.react'

// add new element as render point
$('body').append('<div id="app"></div>')

// plug react app to the render point
var render_point = document.getElementById('app');
render(<App/>, render_point);


if (module.hot) {
  module.hot.accept('./app.react', () => {
    const App = require('./app.react').default;
    render(<App/>, render_point);
  });
}
