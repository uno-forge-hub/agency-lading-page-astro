import UnoCSS from '@unocss/postcss'

export default {
    plugins: [
        UnoCSS({
            content: ['./src/**/*.astro', './src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx']
        }),
    ],
}
