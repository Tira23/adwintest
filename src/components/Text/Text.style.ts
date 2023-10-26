import styled from "styled-components";

export const Text = styled.span<{ color: string, margin: string }>`
  color: ${props => props.color};
  margin: ${props => props.margin};
`

