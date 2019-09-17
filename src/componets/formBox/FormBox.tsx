import * as React from 'react';
import './FormBox.css'
interface IFormBoxProps {
    borderBottom?: boolean;
    borderTop?: boolean;
    borderColor?: string;
}

export class FormBox extends React.PureComponent<IFormBoxProps> {

    displayBorder = (addBorder: boolean) => addBorder ? `1px solid ${this.props.borderColor!}`: 'none';
  public render() {
    return (
    <div className="FormBox" style={{borderBottom: this.displayBorder(this.props.borderBottom!), borderTop: this.displayBorder(this.props.borderTop!)}}>
    {this.props.children}
    </div>
    );
  }
}
