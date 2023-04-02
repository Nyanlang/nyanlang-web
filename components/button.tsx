import {Button, Link, useColorModeValue} from "@chakra-ui/react";

export function BasicButton(props: {children: React.ReactNode, onClick: Function, bgColor?: string, hoverBgColor?: string}) {
    const defaultBgColor = useColorModeValue("white", "gray.700");
    const boxShadow = useColorModeValue("0px 6px rgba(0, 0, 0, 0.8)", "0px 6px rgba(255, 255, 255, 0.8)");
    const shortBoxShadow = useColorModeValue("0px 3px rgba(0, 0, 0, 0.8)", "0px 3px rgba(255, 255, 255, 0.8)");
    const textColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
    const borderColor = useColorModeValue("gray.700", "gray.300");

    return <Button
        borderRadius={"full"}
        px={4}
        py={2}
        boxShadow={boxShadow}
        color={textColor}
        my={"4px"}
        border={"2px solid"}
        borderColor={borderColor}
        bgColor={props.bgColor ? props.bgColor : defaultBgColor}
        _hover={{bgColor: props.hoverBgColor ? props.hoverBgColor : "nyanlang.500", boxShadow: shortBoxShadow}}
        onClick={() => props.onClick()}>{props.children}</Button>
}

export function LnkButton(props: {children: React.ReactNode, href: string, bgColor?: string, hoverBgColor?: string}) {
    const defaultBgColor = useColorModeValue("white", "gray.700");
    const boxShadow = useColorModeValue("0px 6px rgba(0, 0, 0, 0.8)", "0px 6px rgba(255, 255, 255, 0.8)");
    const shortBoxShadow = useColorModeValue("0px 3px rgba(0, 0, 0, 0.8)", "0px 3px rgba(255, 255, 255, 0.8)");
    const textColor = useColorModeValue("blackAlpha.900", "whiteAlpha.900");
    const borderColor = useColorModeValue("gray.700", "gray.300");

    return <Link
        borderRadius={"full"}
        px={4}
        py={2}
        boxShadow={boxShadow}
        color={textColor}
        my={"4px"}
        href={props.href}
        border={"2px solid"}
        borderColor={borderColor}
        bgColor={props.bgColor ? props.bgColor : defaultBgColor}
        _hover={{bgColor: props.hoverBgColor ? props.hoverBgColor : "nyanlang.500", boxShadow: shortBoxShadow}}>{props.children}</Link>
}