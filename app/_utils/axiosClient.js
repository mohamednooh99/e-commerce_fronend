const { default: axios } = require("axios");


const apiKey=process.env.NEXT_PUBLIC_REST_API_KEY;
const apiUrl='https://e-commercebakend-production.up.railway.app/api';

const axiosClient = axios.create({
   baseURL:apiUrl ,
   headers:{
    Authorization:`Bearer ${apiKey}`
   }
})

axiosClient.interceptors.response.use(
   response => response,
   error => {
     console.error("API Request Error: ", error.response || error.message);
     return Promise.reject(error);
   }
 );

export default axiosClient

