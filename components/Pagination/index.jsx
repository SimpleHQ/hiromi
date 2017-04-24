import React, {PropTypes} from 'react';
import classnames from 'classnames';
import {
  modifierClassList, defaultReactProps, defaultReactPropsValues
} from '../utils';
import Link from '../Link';

const PageItems = ({pagesVisible, onChange, pageCount, currentPage, ...props}) => {
  let items = [];
  // compute minLeft and maxRight indeces of page buttons
  // which exclude first and last pages.
  let minLeft = currentPage - Math.floor(pagesVisible/2);
  if (minLeft < 2) minLeft = 2;
  let maxRight = minLeft + pagesVisible - 1;
  if (maxRight >= pageCount) {
    maxRight = pageCount - 1;
    minLeft = maxRight - pagesVisible + 1;
    if (minLeft < 2) minLeft = 2;
  }

  for (let i = 1; i <= pageCount; i++) {
    if (
      i !== 1 && i !== pageCount &&
      (i < minLeft || i > maxRight)
    ) {
      continue;
    }

    // If it's the min left visible, and there were skipped items
    if (i === minLeft && minLeft > 2) {
      items.push(
        <li key={(i - 1).toString()}>
          ...
        </li>
      );
    }

    const active = i === currentPage;
    const className = classnames({
      'is-active': active
    });
    items.push(
      <li key={i.toString()}>
        <Link className={className} onClick={onPaginate(onChange, i)} >{i}</Link>
      </li>
    );

    // If it's the max right visible, and there will be skipped items
    if (i === maxRight && maxRight < pageCount - 1) {
      items.push(
        <li key={(i + 1).toString()}>
          ...
        </li>
      );
    }
  }
  return <ul>{items}</ul>;
};

const onPaginate = (onChange, pageIndex) => {
  return (event) => {
    let args = [...arguments];
    args.splice(0, 0, pageIndex);
    onChange(...args);
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
  hasNext, next, hasLast, last, className, onChange, pagesVisible,
  ...props
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
          <PageItems
            pageCount={pageCount}
            currentPage={currentPage}
            onChange={onChange}
            pagesVisible={pagesVisible}
          />
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
  pagesVisible: PropTypes.number,

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
  pagesVisible: 2,
  ...defaultReactPropsValues
};

export default Pagination;
