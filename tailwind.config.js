module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    (process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  ],
}
