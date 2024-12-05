import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


class Clock extends React.Component {

  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()} </h2>
      </div>
    );
  };
}


function Clock2(){

  const [data, setData] = useState(new Date())
  
  useEffect(() => {
    const id = setInterval(() => setData(new Date(), 1000))
    return () => {
      clearInterval(id)
    }
  }, [])

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {data.toLocaleTimeString()} </h2>
    </div>
  );

}

function App() {
  return (
    <div>
      <Clock />
      <Clock2 />
    </div>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/> 
);





