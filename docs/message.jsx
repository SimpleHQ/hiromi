import React from 'react';
import Demo, {props as P} from 'react-demo';
import Message from '../components/Message';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Message</h1>
        <Demo
          background="none"
          target={Message}
          props={{
            isPrimary: P.bool(false),
            isInfo: P.bool(false),
            isSuccess: P.bool(false),
            isWarning: P.bool(false),
            isDanger: P.bool(false),
            title: P.string("Message Title"),
            children: P.string("Message content.")
          }}/>
      </div>
    );
  }
});
