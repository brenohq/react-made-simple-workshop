import React from 'react'

class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = { message: '' }
  }

  componentDidMount () {
    this.setState({ message: this.props.message })
    setTimeout(() => this.setState({ message: '@@@ Meu segundo componente! @@@ ' }), 3000);
  }

  render () {
    return <h1>{this.state.message}</h1>;
  }
}

export default HomeScreen
