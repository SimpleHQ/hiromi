import React from 'react';
import Demo, {props as P} from 'react-demo';
import Checkbox from '../components/Checkbox';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Checkbox</h1>
        <Demo
          background="none"
          props={{
            children: P.string('Remember me')
          }}
        >
          {props => {
            return <Checkbox {...props}></Checkbox>;
          }}
        </Demo>

        <h1 className="title">Checkbox with custom input</h1>
        <Demo
          background="none"
          props={{
            children: P.string('Remember me')
          }}
        >
          {props => {
            return (
              <Checkbox input={<input type="checkbox" name="checkbox_1" />} {...props}></Checkbox>
            );
          }}
        </Demo>
      </div>
    );
  }
});
