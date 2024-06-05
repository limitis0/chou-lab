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

  const { name, email, description } = memberInfo.info[memberId];

  const memberPhotoToken = {
    MEMBER_00: 'a675de95-419d-4557-a1ae-758e2b10bcc9',
    MEMBER_01: 'c1967232-3455-42c0-aa33-a9ede20781f0',
    MEMBER_02: 'f2a59285-e774-4913-8529-be132212db41',
    MEMBER_03: '69bc32a5-ed20-4163-b8e1-8cc2a3df6250',
    MEMBER_04: '0b5d6e32-f31e-4aba-a350-ef9a1b03ca16',
    MEMBER_05: '0ef79714-be24-4661-a9c3-7cbdaeee9d1b',
    MEMBER_06: 'e447d6b4-ffca-4673-b9b6-69d9c887282c'
  }

  const handleCVOnClick = () => window.open('https://firebasestorage.googleapis.com/v0/b/choulab-e11d9.appspot.com/o/CV_Chun-Chia_Chou.pdf?alt=media&token=1ba8247c-7eca-416b-892a-23af267c5502', '_blank');
  // console.log('PeopleCard', { memberInfo });
  return (
    <div className={classes.cardContainer}>
      <div className={classes.imageContainer}>
        <img src={`https://firebasestorage.googleapis.com/v0/b/choulab-e11d9.appspot.com/o/${memberId}.jpg?alt=media&token=${memberPhotoToken[memberId]}`} alt='member' />
      </div>

      <div className={classes.infoContainer}>
        <div>
          <Content textContent={`${name.first} ${name.last} ${name.en ?? ''} ${name.cn}`} fontSize='l' color='dark' isBold={false} isCenter={isMobileSize} />
          <Content textContent={email} fontSize='l' color='dark' isBold={false} isCenter={isMobileSize} />
          {description.title && <Content textContent={description.title} fontSize='m' color='dark' isBold={false} isCenter={isMobileSize} />}
          {description.department && <Content textContent={description.department} fontSize='m' color='dark' isBold={false} isCenter={isMobileSize} />}
        </div>
        {memberId === 'MEMBER_00' && <div className={classes.cvBtn}><CusBtn btnText='CV' btnSize='small' btnColor='dark' isUnderline onClick={() => handleCVOnClick()} /></div>}
        <div>
          {!isMobileSize ? <Content textContent={description.detail} fontSize='m' color='dark' isBold={false} /> : <Content textContent={description.detail} fontSize='s' color='dark' isBold={false} isCenter />}
        </div>
      </div>
    </div>
  );
}

export default PeopleCard;
