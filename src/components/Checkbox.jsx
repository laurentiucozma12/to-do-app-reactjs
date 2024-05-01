import PropTypes from 'prop-types';
import { Checkbox as AntdCheckbox } from 'antd';

const Checkbox = ({ id, checked, onChange }) => {
  const handleChange = (e) => {
    onChange(id, e.target.checked);
  };

  return <AntdCheckbox checked={checked} onChange={handleChange} />;
};

export default Checkbox;

Checkbox.propTypes = {
  id: PropTypes.number.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};
