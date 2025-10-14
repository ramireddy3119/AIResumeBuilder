import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import ResumeBuilder from './pages/ResumeBuilder'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Preview from './pages/Preview'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      
      <Route path='app' element={<Layout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path='builder/:resumeId' element={<ResumeBuilder/>}/>
      </Route>

      <Route path='view/:resumeId' element={<Preview/>}/>
      
      <Route path='login' element={<Login/>}/>

    </Routes>
  )
}

export default App