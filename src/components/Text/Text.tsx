import React from 'react';
import * as style from "./Text.style"

interface IPropsSpan {
    text: string,
    color?: string,
    margin?: string
}

const Text = ({text, color = "black",margin = "0"}:IPropsSpan) => {
    return (
        <style.Text color={color} margin={margin}>
            {text}
        </style.Text>
    );
};

export default Text;
