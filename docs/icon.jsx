import React from 'react';
import Demo, {props as P} from 'react-demo';
import Icon from '../components/Icon';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Icon</h1>
        <Demo
          background="none"
          target={Icon}
          props={{
            isSmall: P.bool(false),
            isMedium: P.bool(false),
            isLarge: P.bool(false),
            hasSpan: P.bool(true),
            tag: P.string('home')
          }}/>
      </div>
    );
  }
});
