import React from 'react';
import Demo, {props as P} from 'react-demo';
import Textarea from '../components/Textarea';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Textarea</h1>
        <Demo
          background="none"
          target={Textarea}
          props={{
          }}/>
      </div>
    );
  }
});
