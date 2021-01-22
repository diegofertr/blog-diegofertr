module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        // primary: '#333c54'
        primary: '#0a182e'
      },
      fontFamily: {
        poppins: ['Poppins'],
        poppinsRegular: ['Poppins Regular'],
        poppinsMedium: ['Poppins Medium'],
        poppinsSemiBold: ['Poppins SemiBold'],
        poppinsBold: ['Poppins Bold'],
      },
      fontSize: {
        '4xs': '.45rem',
        '3xs': '.55rem',
        '2xs': '.65rem',
        '7xl': '5rem',
      }
    }
  },
  variants: {},
  plugins: []
}
