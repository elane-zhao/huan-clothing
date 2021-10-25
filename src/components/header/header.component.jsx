import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/huan_logo.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux'; // higher order component
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"></Logo>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to="/signin">SIGN IN</Link>
      )}
      <CartIcon></CartIcon>
    </div>
    {hidden ? null : <CartDropdown></CartDropdown>}
  </div>
);

const mapStateToProps = ({
  user: { currentUser },
  cart: { hidden },
}) => ({
  currentUser: currentUser,
  hidden: hidden,
});

// we use the conect() and mapStateToProps() wherever we want to get props from the redux reducer
export default connect(mapStateToProps)(Header); // higher order component
