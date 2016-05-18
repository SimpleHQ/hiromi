import React from 'react';
import Demo, {props as P} from 'react-demo';
import Pagination from '../components/Pagination';
import Icon from '../components/Icon';

export default React.createClass({
  render() {
    return (
      <div>
        <h1 className="title">Pagination</h1>
        <Demo
          background="none"
          target={Pagination}
          props={{
            currentPage: P.number(4),
            pageCount: P.number(20),
            hasFirst: P.bool(true),
            first: P.string("First"),
            hasPrevious: P.bool(true),
            previous: P.string("Previous"),
            hasNext: P.bool(true),
            next: P.string("Next"),
            hasLast: P.bool(true),
            last: P.string("Last"),
            onChange: P.callback.log((index) => `Page: ${index}`),
            pagesVisible: P.number(2)
          }}/>

          <h1 className="title">Pagination with Icons</h1>
          <Demo
            background="none"
            props={{
              currentPage: P.number(4),
              pageCount: P.number(20),
              hasFirst: P.bool(true),
              hasPrevious: P.bool(true),
              hasNext: P.bool(true),
              hasLast: P.bool(true),
              onChange: P.callback.log((index) => `Page: ${index}`),
              pagesVisible: P.number(2)
            }}
          >
            {props => {
              return (
                <Pagination
                  first={<Icon tag="angle-double-left" />}
                  previous={<Icon tag="angle-left" />}
                  next={<Icon tag="angle-right" />}
                  last={<Icon tag="angle-double-right" />}
                  {...props}
                />
              );
            }}
          </Demo>
      </div>
    );
  }
});
