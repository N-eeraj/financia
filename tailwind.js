export default {
  theme: {
    extend: {
      colors: {
        base: {
            green: '#00DD88',
            blue: '#33BBCC',
        },
        theme: {
            light: '#EEEEEE',
            dark: '#222222',
            grey: {
                light: '#AAAAAA',
                dark: '#444444',
            },
            succes: '#0C9',
            error: '#F55',
            info: '#0CF',
            warning: '#FA0',
        },
        gradient: {
            start: '#003344', 
            end: '#000710', 
        },
      },
      animation: {
        'error': 'shiver 100ms linear 5 alternate',
      },
      keyframes: {
        shiver: {
          from: {
            transform: 'translateX(3px)'
          },
          to: {
            transform: 'translateX(-3px)'
          },
        },
      },
      fontFamily: {
        'bruno-ace-sc': [
          'Bruno Ace SC',
          'Sans-serif',
        ]
      },
    },
  }
}
