import React, { useEffect, useState } from 'react';
import Title from '../../components/title/Title';
import Content from '../../components/content/Content';
import { getSingleDoc } from '../../utilities/api';

import classes from './index.module.scss';

function Crab() {
  const [researchData, setResearchData] = useState();
  const [isMobileSize, setIsMobileSize] = useState(false);

  const getPageData = async () => {
    const rtResearchData = await getSingleDoc('RESEARCH', 'FIDDLER_CRABS');
    setResearchData(rtResearchData.researchText);

    sessionStorage.setItem('FIDDLER_CRABS', rtResearchData.researchText)
  }

  useEffect(() => {
    const storageData = sessionStorage.getItem('FIDDLER_CRABS')
    storageData === null ? getPageData() : setResearchData(storageData);
    setIsMobileSize(window.innerWidth < 900);
  }, [])

  return (
    <div className={classes.crabPageContainer} >
      {!isMobileSize ? <Title textContent='Research' fontSize='64' color='dark' wide='expand' isUnderline textAlign='start' /> : <Title textContent='Research' fontSize='48' color='dark' wide='expand' isUnderline textAlign='center' />}
      <div className={classes.content}>
        {!isMobileSize ? <Title textContent='Fiddler Crab' fontSize='48' color='dark' wide='expand' textAlign='start' isUnderline={false} /> : <Title textContent='Fiddler Crab' fontSize='24' color='dark' wide='expand' textAlign='center' isUnderline={false} />}
        <Content textContent={researchData} fontSize='l' color='dark' isBold={false} isCenter={isMobileSize} />
      </div>

      <div className={classes.background}></div>
    </div>
  );
}

export default Crab;
