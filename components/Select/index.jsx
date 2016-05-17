import React, {PropTypes} from 'react';
import classnames from 'classnames';

const valueAtPath = (item, path) => {
  let value = item;
  for (let key of path) {
    value = value[key];
  }
  return value;
};

const Option = ({item, valuePath, labelPath, ...props}) => {
  const value = valuePath ? valueAtPath(item, valuePath) : null;
  const label = valueAtPath(item, labelPath);
  return (
    <option value={value}>{label}</option>
  );
};

Option.propTypes = {
  item: PropTypes.object,
  valuePath: PropTypes.array,
  labelPath: PropTypes.array.isRequired
};

Option.defaultProps = {
  labelPath: ['name']
};

const Select = ({
  children, options, className, valuePath, labelPath, onChange, ...props
}) => {
  const classList = classnames('select', className);
  return (
    <span className={classList}>
      <select onChange={onChange}>
        {children}
        {options.map((option, idx) => {
          return (
            <Option key={`select-option-${idx}`} item={option} valuePath={valuePath} labelPath={labelPath} />
          );
        })}
      </select>
    </span>
  );
};

Select.propTypes = {
  options: PropTypes.array.isRequired,
  valuePath: PropTypes.array,
  labelPath: PropTypes.array.isRequired,
  children: PropTypes.node
};

Select.defaultProps = {
  labelPath: ['name']
};

export {
  Select as default,
  Option
};
