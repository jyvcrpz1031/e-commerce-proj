import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";
//import "./styles.js";
import { NavigationContainer, NavLink, NavLinksContainer, LogoContainer } from "./styles";

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
      <NavigationContainer>
        <LogoContainer to='/'>
            <CrwnLogo />
        </LogoContainer>
        <NavLinksContainer>
            <NavLink to='/shop'>SHOP</NavLink>
            { currentUser ? (
              <NavLink as='span' onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink to='/auth'>SIGN IN</NavLink>
            )}
            <CartIcon  />
        </NavLinksContainer>
        {isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
