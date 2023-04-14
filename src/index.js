import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//import App from './App'
import './styles/index.scss'
import Home from './pages/Home'
import Accomodation from './pages/Accomodation'
import About from './pages/About'
import Error from './pages/Error'
import Header from './components/Header'

// import './index.css';
// import reportWebVitals from './reportWebVitals';

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Logement/:id" element={<Accomodation />} />
        <Route path="/A-propos" element={<About />} />
        <Route path="/Erreur" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

//Autre solution avec composant App

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
