import React from 'react'
import SpeciesScreen from './SpeciesScreen'
import PeopleScreen from './PeopleScreen'
import styled from 'styled-components'

const CenteredContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CenteredTitle = styled.h1`
  text-align: center;
`

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      activeRoute: '/species-screen'
    }
  }

  navigateToPeopleScreen () {
    this.setState({ activeRoute: '/people-screen' })
  }

  navigateToSpeciesScreen () {
    this.setState({ activeRoute: '/species-screen' })
  }

  render () {
    return <CenteredContainer>
      <CenteredTitle>{`activeRoute = ${this.state.activeRoute}`}</CenteredTitle>

      <div>
        {
          this.state.activeRoute === '/species-screen'
            ? <SpeciesScreen navigate={() => this.navigateToPeopleScreen()} />
            : this.state.activeRoute === '/people-screen'
              ? <PeopleScreen navigate={() => this.navigateToSpeciesScreen()} />
              : null
        }
      </div>
    </CenteredContainer>
  }
}

export default App