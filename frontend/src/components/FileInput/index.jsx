import { useFormContext } from 'react-hook-form';

const InputField = ({ placeholder = '', disabled = false, name, ...rest }) => {
  const { register } = useFormContext();
  return (
    <input
      placeholder={placeholder}
      type="file"
      ref={register}
      name={name}
      disabled={disabled}
      {...rest}
    />
  );
};

export default InputField;
