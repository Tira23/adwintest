import React, {FC, ReactNode} from 'react';
import * as style from './Screen.style'

interface IScreenProps {
    children?: ReactNode,
    togglePopup: () => void
}

const Overlay: FC<IScreenProps> = ({children, togglePopup}) => {

    return (
        <style.Screen>
            <style.Overlay onClick={togglePopup}/>
            {children}
        </style.Screen>
    );
};

export default Overlay;
