import * as React from 'react';
import '../../styles/input.scss';

interface InputInterface {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    placeholder: string,
    className: string,
    // eslint-disable-next-line react/require-default-props
    type?: string
}

export default ({ state, setState, placeholder, className, type }: InputInterface) => {
  return (
    <input
      onChange={(e) => {
        setState(e.target.value);
      }}
      value={state}
      placeholder={placeholder}
      className={className}
      type={type}
    />
  );
};
