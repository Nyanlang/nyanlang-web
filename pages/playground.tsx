import {Alert, AlertIcon, Badge, Box, Button, Flex, Heading, Icon, Textarea, useToast} from "@chakra-ui/react";
import {VscPlay, VscDebugPause} from "react-icons/vsc";
import {useState} from "react";

export default function Playground() {
    let [code, setCode] = useState<string>("");
    let [response, setResponse] = useState<string>();
    let [socket, setSocket] = useState<WebSocket|undefined>(undefined);

    const toast = useToast();

    function runCode() {
        const socket = new WebSocket("ws://" + process.env.NEXT_PUBLIC_API_URL + "/playground/run")
        setCode("");

        setSocket(socket);

        socket.addEventListener("message", (e) => {
            setResponse(e.data);
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
                title: "오류가 발생했습니다.",
                description: "알 수 없는 오류로 인해 서버와의 연결이 끊어졌습니다.",
                status: "error",
                duration: 5000,
                isClosable: true
            })
        })
    }

    function RunHandle() {
        if (socket === undefined || socket.readyState === WebSocket.CLOSED || socket.readyState === WebSocket.CLOSING) {
            runCode();
        } else {
            socket.close();
        }
    }

    return <Flex direction={"column"} pt={"160px"} mx={"auto"} w={"75%"} h={"100vh"}>
        <Heading as={"h1"} fontSize={["3xl", null, "5xl"]} mb={"20px"}>샌드박스 <Badge colorScheme={"green"} ml={1} fontSize={"xl"}>BETA</Badge></Heading>
        <Flex gap={"20px"} direction={"column"} h={"100%"}>
            <Flex direction={"column"}>
                <Alert status={"info"} variant={"solid"} mb={1} wordBreak={"keep-all"}><AlertIcon />최대 500번의 명령어를 수행하면 강제 종료됩니다.</Alert>
                <Alert status={"warning"} variant={"solid"} wordBreak={"keep-all"}><AlertIcon />모듈 관련 기능과 입력은 현재 사용할 수 없습니다.</Alert>
            </Flex>
            <Flex direction={["column", null, "row"]} h={"100%"} gap={"10px"}>
                <Textarea placeholder={"여기에 코드를 입력하세요!"} resize={"none"} w={["100%", null, "50%"]} h={["50%", null, "100%"]} onInput={(e) => {setCode(e.currentTarget.value)}} />
                <Box bgColor={"black"} color={"whiteAlpha.800"} borderRadius={"xl"} w={["100%", null, "50%"]} h={["50%", null, "100%"]} overflowY={"auto"} p={2} fontSize={"lg"} fontFamily={"playcmd"}>
                    $
                    {
                        socket === undefined || socket.readyState === WebSocket.CLOSED || socket.readyState === WebSocket.CLOSING
                            ? <>  nyan run playground.nyan</>
                            : null
                    }<br />
                    {response}
                </Box>
            </Flex>
            <Flex direction={"row"} justify={"flex-end"} w={"100%"} h={"50px"} pb={"20px"}>
                <Button colorScheme={"green"} onClick={RunHandle}>
                    {
                        socket && (socket.readyState === WebSocket.OPEN || socket.readyState === WebSocket.CONNECTING)
                            ? <>중지<Icon as={VscDebugPause} ml={"10px"} /></>
                            : <>실행<Icon as={VscPlay} ml={"10px"} /></>
                    }
                </Button>
            </Flex>
        </Flex>
    </Flex>
}