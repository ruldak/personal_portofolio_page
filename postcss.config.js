const isProduction = process.env.NODE_ENV === "production";

let cssnano = undefined;

// We want optimization only in production
if (isProduction) {
    cssnano = {
        cssnano: {
            preset: ["default", { discardComments: { removeAll: true } }]
        }
    };
}

const plugins = {
    tailwindcss: {},
    autoprefixer: {},
    ...(isProduction && cssnano)
};

module.exports = {
    plugins
};
