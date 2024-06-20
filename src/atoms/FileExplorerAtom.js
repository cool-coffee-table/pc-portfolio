import { atom } from 'recoil';

export const fileExplorerPathAtom = atom({
    key: 'fileExplorerPathAtom',
    default: "C:Users/ColeMorgan/Desktop"
})


export const showFileExplorerFolderAtom = atom({
    key: 'showFileExplorerFolderAtom',
    default: {showRoot: true, showProjects: false, showSocials: false}
})