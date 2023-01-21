
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
    one: '',
    color: 'blue'

  }),
  actions: {

  },
})