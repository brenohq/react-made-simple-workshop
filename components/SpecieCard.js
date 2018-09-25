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

class SpecieCard extends React.Component {

  constructor(props) {
    super(props)

    this.state = { skin_colors: [] }
  }

  componentDidMount () {
    this.setState({
      skin_colors: this.createArrayFromCommaSeparatedString(this.props.skin_colors)
    })
  }

  componentDidUpdate () {
    console.log(this.state.skin_colors)
  }

  createArrayFromCommaSeparatedString (string = '') {
    return string.split(/[ ,]+/)
  }

  render () {
    return <Container>

      <Row>
        {
          this.state.skin_colors.map((color, index) => <StyledSquare key={index} color={color} />)
        }
      </Row>

      <p>Name: {this.props.name}</p>
      <p>Language: {this.props.language}</p>
      <p>Hair color: {this.props.hair_colors}</p>

    </Container>;
  }
}

export default SpecieCard
