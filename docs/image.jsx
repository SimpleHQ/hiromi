import React from 'react';
import Demo, {props as P} from 'react-demo';
import Image from '../components/Image';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Image</h1>
        <Demo
          background="none"
          target={Image}
          props={{
            src: P.string("http://lorempixel.com/400/600/animals"),
            size: P.choices([
              null, 16, 24, 32, 48, 64, 96, 128
            ], 64),
            ratio: P.choices([
              null, 'square', '1by1', '4by3', '3by2', '16by9', '2by1'
            ])
          }}/>
      </div>
    );
  }
});
