import styled from "styled-components";

export const Screen = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(5, 15, 40, 0.8);
  z-index: 2;
`
export const Overlay = styled(Screen)`
  width: 100%;
  height: 100%;
  background-color: rgba(5, 15, 40, 0.8);
  z-index: 1;
`
