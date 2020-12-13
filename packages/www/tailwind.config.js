module.exports = {
    purge: ['./components/**/*.tsx', './pages/**/*.tsx'],
    theme: {
        extend: {
            colors: {
                'light-blue': '#EAF3FB',
                'medium-blue': '#80AEE0',
                'dark-blue': '#181F46'
            },
            screens: {
                sm: '320px',
                md: '768px',
                lg: '1024px',
                xl: '1280px'
            },
            spacing: {
                28: '4rem'
            },
            letterSpacing: {
                tighter: '0em'
            },
            lineHeight: {
                tight: 1.2
            },
            fontFamily: {
                sans: '-apple-system, "Helvetica Neue", "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            },
            boxShadow: {
                small: '0 5px 10px rgba(0, 0, 0, 0.12)',
                medium: '0 8px 30px rgba(0, 0, 0, 0.12)'
            }
        }
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true
    }
};
