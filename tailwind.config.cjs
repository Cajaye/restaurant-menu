const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        EerieBlack: '#212121',
        JetBlack: '#2D2D2D',
        TintBlack: '#414141'

      }
    },
  },

  plugins: [],
};

module.exports = config;
