import styled from "styled-components";

export const Button = styled.button<{
    color: string,
    position?: string,
    top?: number,
    left?: number,
    right?: number,
    bottom?: number
}>`
  ${props => `position: ${props.position}`};
  ${props => `top: ${props.top}px`}
  ${props => `left: ${props.left}px`};
  ${props => `right: ${props.right}px`};
  ${props => `bottom: ${props.bottom}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 97px;
  border-radius: 65px;
  padding: 42px 120px 42px 120px;
  color: white;
  font-size: 18px;
  letter-spacing: 1.08px;
  text-transform: uppercase;
  line-height: 90%;
  background: ${props => (props.color === "black" && "#050F28")
          || (props.color === "white" && "#88A1DE") || props.color};
`
export const ButtonWhite = styled(Button)<{ margin?: string }>`
  width: 100%;
  ${props => `margin: ${props.margin}`};
  padding: 42px 796px;
  border-radius: 50px;
  border: 2px solid #88A1DE;
  background: #FFF;
  color: #050F28;
  font-size: 22px;
  line-height: 90%;
  letter-spacing: 1.32px;
  text-transform: uppercase;

  &:hover {
    background: #F6F6F6
  }
`
export const ButtonBlueUp = styled(Button)`
  color: #88A1DE;
  width: 238px;
  height: 72px;
  @media screen and (max-width: 376px) {
    width: 355px;
  }
`
