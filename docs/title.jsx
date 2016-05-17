import React from 'react';
import Demo, {props as P} from 'react-demo';
import {Title, Subtitle} from '../components/Title';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Title</h1>
        <Demo
          background="none"
          target={Title}
          props={{
            size: P.choices([
              1, 2, 3, 4, 5, 6
            ], 1)
          }}
        >
          {props => {
            return (
              <Title {...props}>
                <h1>Title 1</h1>
              </Title>
            );
          }}
        </Demo>
        <h1 className="title">Subtitle</h1>
        <Demo
          background="none"
          target={Subtitle}
          props={{
            size: P.choices([
              1, 2, 3, 4, 5, 6
            ], 1)
          }}
        >
          {props => {
            return (
              <Subtitle {...props}>
                <h1>Title 1</h1>
              </Subtitle>
            );
          }}
        </Demo>
      </div>
    );
  }
});
