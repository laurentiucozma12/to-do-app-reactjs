import { Input as AntdInput } from 'antd';

const Input = ({ inputRef, value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <AntdInput
      className="my-2 mr-2 w-60 text-black xl:w-[350px]"
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
