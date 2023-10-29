import React, {ReactNode} from 'react';
import * as style from "./Section.style"

interface ISectionProps {
    children: ReactNode
    flex?: string
    height?: string,
    padding?: string,
    margin?: string,
    justify?: string,
    alignItems?: string
    flexDir?: string,
    width?: number,
    ref?: any
}

const Section = ({
                     children,
                     flex,
                     justify,
                     margin,
                     padding,
                     alignItems,
                     height,
                     flexDir,
                     width,
                     ref
                 }: ISectionProps) => {
    switch (flex) {
        case "column":
            return (
                <style.SectionFlex
                    margin={margin}
                    padding={padding}
                    alignItems={alignItems}
                    justify={justify}
                    height={height}
                    flexdir={flexDir}
                    width={width}
                >
                    {children}
                </style.SectionFlex>);
        case "row":
            return (
                <style.SectionFlex
                    margin={margin}
                    padding={padding}
                    alignItems={alignItems}
                    justify={justify}
                    height={height}
                    flexdir={flexDir}
                    width={width}
                >
                    {children}
                </style.SectionFlex>);
        case "modal":
            return (
                <style.SectionModal
                    ref={ref}
                    margin={margin}
                    padding={padding}
                    alignItems={alignItems}
                    justify={justify}
                    height={height}
                    // flexdir={flexDir}
                    width={width}
                >
                    {children}
                </style.SectionModal>);
        default:
            return (
                <style.Section
                    margin={margin}
                    padding={padding}
                    alignItems={alignItems}
                    justify={justify}
                    height={height}
                    width={width}
                >
                    {children}
                </style.Section>);
    }
};

export default Section;
