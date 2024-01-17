import React, { useEffect, useState } from 'react';
import { getSingleDoc } from '../../utilities/api';
import Content from '../../components/content/Content';
import Title from '../../components/title/Title';

import classes from './index.module.scss';

export default function JoinUs() {
  const [joinUsData, setJoinUsData] = useState();
  const [isMobileSize, setIsMobileSize] = useState(false);

  const getPageData = async () => {
    const rtJoinUsData = await getSingleDoc('CONTACT', 'JOIN_US');

    setJoinUsData(rtJoinUsData.content);
    sessionStorage.setItem('JOIN_US', rtJoinUsData.content)
  }

  useEffect(() => {
    const storageData = sessionStorage.getItem('JOIN_US')
    storageData === null ? getPageData() : setJoinUsData(storageData);

    setIsMobileSize(window.innerWidth < 900);
  }, []);
  return (
    <div className={classes.pageContainer}>
      <div className={classes.contentBackground}>
        {!isMobileSize ? <Title textContent='Join Us' fontSize='64' color='dark' wide='expand' isUnderline textAlign='start' /> : <Title textContent='Join Us' fontSize='48' color='dark' wide='expand' isUnderline textAlign='center' />}
        {joinUsData && (!isMobileSize ? <Content textContent={joinUsData} fontSize='l' color='dark' /> : <Content textContent={joinUsData} fontSize='m' color='dark' isCenter />)}
      </div>

      <div className={classes.background}>
      </div>
    </div>
  );
}
