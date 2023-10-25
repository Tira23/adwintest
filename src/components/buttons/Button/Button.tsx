import React from "react";
import * as styled from "./Button.style"

interface IButton {
    text: string,
    color: "black" | "white",
    big?: boolean
}

const Button = ({text, color, big}: IButton) => {

    return (

        big ? (<styled.ButtonWhite color={color}>
                {text}
            </styled.ButtonWhite>) : (<styled.Button color={color}>
                {text}
            </styled.Button>)

    )
}

export default Button
