import react from 'react'
import axios from "../services/axios"

const fetchData = async (url) => {
    const data = await axios.get(url)
    return data
}

export default fetchData