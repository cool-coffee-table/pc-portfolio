import { atom } from 'recoil';

export const showModalsAtom = atom({
    key: 'showModalsAtom',
    default: {skills:false,snake:false,backgrounds:false, notes: false, fileExplorer: false, contact: false, about: true}
})

export const isModalMinimizedAtom = atom({
    key: 'isModalMinimizedAtom',
    default: {skills:false,snake:false,backgrounds:false, notes: false, fileExplorer: false, contact: false, about: false}
})


export const modalZIndexAtom = atom({
    key: 'modalZIndexAtom',
    default: [],
  });