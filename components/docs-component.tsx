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
    useColorModeValue
} from "@chakra-ui/react";
import {LinkIcon} from "@chakra-ui/icons";
import {useRouter} from "next/router";

export function H1(props: { id?: string, children: any }) {
    let router = useRouter();

    return <Heading id={props.id} as={"h1"} fontSize={"4xl"} borderBottom={"1px solid black"} pb={3} mb={3} mt={8} display={"flex"} flexDirection={"row"} alignItems={"center"}>
        {props.children}<IconButton aria-label={"Copy link"} icon={<LinkIcon />} size={"md"} variant={"ghost"} onClick={async () => {await navigator.clipboard.writeText("https://nyan.sserve.work"+router.route+"#"+props.id)}} zIndex={2} />
    </Heading>
}

export function H2(props: { id?: string, children: any }) {
    let router = useRouter();

    return <Heading id={props.id} as={"h2"} fontSize={"2xl"} borderBottom={"1px solid black"} pb={2.5} mb={2.5} mt={8} display={"flex"} flexDirection={"row"} alignItems={"center"}>
        {props.children}<IconButton aria-label={"Copy link"} icon={<LinkIcon />} size={"md"} variant={"ghost"} onClick={async () => {await navigator.clipboard.writeText("https://nyan.sserve.work"+router.route+"#"+props.id)}} zIndex={2} />
    </Heading>
}

export function H3(props: { id?: string, children: any }) {
    let router = useRouter();

    return <Heading id={props.id} as={"h3"} fontSize={"xl"} borderBottom={"1px solid black"} pb={1} mb={1} mt={8} display={"flex"} flexDirection={"row"} alignItems={"center"}>
        {props.children}<IconButton aria-label={"Copy link"} icon={<LinkIcon />} size={"sm"} variant={"ghost"} onClick={async () => {await navigator.clipboard.writeText("https://nyan.sserve.work"+router.route+"#"+props.id)}} zIndex={2} />
    </Heading>
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

export function MyTable(props: { caption?: string, head: Array<string|{name:string,isNumeric?:boolean}>, body: Array<Array<string>> }) {
    return <TableContainer>
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