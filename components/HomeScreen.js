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
  max-width: 70%;
  background-color: grey;
`

class HomeScreen extends React.Component {

  constructor() {
    super()

    // Configurando o contexto em que as funções terão quando forem chamadas
    this.handleInspectClick = this.handleInspectClick.bind(this)
    this.handleRandomClick = this.handleRandomClick.bind(this)
  }

  // Definindo funções para cada evento de click
  handleInspectClick () {
    console.log('handle inspect button click event')
  }

  handleRandomClick () {
    console.log('handle random button click event')
  }

  render () {
    return <CenteredContainer>
      <GreyBoxContainer>

        <h1>Find the pokémons!</h1>
        <Button onClick={this.handleRandomClick}>Random</Button>
        <Button onClick={this.handleInspectClick}>Inspect</Button>

      </GreyBoxContainer>
    </CenteredContainer>;
  }
}

export default HomeScreen
