import React, { useEffect, useState } from 'react';
import classes from './Footer.module.scss';
import Content from '../content/Content';
import { getSingleDoc } from '../../utilities/api';

function Footer() {
  const [contactData, setContactData] = useState();

  const phoneSVG = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M19.23 15.26L16.69 14.97C16.08 14.9 15.48 15.11 15.05 15.54L13.21 17.38C10.38 15.94 8.05998 13.63 6.61998 10.79L8.46998 8.94001C8.89998 8.51001 9.10998 7.91001 9.03998 7.30001L8.74998 4.78001C8.62998 3.77001 7.77998 3.01001 6.75998 3.01001H5.02998C3.89998 3.01001 2.95998 3.95001 3.02998 5.08001C3.55998 13.62 10.39 20.44 18.92 20.97C20.05 21.04 20.99 20.1 20.99 18.97V17.24C21 16.23 20.24 15.38 19.23 15.26Z" fill="#E6E6E6" />
  </svg>);

  const emailSVG = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L12.53 12.67C12.21 12.87 11.79 12.87 11.47 12.67L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z" fill="#E6E6E6" />
  </svg>);

  const addressSVG = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 12C13.1 12 14 11.1 14 10C14 8.9 13.1 8 12 8C10.9 8 10 8.9 10 10C10 11.1 10.9 12 12 12ZM12 2C16.2 2 20 5.22 20 10.2C20 13.38 17.55 17.12 12.66 21.43C12.28 21.76 11.71 21.76 11.33 21.43C6.45 17.12 4 13.38 4 10.2C4 5.22 7.8 2 12 2Z" fill="#E6E6E6" />
  </svg>);

  const getPageData = async () => {
    const rtContactData = await getSingleDoc('CONTACT', 'CONTACT');

    console.log(`useeffect rtData ->`, { rtContactData });
    const { address, phone, email } = rtContactData;
    setContactData({ address, phone, email });

    sessionStorage.setItem('CONTACT', JSON.stringify({ address, phone, email }))

  }

  useEffect(() => {
    const storageData = sessionStorage.getItem('CONTACT');
    storageData === null ? getPageData() : setContactData(JSON.parse(storageData));
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Content contentType='string' textContent='Contact' color='yellow' fontSize='l' isBold={false} />
      </div>
      <div className={classes.content}>
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
    </div>
  );
}

export default Footer;
