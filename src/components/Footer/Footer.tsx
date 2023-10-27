import React, {FC, ReactNode} from 'react';
import * as style from "./Footer.style"

interface IFooterProps {
    children?: ReactNode,
    padding?: string,
    position?: string
}

const Footer: FC<IFooterProps> = ({children, padding, position}) => {
    return (
        <style.Footer padding={padding} position={position}>
            {children}
        </style.Footer>
    );
};

export default Footer;
