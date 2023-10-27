import styled from "styled-components";

export const Filter = styled.button<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  border-radius: 40px;
  width: 196px;
  height: 64px;
  background: ${props => (props.color === "blue" && "#88A1DE")
          || (props.color === "grey" && "#F6F6F6")};

  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }
`
