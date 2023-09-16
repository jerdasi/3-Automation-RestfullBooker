import BaseApi from "./base.api.js";
import {buildQueryParams} from "$helper/lib-api.js";

const BookerApi = {
    login: async (data) => await BaseApi.post("/auth", data),
    getCollectionBooking: async (params) => await BaseApi.get("/booking", {params: buildQueryParams(params)}),
    getDocumentBooking: async (idBooking) => await BaseApi.get(`/booking/${idBooking}`),
    createBooking: async (data) => await BaseApi.post("/booking", data),
    updateBooking: async (idBooking, data, token) => await BaseApi.put(`/booking/${idBooking}?_method=PUT`, data, {
        headers: {
            "Cookie": `token=${token}`
        }
    }),
    partialUpdateBooking: async (idBooking, data, token) => await BaseApi.patch(`/booking/${idBooking}?_method=PATCH`, data, {
        headers: {
            "Cookie": `token=${token}`
        }
    }),
    deleteBooking: async (idBooking, token) => await BaseApi.delete(`/booking/${idBooking}`, {
        headers: {
            "Cookie": `token=${token}`
        }
    }),
    ping: async () => await BaseApi.get("/ping")
}

export default BookerApi;