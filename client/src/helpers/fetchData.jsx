import react from 'react'
import axios from "./axios"

const fetchData = async (url) => {
    const data = await axios.get(url)
    return data
}

export default fetchData