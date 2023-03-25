import {
    Accordion,
    AccordionItem,
    AccordionPanel,
    AccordionButton,
    AccordionIcon,
    Box,
    Button,
    Flex,
    Heading,
    Link,
    IconButton
} from "@chakra-ui/react";
import React from "react";
import {useRouter} from "next/router";
import {CloseIcon, HamburgerIcon} from "@chakra-ui/icons";
import {useState} from "react";


function NavigationLink(prop: {href: string, children: React.ReactNode}) {
    let router = useRouter();

    return (
        <Link href={prop.href} fontSize={"lg"} fontWeight={"semibold"} mx={"10px"} color={router.route === prop.href ? "nyanlang.600" : "gray.800"} _hover={{textDecoration:"none",color:"nyanlang.500"}}>{prop.children}</Link>
    )
}

function NavigationExternalBtn(prop: {onClick: Function, children: React.ReactNode}) {
    return (
        <Button onClick={() => prop.onClick()} bg={"transparent"} _hover={{bg:"transparent"}}>{prop.children}</Button>
    )
}

export default function Navigation() {
    let router = useRouter();

    return (
        <Flex
            direction={"row"}
            justify={"center"}
            align={"center"}
            h={"80px"}
            w={"100vw"}
            bg={"whiteAlpha.900"}
            boxShadow={"md"}
            position={"fixed"}
            zIndex={100}
            backdropBlur={"8px"}
        >
            <Flex direction={"row"} justify={"space-between"} align={"center"} w={"90%"} maxW={"1000px"} h={"100%"} mx={"auto"}>
                <Flex direction={"row"} justify={"center"} align={"center"} h={"100%"}>
                    <Box bg={"nyanlang.500"} mr={"10px"}>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                             width={"60px"} height={"60px"} viewBox="0 0 313.000000 313.000000"
                             preserveAspectRatio="xMidYMid meet">
                            <g transform="translate(0.000000,313.000000) scale(0.100000,-0.100000)"
                               fill="#000000" stroke="none">
                                <path d="M0 1565 l0 -1565 1565 0 1565 0 0 1565 0 1565 -1565 0 -1565 0 0 -1565z m3070 5 l0 -1500 -1500 0 -1500 0 0 1500 0 1500 1500 0 1500 0 0 -1500z"/>
                                <path d="M788 2498 c-43 -61 -25 -189 34 -248 89 -89 172 28 127 179 -29 99 -114 135 -161 69z"/>
                                <path d="M1101 2493 c-77 -93 -58 -273 29 -273 69 0 127 101 118 206 -9 104 -87 140 -147 67z"/>
                                <path d="M1585 1610 l-730 -730 25 -25 25 -25 730 730 730 730 -25 25 -25 25 -730 -730z"/>
                                <path d="M625 2230 c-24 -26 -23 -84 0 -133 60 -128 215 -148 215 -29 0 119 -151 232 -215 162z"/>
                                <path d="M1290 2243 c-23 -8 -80 -65 -96 -95 -22 -42 -18 -120 7 -147 39 -42 114 -15 169 61 46 63 52 135 14 172 -15 16 -64 20 -94 9z"/>
                                <path d="M960 2117 c-26 -13 -55 -62 -65 -110 -3 -15 -28 -52 -55 -82 -61 -68 -66 -106 -21 -157 26 -29 34 -33 78 -30 96 4 159 3 199 -3 53 -9 99 14 121 59 22 46 12 76 -46 140 -34 37 -51 66 -56 92 -14 83 -87 126 -155 91z"/>
                            </g>
                        </svg>
                    </Box>
                    <NavigationLink href={"/"}>홈</NavigationLink>
                    <NavigationLink href={"/docs"}>문서</NavigationLink>
                    {/*<NavigationLink href={"/"}>예제</NavigationLink>*/}
                </Flex>
                <Flex direction={"row"} justify={"center"} align={"center"} h={"100%"}>
                    <NavigationExternalBtn onClick={() => router.push("https://github.com/nyanlang/nyanlang")}>
                        <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.1727 20.8173 18.8977 19.5415 20.1198 17.8395C21.3419 16.1376 21.9995 14.0953 22 12C22 6.475 17.525 2 12 2Z" fill="#000000"/>
                        </svg>
                    </NavigationExternalBtn>
                </Flex>
            </Flex>
        </Flex>
    )
}

function DocsNavigationItem(props: {href: string, children: React.ReactNode}) {
    let router = useRouter();

    return <Box w={"100%"} fontWeight={"thin"} py={"3px"} >
        <Link href={props.href} color={router.route === props.href ? "nyanlang.700" : "black"} _hover={{textDecoration:"none",color:"nyanlang.500"}}>{props.children}</Link>
    </Box>
}

function DocsNavigationCategory(props: {title: string, children: React.ReactNode}) {
    return <AccordionItem>
        <Heading as={"h2"}>
            <AccordionButton>
                <Box as={"span"} flex={"1"} textAlign={"left"} fontWeight={"bold"}>
                    {props.title}
                </Box>
                <AccordionIcon />
            </AccordionButton>
        </Heading>
        <AccordionPanel>
            {props.children}
        </AccordionPanel>
    </AccordionItem>
}

export function DocsNavigation() {
    let [isOpen, setIsOpen] = useState(false)

    return <>
        <IconButton aria-label={"메뉴"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} size={"md"} display={["block", null, null, "none"]} position={"fixed"} top={"90px"} left={"10px"} onClick={() => setIsOpen((prev) => !prev)} zIndex={100} />
        <Accordion overflowY={"auto"} allowToggle display={[isOpen ? "block" : "none", null, null, "block"]} position={["relative", null, null, "sticky"]} top={"0px"} w={["100vw", null, null, "100%"]} h={["100vh", null, null, "fit-content"]} bg={"white"} pt={["80px", null, null, "5px"]}>
            <DocsNavigationCategory title={"빠르게 시작하기"}>
                <DocsNavigationItem href={"/docs/getting-started#installation"}>설치</DocsNavigationItem>
                <DocsNavigationItem href={"/docs/getting-started#hello-world"}>Hello World</DocsNavigationItem>
            </DocsNavigationCategory>
        </Accordion>
    </>
}