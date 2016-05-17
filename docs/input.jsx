import React from 'react';
import Demo, {props as P} from 'react-demo';
import Input from '../components/Input';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Input</h1>
        <Demo
          background="none"
          target={Input}
          props={{
            isPrimary: P.bool(false),
            isInfo: P.bool(false),
            isSuccess: P.bool(false),
            isWarning: P.bool(false),
            isDanger: P.bool(false),
            isSmall: P.bool(false),
            isMedium: P.bool(false),
            isLarge: P.bool(false)
          }}/>
      </div>
    );
  }
});
