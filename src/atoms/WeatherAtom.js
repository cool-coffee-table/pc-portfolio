import { atom } from 'recoil';

export const weatherAtom = atom({
    key: 'weatherAtom',
    default: ''
})

export const weatherLocationAtom = atom({
    key: 'weatherLocationAtom',
    default: 'Gainesville'
})