import React from 'react';
import Demo, {props as P} from 'react-demo';
import Button from '../components/Button';

export default React.createClass({
  render() {
    return (
      <Demo
          target={Button}
          props={{
            isLink: P.bool(false),
            isOutlined: P.bool(false),
            isPrimary: P.bool(false),
            isInfo: P.bool(false),
            isSuccess: P.bool(false),
            isWarning: P.bool(false),
            isDanger: P.bool(false),
            isInverted: P.bool(false),
            children: P.string('Click me')
          }}/>
    );
  }
});
