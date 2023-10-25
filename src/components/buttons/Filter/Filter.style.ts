import styled from "styled-components";

export const filter = styled.button<{  color: string }>`
  position: relative;
  padding: 20px;
  border-radius: 40px;
  background: ${props => (props.color === "blue" && "#88A1DE")
                || (props.color === "grey" && "#F6F6F6")};
  & div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
  }
`
