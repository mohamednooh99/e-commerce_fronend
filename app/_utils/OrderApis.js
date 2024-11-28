
const { default: axiosClient } = require("./axiosClient");

const createOrder = (data)=>axiosClient.post('/orders',data)
.catch((error) => {
    console.error('Error fetching latest products:', error.response || error.message);
    throw error;  // Re-throw the error for the caller to handle
  });

export default {
    createOrder 
} 