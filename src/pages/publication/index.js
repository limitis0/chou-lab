import React, { useEffect, useState } from 'react';
import PublicationCard from './PublicationCard';
import Title from '../../components/title/Title';

import classes from './index.module.scss';
import { getSingleDoc } from '../../utilities/api';

export default function Publications() {
  const [publicationData, setPublicationData] = useState([]);

  const getPageData = async () => {
    const rtPublicationData = await getSingleDoc('PUBLICATIONS', 'PUBLICATIONS');

    setPublicationData(rtPublicationData.publicationDetail) // type: array

    sessionStorage.setItem('PUBLICATIONS', JSON.stringify(rtPublicationData.publicationDetail))
  }

  useEffect(() => {
    const storageData = sessionStorage.getItem('PUBLICATIONS');
    storageData === null ? getPageData() : setPublicationData(JSON.parse(storageData));
  }, []);
  return (
    <div className={classes.pageContainer}>
      <div className={classes.content}>
        <Title textContent='Publications' fontSize='64' color='dark' wide='expand' isUnderline textAlign='start' />
        <div>
          {publicationData && publicationData.map((data, index) => <PublicationCard contentText={data} key={index} />)}
        </div>
      </div>
      <div className={classes.background}></div>
    </div>
  );
}
