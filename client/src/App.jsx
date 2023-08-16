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
   <div>
    <Header></Header>
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
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vulputate nisi nec purus volutpat, ac condimentum purus feugiat. Curabitur porta sem vel fringilla venenatis. Nulla et enim posuere, iaculis massa molestie, rhoncus mauris. Sed iaculis nunc non sapien pretium, pretium cursus tortor pellentesque. Morbi ultricies tortor vel ipsum maximus ultrices. Proin tincidunt ligula ac condimentum commodo. Integer non dui eget diam convallis consectetur et non orci. Vestibulum at lacus eu libero mollis tristique ut et lorem. Vivamus quis massa mattis, eleifend erat efficitur, molestie velit. Nunc eu mauris nec ligula finibus lacinia.</p>
    <p>Suspendisse tincidunt elit sem, quis ullamcorper eros congue in. Nam finibus ex ut augue dictum interdum. Nullam suscipit vestibulum viverra. Praesent a lacinia orci, et pretium neque. Donec sagittis eleifend ipsum ut interdum. Vestibulum dapibus egestas bibendum. Suspendisse fermentum nisl nec arcu faucibus cursus. Nulla eget velit vitae enim sollicitudin lacinia. Mauris ullamcorper quam enim. Quisque tempus mattis ligula ullamcorper aliquam.</p>
    <Footer></Footer>
   </div>
 )
}