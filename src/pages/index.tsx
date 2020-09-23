import React from 'react'
import styled from 'styled-components'

const Index = () => (
  <StyledDiv data-cy="title">
    Frontend template
    <span>by Wealize</span>
  </StyledDiv>
)

const StyledDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-color: #f05f78ff;
  color: white;
  font-family: sans-serif;
  font-size: 32px;
  font-weight: bolder;
  line-height: 48px;
  width: 50vw;
  height: 50vh;
  margin: 25vh auto;

  span {
    font-size: 18px;
    line-height: 32px;
    font-weight: normal;
  }
`

export default Index
