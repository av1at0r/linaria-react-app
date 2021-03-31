import React from "react"

const CustomLink = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const { href, ...rest } = props
    return <a {...rest} href="https://github.com/callstack/linaria" />
}

export default CustomLink