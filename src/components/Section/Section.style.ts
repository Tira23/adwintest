import styled from "styled-components";

export const Section = styled.section<{
    height?: string,
    padding?: string,
    margin?: string,
    justify?: string,
    alignItems?: string,
    width?: number
}>`
  ${props => `height: ${props.height}`};
  ${props => `padding: ${props.padding}`};
  ${props => `margin: ${props.margin}`};
  ${props => `justify-content: ${props.justify}`};
  ${props => `align-items: ${props.alignItems}`};
  ${props => `width: ${props.width}px`};
  display: flex;
  //gap: 40px;
`

export const SectionFlex = styled(Section)<{
    flexdir?: string,
    height?: string,
    padding?: string,
    margin?: string,
    justify?: string,
    alignItems?: string,
    width?: number
}>`
  ${props => `height: ${props.height}`};
  ${props => `padding: ${props.padding}`};
  ${props => `margin: ${props.margin}`};
  ${props => `justify-content: ${props.justify}`};
  ${props => `align-items: ${props.alignItems}`};
  ${props => `width: ${props.width}px`};
  display: flex;
  flex-direction: ${props => props.flexdir};
  flex-wrap: wrap;
`
