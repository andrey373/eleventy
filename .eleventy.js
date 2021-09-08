module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy("./src/assets");
    eleventyConfig.addPassthroughCopy("./src/css");
    eleventyConfig.addPassthroughCopy("./src/fonts");

    eleventyConfig.addCollection('advantage', function(collection){
        return collection.getFilteredByGlob('./src/advantage/*.md');
    })
    
    return{
        passthroughFileCopy: true,
        markdownTemplateEngine: "njk",
        templateFormats: ["html", "md", "njk"],
       dir:{
           input: 'src',
           output: 'public',
           include: 'includes'
       }
    }
}