import React, {FC} from 'react';
import * as style from "./Title.style"

interface ITitleProps {
    text?: string
    children?: string
    size?: "lage" | "medium" | "small"
}

const Title: FC<ITitleProps> = ({text, size = "medium"}: ITitleProps) => {

    switch (size) {
        case "lage":
            return (
                <style.TitleH1>
                    {text}
                </style.TitleH1>);
        case "small":
            return (
                <style.TitleH3>
                    {text}
                </style.TitleH3>);
        default:
            return (
                <style.TitleH2>
                    {text}
                </style.TitleH2>);
    }
};

export default Title;
