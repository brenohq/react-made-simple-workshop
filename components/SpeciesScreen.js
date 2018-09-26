import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import { GET } from '../utils/http-client'

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const GreyBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

class SpeciesScreen extends React.Component {

  constructor() {
    super()

    this.state = {
      species: []
    }
  }

  componentDidMount () {
    GET('species').then(res => this.setState({ species: res.results }))
  }

  createArrayFromCommaSeparatedString (string = '') {
    return string.split(/[ ,]+/)
  }

  render () {
    return <GreyBoxContainer>

      {
        this.state.species.map(people => <Card key={people.name} propertiesToShow={{
          name: people.name,
          language: people.language,
          classification: people.classification,
          skin_colors: this.createArrayFromCommaSeparatedString(people.skin_colors)
        }} />)
      }

      <Button onClick={this.props.navigate} >Navegar</Button>
    </GreyBoxContainer>
  }
}

export default SpeciesScreen
