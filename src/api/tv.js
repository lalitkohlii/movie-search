import { api } from './endpoint';
export async function getTv(id) {
    let result = await api.get(`/tv/${id}`);
    return result
}

export async function getTvCredit(id){
    let result = await api.get(`/tv/${id}/credits`);
    return result;
}

export async function getTvRecommend(id){
    let result = await api.get(`/tv/${id}/recommendations`);
    return result;
}

export async function getTvReviews(id){
    let result = await api.get(`/tv/${id}/reviews`);
    return result;
}

export async function getTvImages(id){
    let result = await api.get(`/tv/${id}/images`);
    return result;
}

export async function getTvSimilar(id){
    let result = await api.get(`/tv/${id}/similar`);
    return result;
}

export async function getTvProvider(id){
    let result = await api.get(`/tv/${id}/watch/providers`);
    return result;
}

export async function getTvVideo(id){
    let result = await api.get(`/tv/${id}/videos`);
    return result;
}