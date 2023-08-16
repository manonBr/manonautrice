import React from "react"
import {Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Tools from "./pages/Tools"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import "./App.scss"
import Button from "./features/forms/button.features"
import {Columns, Column} from "./layouts/Columns.layouts"

 
export default function App() {
 return (
   <>
    <Header></Header>
    <div className="main container">
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/ressources' element={<Tools/>}/>
          <Route path='/projets' element={<Projects/>}/>
      </Routes>


        
      <Columns number="three">
        <Column>
          <Button type="secondary" link="#">Btn secondaire</Button>
        </Column>
        <Column>
          <Button type="secondary" link="#">Btn secondaire</Button>
        </Column>
        <Column>
          <Button type="secondary" link="#">Btn secondaire</Button>
        </Column>
      </Columns>
      <Columns number="two">
        <Column>
          <Button type="primary" link="#">Btn primaire</Button>
        </Column>
        <Column>
          <Button type="primary" link="#">Btn primaire</Button>
        </Column>
      </Columns>
      <Columns number="two" layout="leftBigger">
        <Column>
          <Button type="primary" link="#">Btn primaire</Button>
        </Column>
        <Column>
          <Button type="primary" link="#">Btn primaire</Button>
        </Column>
      </Columns>
    </div>
    <Footer></Footer>
   </>
 )
}