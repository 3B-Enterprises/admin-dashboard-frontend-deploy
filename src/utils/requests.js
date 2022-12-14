import axios from "axios";

const url = "https://apifundacion-4gz3.onrender.com/api/v1/users";

export const loginuser = async (user,pass)=>{
    const data = {
        user:user,
        password:pass
    }
    try {
        const response = await axios.post("", data);
        return response;
    } catch (error) {
        return error.response.status;
    }

}
export const getChildren = async()=>{
    try {
        const res = await axios.get(`${url}/allUsers`)
        return res.data
    } catch (error) {
        return error.response.status;
    }
}

export const getChild = async(id)=>{
    try {
        const res = await axios.get(`${url}/get/${id}`);
        return res.data;
    } catch (error) {
        return error.response.status;
    }
}