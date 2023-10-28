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
    gap?: string,
    colum?: boolean,
    togglePopup?: () => void
}

const DivColum = ({
                      children,
                      margin,
                      padding,
                      alignItems,
                      justify,
                      height,
                      width,
                      gap,
                      colum,
                      togglePopup
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
            colum={colum}
            pointer={togglePopup && true}
            onClick={togglePopup}
        >
            {children}
        </style.DivRow>
    );
};

export default DivColum;
