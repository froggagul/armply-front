import * as React from 'react';
import '../../styles/input.scss';

interface InputInterface {
    state: string,
    setState: React.Dispatch<React.SetStateAction<string>>,
    placeholder: string,
    className: string,
}

export default ({ state, setState, placeholder, className }: InputInterface) => {
  return (
    <input
      onChange={(e) => {
        setState(e.target.value);
      }}
      value={state}
      placeholder={placeholder}
      className={className}
    />
  );
};
