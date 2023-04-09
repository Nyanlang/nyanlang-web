import {
    Box,
    Flex,
    Heading,
    Icon,
    Link,
    Spinner,
    Text,
    Tooltip,
    useToast,
    UnorderedList,
    OrderedList,
    ListItem,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCation,
    TableContainer
} from "@chakra-ui/react";
import {Lnk} from "@/components/docs-component";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {MdPublish, MdUpdate} from "react-icons/md";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";


type blogPostView = {
    id: number,
    attributes: {
        title: string,
        content: string,
        createdAt: string,
        updatedAt: string,
        publishedAt: string,
    }
}


export default function BlogPostView() {
    let [blogPost, setBlogPost] = useState<blogPostView | null>(null);

    let router = useRouter();

    let toast = useToast();

    useEffect(() => {
        fetch(`/api/v2/blog/${router.query.category}/${router.query.post_id}`)
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else {
                    throw new Error("Failed to fetch blog post");
                }
            })
            .then(data => {
                setBlogPost(data.data);
                console.log(data.data);
            })
            .catch(err => {
                toast({
                    title: "Error",
                    description: "Failed to load blog post",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                })
                console.error(err);
            })
    }, [router.query.category, router.query.post_id])

    return <Flex direction={"column"} h={"100vh"} gap={"20px"} position={"relative"} pt={"100px"}>
        <Box w={["90%", "80%", "70%", "50%"]} mx={"auto"} h={"100%"}>
            <Link href={"/blog"} ml={5} color={"gray.500"} fontSize={"lg"} fontWeight={"bold"}>{`<`} 글 목록</Link>
            {
                blogPost ? (
                    <>
                        <Box w={"100%"} p={5} my={10} borderBottom={"1px solid"}>
                            <Heading>{blogPost.attributes.title}</Heading>
                            <Tooltip label={"Published Date"}><Text w={"fit-content"}><Icon as={MdPublish} />{new Date(blogPost.attributes.publishedAt).toLocaleString()}</Text></Tooltip>
                            <Tooltip label={"Updated Date"}><Text w={"fit-content"}><Icon as={MdUpdate} />{new Date(blogPost.attributes.updatedAt).toLocaleString()}</Text></Tooltip>
                        </Box>
                        <Box w={"100%"} p={5} my={10}>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                components={{
                                    h1: ({node, ...props}) => <Heading as={"h1"} fontSize={"5xl"} my={6} pb={2} borderBottom={"1px solid"} {...props}/>,
                                    h2: ({node, ...props}) => <Heading as={"h2"} fontSize={"4xl"} my={4} pb={2} borderBottom={"1px solid"} {...props}/>,
                                    h3: ({node, ...props}) => <Heading as={"h3"} fontSize={"3xl"} my={4} pb={2} borderBottom={"1px solid"} {...props}/>,
                                    h4: ({node, ...props}) => <Heading as={"h4"} fontSize={"2xl"} my={2} {...props}/>,
                                    h5: ({node, ...props}) => <Heading as={"h5"} fontSize={"xl"} my={2} {...props}/>,
                                    h6: ({node, ...props}) => <Heading as={"h6"} fontSize={"lg"} my={2} {...props}/>,
                                    p: ({node, ...props}) => <Text as={"p"} {...props}/>,
                                    a: ({node, ...props}) => <Lnk {...props}/>,
                                    ul: ({node, ...props}) => <UnorderedList as={"ul"} {...props}/>,
                                    ol: ({node, ...props}) => <OrderedList as={"ol"} {...props}/>,
                                    li: ({node, ...props}) => <ListItem as={"li"} {...props}/>,
                                    blockquote: ({node, ...props}) => <Text as={"blockquote"} pl={3} py={2} my={4} borderLeft={"4px solid"} {...props}/>,
                                    table: ({node, ...props}) => <TableContainer my={8}><Table {...props}/></TableContainer>,
                                    thead: ({node, ...props}) => <Thead {...props}/>,
                                    tbody: ({node, ...props}) => <Tbody {...props}/>,
                                    tr: ({node, ...props}) => <Tr {...props}/>,
                                    th: ({node, ...props}) => <Th {...props}/>,
                                    td: ({node, ...props}) => <Td {...props}/>,
                                    pre: ({node, ...props}) => <Text as={"pre"} {...props}/>,
                                    code: ({node, ...props}) => <Text as={"code"} {...props}/>,
                                    em: ({node, ...props}) => <Text as={"em"} {...props}/>,
                                    strong: ({node, ...props}) => <Text as={"strong"} {...props}/>,
                                    del: ({node, ...props}) => <Text as={"del"} fontStyle={"strikethrough"} {...props}/>,
                                    hr: ({node, ...props}) => <Text my={10} as={"hr"} {...props}/>,
                                    img: ({node, ...props}) => <Flex w={"100%"} h={"fit-content"} align={"center"} justify={"center"}><Text as={"img"} my={10} maxW={"60%"} {...props}/></Flex>,
                                }}
                            >{blogPost.attributes.content}</ReactMarkdown>
                        </Box>
                    </>
                ) : <Flex w={"100%"} h={"100%"} align={"center"} justify={"center"}><Spinner color={"nyanlang.500"}/></Flex>
            }
        </Box>
    </Flex>
}