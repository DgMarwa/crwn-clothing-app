import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';

import CartDropDown from '../../components/cart-dropdown/cart-dropdown.component'
import { ReactComponent as CrwnLogo } from '../../asstes/crown.svg';

import {UserContext } from '../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';

import { signoutUser } from '../../routes/utils/firebase/firebase.utils';


import './navigation.styles.scss';




const Navigation = () =>{
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

;

    return (
      <Fragment>
        <div className='navigation'>
            <Link className='navigation' to='/'>
            <CrwnLogo className='logo' />
          </Link>
          <div className ='nav-links-container'>
            <Link className='nav-link' to='/shop'>
            SHOP
            </Link>
            { 
              currentUser ? (
                <span className='nav-link' onClick= {signoutUser}> SIGN OUT</span>
              ) : (
            <Link className='nav-link' to='/auth'>
            SING IN
            </Link>
              )}
              <CartIcon />

          </div>
         {isCartOpen && <CartDropDown />}
        </div> 
        <Outlet />
      </Fragment>
    );
  };

export default Navigation;