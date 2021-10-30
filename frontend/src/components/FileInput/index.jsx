import React from 'react';
import { useFormContext } from 'react-hook-form';

const FileInput = (placeholder = '', label, disabled = false, name, ...rest) => {
  const { register } = useFormContext();
  return (
    <input
      disabled={disabled}
      placeholder={placeholder}
      type="file"
      {...register(name)}
      {...rest}
    />
  );
};

export default FileInput;
