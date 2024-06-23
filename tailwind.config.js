export default {
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
        },

        fontFamily: {
            display: 'Poppins',
            body: 'OpenSans',
        },

        container: {
            padding: '.75rem',
        },

        extend: {
            keyframes: {
                'bounce-horiz': {
                    '0%, 100%': { transform: 'translate(0, 0)' },
                    '50%': { transform: 'translate(8px)' }
                }
            },

            animation: {
                'bounce-horiz': 'bounce-horiz 2s infinite'
            }
        }
    },
    plugins: [],
    content: [
        './pages/**/*.vue',
        './components/**/*.vue'
    ]
}