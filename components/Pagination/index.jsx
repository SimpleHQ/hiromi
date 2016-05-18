import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';
import Link from '../Link';

const PageItems = ({pageCount, currentPage, ...props}) => {
  let items = [];

  for (var i = 1; i <= pageCount; i++) {
    const active = i === currentPage;
    const className = classnames({
      'is-active': active
    });
    items.push(
      <li>
        <Link className={className}>{i}</Link>
      </li>
    );
  }
  return <ul>{items}</ul>;
};

const onPaginate = (onChange, pageIndex) => {
  return (event) => {
    let args = [...arguments];
    args.splice(0, 0, pageIndex);
    onChange(args);
  };
};

const LeftLevel = ({
  hasFirst, hasPrevious, first, previous, onChange, currentPage, ...props
}) => {
  let firstItem = hasFirst ? (
    <Link onClick={onPaginate(onChange, 1)}>{first}</Link>
  ) : null;
  let previousItem = hasPrevious ? (
    <Link onClick={onPaginate(onChange, currentPage - 1)}>{previous}</Link>
  ) : null;

  return (
    <div className="level-left">
      {firstItem}
      {previousItem}
    </div>
  );
};

const RightLevel = ({
  hasNext, hasLast, next, last, onChange, pageCount, currentPage, ...props
}) => {
  let lastItem = hasLast ? (
    <Link onClick={onPaginate(onChange, pageCount)}>{last}</Link>
  ) : null;
  let nextItem = hasNext ? (
    <Link onClick={onPaginate(onChange, currentPage + 1)}>{next}</Link>
  ) : null;

  return (
    <div className="level-right">
      {nextItem}
      {lastItem}
    </div>
  );
};

const Pagination = ({
  currentPage, pageCount, hasFirst, first, hasPrevious, previous,
  hasNext, next, hasLast, last, className, onChange, ...props
}) => {
  let {classList, ...finalProps} = modifierClassList(props);
  classList = classnames('level', className, classList);

  const leftLevel = hasFirst || hasPrevious ? (
    <LeftLevel
      hasFirst={hasFirst}
      hasPrevious={hasPrevious}
      first={first}
      previous={previous}
      onChange={onChange}
      currentPage={currentPage}
    />
  ) : null;

  const rightLevel = hasNext || hasLast ? (
    <RightLevel
      hasNext={hasNext}
      hasLast={hasLast}
      next={next}
      last={last}
      onChange={onChange}
      pageCount={pageCount}
      currentPage={currentPage}
    />
  ) : null;

  return (
    <div className={classList} {...finalProps}>
      {leftLevel}
      <div className="level-item has-text-centered">
        <nav className="pagination" {...finalProps}>
          <PageItems pageCount={pageCount} currentPage={currentPage} />
        </nav>
      </div>
      {rightLevel}
    </div>
  )
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  pageCount: PropTypes.number,
  hasFirst: PropTypes.bool,
  first: PropTypes.node,
  hasPrevious: PropTypes.bool,
  previous: PropTypes.node,
  hasNext: PropTypes.bool,
  next: PropTypes.node,
  hasLast: PropTypes.bool,
  last: PropTypes.node,

  onChange: PropTypes.func,
  ...defaultReactProps
};

Pagination.defaultProps = {
  hasFirst: true,
  first: "First",
  hasPrevious: true,
  previous: "Previous",
  hasNext: true,
  next: "Next",
  hasLast: true,
  last: "Last",
  ...defaultReactPropsValues
};

export default Pagination;
