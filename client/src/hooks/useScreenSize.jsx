import React, { useState, useEffect } from "react"

export function useMobileSize() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768) 
    const handleWindowSizeChange = () => {
        setIsMobile(window.innerWidth < 768);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange)
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange)
        }
    }, [])

    return isMobile
}