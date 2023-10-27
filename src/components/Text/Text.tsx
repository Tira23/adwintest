import React from 'react';
import * as style from "./Text.style"

interface IPropsSpan {
    text: string,
    color?: string,
    margin?: string,
    size?: number
    letter?: number
    lineheight?: number
}

const Text = ({text, color, margin = "0", size, letter = 0.72, lineheight = 110}: IPropsSpan) => {
    return (
        <style.Text color={color} margin={margin} size={size} letter={letter} lineheight={lineheight}>
            {text}
        </style.Text>
    );
};

export default Text;
