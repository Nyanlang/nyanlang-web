import {
  Flex,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useToast,
  chakra,
  Card,
  CardHeader,
  CardBody,
  CardFooter, Text,
  Spinner, Badge,
  Tooltip,
  Icon
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import ReactPaginate from "react-paginate";
import {MdUpdate, MdPublish} from "react-icons/md";

type blogPostTagsAttributes = {
  name: string,
  color: string,
}

type blogPostTags = {
  id: number,
  attributes: blogPostTagsAttributes
}

type blogPostAttributes = {
  title: string,
  content: string,
  createdAt: string,
  updatedAt: string,
  publishedAt: string,
  post_tags: {
    data: blogPostTags[],
  }
}

interface blogPost {
  id: number,
  attributes: blogPostAttributes
}

interface blogMeta {
  pagination: {
    page: number,
    pageSize: number,
    pageCount: number,
    total: number
  }
}

const Pagenation = chakra(ReactPaginate)

function PostItem(props: blogPost & {category: string}) {
  let router = useRouter();

  return <Card bgColor={"transparent"} borderRadius={"0px"} borderBottom={"1px solid"} borderTop={"1px solid"} onClick={() => router.push(`/blog/${props.category}/${props.id}`)} cursor={"pointer"}>
    <CardHeader display={"flex"} flexDirection={"row"} gap={1} w={"100%"} alignItems={"center"} justifyContent={"center"}>
      {
        props.attributes.post_tags.data.map((tag, index) => (
            <Badge key={index} colorScheme={tag.attributes.color}>{tag.attributes.name}</Badge>
        ))
      }
    </CardHeader>
    <CardBody>
      <Heading>{props.attributes.title}</Heading>
    </CardBody>
    <CardFooter flexDirection={"column"}>
      <Tooltip label={"Published Date"}><Text w={"100%"}><Icon as={MdPublish} />{new Date(props.attributes.publishedAt).toLocaleString()}</Text></Tooltip>
      <Tooltip label={"Updated Date"}><Text w={"100%"}><Icon as={MdUpdate} />{new Date(props.attributes.updatedAt).toLocaleString()}</Text></Tooltip>
    </CardFooter>
  </Card>
}

export default function BlogIndex() {
  let toast = useToast();
  let [posts, setPosts] = useState<blogPost[]|undefined>(undefined);
  let [meta, setMeta] = useState<blogMeta|undefined>(undefined);

  function loadBlogPosts(api_id: string) {
    fetch(`/api/v2/blog/${api_id}`).then(res => {
      if (res.ok) {
        return res.json()
      } else {
        toast({
          title: "Error",
          description: "Failed to load posts",
          status: "error",
          duration: 5000,
          isClosable: true,
        })
        throw new Error("Failed to load posts")
      }
    }).then(data => {
      setPosts(data.data)
      setMeta(data.meta)
    }).catch(err => {
      console.error(err)
    })
  }

  useEffect(() => {
    setPosts(undefined);
    loadBlogPosts("posts");
  }, [])

  return <Flex direction={"column"} h={"100vh"} gap={"20px"} position={"relative"} overflow={"hidden"} pt={"100px"}>
    <Tabs position={"relative"} colorScheme={"nyanlang"} display={"flex"} flexDirection={"column"} align={"center"} w={"100%"}>
      <TabList w={"fit-content"} mx={"auto"}>
        <Tab onClick={() => {setPosts(undefined);loadBlogPosts("posts")}}>Nyanlang</Tab>
        <Tab onClick={() => {setPosts(undefined);loadBlogPosts("c-nyan-posts")}}>CNyan</Tab>
      </TabList>
      <TabPanels mt={"20px"} mb={"20px"}>
        <TabPanel>
          {
            posts ? (
              posts.map((post, index) => {
                return <PostItem {...post} category={"posts"} key={index} />
              })
            ) : <Spinner color={"nyanlang.500"} />
          }
        </TabPanel>
        <TabPanel>
          {
            posts ? (
              posts.map((post, index) => {
                return <PostItem {...post} category={"c-nyan-posts"} key={index} />
              })
            ) : <Spinner color={"nyanlang.500"} />
          }
        </TabPanel>
      </TabPanels>
    </Tabs>
    {
      meta ? (
        <Pagenation
          pageCount={meta.pagination.pageCount}
          initialPage={1}
          breakLabel={"..."}
          nextLabel={">"}
          previousLabel={"<"}
          onPageChange={() => {}}
          pageRangeDisplayed={5}
          renderOnZeroPageCount={null}

          listStyleType={"none"}
          display={"flex"}
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={"10px"}
          mt={"20px"}
          mb={"20px"}
        />
      ) : null
    }
  </Flex>
}