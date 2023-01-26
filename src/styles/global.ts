import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
  
    @media (max-width: 600px) {
      html {
        font-size: 62.5%;
      }
    }
   
`
