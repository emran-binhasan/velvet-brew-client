import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import Coffee from './components/Coffee';
import CoffeDetail from './components/CoffeeDetail';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './PrivateRoute';
import Users from './components/Users';

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    return await res.json(); // Return JSON if successful
  } catch (error) {
    console.error('Fetch error:', error); // Log the error for debugging
    return []; // Return empty array on error
  }
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Coffee />,
        loader: () => fetchData('http://localhost:5000/coffees'),
      },
    ],
  },
  {
    path: 'addCoffee',
    element: <AddCoffee />,
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee />,
    loader: ({ params }) => fetchData(`http://localhost:5000/coffees/${params.id}`),
  },
  {
    path: 'coffee/:id',
    element: <CoffeDetail />,
    loader: ({ params }) => fetchData(`http://localhost:5000/coffees/${params.id}`),
  },
  {
    path:'/login',
    element:<Login />
  },
  {
    path:'/register',
    element:<Register />
  },
  {
    path:'/users',
    element:<PrivateRoute><Users/></PrivateRoute>,
    loader:()=>fetch(`http://localhost:5000/users`)
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
