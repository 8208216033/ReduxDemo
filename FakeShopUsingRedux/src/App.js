import React from 'react'
import Header from './container/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import ProductListing from './container/ProductListing'
import ProductDetails from './container/ProductDetails'

const App = () => {
  return (
   <>
   <Router>
   <Header/>
     <Routes>
      
     <Route exact path="/" element={< ProductListing />}/>
     <Route exact path="/product/:productId" element={< ProductDetails />}/>
     <Route>404 not found</Route>
     </Routes>
   
   </Router>
   
   
   </>
  )
}

export default App

//npm i redux react-redux,npm i axios,npm i react-router-dom
//fakestoreapi.com ,view details on document url:'https://fakestoreapi.com/products'
