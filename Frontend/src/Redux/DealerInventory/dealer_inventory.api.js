import axios from "axios"

const baseURL = "http://localhost:1001/MarketplaceInventory"
export const getall = ()=>{
    return axios.get(`${baseURL}/`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
}
export const getapi = ()=>{
    return axios.get(`${baseURL}/dealer`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
}
export const addapi = (payload)=>{
    console.log('payload:', payload)
    return axios.post(`${baseURL}/create`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
}
export const updateapi = (id,payload)=>{
    return axios.patch(`${baseURL}/update/${id}`,payload,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
}
export const deleteapi = (id)=>{
    return axios.delete(`${baseURL}/delete/${id}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': localStorage.getItem("token")
            }
        }
    )
}