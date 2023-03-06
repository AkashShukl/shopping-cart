import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './src/App'
import { store } from './src/redux/store'

const container = document.getElementById('root')
// const root = createRoot(container);
createRoot(container!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
// root.render(<App/>);
