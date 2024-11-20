import React from 'react';
import classes from './index.module.scss';
import Content from '../../components/content/Content';
import CusBtn from '../../components/cusBtn/CusBtn';

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

  const { name, email, description, photoToken, cvUrl } = memberInfo.info[memberId];

  const handleCVOnClick = (url) => window.open(url, '_blank');
  // console.log('PeopleCard', { memberInfo });
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageContainer}>
        <img src={`${photoToken}`} alt='member' />
      </div>

      <div className={classes.infoContainer}>
        <div>
          <Content contentType='string' textContent={`${name.first} ${name.last} ${name.en ?? ''} ${name.cn}`} fontSize='l' color='dark' isBold={false} isCenter={isMobileSize} />
          <Content contentType='string' textContent={email} fontSize='l' color='dark' isBold={false} isCenter={isMobileSize} />
          {description.title && <Content contentType='string' textContent={description.title} fontSize='m' color='dark' isBold={false} isCenter={isMobileSize} />}
          {description.department && <Content contentType='string' textContent={description.department} fontSize='m' color='dark' isBold={false} isCenter={isMobileSize} />}
        </div>
        {cvUrl !== '' && <div className={classes.cvBtn}><CusBtn btnText='CV' btnSize='small' btnColor='dark' isUnderline onClick={() => handleCVOnClick(cvUrl)} /></div>}
        <div>
          {!isMobileSize ? <Content contentType='string' textContent={description.detail} fontSize='m' color='dark' isBold={false} /> : <Content contentType='string' textContent={description.detail} fontSize='s' color='dark' isBold={false} isCenter />}
        </div>
      </div>
    </div>
  );
}

export default PeopleCard;
