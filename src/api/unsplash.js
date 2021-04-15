import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization : 'Client-ID wYeknek3eJEngeMVaeaWkDXZ74Qs5vTIIItxc_OOw4E'
    }
});