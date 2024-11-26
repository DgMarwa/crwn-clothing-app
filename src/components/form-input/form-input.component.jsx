import React from 'react';
import './form-input.styles.scss';

const FormInput = ({ label, value, ...otherProps }) => {
  const shrink = value && value.length > 0;

  return (
    <div className="group">
      <input className="form-input" value={value} {...otherProps} />
      {label && (
        <label className={`${shrink ? 'shrink' : ''} form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
