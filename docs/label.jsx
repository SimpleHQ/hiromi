import React from 'react';
import Demo, {props as P} from 'react-demo';
import Label from '../components/Label';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Label</h1>
        <Demo
          background="none"
          target={Label}
          props={{
            isDisabled: P.bool(false),
            isCheckbox: P.bool(false),
            isRadio: P.bool(false),
            children: P.string('Label name')
          }}/>
      </div>
    );
  }
});
