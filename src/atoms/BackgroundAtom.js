import { atom } from 'recoil';

export const backgroundAtom = atom({
    key: 'backgroundAtom',
    default: {clouds:true,cells:false,fog:false,globe:false}
})