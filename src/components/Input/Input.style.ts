import styled from "styled-components";

export const Input = styled.input<{width: number,height: number}>`
  ${props => `width: ${props.width}px`};
  ${props => `height: ${props.height}px`};
  border-radius: 4px;
  font-size: 40px;
  background: #F6F6F6;
  @media screen and (max-width: 1026px){
    width: 825px;
    height: 80px;
  }
  @media screen and (max-width: 376px){
    width: 355px;
    height: 80px;
  }
`

export const Label = styled.label`
  color: #000;
  font-size: 18px;
  font-weight: 400;
  line-height: 110%;
`
