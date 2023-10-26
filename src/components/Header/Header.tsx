import React, {ReactNode} from 'react';
import * as style from "./Header.style"

interface IHeaderProps {
    children: ReactNode
}
const Header = ({children}:IHeaderProps) => {
    return (
        <style.Header>
            {children}
        </style.Header>
    );
};

export default Header;
