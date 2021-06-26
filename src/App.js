import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { auth } from './firebase/firebase.utils';



class App extends React.Component {
  constructor() {
    super();

    this.state= {
      currentUser :null
    }
  }


// authentication state changes :

  unsubscribeFromauth = null;

  componentDidMount(){
    this.unsubscribeFromauth = auth.onAuthStateChanged(user => {
      this.setState({currentUser : user});

      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromauth();
  }


  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }

}

export default App;
