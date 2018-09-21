import React from 'react'
import styled from 'styled-components'
import SpecieCard from './SpecieCard'
import { GET } from '../utils/http-client'

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const GreyBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CenteredTitle = styled.h1`
  text-align: center;
`

class HomeScreen extends React.Component {

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
    return <CenteredContainer>

      <CenteredTitle>Star Wars Species</CenteredTitle>

      <GreyBoxContainer>

        {
          this.state.species.map(specie => <SpecieCard key={specie.name} {...specie} />)
        }

      </GreyBoxContainer>
    </CenteredContainer>;
  }
}

export default HomeScreen
