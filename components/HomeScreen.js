import React from 'react'
import styled from 'styled-components'
import SpecieCard from './SpecieCard'
import { GET } from '../utils/http-client'

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

    this.handleInspectClick = this.handleInspectClick.bind(this)
    this.handleRandomClick = this.handleRandomClick.bind(this)

    this.state = {
      specieData: {},
      species: []
    }
  }

  componentDidMount () {
    GET('species').then(res => this.setState({ species: res.results }))
  }

  handleInspectClick () {
    this.setState({ specieData: {} })
  }

  handleRandomClick () {
    this.setState({
      specieData: {
        number: '1',
        name: 'Bulbassaur',
        type: 'Plant'
      }
    })
  }

  render () {
    return <CenteredContainer>
      <GreyBoxContainer>

        <SpecieCard {...this.state.specieData} />

        <Button onClick={this.handleRandomClick}>Random</Button>
        <Button onClick={this.handleInspectClick}>Inspect</Button>

      </GreyBoxContainer>
    </CenteredContainer>;
  }
}

export default HomeScreen
