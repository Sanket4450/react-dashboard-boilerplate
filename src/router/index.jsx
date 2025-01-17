import { About } from '../pages/About'
import { Home } from '../pages/Home'
import { Products } from '../pages/Products'
import { Profile } from '../pages/Profile'
import { Reviews } from '../pages/Reviews'

export const routes = [
  { path: '/', label: 'Home', component: <Home /> },
  { path: '/about', label: 'About', component: <About /> },
  { path: '/products', label: 'Products', component: <Products /> },
  { path: '/reviews', label: 'Reviews', component: <Reviews /> },
  { path: '/profile', label: 'Profile', component: <Profile /> },
]
