import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Accomodation from './pages/Accomodation'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { accomodationsLoader } from './components/Gallery'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={accomodationsLoader} />
      <Route path="logement/:id" element={<Accomodation />} />
      <Route path="a-propos" element={<About />} />
      <Route path="*" element={<NotFound />} />
      <Route path="404" element={<NotFound />} />
    </Route>
  )
)
