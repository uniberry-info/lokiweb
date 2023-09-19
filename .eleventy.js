module.exports = function(eleventyConfig) {
    eleventyConfig.setNunjucksEnvironmentOptions({
        trimBlocks: true,
        lstripBlocks: true,
    })

    eleventyConfig.addPassthroughCopy("./_pass");
}
