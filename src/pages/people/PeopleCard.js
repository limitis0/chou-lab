import React from 'react';
import classes from './index.module.scss';
import Content from '../../components/content/Content';

/**
 * PeopleCard
 * @param {{
 * memberId: string
 * memberInfo: object
 * }} props 
 * @returns 
 */
function PeopleCard(props) {
  const { memberId, memberInfo } = props;

  const { name, email, description } = memberInfo.info[memberId];

  // console.log('PeopleCard', { memberInfo });
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageContainer}>
        <img src={`/memberPhoto/${memberId}.jpg`} alt='member' />
      </div>

      <div className={classes.infoContainer}>
        <div>
          <Content textContent={`${name.first} ${name.last} ${name.en ?? ''}`} fontSize='l' color='dark' isBold={false} />
          <Content textContent={email} fontSize='l' color='dark' isBold={false} />
          {description.title && <Content textContent={description.title} fontSize='m' color='dark' isBold={false} />}
          {description.department && <Content textContent={description.department} fontSize='m' color='dark' isBold={false} />}
        </div>
        <div>
          <Content textContent={description.detail} fontSize='m' color='dark' isBold={false} />
        </div>
      </div>
    </div>
  );
}

export default PeopleCard;
