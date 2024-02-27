import React from 'react'
import Contentwrapper from './components/Contentwrapper'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Productlist from './components/Productlist';
import Singleproduct from './components/SingleProduct/Singleproduct';
const App = () => {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Contentwrapper/>} />
     <Route path="/product" element={<Productlist/>} />
     <Route path="/productdetails" element={<Singleproduct/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App