import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Tools from "./pages/Tools"
import NotionTools from "./pages/tools/NotionTools"
import WebsiteTools from "./pages/tools/WebsiteTools"
import CharactersTools from "./pages/tools/CharactersTools"
import Legals from "./pages/Legals"
import Privacy from "./pages/Privacy"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./App.scss"

 
export default function App() {
 return (
   <>
    <Header></Header>
    <div className="main container">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ressources' element={<Tools/>}/>
          <Route path='/ressources/templates-notion' element={<NotionTools/>}/>
          <Route path='/ressources/fiches-personnages' element={<CharactersTools/>}/>
          <Route path='/ressources/site-internet' element={<WebsiteTools/>}/>
          <Route path='/projets' element={<Projects/>}/>
          <Route path='/mentions-legales' element={<Legals/>}/>
          <Route path='/politique-confidentialite' element={<Privacy/>}/>
      </Routes>
    </div>
    <Footer></Footer>
   </>
 )
}