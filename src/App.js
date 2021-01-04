import React from 'react';
import logo from './burger-logo.png';
import './App.css';
import Login from './components/Login';
import Order from './components/Order';
import Submit from './components/Submit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username: '',
      password: '',
      patty: '',
      amount: '',
      doneness: '',
      topping: '',
      cheese: '',
      bun: '',
      sauce: '',
      extra: '',
      isLoggedin: false,
      isSubmitted: false
    }

    this.userCheck = this.userCheck.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setInput = this.setInput.bind(this);
    this.changeSubmit = this.changeSubmit.bind(this);
  }

  userCheck() {
    if(this.state.username === 'abc' && this.state.password === '123') {
      this.setState({
        isLoggedin: true
      })
    } else {
      alert('Username and password doesn\'t match');
    }
  }

  setUsername(userName) {
    this.setState({
      username: userName
    })
  }

  setPassword(psw) {
    this.setState({
      password: psw
    })
  }

  setInput(property, value) {
    this.setState({
      [property]: value
    })
  }

  changeSubmit(e) {
    this.setState({
      isSubmitted: true
    })
  }

  render() {
    console.log(this.state);
    let currComponent = <div></div>
    if(this.state.isSubmitted) {
      currComponent = <Submit summary={this.state} />
    } else if(this.state.isLoggedin) {
      currComponent = <Order inputFunction={this.setInput} submitOrder={this.changeSubmit} />
    } else {
      currComponent = <Login username={this.setUsername} password={this.setPassword} checkUser={this.userCheck}/>;
    }
    return (
      <div className="App">
        <img src={logo} alt="Delicious Burger" id="logo" />
        <hr />
        {currComponent}
      </div>
    )
  }
  
}

export default App;
