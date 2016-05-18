import React from 'react';
import Demo, {props as P} from 'react-demo';
import Card, {CardFooter} from '../components/Card';
import Link from '../components/Link';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Card</h1>
        <Demo
          background="none"
          target={Card}
          props={{
            title: P.string('Title'),
            iconTag: P.string('angle-down'),
            onIconClick: P.callback.log(() => "CLICKED"),
            children: P.string('This is a box area')
          }}
        >
          {props => {
            return (
              <Card {...props} />
            );
          }}
        </Demo>

        <h1 className="title">Card with footer</h1>
        <Demo
          background="none"
          target={Card}
          props={{
            title: P.string('Title'),
            iconTag: P.string('angle-down'),
            onIconClick: P.callback.log(() => "CLICKED"),
            children: P.string('This is a box area')
          }}
        >
          {props => {
            return (
              <Card
                footer={
                  <CardFooter>
                    <Link isButton={false}>Close</Link>
                  </CardFooter>
                }
                {...props}
              />
            );
          }}
        </Demo>

        <h1 className="title">Card with complex footer</h1>
        <Demo
          background="none"
          target={Card}
          props={{
            title: P.string('Title'),
            iconTag: P.string('angle-down'),
            onIconClick: P.callback.log(() => "CLICKED"),
            children: P.string('This is a box area')
          }}
        >
          {props => {
            return (
              <Card
                footer={
                  <CardFooter>
                    <div>
                      <Link>Close</Link>
                    </div>
                    <div>
                      <Link isPrimary>Submit</Link>
                    </div>
                  </CardFooter>
                }
                {...props}
              />
            );
          }}
        </Demo>
      </div>
    );
  }
});
