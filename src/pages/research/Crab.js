import React, { useEffect, useState } from 'react';
import Title from '../../components/title/Title';
import Content from '../../components/content/Content';
import { getSingleDoc } from '../../utilities/api';

import classes from './index.module.scss';
import { scientificNameFormat } from '../../utilities/textAdjustment';

function Crab() {
  const [researchData, setResearchData] = useState();
  const [isMobileSize, setIsMobileSize] = useState(false);

  const getPageData = async () => {
    const rtResearchData = await getSingleDoc('RESEARCH', 'FIDDLER_CRABS');
    console.log(`useeffect rtData -> `, { rtResearchData });

    setResearchData(rtResearchData.researchText);

    sessionStorage.setItem('FIDDLER_CRABS', JSON.stringify(rtResearchData.researchText))
  }

  useEffect(() => {
    const storageData = sessionStorage.getItem('FIDDLER_CRABS');
    storageData === null ? getPageData() : setResearchData(JSON.parse(storageData));
    setIsMobileSize(window.innerWidth < 900);
  }, [])

  return (
    <div className={classes.crabPageContainer} >
      {!isMobileSize ? <Title textContent='Research' fontSize='64' color='dark' wide='expand' isUnderline textAlign='start' /> : <Title textContent='Research' fontSize='48' color='dark' wide='expand' isUnderline textAlign='center' />}
      <div className={classes.content}>
        {!isMobileSize ? <Title textContent='Fiddler Crab' fontSize='48' color='dark' wide='expand' textAlign='start' isUnderline={false} /> : <Title textContent='Fiddler Crab' fontSize='24' color='dark' wide='expand' textAlign='center' isUnderline={false} />}
        {researchData && researchData.map((data, index) => (
          <Content contentType={data.contentType} textContent={scientificNameFormat(data.textContent)} imgUrl={data.imgUrl} imgInfoText={data.imgInfoText} fontSize='l' color='dark' isBold={false} isCenter={isMobileSize} key={index} />
        ))}
      </div>

      <div className={classes.background}></div>
    </div>
  );
}

export default Crab;
