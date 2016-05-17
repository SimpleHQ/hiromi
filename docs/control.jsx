import React from 'react';
import Demo, {props as P} from 'react-demo';
import Control, {HorizontalControl} from '../components/Control';
import Input from '../components/Input';
import Link from '../components/Link';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Control</h1>
        <Demo
          background="none"
          props={{
            iconTag: P.string('home'),
            iconRight: P.bool(false),
            isLoading: P.bool(false),
            hasAddons: P.bool(false),
            isGrouped: P.bool(false)
          }}
        >
          {props => {
            return (
              <Control {...props}>
                <Input type="text" />
              </Control>
            );
          }}
        </Demo>
        <h1 className="title">Control with Addons</h1>
        <Demo
          background="none"
          props={{
            iconTag: P.string('home'),
            iconRight: P.bool(false),
            isLoading: P.bool(false),
            hasAddons: P.bool(true),
            isGrouped: P.bool(false)
          }}
        >
          {props => {
            return (
              <Control prefix={<Link isDanger>Cancel</Link>} suffix={<Link isSuccess>Login</Link>} {...props}>
                <Input type="text" />
              </Control>
            );
          }}
        </Demo>
        <h1 className="title">Grouped Control</h1>
        <Demo
          background="none"
          props={{
            iconTag: P.string('home'),
            iconRight: P.bool(false),
            isLoading: P.bool(false),
            hasAddons: P.bool(false),
            isGrouped: P.bool(true)
          }}
        >
          {props => {
            return (
              <Control prefix={<Link isDanger>Cancel</Link>} suffix={<Link isSuccess>Login</Link>} {...props}>
                <Input type="text" />
              </Control>
            );
          }}
        </Demo>
        <h1 className="title">Horizontal Controls</h1>
        <Demo
          background="none"
          props={{
            label: P.string('Horizontal Label')
          }}
        >
          {props => {
            return (
              <HorizontalControl {...props}>
                <Control>
                  <Input type="text" />
                </Control>
              </HorizontalControl>
            );
          }}
        </Demo>
      </div>
    );
  }
});
