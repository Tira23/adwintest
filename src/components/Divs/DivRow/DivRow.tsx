import React, { ReactNode} from 'react';
import * as style from "../Div.style"

interface IPropsDiv{
    children: ReactNode
}

const DivColum = ({children}:IPropsDiv) => {
    return (
        <style.DivRow>
            {children}
        </style.DivRow>
    );
};

export default DivColum;
