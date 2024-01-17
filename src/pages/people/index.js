import React, { useEffect, useState } from 'react';
import classes from './index.module.scss';
import Title from '../../components/title/Title';
import PeopleCard from './PeopleCard';
import { getAllDocs } from '../../utilities/api';

export default function People() {
  const [peopleData, setPeopleData] = useState([]);

  const getPageData = async () => {
    const rtPeopleData = await getAllDocs('PEOPLE');

    setPeopleData(rtPeopleData);

    sessionStorage.setItem('PEOPLE', JSON.stringify(rtPeopleData))
  }

  useEffect(() => {
    const storageData = sessionStorage.getItem('PEOPLE')
    storageData === null ? getPageData() : setPeopleData(JSON.parse(storageData));
  }, []);

  return (
    <div className={classes.pageContainer}>
      <Title textContent='People' fontSize='64' color='dark' wide='expand' textAlign='start' isUnderline />
      {peopleData && <div className={classes.contentContainer}>
        {peopleData.map((data, index) => <PeopleCard memberId={`MEMBER_0${index}`} memberInfo={{ info: data }} />)}
      </div>}
    </div>
  );
}