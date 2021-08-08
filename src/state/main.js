import { atom } from "recoil";

export const error = atom({
    key: 'error',
    default: null
});

export const mode = atom({
    key: 'mode',
    default: 'dark'
});

export const siteNmae = atom({
    key: 'siteNmae',
    default: 'MovieTvSearch'
});

export const menuOpen = atom({
    key: 'menuOpen',
    default: false
});

export const locale = atom({
    key: 'locale',
    default: null
});