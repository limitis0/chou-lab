import React from 'react';
import classes from './Title.module.scss';

/**
 * Title
 * @param {{
 * textContent: string
 * fontSize: '10' | '12' | '24' | '32' | '36' | '48' | '64' | '72'
 * color: 'light' | 'dark' | 'yellow'
 * wide: 'fit' | 'expand'
 * textAlign: 'start' | 'center' | 'end'
 * isUnderline: boolean
 * }} props 
 * @returns 
 */
function Title(props) {
  const { textContent, fontSize, color, wide, textAlign, isUnderline } = props;
  return (
    <div className={`${classes.general} ${classes['font' + fontSize]} ${classes[color]} ${classes[wide]} ${classes[textAlign]} ${classes[isUnderline ? 'underlineTrue' : 'underlineFalse']}`}>
      {textContent}
    </div>
  );
}

export default Title;
