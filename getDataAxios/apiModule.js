import axios from "axios";

const BASE_URL ="https://jsonplaceholder.typicode.com/posts";

//get all Data
export async function getData() {
    try {
        const res = await axios.get(BASE_URL);
        return res.data;
    } catch (error) {
        throw new Error(`Gagal mengambil data: ${error.message}`);
    }
}

export async function getPostById(post_id) {
    try {
        const res = await axios.get(`${BASE_URL}/${post_id}`);
        return res.data;
    } catch (error) {
        throw new Error(`Gagal mengambil data: ${error.message}`);
    }
}

