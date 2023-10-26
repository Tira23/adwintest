import React from "react";
import * as styled from "./Button.style"
import Text from "../../Text/Text";

interface IButton {
    text: string,
    color: "black" | "white",
    big?: boolean,
    textColor: string
}

const Button = ({text, color, big, textColor}: IButton) => {

    return (

        big
            ? (<styled.ButtonWhite color={color}>
                <Text text={text} color={textColor}/>
            </styled.ButtonWhite>)
            : (<styled.Button color={color}>
                <Text text={text}  color={textColor}/>
            </styled.Button>)

    )
}

export default Button
