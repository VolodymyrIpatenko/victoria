import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { FiSun } from 'react-icons/fi';
import { BsMoonFill } from 'react-icons/bs';
import { SwitchContainer } from './Switch.styled';

const SwitchMode = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const Icon = darkMode ? FiSun : BsMoonFill;

  return (
    <SwitchContainer>
      <Icon onClick={() => toggleDarkMode()} />
    </SwitchContainer>
  );
};

export default SwitchMode;
