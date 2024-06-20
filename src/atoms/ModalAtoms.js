import { atom } from 'recoil';

export const showModalsAtom = atom({
    key: 'showModalsAtom',
    default: {welcome:true,weather:false,backgrounds:false, notes: false, fileExplorer: false}
})