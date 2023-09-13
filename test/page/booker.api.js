import BaseApi from "./base.api.js";
import {buildQueryParams} from "$helper/lib-api.js";

const BookerApi = {
    login: async (data) => await BaseApi.post("/login", data),
    getCollectionBooking: async (params) => await BaseApi.get("/booking", {params: buildQueryParams(params)}),
    getDocumentBooking: async (idBooking) => await BaseApi.get(`/booking/${idBooking}`),
    createBooking: async (data) => await BaseApi.post("/booking", data),
    updateBooking: async (idBooking, data) => await BaseApi.post(`/booking/${idBooking}?_method=PUT`, data),
    partialUpdateBooking: async (idBooking, data) => await BaseApi.post(`/booking/${idBooking}?_method=PATCH`, data),
    deleteBooking: async (idBooking) => await BaseApi.delete(`/booking/${idBooking}`),
    ping: async () => await BaseApi.get("/ping")
}

export default BookerApi;