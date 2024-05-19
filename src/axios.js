import axios from 'axios';
import router from '@/router'; // Import Vue Router instance

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 10000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
    // You can add other headers here
  },
});

axiosInstance.interceptors.response.use(
  response => {
    // Return a successful response
    return response;
  },
  error => {
    // Handle response errors globally
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Error response status:', error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('Error request:', error.request);
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Error message:', error.message);

      // Redirect to error page route
      router.push('/error');
    }
    
    // Return a rejected Promise so that further .catch() blocks will catch this error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    // Redirect to error page route
    router.push('/error');

    // Prevent the error from propagating further
    return Promise.reject(error);
  }
);


export default axiosInstance;