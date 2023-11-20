import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";

export default [
  {
    input: "src/app.ts",
    output: { dir: "dist" },
    plugins: [typescript(), nodeResolve({ browser: true }), terser()],
  },
];
