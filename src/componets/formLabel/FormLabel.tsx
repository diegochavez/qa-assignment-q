import * as React from 'react';
import './FormLabel.css';

export interface ILabelProps {
    text?: string;
    selector?: string;
}

export default class Label extends React.PureComponent<ILabelProps, any> {
  public render() {
    return (
      <React.Fragment>
        <label className="FormLabel" htmlFor={this.props.selector}>
        <strong>{this.props.text}</strong>
        </label>
        {this.props.children}
      </React.Fragment>
    );
  }
}
