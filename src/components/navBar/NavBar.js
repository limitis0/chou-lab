import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import CusBtn from '../cusBtn/CusBtn';
import classes from './NavBar.module.scss';

/**
 * NavBar
 * @param {{selected: string}} props 
 * @returns 
 */
function NavBar(props) {
  const navigate = useNavigate();
  const { selected } = props;
  const [menuToggle, setMenuToggle] = useState(false);

  const handleOnClick = (path) => navigate(`${path}`);

  const handleMenuToggle = () => setMenuToggle(!menuToggle);
  return (
    <div className={classes.container}>
      <div className={classes.logo} onClick={() => handleOnClick('/')}>
        <div className={classes.icon}>
          <img width={24} src='/crab_image.png' alt='logo'></img>
        </div>
        <div className={classes.title}>Chou Lab</div>
        <div className={classes.subtitle}>Behavioral ecology and Evolution of Animal Communication</div>
      </div>
      <div className={classes.btns}>
        <CusBtn btnText='About' btnSize='big' btnColor='trans' isUnderline onClick={() => handleOnClick('/')} />
        <CusBtn btnText='People' btnSize='big' btnColor='trans' isUnderline onClick={() => handleOnClick('/people')} />
        <CusBtn btnText='Research' btnSize='big' btnColor='trans' isUnderline onClick={() => handleOnClick('/research')} />
        <CusBtn btnText='Publications' btnSize='big' btnColor='trans' isUnderline onClick={() => handleOnClick('/publications')} />
        <CusBtn btnText='Join Us' btnSize='big' btnColor='trans' isUnderline onClick={() => handleOnClick('/join-us')} />
      </div>
    </div>
  );
}

export default NavBar;
