/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
		extend: {
      
			animation: {
				fade: 'fadeUp 2s ease-in-out',
        slide: 'slideInUp 1s ease-in-out',
        slideInLeft: 'slideInLeft 3s ease-in-out',
        zoomInUp: 'zoomInUp 3s ease-in-out'
			},

			keyframes: {
        fadeUp: {
          "0%": {
              opacity: 0,
              transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
              opacity: 1,
              transform: "translate3d(0, 0, 0)",
          }
        },
        slideInUp: {
              "0%": {
                  visibility: "visible",
                  transform: "translate3d(0, 100%, 0)",
              },
              "100%": {
                  transform: "translate3d(0, 0, 0)",
              },
          },
          slideInLeft: {
            "0%": {
              visibility: "visible",
              transform: "translate3d(-100%, 0, 0)",
            },
            "100%": {
                transform: "translate3d(0, 0, 0)",
            }
          },
          zoomInUp: {
            "0%": {
              opacity: 0,
              transform: "scale3d(0.3, 0.3, 0.3) translate3d(0, 100%, 0)",
            },
            "80%": {
              opacity: 0.8,
              transform: "scale3d(1.1, 1.1, 1.1)",
            },
            "100%": {
              opacity: 1,
              transform: "translate3d(0, 0%, 0)"
            },
          },
          fadeIn: {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
			},
		},
	},
  plugins: [],
}