import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 0 1 24%;
  text-align: center;
  margin: 4px;
  padding: 15px;
  background-color: grey;
`;

class SpecieCard extends React.Component {

  render () {
    return <Container>
      <p>Name: {this.props.name}</p>
      <p>Language: {this.props.language}</p>
      <p>Hair color: {this.props.hair_colors}</p>
    </Container>;
  }
}

export default SpecieCard
