import { useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');

  function handleValue(e) {
    setValue(e.target.value);
  }
  return [value, setValue, handleValue];
};

export const useToggle = () => {
  const [value, setValue] = useState(false);

  function toggle() {
    setValue(state => !state);
  }
  return [value, { toggle }];
};
