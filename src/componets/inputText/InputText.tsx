import React from 'react';
import './InputText.css'
interface IInputTextProps {
  selector?: string;
  value?: string;
  onChangeValue: (ev: any) => void;
  name: string;
}

const InputText: React.FunctionComponent<IInputTextProps> = ({name, selector, value, onChangeValue}) => {
  return <input data-testid={name} name={name} value={value} type="text" onChange={(e) => onChangeValue(e.target.value)} className="InputText" id={selector}/>;
};

export default InputText;