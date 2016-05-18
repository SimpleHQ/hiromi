import React from 'react';
import Demo, {props as P} from 'react-demo';
import Pagination from '../components/Pagination';

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
            onChange: P.callback.log((index) => `Page: ${index}`)
          }}/>
      </div>
    );
  }
});
