import '../styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

const theme = extendTheme({
  colors: {
    greenModified: {
      100: '#07cb79',
      200: '#07cb78',
      300: '#07cb77',
      400: '#07cb76',
      500: '#07cb75',
      600: '#07cb74',
      700: '#07cb73',
      800: '#07cb72',
      900: '#07cb71'
    }
  }
});
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp
