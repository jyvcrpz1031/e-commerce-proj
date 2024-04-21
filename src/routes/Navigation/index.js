import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import "./styles.scss";

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import { UserContext } from "../../contexts/user";
import { CartContext } from "../../contexts/cart";

import { signOutUser } from "../../utils/firebase";

import CartIcon from "../../components/CartIcon";
import CartDropDown from "../../components/CartDropDown";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
            <CrwnLogo />
        </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>SHOP</Link>
            { currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link className="nav-link" to='/auth'>SIGN IN</Link>
            )}
            <CartIcon  />
        </div>
        {isCartOpen && <CartDropDown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
