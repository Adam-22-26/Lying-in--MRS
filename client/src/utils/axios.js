
import Axios from "axios"
export const axios = Axios.create({
    baseURL: "http://localhost:4000/",
    headers: { 'Content-Type': 'application/json' },
})
