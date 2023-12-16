import React from "react";

export const Text = (props) => {
    const {
        className,
        style,
        tag,
        ...others
    } = props

    const Tag = tag ?? 'span';

    return (
        <Tag
            className={className}
            style={style}
        >
            {others.children}
        </Tag>
    )
}