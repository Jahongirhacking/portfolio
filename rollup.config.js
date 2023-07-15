import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
const prettier = require("rollup-plugin-prettier");

export default [
  {
    input: "src/app.ts",
    output: { dir: "dist" },
    plugins: [typescript(), nodeResolve({ browser: true }), terser()],
  },
  {
    input: "src/comic.ts",
    output: { dir: "dist" },
    plugins: [
      typescript(),
      nodeResolve({ browser: true }),
      terser(),
      commonjs(),
      prettier({
        tabWidth: 2,
        singleQuote: false,
      }),
    ],
  },
];
