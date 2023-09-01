import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// let counter = 1
// const refresh = () => {
//   ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//       <App counter={counter}/>
//     </React.StrictMode>,
//   )
// }
// setInterval(() => {
//   refresh()
//   counter+=1
// }, 1000)