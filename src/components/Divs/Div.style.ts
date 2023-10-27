import styled from "styled-components";

export const DivBlock = styled.div<{
    height?: string,
    padding?: string,
    margin?: string,
    justify?: string,
    alignitem?: string,
    width?: string,

}>`
  ${props => `height: ${props.height}`};
  ${props => `width: ${props.width}`};
  ${props => `padding: ${props.padding}`};
  ${props => `margin: ${props.margin}`};
  ${props => `justify-content: ${props.justify}`};
  ${props => `align-items: ${props.alignitem}`};
`
export const DivColum = styled(DivBlock)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const DivColumBlock = styled(DivColum)`
  gap: 30px;
`

export const DivRow = styled(DivBlock)<{ gap?: string }>`
  ${props => `gap: ${props.gap}`};
  display: flex;
  justify-content: space-between;
`
