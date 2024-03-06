import React from 'react'
import './App.css';

import { Route , Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Page from './pages/page/Page';
import PageOne from './pages/pageOne/pageOne';

const App = () => {
  return (
    <div>
     <Routes>
       <Route path='/' element={<Layout />}>
         <Route path='/' element={<Page />} /> 
         <Route path='/page-one' element={<PageOne />} />
       </Route>
     </Routes>
    </div>
  )
}

export default App
