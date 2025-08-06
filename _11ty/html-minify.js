// Transformer to minify HTML output.

const { minify } = require("html-minifier-terser");

const convert = async (rawContent, outputPath) => {
    const content = rawContent;

    if (outputPath && outputPath.endsWith(".html")) {
        const minified = minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
            conservativeCollapse: true
        });
        return minified;
    }

    return content;
};

module.exports = {
    initArguments: {},
    configFunction: async (eleventyConfig = {}) => {
        eleventyConfig.addTransform("minifyHTML", convert);
    }
};
