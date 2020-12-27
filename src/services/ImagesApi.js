import axios from 'axios';

const fetchImagesWithQuery = (searchQuery, page = 1)  => {
    const baseUrl = 'https://pixabay.com/api/';
    const apiKey = '18838067-90d811c5126886249211760e4';
    const url = `${baseUrl}?q=${searchQuery}&page=${page}&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`;
    
    return axios
        .get(url)
        .then(response => response.data.hits)
};

const fetchImages = {fetchImagesWithQuery}

export default fetchImages;
