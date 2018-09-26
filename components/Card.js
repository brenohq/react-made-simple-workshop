import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 0 1 24%;
  text-align: center;
  margin: 4px;
  background-color: lightgrey;
`;

const StyledSquare = styled.div`
  background-color: ${props => props.color};
  height: 30px;
  width: 30px;
`

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

class Card extends React.Component {

  constructor(props) {
    super(props)

    this.state = { skin_colors: [] }
  }

  render () {
    return <Container>

      {
        Object.keys(this.props.propertiesToShow).map(prop => <p>{prop} {this.props.propertiesToShow[prop]}</p>)
      }

    </Container>;
  }
}

export default Card
