
import { defineStore } from 'pinia'

export const useThemeStore = defineStore({
  id: 'theme',

  state: () => ({
    isRed: false,
    logoStyle: [
      { id: 'left', title: 'Left' },
      { id: 'right', title: 'Right' },
      { id: 'center', title: 'Center' },
      { id: 'disable', title: 'Disable' },
    ],
    logo: 'Left',
    color: 'blue',
    steps: [
      { name: 'Step 1', href: '#', status: 'current', icon: 'PencilIcon' },
      { name: 'Step 2', href: '#', status: 'upcoming', icon: 'CogIcon' },
      { name: 'Step 3', href: '#', status: 'upcoming', icon: 'PlayIcon' },
    ],

    preset: [
      { id: 'blue', title: 'Blue (#1976d2)' },
      { id: 'red', title: 'Red (#ff0000)' },
    ],
    isHeader: true,
    isFooter: true,
    isDrawer: true,
    leftDrawer: true,
    rightDrawer: true,
    isTab: true,
    isMenu: true,

  }),
  actions: {

  },
})