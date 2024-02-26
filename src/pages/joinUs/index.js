import React, { useEffect, useState } from 'react';
import { getSingleDoc } from '../../utilities/api';
import Content from '../../components/content/Content';
import Title from '../../components/title/Title';

import classes from './index.module.scss';

export default function JoinUs() {
  const [joinUsData, setJoinUsData] = useState();
  const [contactData, setContactData] = useState();

  const [isMobileSize, setIsMobileSize] = useState(false);

  const getPageData = async () => {
    const rtJoinUsData = await getSingleDoc('CONTACT', 'JOIN_US');


    setJoinUsData(rtJoinUsData.content);
    sessionStorage.setItem('JOIN_US', rtJoinUsData.content)

  }
  const getContactData = async () => {
    const rtContactData = await getSingleDoc('CONTACT', 'CONTACT');
    const { address, phone, email } = rtContactData;
    sessionStorage.setItem('CONTACT', JSON.stringify({ address, phone, email }))
  }

  useEffect(() => {
    const storageData = sessionStorage.getItem('JOIN_US')
    storageData === null ? getPageData() : setJoinUsData(storageData);

    const storageContactData = sessionStorage.getItem('CONTACT');
    storageContactData === null ? getContactData() : setContactData(JSON.parse(storageContactData));

    setIsMobileSize(window.innerWidth < 900);
  }, []);
  return (
    <div className={classes.pageContainer}>
      <div className={classes.contentBackground}>
        {!isMobileSize ? <Title textContent='Join Us' fontSize='64' color='dark' wide='expand' isUnderline textAlign='start' /> : <Title textContent='Join Us' fontSize='48' color='dark' wide='expand' isUnderline textAlign='center' />}
        {joinUsData && contactData && (!isMobileSize ? <><Content textContent={joinUsData} fontSize='l' color='dark' /><Content textContent={contactData.email} fontSize='l' color='dark' isBold /></> : <><Content textContent={joinUsData} fontSize='m' color='dark' isCenter /><Content textContent={contactData.email} fontSize='m' color='dark' isBold isCenter /></>)}
      </div>

      <div className={classes.background}>
      </div>
    </div>
  );
}
