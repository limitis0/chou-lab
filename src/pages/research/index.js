import React from 'react';
import classes from './index.module.scss';
import Title from '../../components/title/Title';
import { useNavigate } from 'react-router';

function Research() {
  const navigate = useNavigate();
  const handleOnClick = (path) => navigate(`${path}`);

  return (
    <div className={classes.pageContainer}>
      <div className={classes.titleContainer}>
        {window.innerWidth > 900 ? <Title textContent='Research' fontSize='64' color='dark' wide='fit' textAlign='center' isUnderline /> : <Title textContent='Research' fontSize='48' color='dark' wide='expand' textAlign='center' isUnderline />}
      </div>

      <div className={classes.photoBtnContainer}>
        <div className={`${classes.photoBtn} ${classes.crabBtn}`} onClick={() => handleOnClick('/research/crab')}>
          <div className={classes.crabBtnTitle}>
            <Title textContent='Fiddler Crab' fontSize={window.innerWidth > 900 ? '48' : '32'} color='dark' wide='fit' textAlign='center' isUnderline={false} />
          </div>
        </div>

        <div className={`${classes.photoBtn} ${classes.magpieBtn}`} onClick={() => handleOnClick('/research/magpie')}>
          <div className={classes.magpieBtnTitle}>
            <Title textContent='Taiwan Blue Magpie' fontSize={window.innerWidth > 900 ? '48' : '32'} color='dark' wide='fit' textAlign='center' isUnderline={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;