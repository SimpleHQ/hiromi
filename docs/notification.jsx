import React from 'react';
import Demo, {props as P} from 'react-demo';
import Notification from '../components/Notification';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Notification</h1>
        <Demo
          background="none"
          target={Notification}
          props={{
            isPrimary: P.bool(false),
            isInfo: P.bool(false),
            isSuccess: P.bool(false),
            isWarning: P.bool(false),
            isDanger: P.bool(false),
            onClose: P.callback.log(() => "CLOSED!"),
            children: P.string('This is a notification')
          }}/>
      </div>
    );
  }
});
