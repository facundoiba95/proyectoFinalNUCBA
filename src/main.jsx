import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/app/store'
import { ApiContextProvider } from './context/ApiContext'


ReactDOM.createRoot(document.getElementById('root')).render(
   <ApiContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
   </ApiContextProvider>
)
