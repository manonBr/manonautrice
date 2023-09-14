import React, { useEffect, useState } from "react"
import "./ToggleSwitch.features.scss"

const ToggleSwitch = () => {
    const [checkbox, setCheckbox] = useState()

    useEffect(() => {
        if(!localStorage.getItem("theme-preference")) {
            if (window.matchMedia('(prefers-color-scheme: light)').matches) {
                localStorage.setItem('theme-defaultSystem', 'light')
                setCheckbox('')
            } else {
                localStorage.setItem('theme-defaultSystem', 'dark')
                setCheckbox('checked')
            }
        } else if (localStorage.getItem("theme-preference") === "dark") {
            setCheckbox('checked')
        }
    }, [])

    const toggleTheme = () => {
        if(localStorage.getItem("theme-preference") === "light") {
            localStorage.setItem('theme-preference', 'dark')
            setCheckbox('checked')
        } else {
            localStorage.setItem('theme-preference', 'light')
            setCheckbox('')
        }
        window.dispatchEvent(new Event('theme-preference'))
    }
    
    // si (preference && preference === dark) || (!preference && system === dark)
    //  => checked

    return (
        <div className="toggleSwitch">
            <label className="toggleSwitch__container">
                <input type="checkbox" className="toggleSwitch__input" onClick={toggleTheme} checked={checkbox}/>
                <span className="toggleSwitch__slider"></span>
            </label>
        </div>
    )

}


export default ToggleSwitch