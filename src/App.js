import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import About from "./components/About"
import Blog from "./components/Blog"
import Contact from "./components/Contact"
import Project from "./components/Project"




const App = () => {

  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path ="/" element={<Home/>}/>
    <Route path ="about" element={<About/>}/>
    <Route path ="/blog" element={<Blog/>}/>
    <Route path ="/contact" element={<Contact/>}/>
    <Route path ="/project" element={<Project/>}/>
  </Routes>
</BrowserRouter>

    </>
  )
}

export default App
