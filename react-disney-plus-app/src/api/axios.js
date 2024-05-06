import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "59ec4b0eb5be8342b7b4f7203010e544",
        language: "ko-KR"
    }
})

export default instance;