import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

const BaseApi = axios.create({
    baseURL: process.env.baseURL,
    headers: {
        "Content-Type": "application/json",
    },
    validateStatus: () => {
        return true
    }
})

export default BaseApi;