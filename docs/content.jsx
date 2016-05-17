import React from 'react';
import Demo, {props as P} from 'react-demo';
import Content from '../components/Content';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Content</h1>
        <Demo
          background="none"
          target={Content}
          props={{
            isMedium: P.bool(false),
            isLarge: P.bool(false),
            children: P.string('This is really good content.')
          }}/>
      </div>
    );
  }
});
