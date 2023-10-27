import styled from "styled-components";

export const Footer = styled.footer<{ padding?: string, position?: string }>`
  ${props => `position: ${props.position}`};
  ${props => ` padding:  ${props.padding}`};
  background: #050F28;
  height: 70px;
`
