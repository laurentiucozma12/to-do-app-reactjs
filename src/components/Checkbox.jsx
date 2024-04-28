import { Checkbox as AntdCheckbox } from 'antd';

const Checkbox = ({ id, checked, onChange }) => {
  const handleChange = (e) => {
    onChange(id, e.target.checked);
  };

  return <AntdCheckbox checked={checked} onChange={handleChange} />;
};

export default Checkbox;
