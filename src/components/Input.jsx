import { Input as AntdInput } from 'antd';

const Input = ({ inputRef, value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <AntdInput
      className="my-2 mr-2 text-black"
      type="text"
      id="addItem"
      autoFocus
      ref={inputRef}
      placeholder="Add Item"
      required
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
