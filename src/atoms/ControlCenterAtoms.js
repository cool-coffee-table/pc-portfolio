import { atom } from 'recoil';

export const isControlCenterOpenAtom = atom({
    key: 'isControlCenterOpenAtom',
    default: false
})


export const screenFiltersAtom = atom({
    key: 'screenFiltersAtom',
    default: {brightness: 1, grayscale: 0, contrast: 1, saturation: 1}
})
