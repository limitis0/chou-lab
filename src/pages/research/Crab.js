import React, { useEffect, useState } from 'react';
import Title from '../../components/title/Title';
import Content from '../../components/content/Content';
import { getSingleDoc } from '../../utilities/api';

import classes from './index.module.scss';

function Crab() {
  const [researchData, setResearchData] = useState();

  const getPageData = async () => {
    const rtResearchData = await getSingleDoc('RESEARCH', 'FIDDLER_CRABS');
    setResearchData(rtResearchData.researchText);

    sessionStorage.setItem('FIDDLER_CRABS', rtResearchData.researchText)
  }

  useEffect(() => {
    const storageData = sessionStorage.getItem('FIDDLER_CRABS')
    storageData === null ? getPageData() : setResearchData(storageData);
  }, [])

  return (
    <div className={classes.crabPageContainer} >
      <Title textContent='Research' fontSize='64' color='dark' wide='expand' textAlign='start' isUnderline />
      <div className={classes.content}>
        <Title textContent='Fiddler Crab' fontSize='48' color='dark' wide='expand' textAlign='start' isUnderline={false} />
        <Content textContent={researchData} fontSize='l' color='dark' isBold={false} />
      </div>

      <div className={classes.background}></div>
    </div>
  );
}

export default Crab;
