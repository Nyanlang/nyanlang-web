import {extendTheme, ThemeConfig} from "@chakra-ui/react";

const colors = {
    nyanlang: {
        300: "#fff7a5",
        400: "#fff585",
        500: "#fcda05",
        600: "#dcba05",
        700: "#bc9a05",
    }
}

const config: ThemeConfig = {
    initialColorMode: "system",
    useSystemColorMode: false
}

const styles = {
    global: {
        "::-webkit-scrollbar": {
            width: "0.4em",
            height: "0.4em"
        },
        "::-webkit-scrollbar-track": {
            background: "transparent"
        },
        "::-webkit-scrollbar-thumb": {
            background: "gray.300",
            borderRadius: "0.25em"
        },
        "html": {
            scrollBehavior: "smooth"
        }
    }
}

const fonts = {
    body: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
    heading: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`,
    mono: `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif`


}

const theme = extendTheme({colors, config, styles, fonts})

export default theme