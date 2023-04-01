import {
    Box,
    Heading,
    Link,
    Table,
    TableCaption,
    TableContainer,
    Text,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    IconButton,
    useColorModeValue,
    Tooltip,
    useToast
} from "@chakra-ui/react";
import {LinkIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";

const domain = "https://nyanlang.org"

function Heads(props: {as: "h1"|"h2"|"h3", id?: string, children: any}) {
    const fontSize = props.as === "h1" ? "4xl" : props.as === "h2" ? "2xl" : "xl";
    const pm = props.as === "h1" ? 3 : props.as === "h2" ? 2 : 1;

    let router = useRouter();

    let toaster = useToast();

    return <Heading id={props.id} as={props.as} fontSize={fontSize} borderBottom={"1px solid black"} pb={pm} mb={pm} mt={16} display={"flex"} flexDirection={"row"} alignItems={"center"}>
        {props.children}
        {
            props.id
                ? <Tooltip label={"누르면 링크가 복사된다냥!"}>
                    <IconButton aria-label={"Copy link"} icon={<LinkIcon />} size={"md"} variant={"ghost"} onClick={async () => {await navigator.clipboard.writeText(domain+router.route+"#"+props.id);toaster({title: "복사됐다냥!", description:"어디서든 붙여넣기로 이 부분을 남들과 공유할 수 있다냥.", status: "success", duration: 3000, isClosable: true, variant: "left-accent", position: "bottom"})}} zIndex={2} />
                </Tooltip>
                : null
        }
    </Heading>
}

export function H1(props: { id?: string, children: any }) {
    return <Heads id={props.id} as={"h1"}>
        {props.children}
    </Heads>
}

export function H2(props: { id?: string, children: any }) {
    return <Heads id={props.id} as={"h2"}>
        {props.children}
    </Heads>
}

export function H3(props: { id?: string, children: any }) {
    return <Heads id={props.id} as={"h3"}>
        {props.children}
    </Heads>
}

export function P(props: { children: any }) {
    return <Text my={6}>{props.children}</Text>
}

export function Lnk(props: { href: string, children: any }) {
    return <Link href={props.href} isExternal color={"nyanlang.700"} _hover={{color:"nyanlang.500"}}>{props.children}</Link>
}

export function InCode(props: { children: any }) {
    const bg = useColorModeValue("gray.200", "gray.700");
    const color = useColorModeValue("blackAlpha.900", "whiteAlpha.900");

    return <Box as={"span"} rounded={"md"} bg={bg} color={color} py={"2px"} px={"4px"} mx={"1px"}>{props.children}</Box>
}

export function Bold(props: { children: any }) {
    return <Box as={"span"} fontWeight={"bold"}>{props.children}</Box>
}

export function OutCode(props: { children: any }) {
    const bg = useColorModeValue("gray.200", "gray.700");
    const color = useColorModeValue("blackAlpha.900", "whiteAlpha.900");

    return <Box rounded={"md"} bg={bg} color={color} w={"100%"} p={"10px"} mx={"5px"} my={"10px"}>
        {props.children}
    </Box>
}

export function MyTable(props: { caption?: string, head: Array<string|{name:string,isNumeric?:boolean}>, body: Array<Array<string|number>> }) {
    return <TableContainer mb={"40px"}>
        <Table variant={"simple"}>
            {
                props.caption && <TableCaption>{props.caption}</TableCaption>
            }
            <Thead>
                <Tr>
                    {
                        props.head.map((item, index): JSX.Element => {
                            if (typeof item === "string") {
                                return <Th key={index}>{item}</Th>
                            } else {
                                return <Th key={index} isNumeric={item.isNumeric}>{item.name}</Th>
                            }
                        })
                    }
                </Tr>
            </Thead>
            <Tbody>
                {
                    props.body.map((row, index): JSX.Element => {
                        return <Tr key={index}>
                            {
                                row.map((item, index): JSX.Element => {
                                    return <Td key={index}>{item}</Td>
                                })
                            }
                        </Tr>
                    })
                }
            </Tbody>
        </Table>
    </TableContainer>
}