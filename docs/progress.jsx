import React from 'react';
import Demo, {props as P} from 'react-demo';
import Progress from '../components/Progress';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Progress</h1>
        <Demo
          background="none"
          target={Progress}
          props={{
            isPrimary: P.bool(false),
            isInfo: P.bool(false),
            isSuccess: P.bool(false),
            isWarning: P.bool(false),
            isDanger: P.bool(false),
            isSmall: P.bool(false),
            isMedium: P.bool(false),
            isLarge: P.bool(false),
            value: P.number(25),
            max: P.number(100)
          }}/>
      </div>
    );
  }
});
