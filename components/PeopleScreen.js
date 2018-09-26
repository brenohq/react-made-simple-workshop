import React from 'react'
import Card from './Card'
import styled from 'styled-components'
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

class PeopleScreen extends React.Component {

  constructor() {
    super()

    this.state = {
      people: []
    }
  }

  componentDidMount () {
    GET('people').then(res => this.setState({ people: res.results }))
  }

  createArrayFromCommaSeparatedString (string = '') {
    return string.split(/[ ,]+/)
  }

  componentDidUpdate () {
    console.log(this.props.people)
  }

  render () {
    return <GreyBoxContainer>

      {
        this.state.people.map(people => <Card key={people.name} propertiesToShow={{
          name: people.name,
          mass: people.mass,
          hair_color: people.hair_color
        }} />)
      }

      <Button onClick={this.props.navigate} >Navegar</Button>
    </GreyBoxContainer>
  }
}

export default PeopleScreen
