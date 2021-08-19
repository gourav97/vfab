import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import { connect } from 'react-redux';

import { selectCurrentUser} from './redux/user/user.selectors';
import { createStructuredSelector} from 'reselect';
import CheckOutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {
  
  // authentication state changes :

  unsubscribeFromauth = null;

  componentDidMount() {
    const { checkUserSession} = this.props;
    checkUserSession();
 
  }

  componentWillUnmount() {
    this.unsubscribeFromauth();
  }


  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/checkout' component={CheckOutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser? <Redirect to= '/' /> : <SignInAndSignUpPage/>} />
        </Switch>
      </div>
    )
  }

}

const mapStateToProps = createStructuredSelector ({
  currentUser : selectCurrentUser,

})
  
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())


})



export default connect(mapStateToProps, mapDispatchToProps)(App);
