import { babel } from '@rollup/plugin-babel';
import styles from "rollup-plugin-styles";
import image from 'rollup-plugin-img';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default {
    input: './index.js',
    output: {
        file: './build/bundle.js',
        format: 'iife'
    },
    plugins: [
        babel({ babelHelpers: 'bundled' }),
        babel({
            babelHelpers: "bundled",
            presets: ["@babel/env"],
        }),
        styles(),
        image({
            limit: 1000000
        }),
        serve({
            open: true,
            contentBase: './',
            port: 8001,
        }),
        livereload(),
    ]
};