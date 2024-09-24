import React from 'react';
import classes from './Content.module.scss';

/**
 * Content
 * @param {{
 * contentType: 'string' | 'img'
 * fontSize: 'l' | 'm' | 's' | 'xs'
 * color: 'dark' | 'lighter' | 'yellow' | 'green'
 * isBold: boolean
 * isCenter: boolean
 * textContent: string
 * imgUrl: string
 * imgInfoText: string
 * }} props 
 * @returns
 */
function Content(props) {
  const { contentType, fontSize, color, isBold, textContent, isCenter, imgUrl, imgInfoText } = props;

  return (
    contentType === 'string' ? (<div className={`general ${classes[fontSize]} ${classes[color]} ${classes[isBold ? 'bold' : 'regular']} ${isCenter ? classes.center : classes.start}`}>
      {textContent}
    </div>) : contentType === 'img' ? (<div className={classes.img}>
      <img className={classes.contentImg} src={imgUrl} alt='' />
      <div>{imgInfoText}</div></div>) : <div></div>
  );
}

export default Content;
