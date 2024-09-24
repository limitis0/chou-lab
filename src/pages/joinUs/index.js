import React, { useEffect, useState } from 'react';
import { getSingleDoc } from '../../utilities/api';
import Content from '../../components/content/Content';
import Title from '../../components/title/Title';

import classes from './index.module.scss';

export default function JoinUs() {
  const [joinUsData, setJoinUsData] = useState();
  const [programData, setProgramData] = useState();
  // const [contactData, setContactData] = useState();

  const [isMobileSize, setIsMobileSize] = useState(false);

  const getPageData = async () => {
    const rtJoinUsData = await getSingleDoc('CONTACT', 'JOIN_US');


    setJoinUsData(rtJoinUsData.content);
    setProgramData(rtJoinUsData.applicationInfo);
    sessionStorage.setItem('JOIN_US', rtJoinUsData.content)
    sessionStorage.setItem('PROGRAMS', JSON.stringify(rtJoinUsData.applicationInfo))
  }

  const programCard = (data, fontSize, index, isCenter) => (<div key={index}>
    <Content contentType='string' textContent={data.category} fontSize={fontSize} color='dark' isBold={true} isCenter={isCenter} />
    {data.source.map((source) => (<>
      <a className={classes.hyperLink} href={source.url} target="_blank" rel="noreferrer">
        <Content contentType='string' textContent={source.title} fontSize='m' color='dark' isCenter={isCenter} />
      </a>
    </>))}
  </div>)

  useEffect(() => {
    const storageDataJoinUs = sessionStorage.getItem('JOIN_US')
    storageDataJoinUs === null ? getPageData() : setJoinUsData(storageDataJoinUs);

    const storageDataProgram = sessionStorage.getItem('PROGRAMS');
    storageDataProgram === null ? getPageData() : setProgramData(JSON.parse(storageDataProgram));

    // console.log(`useEffect storageDataProgram: ${storageDataProgram}`);


    // const storageContactData = sessionStorage.getItem('CONTACT');
    // storageContactData === null ? getContactData() : setContactData(JSON.parse(storageContactData));

    setIsMobileSize(window.innerWidth < 900);
  }, []);
  return (
    <div className={classes.pageContainer}>
      <div className={classes.contentBackground}>
        {!isMobileSize ?
          <Title textContent='Join Us' fontSize='64' color='dark' wide='expand' isUnderline textAlign='start' /> : <Title textContent='Join Us' fontSize='48' color='dark' wide='expand' isUnderline textAlign='center' />}
        {joinUsData && programData && (!isMobileSize ? <>
          <Content contentType='string' textContent={joinUsData} fontSize='l' color='dark' />
          {programData.map((data, index) => programCard(data, 'l', index, false))}
        </> : <>
          <Content contentType='string' textContent={joinUsData} fontSize='m' color='dark' isCenter />
          {programData.map((data, index) => programCard(data, 'm', index, true))}
        </>)}
      </div>

      <div className={classes.background}>
      </div>
    </div>
  );
}
