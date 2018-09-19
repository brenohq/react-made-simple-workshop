import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div`
  flex-direction: column;
`

class PokemonCard extends React.Component {

  render () {
    return <Container>
      <Column>
        <h3>Name: {this.props.name} #{this.props.number}</h3>
        <h3>Type: {this.props.type}</h3>
      </Column>
    </Container>;
  }
}

export default PokemonCard
