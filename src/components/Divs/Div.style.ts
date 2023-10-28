import styled from "styled-components";

export const DivBlock = styled.div<{
    height?: string,
    padding?: string,
    margin?: string,
    justify?: string,
    alignitem?: string,
    width?: string,

}>`
  ${props => props.height? `height: ${props.height}`: null};
  ${props => props.width? `width: ${props.width}`: null};
  ${props => props.padding? `padding: ${props.padding}`: null};
  ${props => props.margin? `margin: ${props.margin}`: null};
  ${props => props.justify? `justify-content: ${props.justify}`: null};
  ${props => props.alignitem? `align-items: ${props.alignitem}`: null};
`
export const DivColum = styled(DivBlock)<{ gap?: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${props => `gap: ${props.gap && 30}px`};
`

export const DivColumBlock = styled(DivColum)`
  gap: 30px
`

export const DivRow = styled(DivBlock)<{ gap?: string, colum?: boolean, pointer?: boolean }>`
  ${props => `gap: ${props.gap}`};
  display: flex;
  justify-content: space-between;
  ${props => props.justify? `justify-content: ${props.justify} `: `space-between`};
  ${props => props.pointer && `cursor: pointer`};
  @media screen and (max-width: 1026px) {
    ${props => props.colum && `flex-direction: column`};
  }
`
