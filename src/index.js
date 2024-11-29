import React from 'react';
import ReactDOM from 'react-dom/client';


class Form extends React.Component {

  constructor(props) {
    super(props)
    this.state = { value: 'React!' }
    this.handleChance = this.handleChance.bind(this)
  }

  handleChance(event) {
    this.setState({ value: event.target.value })
  }

  render() {
    return (
      <form>
        <input onChange={this.handleChance} value={this.state.value} />
      </form>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Form/>
);





