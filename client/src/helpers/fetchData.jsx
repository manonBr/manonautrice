import react from 'react'
import axios from "../services/axios"

const fetchData = async (url) => {
    try {
        const data = await axios.get(url)
        return data
    } catch (e) {
        if(window.location.pathname !== '/500') {
            window.location.href = '/500'
        }
        console.error(e)
    }
}

export default fetchData