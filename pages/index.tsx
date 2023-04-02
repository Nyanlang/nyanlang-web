import {Flex, Heading, Image, useColorModeValue} from "@chakra-ui/react";
import {LnkButton} from "@/components/button";

export default function Index() {
    let subHeaderColor = useColorModeValue("gray.600", "gray.400");

    return (<>
        <Flex direction={"column"} align={"center"} justify={"center"} h={"100vh"} gap={"20px"} position={"relative"} overflow={"hidden"}>
            <Image src={"/images/footstep.png"}
                   alt={""}
                   position={"absolute"}
                   top={"35vh"}
                   left={["10vw", null, "30vw"]}
                   w={["50px", null, "80px"]}
                   h={["50px", null, "80px"]}
                   transform={"rotateZ(-50deg)"}
                   zIndex={-1} />
            <Image src={"/images/footstep.png"}
                   alt={""}
                   position={"absolute"}
                   top={"55vh"}
                   left={["80vw", null, "60vw"]}
                   w={["50px", null, "80px"]}
                   h={["50px", null, "80px"]}
                   transform={"rotateZ(50deg)"}
                   zIndex={-1} />
            <Image src={"/images/nyaaaaaaan.png"}
                   alt={""}
                   position={"absolute"}
                   top={["20vh", "20vh"]}
                   left={["50vw", "50vw"]}
                   w={["150px", "200px", "300px"]}
                   h={"auto"}
                   zIndex={-1} />
            <Heading as={"h1"} fontSize={"4xl"} fontWeight={"black"}>냥랭!</Heading>
            <Heading as={"h2"} fontSize={"3xl"} fontWeight={"black"} color={subHeaderColor} wordBreak={"keep-all"} textAlign={"center"} px={"30px"}>세상 제일의 귀여운 프로그래밍 언어다냥!</Heading>
            <Flex direction={["column", null, "row"]} align={"center"} justify={"center"} gap={"5px"}>
                <LnkButton href={"/docs"}>
                    문서 둘러보기
                </LnkButton>
                <LnkButton href={"/playground"}>
                    놀이터 가기
                </LnkButton>
            </Flex>
        </Flex>
    </>)
}