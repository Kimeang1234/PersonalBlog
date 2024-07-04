import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:1337/api',
});

export const fetchArticles = async () => {
        const response = await api.get('/articles');
        return response.data.data; 
};