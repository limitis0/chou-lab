import React from 'react';
import classes from './CusBtn.module.scss';

/**
 * 
 * @param {{
 * btnText: string
 * btnSize: 'small' | 'big'
 * btnColor: 'trans' | 'light' | 'dark'
 * isUnderline: boolean
 * onClick: function
 * }} props 
 * @returns 
 */
function CusBtn(props) {
  const { btnText, btnSize, btnColor, isUnderline, onClick } = props;
  const handleStroleClassName = isUnderline ? 'underlineTrue' : 'underlineFalse';
  return (
    <div className={`${classes.general} ${classes[btnSize]} ${classes[btnColor]} ${classes[handleStroleClassName]}`} onClick={onClick}>
      {btnText}
    </div>
  );
}

export default CusBtn;

