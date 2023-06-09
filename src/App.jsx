import { Children, useState } from 'react'
import './App.scss'
import { createBrowserRouter,RouterProvider,Route ,Outlet} from 'react-router-dom'
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
function App() {
  const Layout=()=>{
    return(
      <div className='app'>
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    )
  }
  const router=createBrowserRouter([ {
    path:'/',
    element: <Layout />,
    children:[
{
  path:'/',
  element: <Home />
},
{
  path:'/products/:id',
  element: <Products />
},
{
  path:'/product/:id',
  element: <Product /> 
}
    ]
  },])

  return (
    <div className="Appppp">
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
