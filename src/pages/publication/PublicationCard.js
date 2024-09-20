import React from 'react';
import classes from './index.module.scss'
import Content from '../../components/content/Content';

/**
 * PublicationCard
 * @param {{contentText: string}} props 
 * @returns 
 */
function PublicationCard(props) {
  const { contentText } = props;
  const circleSVG = () => (<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="6" fill="#FF8552" />
  </svg>);
  return (
    <div className={classes.cardContainer}>
      <div className={classes.circle}>{circleSVG()}</div>
      <Content contentType='string' textContent={contentText} fontSize='m' color='dark' />
    </div>
  );
}

export default PublicationCard;
