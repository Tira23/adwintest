import React from 'react';
import * as style from "./Text.style"

interface IPropsSpan {
    text: number | string,
    color?: string,
    margin?: string,
    size?: number,
    letter?: number,
    lineheight?: number,
    onClick?: () => void
}

const Text = ({onClick, text, color, margin = "0", size, letter = 0.72, lineheight = 110}: IPropsSpan) => {
    return (
        <style.Text onClick={onClick} style={{cursor: 'pointer'}} color={color} margin={margin} size={size}
                    letter={letter} lineheight={lineheight}>
            {text}
        </style.Text>
    );
};

export default Text;
