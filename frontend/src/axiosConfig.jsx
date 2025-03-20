import axios from 'axios';

const axiosInstance = axios.create({
  //aseURL: 'http://localhost:5001', // local
  baseURL: 'http://13.239.115.138:5001', // live
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
