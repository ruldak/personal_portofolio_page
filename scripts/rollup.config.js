require("dotenv").config();
import { terser } from "rollup-plugin-terser";



const isProduction = process.env.NODE_ENV === "production";

export default {
    input: "src/index.js",
    treeshake: true,
    output: [
        {
            file: "assets/js/min.js",
            sourcemap: !isProduction,
            format: "esm"
        }
    ],
    plugins: [
        // Minify JS hanya di production
        isProduction && terser(),
        
        
    ].filter(Boolean)
};
