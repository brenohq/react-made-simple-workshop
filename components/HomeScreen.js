import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const GreyBoxContainer = styled.div`
  text-align: center;
  max-width: 50%;
  background-color: grey;
`

class HomeScreen extends React.Component {

  render () {
    return <CenteredContainer>
      <GreyBoxContainer>

        <h1>Find the pokémons!</h1>
        <Button>Search</Button>
        <Button>Inspect</Button>

      </GreyBoxContainer>
    </CenteredContainer>;
  }
}

export default HomeScreen
