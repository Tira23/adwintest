import React from "react";
import * as styled from "./Button.style"
import Text from "../../Text/Text";

interface IButton {
    text: string,
    color: "black" | "white" | string,
    big?: boolean,
    textColor: string,
    position?: string,
    top?: number,
    left?: number,
    right?: number
    bottom?: number,
    size?: "Up" | "White" | "normal",
    margin?: string,
    onClick: () => void
    foo2?: () => void
    width?: number,
    height?: number,
    verysmall?: boolean,
}

const Button = ({
                    verysmall,
                    width,
                    height,
                    text,
                    color,
                    textColor,
                    position,
                    top,
                    left,
                    right,
                    bottom,
                    size,
                    margin,
                    onClick
                }: IButton) => {
    switch (size) {
        case "Up":
            return (
                <styled.ButtonBlueUp onClick={onClick} color={color} position={position} top={top} right={right}
                                     bottom={bottom}
                                     left={left}>
                    <Text text={text} color={textColor}/>
                </styled.ButtonBlueUp>);
        case "White":
            return (
                <styled.ButtonWhite onClick={onClick} color={color} position={position} top={top} right={right}
                                    bottom={bottom}
                                    left={left} margin={margin}>
                    <Text text={text} color={textColor}/>
                </styled.ButtonWhite>);
        default:
            return (
                <styled.Button verysmall={verysmall} width={width} height={height} onClick={onClick} color={color}
                               position={position} top={top} right={right} bottom={bottom} left={left}>
                    <Text text={text} color={textColor}/>
                </styled.Button>);
    }
}

export default Button
