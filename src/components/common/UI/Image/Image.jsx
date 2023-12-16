import {useEffect, useState} from "react";

export const Image = (props) => {
    const {
        className,
        style,
        onError,
        alt,
        src,
        fallbackSrc,
        ...others
    } = props;

    const [error, setError] = useState(!src);
    useEffect(() => setError(!src), [src]);

    if (error && fallbackSrc) {
        return (
            <img
                className={className}
                src={fallbackSrc}
                alt={alt}
                style={style}
                onError={onError}
                {...others}
            />
        );
    }

    return (
        <img
            className={className}
            src={src}
            alt={alt}
            style={style}
            onError={(event) => {
                onError?.(event);
                setError(true);
            }}
            {...others}
        />
    );
};
