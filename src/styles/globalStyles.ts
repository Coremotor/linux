import { createGlobalStyle } from 'styled-components'
import ubuntuWoff2 from 'assets/fonts/ubuntu/ubuntu.woff2'
import ubuntuWoff from 'assets/fonts/ubuntu/ubuntu.woff'
import ubuntuTtf from 'assets/fonts/ubuntu/ubuntu.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu';
    src: 
		local('Ubuntu'), 
		url(${ubuntuWoff2}) format('woff2'), 
		url(${ubuntuWoff}) format('woff'), 
		url(${ubuntuTtf}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  
  body {
	padding: 0;
    margin: 0;
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`

export default GlobalStyle
