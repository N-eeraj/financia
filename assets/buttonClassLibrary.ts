const width = 'min-w-[150px]'
const padding = 'p-2'
const transparent = 'bg-transparent'

const text = {
  light: 'text-theme-light',
  dark: 'text-theme-dark',
  green: 'text-base-green',
  blue: 'text-base-blue',
}

const classLibrary = {
  flat: {
    classes: `${padding} ${width}`,
    colors: {
      green: `${text.green}`,
      blue: `${text.blue}`,
      light: `bg-theme-light ${text.dark} `,
      dark: `bg-theme-dark ${text.light}`,
    }
  },

  text: {
    classes: `${padding} min-w-[100px] ${transparent} font-bold`,
    colors: {
      green: `text-base-green`,
      blue: `text-base-blue`,
      light: `${text.light}`,
      dark: `${text.dark}`,
    }
  },

  outlined: {
    classes: `${padding} ${width} ${transparent} border`,
    colors: {
      green: `border-base-green text-base-green hover:${text.green}/20`,
      blue: `border-base-blue text-base-blue hover:${text.blue}/20`,
      light: `border-theme-light ${text.light} hover:bg-theme-light/20`,
      dark: `border-theme-dark ${text.dark} hover:bg-theme-dark/20`,
    }
  },

  gradient: {
    classes: `${padding} ${width} bg-gradient-to-r`,
    colors: {
      green: `from-base-green to-base-blue`,
      blue: `from-base-blue to-base-green`,
      light: `from-theme-light to-theme-dark`,
      dark: `from-theme-dark to-theme-light`,
      start: `from-gradient-start to-gradient-end`,
      end: `from-gradient-end to-gradient-start`,
    }
  },
}

export default classLibrary