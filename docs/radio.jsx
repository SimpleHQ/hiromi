import React from 'react';
import Demo, {props as P} from 'react-demo';
import Radio from '../components/Radio';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Radio</h1>
        <Demo
          background="none"
          props={{
            name: P.string('group1'),
            value: P.string('my value'),
            children: P.string('Remember me')
          }}
        >
          {props => {
            return (
              <div>
                <Radio {...props}></Radio>
                <Radio name={props.name} value={props.value}>This is a test</Radio>
              </div>
            );
          }}
        </Demo>

        <h1 className="title">Radio with custom input</h1>
        <Demo
          background="none"
          props={{
            name: P.string('group1'),
            children: P.string('Remember me')
          }}
        >
          {props => {
            return (
              <Radio input={<input type="radio" name="radio1" />} {...props}></Radio>
            );
          }}
        </Demo>
      </div>
    );
  }
});
