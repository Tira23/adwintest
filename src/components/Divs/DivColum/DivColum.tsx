import React, {FC, ReactNode} from 'react';
import * as style from "../Div.style"

interface IPropsDiv {
    children: ReactNode,
    height?: string
    margin?: string
    padding?: string
    justify?: string,
    alignItems?: string,
    gap?: number
}

const DivColum: FC<IPropsDiv> = ({gap, children, margin, padding, alignItems, justify, height}) => {
    return (
        <style.DivColum gap={gap} margin={margin} padding={padding} alignitem={alignItems} justify={justify}
                        height={height}>
            {children}
        </style.DivColum>
    );
};

export default DivColum;
