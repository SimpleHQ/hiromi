import React from 'react';
import Demo, {props as P} from 'react-demo';
import Select from '../components/Select';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Select</h1>
        <Demo
          background="none"
          props={{
            options: P.json([{"id": 1, "name": "Option 1"}, {"id": 2, "name": "Second Option"}]),
            valuePath: P.json(["id"]),
            labelPath: P.json(["name"]),
            onChange: P.callback.log(() => { return "CHANGED"; }),
            defaultValue: P.string("2")
          }}
        >
          {props => {
            return (
              <Select {...props} />
            );
          }}
        </Demo>
        <h1 className="title">Select with complex data</h1>
        <Demo
          background="none"
          props={{
            options: P.json([{"id": 1, "name": {"theName": "Option 1"}}]),
            valuePath: P.json(["id"]),
            labelPath: P.json(["name", "theName"]),
            onChange: P.callback.log(() => { return "CHANGED"; })
          }}
        >
          {props => {
            return (
              <Select {...props} />
            );
          }}
        </Demo>
      </div>
    );
  }
});
