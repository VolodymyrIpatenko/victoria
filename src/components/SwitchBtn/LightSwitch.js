import React, { useContext } from 'react';
import { DarkModeContext } from '../context/DarkModeContext';
import { FiSun } from 'react-icons/fi';
import { BsMoonFill } from 'react-icons/bs';
import { SwitchContainer } from './Switch.styled.js';

function SwitchMode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const handleClick = () => {
    toggleDarkMode();
  };

  return (
    <SwitchContainer>
      {darkMode ? (
        <FiSun onClick={() => handleClick()}></FiSun>
      ) : (
        <BsMoonFill onClick={() => handleClick()}></BsMoonFill>
      )}
    </SwitchContainer>
  );
}

export default SwitchMode;
