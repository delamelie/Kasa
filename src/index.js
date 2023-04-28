import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom'
//import App from './App'
import './styles/index.scss'
import Layout from './components/Layout'
import Home from './pages/Home'
import Accomodation, { testLoader } from './pages/Accomodation'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { accomodationsLoader } from './components/Gallery'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={accomodationsLoader} />
      <Route
        path="logement/:id"
        element={<Accomodation />}
        // loader={testLoader}
        errorElement={<NotFound />}
      />
      <Route path="a-propos" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="404" element={<NotFound />} />
    </Route>
  )
)

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// )

export default function App() {
  return <RouterProvider router={router} />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
