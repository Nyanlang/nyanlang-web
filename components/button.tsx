import {Button, Link} from "@chakra-ui/react";

export function BasicButton(props: {children: React.ReactNode, onClick: Function, bgColor?: string, hoverBgColor?: string}) {
    return <Button
        borderRadius={"full"}
        px={4}
        py={2}
        boxShadow={"0px 6px rgba(0, 0, 0, 0.8)"}
        my={"4px"}
        border={"2px solid"}
        borderColor={"gray.700"}
        bgColor={props.bgColor ? props.bgColor : "white"}
        _hover={{bgColor: props.hoverBgColor ? props.hoverBgColor : "nyanlang.500", boxShadow: "0px 2px rgba(0, 0, 0, 0.8)"}}
        onClick={() => props.onClick()}>{props.children}</Button>
}

export function LnkButton(props: {children: React.ReactNode, href: string, bgColor?: string, hoverBgColor?: string}) {
    return <Link
        borderRadius={"full"}
        px={4}
        py={2}
        boxShadow={"0px 6px rgba(0, 0, 0, 0.8)"}
        my={"4px"}
        href={props.href}
        border={"2px solid"}
        borderColor={"gray.700"}
        bgColor={props.bgColor ? props.bgColor : "white"}
        color={"blackAlpha.900"}
        _hover={{bgColor: props.hoverBgColor ? props.hoverBgColor : "nyanlang.500", boxShadow: "0px 2px rgba(0, 0, 0, 0.8)"}}>{props.children}</Link>
}