require("dotenv").config();

module.exports = {
    // Website title, shown in left sidebar and in page title
    title: "{ rené.winkelmeyer }",
    // Site URL to generate absolute URLs. Used across the board.
    url: process.env.URL || "http://localhost:8080",
    // Profile image for left sidebar
    image: "/assets/images/sidebar_profile.jpg",
    // Image alt text for left sidebar
    imageAlt: "René and Einstein",
    // Author name, shown in left sidebar, and used in JSON-LD
    author: "René Winkelmeyer",
    // Site description, shown below site image (optional)
    description: "My kitchen sink about stuff",
    // OpenGraph default image, in case you don't have an `image`
    // set in your Markdown frontmatter; relevant for social
    // sharing.
    openGraphDefaultImage: "/assets/images/opengraph.jpg",
    // GitHub ID (optional, remove it not needed), used for link in the left sidebar
    socialGitHub: "ruldak",
    // LinkedIn ID  (optional, remove it not needed), used for link in the left sidebar
    socialLinkedIn: "hary-cahyono-131a2536a",
    googleAnalytics: "YOUR_GA-ID", 
};
