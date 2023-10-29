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
export const SectionModal = styled(Section)`
  flex-direction: column;
  justify-content: center;
  width: 1214px;
  height: 637px;
  border-radius: 40px;
  background: var(--white, #FFF);
  z-index: 15;
  @media screen and (max-width: 1025px) {
    width: 928px;
    height: 745px;
    padding: 50px;
  }
  @media screen and (max-width: 376px) {
    padding: 46px 10px 20px ;
    width: 375px;
    height: 745px;
  }
`
