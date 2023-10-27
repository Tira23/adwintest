import React, {ReactNode} from 'react';
import * as style from "../Div.style"

interface IPropsDiv {
    children?: ReactNode,
    margin?: string
    padding?: string
    height?: string,
    justify?: string,
    alignItems?: string
    width?: string,
    gap?: string
}

const DivColum = ({
                      children,
                      margin,
                      padding,
                      alignItems,
                      justify,
                      height,
                      width,
                      gap
                  }: IPropsDiv) => {
    return (
        <style.DivRow
            margin={margin}
            padding={padding}
            alignitem={alignItems}
            justify={justify}
            height={height}
            width={width}
            gap={gap}
        >
            {children}
        </style.DivRow>
    );
};

export default DivColum;
