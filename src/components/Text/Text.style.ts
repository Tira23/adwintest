import styled from "styled-components";

export const Text = styled.span<{ color?: string, margin: string, size?: number, letter?: number,lineheight?: number }>`
  ${props => `color: ${props.color}`};
  ${props => `margin: ${props.margin}`};
  ${props => `font-size: ${props.size}px`};
  font-weight: 400;
  line-height: ${props => props.lineheight}%;
  letter-spacing: ${props => props.letter}px;
`

