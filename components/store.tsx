import { atom, selector } from "recoil";


export const menuMobileOpen = atom({
    key: 'menuMobileOpen',
    default: false,
})

export const scrollPercentage = atom({
    key: 'scrollPercentage',
    default: 0,
})

export const itemsSlider = atom({
    key: 'itemsSlider',
    default: [],
})

export const slideCurrent = atom({
    key: 'slideCurrent',
    default: 0,
})

export const postsList = atom({
    key: 'postsList',
    default: [],
})

export const reviewsList = atom({
    key: 'reviewsList',
    default: []
})

export const mediaList = atom({
    key: 'mediaList',
    default: []
})

export const cursosList = atom({
    key: 'cursosList',
    default: [],
})

// const goToSlide = (number: number) => {
//     setSlide(number % props.posts.length);
// };

