import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";


const override = { compilerOptions: { module: "ES2015" } };

export default {
    input: "src/index.ts",
    output: [{
        name: "here",
        file: "dist/index.js",
        format: "umd"
    }],
    plugins: [
        typescript({ tsconfigOverride: override }),
        commonjs(),
        resolve()
    ]
}