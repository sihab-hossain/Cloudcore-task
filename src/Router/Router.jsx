import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import Layout from "../Layout/Layout";


  const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children:[
          {
            path: "/",
            element: <Home></Home>
          },{
          path: "/product/:id",
          element:<ProductDetails></ProductDetails>
        }]
    }
  ])

  export default router;