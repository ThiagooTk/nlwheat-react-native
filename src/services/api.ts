import axios from 'axios';
export const api = axios.create({
  baseURL: 'http://192.168.15.6:4000'
});

// ip da maquina + porta do backend