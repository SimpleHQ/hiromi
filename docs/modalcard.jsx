import React from 'react';
import Demo, {props as P} from 'react-demo';
import ModalCard, { ModalCardFooter } from '../components/ModalCard';
import Button from '../components/Button';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">ModalCard</h1>
        <Demo
          background="none"
          target={ModalCard}
          props={{
            isLink: P.bool(false),
            isOutlined: P.bool(false),
            isPrimary: P.bool(false),
            isInfo: P.bool(false),
            isSuccess: P.bool(false),
            isWarning: P.bool(false),
            isDanger: P.bool(false),
            isInverted: P.bool(false),
            isSmall: P.bool(false),
            isMedium: P.bool(false),
            isLarge: P.bool(false),
            isLoading: P.bool(false),
            title: P.string('Modal title goes here'),
            children: P.string('Modal body goes here'),
            visible: P.bool(false),
            showClose: P.bool(true)
          }}/>
          <h1>ModalCard with Footer</h1>
          <Demo
            background="none"
            target={ModalCard}
            props={{
              isLink: P.bool(false),
              isOutlined: P.bool(false),
              isPrimary: P.bool(false),
              isInfo: P.bool(false),
              isSuccess: P.bool(false),
              isWarning: P.bool(false),
              isDanger: P.bool(false),
              isInverted: P.bool(false),
              isSmall: P.bool(false),
              isMedium: P.bool(false),
              isLarge: P.bool(false),
              isLoading: P.bool(false),
              title: P.string('Modal title goes here'),
              children: P.string('Modal body goes here'),
              visible: P.bool(false),
              showClose: P.bool(true)
            }}>
              {props => {
                return (
                  <ModalCard footer={<ModalCardFooter><Button>Submit</Button></ModalCardFooter>} {...props}></ModalCard>
                );
              }}
            </Demo>
      </div>
    );
  }
});
