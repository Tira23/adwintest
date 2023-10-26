import styled from "styled-components";

export const DivBlock = styled.div<{height?: string}>`
  height: ${props => props.height};
`
export const DivColum = styled(DivBlock)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const DivColumBlock = styled(DivColum)`
  gap: 30px;
`

export const DivRow = styled(DivBlock)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
