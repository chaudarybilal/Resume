import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Header from "./Header";
import { ThemeContext } from "./ThemeContext";
import { createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import Footer from "./Footer";

const App = () => {
  const[theme,setTheme]=useState("light");
  const toggleTheme=()=>{
    const newTheme=theme==="light"?"dark":"light";
    setTheme(newTheme)
  }
  const muitheme=createTheme({
    palette:{
      mode:theme,
      primary:{
        main:"#F5F5F5"

      },
    secondary:{
      main:"#F5F5F5"
    },    },
  })


  return (
    <>
      <ThemeProvider theme={muitheme}>
        <ThemeContext.Provider value={{theme, toggleTheme}}>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project" element={<Project />} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </ThemeContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
