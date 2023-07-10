/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}",  "./node_modules/flowbite/**/*.js"],


  theme: {
    extend: {
      display: ["group-hover"],


      backgroundImage: {
        'hero': "url('/src/assets/Boltassets/BoltHero.jpg');",
        'heroTwo':"url(https://monoassets.com/f/118499/1080x1280/f73f641e15/directpay.jpg)",
        'heroThr':"url(https://monoassets.com/f/118499/1080x1280/f5a17c8f24/percept.png)"
      },

      fontFamily: {
        'DM-sans': ['DM-Sans', 'sans-serif'],
      },

      screens: {
        md: { min: "415px", max: "800px" },

        

        sm: { max: "414px" }
      },
      
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

