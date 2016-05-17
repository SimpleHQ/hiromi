import React from 'react';
import Demo, {props as P} from 'react-demo';
import Link from '../components/Link';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Link</h1>
        <Demo
          background="none"
          target={Link}
          props={{
            isLink: P.bool(false),
            isOutlined: P.bool(false),
            isPrimary: P.bool(false),
            isInfo: P.bool(false),
            isSuccess: P.bool(false),
            isWarning: P.bool(false),
            isDanger: P.bool(false),
            isInverted: P.bool(false),
            isSmall: P.bool(false),
            isMedium: P.bool(false),
            isLarge: P.bool(false),
            isLoading: P.bool(false),
            isDisabled: P.bool(false),
            children: P.string('Click me')
          }}/>
      </div>
    );
  }
});
