import axios from 'axios';

axios.defaults.baseURL = 'https://www.themoviedb.org/3/';

const API_KEY = 'a7e744545a90e8a389dfa0119353f0c2';

export const fetchTrending = async () => {
    const respons = await axios.get(`trending/movie/day?api_key=${API_KEY}`)
    return respons.data.results;
};

export const fetchSearchByKeyword = async keyword => {
    const respons = await axios.get(`search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1&query=${keyword}`);
    return respons.data.results;
};

export const fetchMovieDetails = async movieId => {
    const respons = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return respons.data;
}

export const fetchActors = async movieId => {
    const respons = await axios.get(`movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`);
    return respons.data.cast;
};

export const fetchReviews = async movieId => {
    const respons = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
    return respons.data.results;
};




