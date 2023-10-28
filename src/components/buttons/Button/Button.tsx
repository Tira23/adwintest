import React, {MouseEvent} from "react";
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
    togglePopup?: () => void
    width?: number,
    height?: number,
    verysmall?: boolean
}

const Button = ({verysmall, width,height,text, color, textColor, position, top, left, right, bottom, size, margin, togglePopup}: IButton) => {
    switch (size) {
        case "Up":
            return (
                <styled.ButtonBlueUp onClick={togglePopup} color={color} position={position} top={top} right={right} bottom={bottom}
                                     left={left}>
                    <Text text={text} color={textColor}/>
                </styled.ButtonBlueUp>);
        case "White":
            return (
                <styled.ButtonWhite onClick={togglePopup} color={color} position={position} top={top} right={right} bottom={bottom}
                                    left={left} margin={margin}>
                    <Text text={text} color={textColor}/>
                </styled.ButtonWhite>);
        default:
            return (
                <styled.Button verysmall={verysmall} width={width} height={height} onClick={togglePopup} color={color} position={position} top={top} right={right} bottom={bottom} left={left}>
                    <Text text={text} color={textColor}/>
                </styled.Button>);
    }
}

export default Button
