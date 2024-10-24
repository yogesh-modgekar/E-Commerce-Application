
import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './components/Error.jsx'
import { Provider } from 'react-redux'
import store from './Redux/store.js'

// Code splitting and Lazy loading using React.lazy()
const ProductList = React.lazy(()=>import('./components/ProductList')) ;
const Product = React.lazy(()=>import('./components/Product')) ;
const Cart = React.lazy(()=>import('./components/Cart')) ;
const Checkout = React.lazy(()=>import('./components/Checkout'))

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <ProductList/>
      },
      {
        path: '/cart',
        element: <Cart/>
      },
      {
        path : '/product/:id',
        element : <Product/>
      },
      {
        path: '/checkout',
        element : <Checkout/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>,
)
