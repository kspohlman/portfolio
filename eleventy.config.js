export default async function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("bundle.css");
    eleventyConfig.addPassthroughCopy("assets/img");
    eleventyConfig.addPassthroughCopy({ "assets/favicon": "/" });

    return {
      passthroughFileCopy: true
    };
  };
  
  export const config = {
    templateFormats: [
      "md",
      "njk",
      "html"
    ],
  
    // Process *.md as NJK
    markdownTemplateEngine: "njk",
  
    // Process *.html as NJK
    htmlTemplateEngine: "njk",
  
    // Define the directory structure
    dir: {
      input: "content",
      includes: "../_includes", // relative to content/
      data: "../_data", // relative to content/
      output: "_site"
    },
  }