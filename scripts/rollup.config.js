require("dotenv").config();
import { terser } from "rollup-plugin-terser";
import replace from "@rollup/plugin-replace"; // Gunakan import untuk ES modules
import siteconfig from "../content/_data/siteconfig.js";

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
        
        // Plugin replace untuk Algolia
        (siteconfig.algoliaSearch && siteconfig.algoliaSearch.enabled) ? replace({
            preventAssignment: true,
            values: {
                "process.env.ALGOLIA_INDEX": JSON.stringify(`netlify_${siteconfig.algoliaSearch.siteId}_${siteconfig.algoliaSearch.branch}_all`),
                "process.env.ALGOLIA_APP_ID": JSON.stringify(siteconfig.algoliaSearch.appId),
                "process.env.ALGOLIA_SEARCH_API_KEY": JSON.stringify(siteconfig.algoliaSearch.searchApiKey)
            }
        }) : null
    ].filter(Boolean)
};
