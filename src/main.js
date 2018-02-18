import { render } from 'react-dom'
import 'styles/global.css'
import App from './app.react'

// add new element as render point
let render_point = document.createElement("div")
    render_point.id = "app"
  
document.body.appendChild(render_point)

// plug react app to the render point
render(<App/>, render_point);


if (module.hot) {
  module.hot.accept('./app.react', () => {
    const App = require('./app.react').default;
    render(<App/>, render_point);
  });
}
