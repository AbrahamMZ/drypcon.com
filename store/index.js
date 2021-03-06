export const state = () => ({
  locales: ['en', 'es'],
  locale: 'es',
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
