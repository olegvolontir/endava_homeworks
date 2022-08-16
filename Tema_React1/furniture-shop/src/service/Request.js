import axios from "axios";

const BASE_REQUEST_URL = 'http://localhost:3000';

export const fetchFurniture = () => {
    return axios.get(`${BASE_REQUEST_URL}/furniture`).then((res) => res.data);
};