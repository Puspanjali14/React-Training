import React from 'react'
import{Routes, Route} from "react-router-dom"
import About from './About'
import Contact from './Contact'
import College from './College'
import Product from './Product'
import ProductCreate from './ProductCreate'
import DynamicRoute from './DynamicRoute'

const MyRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route path="/college" element={<College></College>}></Route>
            <Route path="/product" element={<Product></Product>}></Route>
            <Route path="/product/create" element={<ProductCreate></ProductCreate>}></Route>
            

            <Route
            path="/product/:id"
            element={<DynamicRoute></DynamicRoute>}
            >

            </Route>
            <Route
            path="/product/create"
            element={<ProductCreate></ProductCreate>}
            >

            </Route>
            

        </Routes>
      
    </div>
  )
}

export default MyRoutes
