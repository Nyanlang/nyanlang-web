import {Flex, Heading, Link, Text} from "@chakra-ui/react";

export default function Index() {
    return (
        <Flex direction={"column"} align={"center"} justify={"center"} h={"100vh"} gap={"20px"}>
            <Heading as={"h1"}>Nyanlang</Heading>
            <Text>세상에서 가장 귀여운 프로그래밍 언어</Text>
            <Flex direction={["column", null, "row"]} align={"center"} justify={"center"} gap={"5px"}>
                <Link
                    border={"2px solid"} borderColor={"gray.700"} bg={"nyanlang.500"} _hover={{bg: "nyanlang.300"}} href={"/docs"} px={3} py={2} borderRadius={"md"}>
                    시작하기
                </Link>
                {/*<Link
                    border={"2px solid"} borderColor={"gray.700"} bg={"transparent"} _hover={{bg: "nyanlang.500"}} href={"/"} px={3} py={2} borderRadius={"md"}>
                    둘러보기
                </Link>*/}
            </Flex>
        </Flex>
    )
}