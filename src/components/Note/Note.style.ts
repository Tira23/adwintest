import styled from "styled-components";

export const Note = styled.div<{ margin?: string }>`
  ${props => `margin: ${props.margin}`};
  width: 587px;
  height: 560px;
  padding: 70px 40px 70px 30px;
  //flex-basis: 30%;
  border-radius: 20px;
  background: #FFF;
  margin: 40px 5px;
  @media screen and (max-width: 1025px) {
    width: 480px;
    height: 530px;
    padding: 50px 30px 60px;
  }
  @media screen and (max-width: 1025px) {
    width: 355px;
    height: 520px;
    padding: 34px 14px 55px 10px;
  }
`

