import axios from "axios"
const baseURL = "http://localhost:1001"
export const registerapi = (payload)=>{
    return axios.post(`${baseURL}/dealer/register`,payload)
}
export const loginapi = (payload)=>{
    return axios.post(`${baseURL}/dealer/login`,payload)
}