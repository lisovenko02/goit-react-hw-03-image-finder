import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/'

export const fetchImg = async (query, page) => {
    
    const response = await axios.get('/', {
        params: {
            page: page,
            q: query,
            key:'36111500-2a8534ecb674080aefbef4ca6',
            image_type: 'photo',
            orientation: 'horizontal',
            per_page: 12,
        }
    })
    
    return response.data
};

