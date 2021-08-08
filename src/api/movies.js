import { api } from './endpoint';
export async function getMovie(id) {
    let result = await api.get(`/movie/${id}`);
    return result
}

export async function getMovieCredit(id){
    let result = await api.get(`/movie/${id}/credits`);
    return result;
}

export async function getMovieRecommend(id){
    let result = await api.get(`/movie/${id}/recommendations`);
    return result;
}

export async function getMovieReviews(id){
    let result = await api.get(`/movie/${id}/reviews`);
    return result;
}

export async function getMovieImages(id){
    let result = await api.get(`/movie/${id}/images`);
    return result;
}

export async function getMovieSimilar(id){
    let result = await api.get(`/movie/${id}/similar`);
    return result;
}

export async function getMovieProvider(id){
    let result = await api.get(`/movie/${id}/watch/providers`);
    return result;
}

export async function getMovieVideo(id){
    let result = await api.get(`/movie/${id}/videos`);
    return result;
}