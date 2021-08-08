import { api } from './endpoint';
export async function getPerson(id) {
    let result = await api.get(`/person/${id}`);
    return result
}

export async function getPersonCredit(id){
    let result = await api.get(`/person/${id}/combined_credits`);
    return result;
}

export async function getPersonCreditMovie(id){
    let result = await api.get(`/person/${id}/movie_credits`);
    return result;
}

export async function getPersonCreditTv(id){
    let result = await api.get(`/person/${id}/tv_credits`);
    return result;
}

export async function getPersonImages(id){
    let result = await api.get(`/person/${id}/images`);
    return result;
}
