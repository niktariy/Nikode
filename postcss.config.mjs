import postcssPresetEnv from 'postcss-preset-env'
import postcssMediaMinmax from 'postcss-media-minmax'

/** @type {import('postcss').ProcessOptions} */
export default {
  plugins: [
    postcssMediaMinmax(), // сначала minmax, чтобы preset-env уже получил преобразованный код
    postcssPresetEnv({
      stage: 1, // включает многие современные фичи CSS
      autoprefixer: { grid: true },
      features: {
        'media-query-ranges': true, // включает преобразование диапазонов
      },
    }),
  ],
}