import HomeScreen from './HomeScreen'
import React from 'react'
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
      activeRoute: '/home-screen'
    }
  }

  navigateToPeopleScreen () {
    this.setState({ activeRoute: '/people-screen' })
  }

  navigateToHomeScreen () {
    this.setState({ activeRoute: '/home-screen' })
  }

  render () {
    return <CenteredContainer>
      <CenteredTitle>{`activeRoute = ${this.state.activeRoute}`}</CenteredTitle>

      <div>
        {
          this.state.activeRoute === '/home-screen'
            ? <HomeScreen navigate={() => this.navigateToPeopleScreen()} />
            : this.state.activeRoute === '/people-screen'
              ? <PeopleScreen navigate={() => this.navigateToHomeScreen()} />
              : null
        }
      </div>
    </CenteredContainer>
  }
}

export default App