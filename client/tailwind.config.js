module.exports = {
  purge: {
    content: [
      './src/components/header/introCard.jsx',
      './src/components/header/header.jsx',
      './src/components/portfolio-content/content.jsx',
      './src/components/portfolio-content/portfolioContent.jsx',
      './src/components/portfolio-overview/portfolioOverview.jsx',
      './src/components/portfolio-overview/portfolioPreview.jsx',
      './src/components/progressDiv/progressDiv.jsx',
      './src/components/menu.jsx',
      './src/pages/ContactPage.jsx',
      './src/pages/homepage.jsx',
      './src/pages/portfolio.jsx',
      './src/pages/portfolioContentPage.jsx',
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: '#e0e0e0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
