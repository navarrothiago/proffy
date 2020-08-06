import React, {TextareaHTMLAttributes} from 'react';

import './styles.css'

// Interface from React.
interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label: string;

}

const Textarea: React.FC<TextareaProps> = ({ name, label, ...rest }) => {
  return (
    <div className="textarea-block">
      {/* THe {} is used because you are using JS in HTML */}
      <label htmlFor={name}>{label}</label>
      <textarea id={name} {...rest}/>
    </div>
  );
}

export default Textarea;