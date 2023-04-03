import {
    Alert,
    AlertIcon,
    Badge,
    Box,
    Flex,
    Heading,
    Icon,
    useToast,
    Text,
    useColorModeValue,
    Textarea,
    Tooltip,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    TabIndicator,
    Menu,
    MenuButton,
    Button, MenuList, MenuOptionGroup, MenuItem, MenuDivider
} from "@chakra-ui/react";
import {CheckIcon} from "@chakra-ui/icons";
import {VscPlay, VscDebugPause} from "react-icons/vsc";
import React, {MutableRefObject, useEffect, useRef, useState} from "react";
import {NextSeo} from "next-seo";
import {BasicButton} from "@/components/button";

interface AnalyzedCodeBlock {
    type: "stdio" | "calc" | "comment" | "comment_end" | "control" | "error" | "literal" | "loop",
    value: string
}

function Code(props: {color?: string, bgColor?: string, children: React.ReactNode, label?: string}) {
    return <Tooltip label={props.label}>
        <Text display={"inline"} fontSize={"md"} color={props.color} bgColor={props.bgColor}>{props.children}</Text>
    </Tooltip>
}

function AnalyzedCodeBlock(props: {code: string, onClick?: Function, display?: string}) {
    let [analyzedCode, setAnalyzedCode] = useState<AnalyzedCodeBlock[]>([]);

    useEffect(() => {
        setAnalyzedCode([]);
        let codeChars = props.code.split("");
        let inComment = false;
        for (let i = 0; i < codeChars.length; i++) {
            if ([" ", "\n"].includes(codeChars[i])) {
                setAnalyzedCode(prev => [...prev, {type: "literal", value: codeChars[i]}])
            } else if (["냥", "냐"].includes(codeChars[i])) {
                if (inComment) {
                    setAnalyzedCode(prev => [...prev.slice(0, prev.length - 1), {
                        type: "comment",
                        value: prev[prev.length - 1].value + codeChars[i]
                    }])
                } else {
                    setAnalyzedCode(prev => [...prev, {type: "calc", value: codeChars[i]}])
                }
            } else if (["?", "!"].includes(codeChars[i])) {
                if (inComment) {
                    setAnalyzedCode(prev => [...prev.slice(0, prev.length - 1), {
                        type: "comment",
                        value: prev[prev.length - 1].value + codeChars[i]
                    }])
                } else {
                    setAnalyzedCode(prev => [...prev, {type: "control", value: codeChars[i]}])
                }
            } else if ([".", "뀨"].includes(codeChars[i])) {
                if (inComment) {
                    setAnalyzedCode(prev => [...prev.slice(0, prev.length - 1), {
                        type: "comment",
                        value: prev[prev.length - 1].value + codeChars[i]
                    }])
                } else {
                    setAnalyzedCode(prev => [...prev, {type: "stdio", value: codeChars[i]}])
                }
            } else if (["~", "-"].includes(codeChars[i])) {
                if (inComment) {
                    setAnalyzedCode(prev => [...prev.slice(0, prev.length - 1), {
                        type: "comment",
                        value: prev[prev.length - 1].value + codeChars[i]
                    }])
                } else {
                    setAnalyzedCode(prev => [...prev, {type: "loop", value: codeChars[i]}])
                }
            } else if (codeChars[i] === "\"" && (!inComment)) {
                setAnalyzedCode(prev => [...prev, {type: "comment", value: codeChars[i]}])
                inComment = true;
            } else if (codeChars[i] === "\"" && inComment) {
                setAnalyzedCode(prev => [...prev.slice(0, prev.length - 1), {
                    type: "comment",
                    value: prev[prev.length - 1].value + codeChars[i]
                }])
                inComment = false;
            } else {
                if (inComment) {
                    setAnalyzedCode(prev => [...prev.slice(0, prev.length - 1), {
                        type: "comment",
                        value: prev[prev.length - 1].value + codeChars[i]
                    }])
                } else {
                    setAnalyzedCode(prev => [...prev, {type: "error", value: codeChars[i]}])
                }
            }
        }
    }, [props.code])

    const codeEditorBg = useColorModeValue("gray.100", "gray.700");
    const codeEditorBorder = useColorModeValue("gray.200", "gray.600");

    return <Box w={["100%", null, "50%"]}
                h={["50%", null, "100%"]}
                borderColor={codeEditorBorder}
                borderWidth={"2px"}
                bgColor={codeEditorBg}
                borderRadius={"lg"}
                p={"10px"}
                display={props.display ? props.display : "block"}
                onClick={(e) => {props.onClick ? props.onClick(e) : null}}>
        {
            analyzedCode.map((code, index) => {
                if (code.type === "literal") {
                    return <Code key={index}>{code.value}</Code>
                } else if (code.type === "calc") {
                    return <Code key={index} color={"purple.400"} label={"계산: 포인터가 가리키는 주소의 값을 1씩 증가 혹은 감소시킨다냥."}>{code.value}</Code>
                } else if (code.type === "control") {
                    return <Code key={index} color={"green.400"} label={"조종: 포인터의 주소를 1씩 증가 혹은 감소시킨다냥."}>{code.value}</Code>
                } else if (code.type === "stdio") {
                    return <Code key={index} color={"blue.400"} label={"입출력: 입력, 혹은 출력을 담당한다냥."}>{code.value}</Code>
                } else if (code.type === "loop") {
                    return <Code key={index} color={"yellow.400"} label={"점프: 정해진 규칙에 따라 커서를 점프시킨다냥."}>{code.value}</Code>
                } else if (code.type === "comment") {
                    return <Code key={index} color={"gray.600"} label={"주석: 프로그램에서 무시된다냥."}>{code.value}</Code>
                } else if (code.type === "error") {
                    return <Code key={index} color={"red.600"} bgColor={"red.400"} label={"잘못된 문자다냥: "+code.value}>{code.value}</Code>
                }
            })
        }
    </Box>
}

function CodeEditor(props: {code: string, setCode: Function, onBlur?: Function, display?: string, rref?: MutableRefObject<any>}) {
    const codeEditorBg = useColorModeValue("gray.100", "gray.700");
    const codeEditorBorder = useColorModeValue("gray.200", "gray.600");

    return <Textarea w={["100%", null, "50%"]}
              h={["50%", null, "100%"]}
              borderWidth={"2px"}
              borderColor={codeEditorBorder}
              bgColor={codeEditorBg}
              display={props.display ? props.display : "block"}
              onChange={() => {}}
              onInput={(e) => {props.setCode(e.currentTarget.value.replace(/[“”]/g, "\""))}}
              value={props.code}
              onBlur={(e) => props.onBlur ? props.onBlur(e) : null}
              ref={props.rref}
              resize={"none"}>
    </Textarea>
}

function CodeBlock(props: {code: string, setCode: Function}) {
    let [codeBlockFocus, setCodeBlockFocus] = useState(false);
    let codeBlockRef: MutableRefObject<HTMLTextAreaElement|null> = useRef(null);

    useEffect(() => {
        if (codeBlockFocus) {
            codeBlockRef.current ? codeBlockRef.current.focus() : null;
        }
    }, [codeBlockFocus, codeBlockRef.current])

    return <>
        <CodeEditor
            code={props.code}
            setCode={props.setCode}
            onBlur={() => setCodeBlockFocus(false)}
            display={codeBlockFocus ? "block" : "none"}
            rref={codeBlockRef}
        />
        <AnalyzedCodeBlock
            code={props.code}
            onClick={() => setCodeBlockFocus(true)}
            display={codeBlockFocus ? "none" : "block"}
        />
    </>
}

function TranslateMenuButton(props: {langString: string, fromTo: {from: string, to: string}, setFromTo: Function, from: boolean}) {
    return <>
        <MenuItem onClick={(e) => {
            props.setFromTo((prev: {from: string, to: string}) => {
                return {
                    from: props.from ? props.langString : prev.from,
                    to: props.from ? prev.to : props.langString
                }
            })
        }}>{props.from ? props.fromTo.from === props.langString ? <CheckIcon mr={2} /> : null : props.fromTo.to === props.langString ? <CheckIcon mr={2} /> : null} {props.langString}</MenuItem>
    </>
}

export default function Playground() {
    let [code, setCode] = useState<string>("");
    let [translateCode, setTranslateCode] = useState<string>("");
    let [response, setResponse] = useState<Array<string>>([""]);
    let [translateResponse, setTranslateResponse] = useState("");
    let [socket, setSocket] = useState<WebSocket|undefined>(undefined);

    const toast = useToast();

    function runCode() {
        const socket = new WebSocket(process.env.NEXT_PUBLIC_WEBSOCKET_PROTOCOL + "://" + process.env.NEXT_PUBLIC_API_URL + "/playground/run")

        setSocket(socket);

        socket.addEventListener("message", (e) => {
            const data = JSON.parse(e.data)
            if (data.type === "message") {
                if (data.value === "\n") {
                    setResponse(prev => [...prev, ""]);
                } else {
                    setResponse(prev => [...prev.slice(0, prev.length - 1), prev[prev.length - 1] + data.value]);
                }
            } else if (data.type === "error") {
                toast({
                    title: data.title,
                    description: data.value,
                    status: "error",
                    duration: 5000,
                    isClosable: true
                })
            }
        });

        socket.addEventListener("open", () => {
            socket.send(code);
        });

        socket.addEventListener("close", () => {
            setSocket(undefined);
        });

        socket.addEventListener("error", () => {
            setSocket(undefined);
            toast({
                title: "큰일이다냥!",
                description: "알 수 없는 오류로 인해 서버와의 연결이 끊어졌다냥!",
                status: "error",
                duration: 5000,
                isClosable: true
            })
        })
    }

    function RunHandle() {
        if (socket === undefined || socket.readyState === WebSocket.CLOSED || socket.readyState === WebSocket.CLOSING) {
            setResponse([""]);
            runCode();
        } else {
            socket.close();
        }
    }

    const nyanColor = useColorModeValue("nyanlang.700", "nyanlang.500");
    let [translateFromTo, setTranslateFromTo] = useState<{from: string, to: string}>({from: "Brainfuck", to: "Nyanlang"})

    return <Flex direction={"column"} pt={"160px"} mx={"auto"} w={"75%"} h={"100vh"}>
        <NextSeo
            title={"샌드박스 | 냥랭"}
        />
        <Heading as={"h1"} fontSize={["3xl", null, "5xl"]} mb={"20px"}>샌드박스 <Badge colorScheme={"green"} ml={1} fontSize={"xl"}>BETA</Badge></Heading>
        <Flex gap={"20px"} direction={"column"} h={"100%"} mb={"20px"}>
            <Flex direction={"column"}>
                <Alert status={"info"} variant={"solid"} mb={1} wordBreak={"keep-all"}><AlertIcon />최대 5000번의 명령어를 수행하면 프로세스가 강제 종료된다냥.</Alert>
                <Alert status={"warning"} variant={"solid"} wordBreak={"keep-all"}><AlertIcon />모듈 관련 기능과 입력은 현재 사용할 수 없다냥.</Alert>
            </Flex>
            <Tabs h={"100%"} variant={"unstyled"}>
                <TabList color={nyanColor} borderBottom={"2px solid"} borderBottomColor={"gray.500"}>
                    <Tab>실행</Tab>
                    <Tab>번역</Tab>
                </TabList>
                <TabIndicator
                    mt="-1.5px"
                    height="2px"
                    bg={nyanColor}
                    borderRadius="1px"
                />
                <TabPanels h={"100%"}>
                    <TabPanel h={"100%"}>
                        <Flex direction={["column", null, "row"]} h={"100%"} columnGap={"10px"}>
                            <CodeBlock code={code} setCode={setCode} />
                            <Box bgColor={"black"} color={"whiteAlpha.800"} borderRadius={"xl"} w={["100%", null, "50%"]} h={["50%", null, "100%"]} overflowY={"auto"} p={2} fontSize={"lg"} fontFamily={"playcmd"}>
                                {
                                    response.map((value, index) => {
                                        return <Text key={index}>{value}</Text>
                                    })
                                }
                            </Box>
                        </Flex>
                    </TabPanel>
                    <TabPanel h={"100%"}>
                        <Flex direction={"column"} h={"100%"} rowGap={"10px"}>
                            <Menu closeOnSelect={false}>
                                <MenuButton as={Button} w={"100%"}>From {translateFromTo.from}  |  To {translateFromTo.to}</MenuButton>
                                <MenuList>
                                    <MenuOptionGroup title={"From"}>
                                        <TranslateMenuButton langString={"Brainfuck"} fromTo={translateFromTo} setFromTo={setTranslateFromTo} from={true} />
                                    </MenuOptionGroup>
                                    <MenuDivider />
                                    <MenuOptionGroup defaultValue={"nyanlang"} title={"To"} type={"radio"}>
                                        <TranslateMenuButton langString={"Nyanlang"} fromTo={translateFromTo} setFromTo={setTranslateFromTo} from={false} />
                                    </MenuOptionGroup>
                                </MenuList>
                            </Menu>
                            <Flex direction={["column", null, "row"]} h={"100%"} columnGap={"10px"}>
                                <CodeEditor code={translateCode} setCode={setTranslateCode} />
                                <AnalyzedCodeBlock code={translateResponse} />
                            </Flex>
                        </Flex>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Flex direction={"row"} justify={"flex-end"} w={"100%"} py={"20px"}>
                <BasicButton onClick={RunHandle} bgColor={"green.300"} hoverBgColor={"green.500"}>
                    {
                        socket && (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)
                            ? <>중지<Icon as={VscDebugPause} ml={"10px"} /></>
                            : <>실행<Icon as={VscPlay} ml={"10px"} /></>
                    }
                </BasicButton>
            </Flex>
        </Flex>
    </Flex>
}
