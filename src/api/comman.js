
import { api, apiPic } from './endpoint';
export function getCountryList(callbackSuccess, callbackError) {
    api.get('/configuration/countries').then(result => {
        callbackSuccess(result.data);
    }).catch(error => {
        callbackError(error.response.data)
    })
}

export function getMovieGeners(callbackSuccess, callbackError) {
    api.get('/genre/movie/list').then(result => {
        callbackSuccess(result.data);
    }).catch(error => {
        callbackError(error.response.data)
    })
}

export function getTvGeners(callbackSuccess, callbackError) {
    api.get('/genre/tv/list').then(result => {
        callbackSuccess(result.data);
    }).catch(error => {
        callbackError(error.response.data)
    })
}

export function getLanguage(callbackSuccess, callbackError) {
    api.get('/configuration/languages').then(result => {
        callbackSuccess(result.data);
    }).catch(error => {
        callbackError(error.response.data)
    })
}

export function getTimeZone(callbackSuccess, callbackError) {
    api.get('/configuration/timezones').then(result => {
        callbackSuccess(result.data);
    }).catch(error => {
        callbackError(error.response.data)
    })
}

export function getCompanies(search, callbackSuccess, callbackError) {
    api.get('/search/company', {
        params: {
            query: search
        }
    }).then(result => {
        callbackSuccess(result.data);
    }).catch(error => {
        callbackError(error.response.data)
    })
}

export async function getSearchResult(page, query) {
    let result = await api.get('/search/company', {
        params: {
            query,
            page
        }
    });
    return result;
}

export async function getTrending(time = 'all', fream = 'week', page = 1) {
    let result = await api.get(`/trending/${time}/${fream}`, {
        params: {
            page
        }
    });
    return result;
}

export function getImage(path, size) {
    retun(apiPic + size + path);
}