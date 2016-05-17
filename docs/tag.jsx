import React from 'react';
import Demo, {props as P} from 'react-demo';
import Tag from '../components/Tag';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Tag</h1>
        <Demo
          background="none"
          target={Tag}
          props={{
            isDark: P.bool(false),
            isPrimary: P.bool(false),
            isInfo: P.bool(false),
            isSuccess: P.bool(false),
            isWarning: P.bool(false),
            isDanger: P.bool(false),
            isSmall: P.bool(false),
            isMedium: P.bool(false),
            isLarge: P.bool(false),
            children: P.string('Tag, your it')
          }}/>
      </div>
    );
  }
});
