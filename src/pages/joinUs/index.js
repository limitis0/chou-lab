import React, { useEffect, useState } from 'react';
import { getSingleDoc } from '../../utilities/api';
import Content from '../../components/content/Content';
import Title from '../../components/title/Title';

import classes from './index.module.scss';

export default function JoinUs() {
  const [joinUsData, setJoinUsData] = useState();

  const getPageData = async () => {
    const rtJoinUsData = await getSingleDoc('CONTACT', 'JOIN_US');

    setJoinUsData(rtJoinUsData.content);
    localStorage.setItem('JOIN_US', rtJoinUsData.content)
  }

  useEffect(() => {
    const storageData = localStorage.getItem('JOIN_US')

    storageData === null ? getPageData() : setJoinUsData(storageData);
  }, []);
  return (
    <div className={classes.pageContainer}>
      <div className={classes.contentBackground}>
        <Title textContent='Join Us' fontSize='64' color='dark' wide='expand' isUnderline textAlign='start' />
        {joinUsData && <Content textContent={joinUsData} fontSize='l' color='dark' />}
      </div>

      <div className={classes.background}>
      </div>
    </div>
  );
}
