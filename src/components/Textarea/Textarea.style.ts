import styled from "styled-components";

export const Textarea = styled.textarea<{ width: number, height: number }>`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${props => `width: ${props.width}px`};
  ${props => `height: ${props.height}px`};
  border-radius: 4px;
  font-size: 40px;
  background: #F6F6F6;
  @media screen and (max-width: 1026px) {
    width: 825px;
  }
  @media screen and (max-width: 376px) {
    width: 355px;
    height: 223px;
  }
`
