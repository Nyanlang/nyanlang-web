import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "@/theme";
import Navigation from "@/components/navigation";

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Navigation />
    <Component {...pageProps} />
  </ChakraProvider>
}
