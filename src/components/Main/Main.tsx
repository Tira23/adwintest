import React, {ReactNode} from 'react';
import * as style from "./Main.style"

interface IMainProps {
    children: ReactNode
}

const Main = ({children}: IMainProps) => {
    return (
        <style.Main>
            {children}
        </style.Main>
    );
};

export default Main;
