import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Tools from "./pages/Tools"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./App.css"

 
export default function App() {
 return (
   <div>
    <Header></Header>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/ressources' element={<Tools/>}/>
        <Route path='/projets' element={<Projects/>}/>
    </Routes>
    Hello world !
    <Footer></Footer>
   </div>
 )
}