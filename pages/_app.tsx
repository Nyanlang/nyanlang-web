import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import theme from "@/theme";
import Navigation from "@/components/navigation";
import {DefaultSeo} from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Navigation />
    <DefaultSeo
        defaultTitle={"냥랭 - 귀여운 프로그래밍 언어"}
        description={"세상에서 가장 귀여운 프로그래밍 언어!"}
        titleTemplate={"%s | 냥랭 문서"}
        themeColor={"#fcda05"}
        openGraph={{
          type: 'website',
          locale: 'ko_IE',
          url: 'https://nyan.sserve.work/',
          siteName: '냥랭',
          images: [
            {
                url: 'https://nyan.sserve.work/nyanlang.png',
            }
          ]
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
    />
    <Component {...pageProps} />
  </ChakraProvider>
}
