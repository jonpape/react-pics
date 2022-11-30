import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID tTh2XfsAFn0tlMcm5YOw_jJN1BEAPXYKJIgPMixOflo'
        },
        params: { 
            query: 'term' ,
        },
    });

    return response.data.results;
}

export default searchImages;