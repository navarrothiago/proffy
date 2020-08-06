import React, {InputHTMLAttributes} from 'react';

import './styles.css'

// Interface from React.
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;

}

const Input: React.FC<InputProps> = ({ name, label, ...rest }) => {
  return (
    <div className="input-block">
      {/* THe {} is used because you are using JS in HTML */}
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest}/>
    </div>
  );
}

export default Input;