import React from 'react'

// Essa é a notação de classes usada para criar componentes
class HomeScreen extends React.Component {

  // Primeiro hook executado pelo React
  constructor(props) {
    super(props)

    // Definição do estado local inicial do componente
    this.state = { message: '' }
  }

  // Hook executado após o constructor
  componentDidMount () {
    this.setState({ message: this.props.message })
    setTimeout(() => this.setState({ message: '@@@ Meu segundo componente! @@@ ' }), 3000);
  }

  render () {
    return <h1>{this.state.message}</h1>;
  }
}

export default HomeScreen
