# My Portfolio Page

This is a personal portfolio website built with Eleventy and Tailwind CSS.

## Features

-   Static site generated with [Eleventy](https://www.11ty.dev/)
-   Styled with [Tailwind CSS](https://tailwindcss.com/) and plain CSS for additional customizations.
-   JavaScript bundling with [Rollup](https://rollupjs.org/)
-   Code formatting with [Prettier](https://prettier.io/)
-   Linting with [ESlint](https://eslint.org/) and [markdownlint](https://github.com/DavidAnson/markdownlint)

## Local Development

Follow these steps to run the project locally.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed. This project also uses [Volta](https://volta.sh/) to pin the Node.js version.

### Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/ruldak/personal_portofolio_page.git your-directory
    cd your-directory
    ```

2.  **Install dependencies:** 
    ```bash
    npm install
    ```

3.  **Build the CSS:**
    Before starting the development server, you need to build the CSS files.
    ```bash
    npm run build:css
    ```

4.  **Run the development server:**
    This command will start a local server, watch for changes, and automatically reload the browser.
    ```bash
    npm run dev:eleventy
    ```

    The site will be available at `http://localhost:8080`.

## Deployment

For a production build, which includes minified CSS and JavaScript, use the following command:

```bash
npm run build
```

This will generate the final static site in the `_site` directory, which can then be deployed to any static hosting provider.

## Credits

- This project is based on the [Eleventy Chirpy Blog Template](https://github.com/muenzpraeger/eleventy-chirpy-blog-template) by René Winkelmeyer (muenzpraeger).  
- Licensed under the [MIT License](https://github.com/muenzpraeger/eleventy-chirpy-blog-template/blob/main/LICENSE.md).
