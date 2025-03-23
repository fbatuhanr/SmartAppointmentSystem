/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#7563F7',
        primaryDark: '#4437A1',

        secondary: '#F8F7FF',
        secondaryDark: '#E4E0FF',
    
        dark: '#0E0D18',
        darkish: '#16151f',
    
        light_1: '#FAFAFA',
        light_2: '#F3F2F3',
    
        lightGrey: '#9CA3AF',
        darkGrey: '#42454a',
  
        black: '#000000',
        white: '#FFFFFF',
      },
      fontFamily: {
        "nunito-extralight": "Nunito_200ExtraLight",
        "nunito-light": "Nunito_300Light",
        "nunito-regular": "Nunito_400Regular",
        "nunito-medium": "Nunito_500Medium",
        "nunito-semibold": "Nunito_600SemiBold",
        "nunito-bold": "Nunito_700Bold",
        "nunito-extrabold": "Nunito_800ExtraBold",
        "nunito-black": "Nunito_900Black",
        "nunito-extralight-italic": "Nunito_200ExtraLight_Italic",
        "nunito-light-italic": "Nunito_300Light_Italic",
        "nunito-regular-italic": "Nunito_400Regular_Italic",
        "nunito-medium-italic": "Nunito_500Medium_Italic",
        "nunito-semibold-italic": "Nunito_600SemiBold_Italic",
        "nunito-bold-italic": "Nunito_700Bold_Italic",
        "nunito-extrabold-italic": "Nunito_800ExtraBold_Italic",
        "nunito-black-italic": "Nunito_900Black_Italic",
      }
    },
  },
  plugins: [],
}