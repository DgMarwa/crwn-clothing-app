import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../asstes/crown.svg';

import {UserContext } from '../../contexts/user.context';

import {signoutUser} from '../../routes/utils/firebase/firebase.utils';

const Navigation = () =>{
  const { currentUser, setCurrentUser} = useContext(UserContext);

  


    
  const signOutHandler = async () => {
    await signoutUser();
    setCurrentUser(null);

  

  }
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='navigation' to='/'>
            <CrwnLogo className='logo' />
          <div className='logo-container'>Logo</div>
          </Link>
          <div className ='nav-links-container'>
            <Link className='nav-link' to='/shop'>
            SHOP
            </Link>
            { 
              currentUser ? (
                <span className='nav-link' onClick= {signOutHandler}> SIGN OUT</span>
              ) : (
            <Link className='nav-link' to='/auth'>
            SING IN
            </Link>
              )}

          </div>
        </div> 
        <Outlet />
      </Fragment>
    );
  };

export default Navigation;