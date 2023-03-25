import {Box, Grid, GridItem} from "@chakra-ui/react";
import {DocsNavigation} from "@/components/navigation";

export default function DocsTemplate(props: { children: any }) {
    /*const router = useRouter();

    useEffect(() => {
        if (router.asPath.split("#")[1]) {
            const element = document.getElementById(router.asPath.split("#")[1]);
            if (element) {
                console.log(element.getBoundingClientRect())
                window.scrollTo(0, element.getBoundingClientRect().top - 8000);
            }
        }
    }, [router.asPath])*/

    return <>
        <Grid w={"100vw"} h={"100vh"} pt={"80px"} gridTemplateColumns={"repeat(4, 1fr)"} gridTemplateRows={"1fr"}>
            <GridItem colSpan={1} h="100%" position={["fixed", null, null, "relative"]} top={["80px", null, null, "0"]} borderRight={["none", null, null, "1px solid black"]}>
                <Box position={["relative", null, null, "sticky"]} top={["0", null, null, "80px"]} overflowY={"auto"}>
                    <DocsNavigation />
                </Box>
            </GridItem>
            <GridItem colSpan={[4, null, null, 3]} py={["80px", null, null, "40px"]} px={["10px", null, null, "40px"]} w={"100%"}>
                {props.children}
            </GridItem>
        </Grid>
    </>
}