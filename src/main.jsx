import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root'
import AddCoffee from './components/AddCoffee'
import UpdateCoffee from './components/UpdateCoffee'
import Coffee from './components/Coffee'
import CoffeDetail from './components/CoffeeDetail'



const router = createBrowserRouter([
  {
    path:'/',
    element:<Root />,
    children:[
      {
        path:'/',
        element:<Coffee />,
        loader: () => fetch('http://localhost:5000/coffees')
      }
    ]
  },
  {
    path: 'addCoffee',
    element:<AddCoffee />
  },
  {
    path: 'updateCoffee/:id',
    element:<UpdateCoffee />,
    loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path:'coffee/:id',
    element:<CoffeDetail />,
    loader:({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
