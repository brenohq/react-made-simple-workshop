import React from 'react'
import styled from 'styled-components'
import SpecieCard from './SpecieCard'
import { GET } from '../utils/http-client'

const CenteredContainer = styled.div`
  display: flex;
`;

const GreyBoxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
      <GreyBoxContainer>

        {
          this.state.species.map(specie => <SpecieCard {...specie} />)
        }

      </GreyBoxContainer>
    </CenteredContainer>;
  }
}

export default HomeScreen
