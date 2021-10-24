import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {
  auth,
  createUserProfileDocument,
} from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { connect } from 'react-redux';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    // deconstruct it to use setUser directly in multiple places
    const { setUser } = this.props;

    // onAuthStateChanged() returns a function that lets us unsubscribe from the listener we just instantiated
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (userAuth) => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth);
          // to get the actual data inside the user, we need to access the document snapshot object
          userRef.onSnapshot((snapshot) => {
            // setState() is also aync function, can pass in a function as 2nd param to make sure it gets called after the setState
            setUser(
              {
                id: snapshot.id,
                ...snapshot.data(),
              },
              () => {
                // console.log(this.state);
              },
            );
          });
        } else {
          setUser(null);
        }
      },
    );
  }

  /** Calling the unsubscribe function when the component is about to unmount is the best way
   * to make sure we don't get any memory leaks in our application related to listeners still
   * being open even if the component that cares about the listener is no longer on the page.
   */
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
          <Route
            path="/signin"
            component={SignInAndSignUpPage}
          ></Route>
        </Switch>
      </div>
    );
  }
}

// dispatch is a prop
const mapDispatchToProps = (dispatch) => ({
  // prop name
  setUser: (user) => dispatch(setCurrentUser(user)),
});

// as we don't need curentUser prop in App component, so the 1st param is null, no need for mapStateToProps function
export default connect(null, mapDispatchToProps)(App);
