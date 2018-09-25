import React from 'react'
import styled from 'styled-components'
import SpecieCard from './SpecieCard'
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

  render () {
    return <GreyBoxContainer>

      {
        this.state.species.map(specie => <SpecieCard key={specie.name} {...specie} />)
      }

      <Button onClick={this.props.navigate}>Navegar</Button>
    </GreyBoxContainer>
  }
}

export default SpeciesScreen
