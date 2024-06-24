import { atom } from 'recoil';

export const showModalsAtom = atom({
    key: 'showModalsAtom',
    default: {skills:false,weather:false,backgrounds:false, notes: false, fileExplorer: false, contact: false, about: true}
})


export const modalZIndexAtom = atom({
    key: 'modalZIndexAtom',
    default: [],
  });