const axios = require('axios');
export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
    }
});

export const apiPic = 'https://image.tmdb.org/t/p';
export const fallback = 'https://via.placeholder.com/500X500.png?text=No+Image+Found';


//backdrop_sizes
export const BDS1 = '/w300';
export const BDS2 = '/w780';
export const BDS3 = '/w1280';
export const BDS_O = '/original';

//logo_sizes
export const LG1 = '/w45';
export const LG2 =  '/w92';
export const LG3 = '/w154';
export const LG4 = '/w185';
export const LG5 = '/w300';
export const LG6 = '/w500';
export const LG_O = '/original';

//poster_sizes
export const PS1 = '/w92';
export const PS2 = '/w154';
export const PS3 = '/w185';
export const PS4 = '/w342';
export const PS5 = '/w500';
export const PS6 = '/w780';
export const PS_O = '/original';

//profile_sizes
export const PP1 = '/w45';
export const PP2 = '/w185';
export const PP3 = '/h632';
export const PP_O = '/original';
