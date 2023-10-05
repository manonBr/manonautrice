import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import {Routes, Route, Navigate} from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Tools from "./pages/tools/Tools"
import WebsiteTools from "./pages/tools/WebsiteTools"
import Legals from "./pages/Legals"
import Privacy from "./pages/Privacy"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./App.scss"
import Project from "./pages/Project"
import NotFound from "./pages/redirect/NotFound"
import ErrorServer from "./pages/redirect/ErrorServer"
import ToggleSwitch from "./features/elements/ToggleSwitch.features"

export const CursorContext = React.createContext();
 
export default function App() {
  const cursor = useRef()
  const [theme, setTheme] = useState()


  useEffect(() => {
    const handleMouseMove = (e) => {
      cursor.current.style.left = e.clientX + "px"
      cursor.current.style.top = e.clientY + "px"
    }
    document.addEventListener("mousemove", handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    setTheme(localStorage.getItem("theme-preference") || localStorage.getItem("theme-defaultSystem") || "light")
  }, [])

  useEffect(() => {
    window.addEventListener("theme-preference", (e) => {
      setTheme(localStorage.getItem("theme-preference") || light)
    })
  }, [])

  return (
    <>
      <CursorContext.Provider value={cursor}>
        <div className={`app ${theme}-mode`}>
          <Header>
            <ToggleSwitch></ToggleSwitch>
          </Header>
          <div className="main container">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/ressources' element={<Tools/>}/>
              <Route path='/ressources/site-internet' element={<WebsiteTools/>}/>
              <Route path='/ressources/:name' element={<Tools/>}/>
              <Route path='/projets' element={<Projects/>}/>
              <Route path='/projets/:name' element={<Project/>}/>
              <Route path='/mentions-legales' element={<Legals/>}/>
              <Route path='/politique-confidentialite' element={<Privacy/>}/>
              <Route path='/404' element={<NotFound/>}/>
              <Route path='/500' element={<ErrorServer/>}/>
              <Route path='*' element={<Navigate to="/404" />} />
            </Routes>
          </div>
          <Footer></Footer>
          <div id="cursor" ref={cursor}></div>
        </div>
      </CursorContext.Provider>
    </>
  )
}