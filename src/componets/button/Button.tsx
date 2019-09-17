import * as React from 'react';
import './Button.css';
interface IButtonProps {
  selector: string;
  disabled: boolean;
}

export const Button: React.FC<IButtonProps> = ({selector, disabled, children}) => {
    return (
      <button data-testid={selector} disabled={disabled} id={selector} className="buttonSearch">
        {children}
      </button>
    );
};
