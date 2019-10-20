import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import ChoseCategory from './components/ChoseCategory/ChoseCategory';
import BusinessCategory from './components/BusinessCategory/BusinessCategory';
import ConsumerCategory from './components/ConsumerCategory/ConsumerCategory';
import Logo from './components/Logo/Logo';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 110,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home',
      home: true,
      isSignedIn: false,
      isBusinesCategory: false,
      isConsumerCategory: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      if (this.state.user.id > 0) {
         this.setState({isSignedIn: true})
      } else {
         this.setState({isSignedIn: false})
      }
      this.setState({home: true})
    } else if (route === 'consumerCategory') {
      if (this.state.user.id > 0) {
         this.setState({isSignedIn: true})
      } else {
         this.setState({isSignedIn: false})
      }
      this.setState({isBusinesCategory: false})
      this.setState({isConsumerCategory: true})
    } else if (route === 'businessCategory') {
      if (this.state.user.id > 0) {
         this.setState({isSignedIn: true})
      } else {
         this.setState({isSignedIn: false})
      }
      this.setState({isConsumerCategory: false})
      this.setState({isBusinesCategory: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, route, user } = this.state;
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} user={user}/>
        { 
          route === 'home'
          ? <div>
              <Logo />
              <ChoseCategory onRouteChange={this.onRouteChange} />
            </div>
          : route === 'signin' 
          ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          : route === 'signout'
          ? <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          : route === 'register'
          ? <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
          : route === 'consumerCategory'
          ? <ConsumerCategory onRouteChange={this.onRouteChange}/> 
          : route === 'businessCategory' 
          ? <BusinessCategory onRouteChange={this.onRouteChange}/>
          : <div> </div>
        }
      </div>
    );
  }

}


export default App;
