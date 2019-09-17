import React from 'react';
import './InputSelect.css'
import Utils from '../../utils/utils';
interface IInputSelectProps {
  selector?: string;
  disabled?: boolean;
  onSelectItem: (evt: any) => void;
  value?: string;
  name: string;
  options: Array<any>;
}

const InputSelect: React.FunctionComponent<IInputSelectProps> = ({name, selector, disabled, onSelectItem, value, options}) => {
  return <select data-testid={selector} name={name} value={value} onChange={(ev) => onSelectItem(ev.target.value)} disabled={disabled} className="InputSelect" id={selector}>
  <option data-testid={`${selector}-option-null`} value="">- Select Option -</option>
  {(options && options.length > 0) && options.map(((option, index) => (
    <option data-testid={`${selector}-option-${Utils.e2eString(option)}`} key={index} value={option}>{option}</option>
  )))}

  </select>;
};

export default InputSelect;