import React from 'react';
import classes from './index.module.scss';
import Content from '../../components/content/Content';

/**
 * PeopleCard
 * @param {{
 * memberId: string
 * memberInfo: object
 * isMobileSize: boolean
 * }} props 
 * @returns 
 */
function PeopleCard(props) {
  const { memberId, memberInfo, isMobileSize } = props;

  const { name, email, description } = memberInfo.info[memberId];

  // console.log('PeopleCard', { memberInfo });
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageContainer}>
        <img src={`/memberPhoto/${memberId}.jpg`} alt='member' />
      </div>

      <div className={classes.infoContainer}>
        <div>
          <Content textContent={`${name.first} ${name.last} ${name.en ?? ''}`} fontSize='l' color='dark' isBold={false} isCenter={isMobileSize} />
          <Content textContent={email} fontSize='l' color='dark' isBold={false} isCenter={isMobileSize} />
          {description.title && <Content textContent={description.title} fontSize='m' color='dark' isBold={false} isCenter={isMobileSize} />}
          {description.department && <Content textContent={description.department} fontSize='m' color='dark' isBold={false} isCenter={isMobileSize} />}
        </div>
        <div>
          {!isMobileSize ? <Content textContent={description.detail} fontSize='m' color='dark' isBold={false} /> : <Content textContent={description.detail} fontSize='s' color='dark' isBold={false} isCenter />}
        </div>
      </div>
    </div>
  );
}

export default PeopleCard;
