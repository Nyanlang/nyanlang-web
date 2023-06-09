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
  IconButton, useColorMode, useColorModeValue,
  Icon, Badge,
  Tooltip,
  useToast
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {CloseIcon, HamburgerIcon, MoonIcon, SunIcon} from "@chakra-ui/icons";
import {AiFillGithub} from "react-icons/ai"
import {useState} from "react";


function NavigationLink(prop: {href: string, children: React.ReactNode, exactHref?: boolean}) {
    let router = useRouter();

    const navTextColor = useColorModeValue("gray.800", "whiteAlpha.900");

    return (
        <Link href={prop.href} fontSize={["md", "lg"]} fontWeight={["black", "semibold"]} mx={[2, null, 4]} w={["100%", "initial"]} textAlign={["center", "initial"]} color={prop.exactHref ? router.route === prop.href ? "nyanlang.600" : navTextColor : router.route.includes(prop.href) ? "nyanlang.600" : navTextColor} _hover={{textDecoration:"none",color:"nyanlang.500"}}>{prop.children}</Link>
    )
}

function NavigationExternalBtn(prop: {onClick: Function, children: React.ReactNode, label: string}) {
    return (
        <Tooltip label={prop.label}>
            <Button onClick={() => prop.onClick()} bg={"transparent"} _hover={{bg:"transparent"}} px={1}>{prop.children}</Button>
        </Tooltip>
    )
}

export default function Navigation() {
    let toast = useToast();

    let router = useRouter();

    const {colorMode, toggleColorMode} = useColorMode();
    const navBgColor = useColorModeValue("whiteAlpha.900", "gray.900");

    let [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    let [version, setVersion] = useState("  ");

    useEffect(() => {
        fetch("/api/v2/version").then(res => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Failed to fetch version");
            }
        }).then(data => {
            setVersion(data.version)
        }).catch(err => {
          toast({
            title: `Error: ${err}`,
            description: "Failed to fetch version",
            status: "warning",
            duration: 5000,
            isClosable: true,
          })
        });
    }, []);

    return (
        <Flex
            direction={"row"}
            justify={"space-between"}
            align={"center"}
            h={"80px"}
            w={"100vw"}
            bg={navBgColor}
            boxShadow={"md"}
            position={"fixed"}
            zIndex={100}
            backdropBlur={isMobileMenuOpen ? "0" : "8px"}
        >
            <Flex direction={"row"} justify={"space-between"} align={"center"} w={"90%"} maxW={"1000px"} h={"100%"} mx={"auto"}>
                <Flex direction={"row"} justify={"center"} align={"center"} h={"100%"} gap={"5px"}>
                    <Box bg={"nyanlang.500"} mr={"5px"}>
                        <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                             width={"40px"} height={"40px"} viewBox="0 0 313.000000 313.000000"
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
                    <Heading as={"h4"} size={"md"} fontWeight={"black"}>냥랭</Heading>
                    <Badge variant={"solid"}>{version}</Badge>
                </Flex>
                <Flex direction={["column", "row"]} justify={"center"} align={"center"} h={["fit-content", "100%"]} w={["100%", "fit-content"]} display={[isMobileMenuOpen ? "flex" : "none", "flex"]} position={["fixed", "relative"]} top={["80px", "initial"]} left={["0px", "initial"]} bgColor={[navBgColor, "initial"]} backdropBlur={["8px", "initial"]} boxShadow={["md", "initial"]} py={["4", "0"]} rowGap={["3", "0"]}>
                    <NavigationLink href={"/"} exactHref>홈</NavigationLink>
                    <NavigationLink href={"/docs"}>문서</NavigationLink>
                    <NavigationLink href={"/playground"}>놀이터</NavigationLink>
                    {/*<NavigationLink href={"/blog"}>블로그</NavigationLink>*/}
                </Flex>
                <Flex direction={"row"} justify={"center"} align={"center"} h={"100%"}>
                    <IconButton aria-label={"메뉴"} bg={"transparent"} _hover={{bg:"transparent"}} display={["flex", "none"]} icon={<HamburgerIcon />} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                    <NavigationExternalBtn onClick={() => router.push("https://github.com/nyanlang/nyanlang")} label={"깃허브 스타 한번만 눌러달라냥..."}>
                        <Icon as={AiFillGithub} w={6} h={6} />
                    </NavigationExternalBtn>
                    <NavigationExternalBtn onClick={() => toggleColorMode()} label={"테마를 껏다켯다!"}>
                        {colorMode === "light" ? <MoonIcon w={6} h={6} /> : <SunIcon w={6} h={6} />}
                    </NavigationExternalBtn>
                </Flex>
            </Flex>
        </Flex>
    )
}

function DocsNavigationH1(props: {href: string, name: string, children?: React.ReactNode}) {
    let router = useRouter();

    const navTextColor = useColorModeValue("black", "whiteAlpha.900");

    return <Box w={"100%"} fontWeight={"extrabold"} py={"3px"}>
        <Link href={props.href} color={router.route === props.href ? "nyanlang.700" : navTextColor} _hover={{textDecoration:"none",color:"nyanlang.500"}}>{props.name}</Link>
        {props.children}
    </Box>
}

function DocsNavigationH2(props: {href: string, name: string, children?: React.ReactNode}) {
    let router = useRouter();

    const navTextColor = useColorModeValue("black", "whiteAlpha.900");

    return <Box w={"100%"} fontWeight={"medium"} py={"3px"} ml={"20px"}>
        <Link href={props.href} color={router.route === props.href ? "nyanlang.700" : navTextColor} _hover={{textDecoration:"none",color:"nyanlang.500"}}>{props.name}</Link>
        {props.children}
    </Box>
}

function DocsNavigationH3(props: {href: string, children?: React.ReactNode}) {
    let router = useRouter();

    const navTextColor = useColorModeValue("black", "whiteAlpha.900");

    return <Box w={"100%"} fontWeight={"hairline"} py={"3px"} ml={"40px"}>
        <Link href={props.href} color={router.route === props.href ? "nyanlang.700" : navTextColor} _hover={{textDecoration:"none",color:"nyanlang.500"}}>{props.children}</Link>
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

    const navBgColor = useColorModeValue("white", "gray.900");

    return <>
        <IconButton aria-label={"메뉴"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} size={"md"} display={["block", null, null, "none"]} position={"fixed"} top={"90px"} left={"10px"} onClick={() => setIsOpen((prev) => !prev)} zIndex={100} />
        <Accordion overflowY={"auto"} allowToggle display={[isOpen ? "block" : "none", null, null, "block"]} position={["relative", null, null, "sticky"]} top={"0px"} w={["100vw", null, null, "100%"]} h={["100vh", null, null, "fit-content"]} bg={navBgColor} pt={["80px", null, null, "5px"]}>
            <DocsNavigationCategory title={"냥랭 시작하기"}>
                <DocsNavigationH1 href={"/docs/getting-started#installation"} name={"냥랭 설치"} />
                <DocsNavigationH1 href={"/docs/getting-started#how-to-run"} name={"실행"} />
            </DocsNavigationCategory>
            <DocsNavigationCategory title={"개발 환경 구축"}>
                <DocsNavigationH1 href={"/docs/dev-environment#ide"} name={"IDE"} />
            </DocsNavigationCategory>
            <DocsNavigationCategory title={"기본 튜토리얼"}>
                <DocsNavigationH1 href={"/docs/basic-tutorial#explain-basic-keywords"} name={"기본 키워드 설명"}>
                    <DocsNavigationH2 href={"/docs/basic-tutorial#pointer-move-explained"} name={"포인터의 주소 변경"} />
                    <DocsNavigationH2 href={"/docs/basic-tutorial#pointer-value-change-explained"} name={"포인터의 값 변경"} />
                    <DocsNavigationH2 href={"/docs/basic-tutorial#output-explained"} name={"출력과 디버깅"} />
                    <DocsNavigationH2 href={"/docs/basic-tutorial#input-explained"} name={"입력"} />
                    <DocsNavigationH2 href={"/docs/basic-tutorial#loop-explained"} name={"반복하기"}>
                        <DocsNavigationH3 href={"/docs/basic-tutorial#loop-input"}>길이가 정해지지 않은 입력</DocsNavigationH3>
                    </DocsNavigationH2>
                    <DocsNavigationH2 href={"/docs/basic-tutorial#comment"} name={"주석"} />
                </DocsNavigationH1>
                <DocsNavigationH1 href={"/docs/basic-tutorial#hello-world"} name={"Hello World 예제"} />
            </DocsNavigationCategory>
            <DocsNavigationCategory title={"모듈 튜토리얼"}>
                <DocsNavigationH1 href={"/docs/module-tutorial#explain-module"} name={"모듈에 대하여"}>
                    <DocsNavigationH2 href={"/docs/module-tutorial#module-keywords"} name={"모듈 관련 키워드"} />
                    <DocsNavigationH2 href={"/docs/module-tutorial#module-memory-explained"} name={"모듈의 새로운 메모리"} />
                    <DocsNavigationH2 href={"/docs/module-tutorial#module-connect-explained"} name={"냥랭 파일간의 연결"} />
                    <DocsNavigationH2 href={"/docs/module-tutorial#module-community-explained"} name={"냥랭 파일간의 소통"}>
                        <DocsNavigationH3 href={"/docs/module-tutorial#module-memory-define"}>모듈 메모리 정의</DocsNavigationH3>
                        <DocsNavigationH3 href={"/docs/module-tutorial#module-memory-control"}>모듈 메모리 조작</DocsNavigationH3>
                        <DocsNavigationH3 href={"/docs/module-tutorial#module-memory-io"}>커뮤니케이션</DocsNavigationH3>
                    </DocsNavigationH2>
                </DocsNavigationH1>
            </DocsNavigationCategory>
            <DocsNavigationCategory title={"코드 컨벤션"}>
                <DocsNavigationH1 href={"/docs/code-convention"} name={"코드 컨벤션"} />
            </DocsNavigationCategory>
            <DocsNavigationCategory title={"키워드 테이블"}>
                <DocsNavigationH1 href={"/docs/keyword-table"} name={"키워드 테이블"} />
            </DocsNavigationCategory>
        </Accordion>
    </>
}