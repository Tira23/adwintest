import React, {ReactNode} from 'react';
import * as style from "./Section.style"
interface ISectionProps {
    children: ReactNode
}
const Section = ({children}:ISectionProps) => {
    return (
        <style.Section>
            {children}
        </style.Section>
    );
};

export default Section;
