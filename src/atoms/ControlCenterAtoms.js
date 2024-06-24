import { atom } from 'recoil';

export const toolbarModalsOpenAtom = atom({
    key: 'toolbarModalsOpen',
    default: {controlCenter: false, calendar: false}
})


export const screenFiltersAtom = atom({
    key: 'screenFiltersAtom',
    default: {brightness: 1, grayscale: 0, contrast: 1, saturation: 1}
})
