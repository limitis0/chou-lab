import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import CusBtn from '../cusBtn/CusBtn';
import classes from './NavBar.module.scss';
import { getSingleDoc } from '../../utilities/api';
import Content from '../content/Content';

/**
 * NavBar
 * @param {{selected: string}} props 
 * @returns 
 */
function NavBar(props) {
  const navigate = useNavigate();
  const { selected } = props;
  const [menuToggle, setMenuToggle] = useState(false);
  const [contactData, setContactData] = useState();

  const menuSVG = () => (<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M6 27H30C30.825 27 31.5 26.325 31.5 25.5C31.5 24.675 30.825 24 30 24H6C5.175 24 4.5 24.675 4.5 25.5C4.5 26.325 5.175 27 6 27ZM6 19.5H30C30.825 19.5 31.5 18.825 31.5 18C31.5 17.175 30.825 16.5 30 16.5H6C5.175 16.5 4.5 17.175 4.5 18C4.5 18.825 5.175 19.5 6 19.5ZM4.5 10.5C4.5 11.325 5.175 12 6 12H30C30.825 12 31.5 11.325 31.5 10.5C31.5 9.675 30.825 9 30 9H6C5.175 9 4.5 9.675 4.5 10.5Z" fill="#E6E6E6" />
  </svg>);

  const closeSVG = () => (<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M27.4501 8.565C26.8651 7.98 25.9201 7.98 25.3351 8.565L18.0001 15.885L10.6651 8.55C10.0801 7.965 9.13508 7.965 8.55008 8.55C7.96508 9.135 7.96508 10.08 8.55008 10.665L15.8851 18L8.55008 25.335C7.96508 25.92 7.96508 26.865 8.55008 27.45C9.13508 28.035 10.0801 28.035 10.6651 27.45L18.0001 20.115L25.3351 27.45C25.9201 28.035 26.8651 28.035 27.4501 27.45C28.0351 26.865 28.0351 25.92 27.4501 25.335L20.1151 18L27.4501 10.665C28.0201 10.095 28.0201 9.135 27.4501 8.565V8.565Z" fill="#E6E6E6" />
  </svg>);

  const phoneSVG = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M19.23 15.26L16.69 14.97C16.08 14.9 15.48 15.11 15.05 15.54L13.21 17.38C10.38 15.94 8.05998 13.63 6.61998 10.79L8.46998 8.94001C8.89998 8.51001 9.10998 7.91001 9.03998 7.30001L8.74998 4.78001C8.62998 3.77001 7.77998 3.01001 6.75998 3.01001H5.02998C3.89998 3.01001 2.95998 3.95001 3.02998 5.08001C3.55998 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z" fill="#E6E6E6" />
  </svg>);

  const emailSVG = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z" fill="#E6E6E6" />
  </svg>);

  const addressSVG = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12ZM12 2C16.2 2 20 5.22 20 10.2C20 13.38 17.55 17.12 12.66 21.43C12.28 21.76 11.71 21.76 11.33 21.43C6.45 17.12 4 13.38 4 10.2C4 5.22 7.8 2 12 2Z" fill="#E6E6E6" />
  </svg>);

  const handleOnClick = (path) => {
    navigate(`${path}`)

    if (window.innerWidth < 900) setMenuToggle(false);
  };

  const handleMenuToggle = () => setMenuToggle(!menuToggle);

  const getPageData = async () => {
    const rtContactData = await getSingleDoc('CONTACT', 'CONTACT');

    console.log(`useeffect rtData ->`, { rtContactData });
    const { address, phone, email } = rtContactData;
    setContactData({ address, phone, email });
  }

  useEffect(() => {
    contactData === undefined && getPageData();
  }, []);
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

      {/* phone size */}
      {window.innerWidth < 900 && (<div className={classes.menu} onClick={() => handleMenuToggle()}>{menuToggle ? closeSVG() : menuSVG()}</div>)}

      {menuToggle && <div className={classes.phoneMenu}>
        <div className={classes.menuBtns}>
          <div className={classes.menuBtnBackground}>
            <CusBtn btnText='About' btnSize='big' btnColor='trans' isUnderline={false} onClick={() => handleOnClick('/')} />
          </div>
          <div className={classes.menuBtnBackground}>
            <CusBtn btnText='People' btnSize='big' btnColor='trans' isUnderline={false} onClick={() => handleOnClick('/people')} />
          </div>
          <div className={classes.menuBtnBackground}>
            <CusBtn btnText='Research' btnSize='big' btnColor='trans' isUnderline={false} onClick={() => handleOnClick('/research')} />
          </div>
          <div className={classes.menuBtnBackground}>
            <CusBtn btnText='Publications' btnSize='big' btnColor='trans' isUnderline={false} onClick={() => handleOnClick('/publications')} />
          </div>
          <div className={classes.menuBtnBackground}>
            <CusBtn btnText='Join Us' btnSize='big' btnColor='trans' isUnderline={false} onClick={() => handleOnClick('/join-us')} />
          </div>
        </div>

        <div className={classes.contact}>
          <Content textContent='Contact' color='yellow' fontSize='m' isBold={false} />
          {contactData &&
            <>
              <div className={classes.singleInfo}>
                {phoneSVG()}
              <Content contentType='string' textContent={contactData.phone} color='lighter' fontSize='s' isBold={false} />
              </div>
              <div className={classes.singleInfo}>
                {emailSVG()}
              <Content contentType='string' textContent={contactData.email} color='lighter' fontSize='s' isBold={false} />
              </div>
              <div className={classes.singleInfo}>
                {addressSVG()}
              <Content contentType='string' textContent={contactData.address} color='lighter' fontSize='s' isBold={false} />
              </div>
            </>}
        </div>
      </div>}
    </div>
  );
}

export default NavBar;
