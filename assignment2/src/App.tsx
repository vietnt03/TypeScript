import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import Layout from './components/admin/AdminLayout';
import UserLayout from './components/userLayout';
import Edit from './components/admin/page/edit';
import Home from './pages/home';
import Productsdetail from './components/Productsdetail';

import Productlist from './components/admin/page/Product list';
import Add from './components/admin/page/add';

function App() {
  

  return <BrowserRouter>
    <Routes>
    <Route path="Signup" element={<Signup />} />
    <Route path="signin" element={<Signin />} />

      <Route path='/' element={<UserLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='Productsdetail/:id' element={<Productsdetail/>} />
      </Route>

      <Route path='/admin' element={<Layout/>}>
        <Route index path='/admin' element={<Productlist/>}/>
        <Route path='edit/:id' element={<Edit/>}/>
        <Route path='add' element={<Add/>}/>
      </Route>
     
    </Routes>
  </BrowserRouter>
}
export default App

