import React from 'react';
import classes from './Content.module.scss';

/**
 * Content
 * @param {{
 * fontSize: 'l' | 'm' | 's' | 'xs'
 * color: 'dark' | 'lighter' | 'yellow'
 * isBold: boolean
 * isCenter: boolean
 * textContent: string
 * }} props 
 * @returns
 */
function Content(props) {
  const { fontSize, color, isBold, textContent, isCenter } = props;
  return (
    <div className={`general ${classes[fontSize]} ${classes[color]} ${classes[isBold ? 'bold' : 'regular']} ${isCenter && classes.center}`}>
      {textContent}
    </div>
  );
}

export default Content;
