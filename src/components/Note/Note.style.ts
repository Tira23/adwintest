import styled from "styled-components";

export const note = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 587px;
  height: 560px;
  padding: 70px 40px 70px 30px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #b84343;

  & h2 {
    color: #050F28;
    font-size: 42px;
    line-height: 110%;
  }

  & span {
    color: #050F28;
    font-size: 18px;
    font-weight: 400;
    line-height: 170%;
  }

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > span {
      color: #88A1DE;
      font-size: 20px;
      font-weight: 400;
      line-height: 120%;
    }
  }
`

