import React, { useEffect, useState } from 'react';
import classes from './index.module.scss';
import Title from '../../components/title/Title';
import PeopleCard from './PeopleCard';
import { getAllDocs } from '../../utilities/api';

export default function People() {
  const [peopleData, setPeopleData] = useState([]);
  const [isMobileSize, setIsMobileSize] = useState(false);

  const handleLeadingZero = (number) => String(number).padStart(2, '0');

  const getPageData = async () => {
    const rtPeopleData = await getAllDocs('PEOPLE');
    console.log(`useeffect rtData -> `, { rtPeopleData });


    setPeopleData(rtPeopleData);

    sessionStorage.setItem('PEOPLE', JSON.stringify(rtPeopleData))
  }

  useEffect(() => {
    const storageData = sessionStorage.getItem('PEOPLE')
    storageData === null ? getPageData() : setPeopleData(JSON.parse(storageData));
    setIsMobileSize(window.innerWidth < 900);
  }, []);

  return (
    <div className={classes.pageContainer}>
      {!isMobileSize ? <Title textContent='People' fontSize='64' color='dark' wide='expand' textAlign='start' isUnderline /> : <Title textContent='People' fontSize='48' color='dark' wide='expand' textAlign='center' isUnderline />}
      {peopleData && <div className={classes.contentContainer}>
        {peopleData.map((data, index) => <PeopleCard memberId={`MEMBER_${handleLeadingZero(index)}`} memberInfo={{ info: data }} isMobileSize={isMobileSize} key={index} />)}
      </div>}
      <div className={classes.background}></div>
    </div>
  );
}