import React, { ReactNode} from 'react';
import * as style from "../Div.style"

interface IPropsDiv{
    children: ReactNode,
    height: string
}

const DivColum = ({children, height}:IPropsDiv) => {
    return (
        <style.DivColum height={height}>
            {children}
        </style.DivColum>
    );
};

export default DivColum;
