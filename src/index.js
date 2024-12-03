import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: 'branco' }
    this.handleChance = this.handleChance.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChance(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert('Um novo evento foi enviado: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select value={this.state.value} onChange={this.handleChance}>
          <option value="laranja">Laranja</option>
          <option value="branco">Branco</option>
          <option value="verde">Verde</option>
          <option value="amarelo">Amarelo</option>
        </select>
        <input type="submit" value="Enviar!" />
      </form>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Form/>
);





