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

  const { name, email, description, photoToken } = memberInfo.info[memberId];

  const handleCVOnClick = () => window.open('https://firebasestorage.googleapis.com/v0/b/choulab-e11d9.appspot.com/o/CV_Chun-Chia_Chou.pdf?alt=media&token=1ba8247c-7eca-416b-892a-23af267c5502', '_blank');
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
        {memberId === 'MEMBER_00' && <div className={classes.cvBtn}><CusBtn btnText='CV' btnSize='small' btnColor='dark' isUnderline onClick={() => handleCVOnClick()} /></div>}
        <div>
          {!isMobileSize ? <Content contentType='string' textContent={description.detail} fontSize='m' color='dark' isBold={false} /> : <Content contentType='string' textContent={description.detail} fontSize='s' color='dark' isBold={false} isCenter />}
        </div>
      </div>
    </div>
  );
}

export default PeopleCard;
