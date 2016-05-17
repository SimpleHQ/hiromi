import React from 'react';
import Demo, {props as P} from 'react-demo';
import Box from '../components/Box';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Box</h1>
        <Demo
          background="none"
          target={Box}
          props={{
            children: P.string('This is a box area')
          }}/>
      </div>
    );
  }
});
