import { Input as AntdInput } from 'antd';

const Input = ({ inputRef, value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <AntdInput
      className="mr-2 w-60 rounded-xl text-black xl:w-full"
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
