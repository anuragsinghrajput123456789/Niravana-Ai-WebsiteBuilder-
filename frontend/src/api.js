import axios from 'axios';

const getBaseURL = () => {
    const rawUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
    // Remove trailing slash
    const cleanUrl = rawUrl.replace(/\/$/, "");
    // Ensure /api is at the end if it's not already there
    return cleanUrl.endsWith('/api') ? cleanUrl : `${cleanUrl}/api`;
};

const API = axios.create({
    baseURL: getBaseURL(),
});

// Add a request interceptor to include the token in headers
API.interceptors.request.use((req) => {
    if (localStorage.getItem('token')) {
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    }
    return req;
});

export const login = (formData) => API.post('/auth/login', formData);
export const signup = (formData) => API.post('/auth/signup', formData);

export const getChats = () => API.get('/chat');
export const saveChat = (chatData) => API.post('/chat', chatData);
export const deleteChat = (id) => API.delete(`/chat/${id}`);
export const generateWebsite = (prompt, currentCode) => API.post('/ai/generate', { prompt, currentCode });

export default API;
