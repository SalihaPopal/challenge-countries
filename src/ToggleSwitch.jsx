import React from 'react';
import { IoMoon, IoSunny } from 'react-icons/io5';
import { ToggleContainer } from './style-components';

const ToggleSwitch = ({ isDarkMode, onToggle }) => {
  return (
    <ToggleContainer onClick={onToggle}>
      {isDarkMode ? <IoSunny /> : <IoMoon />}
    </ToggleContainer>
  );
};

export default ToggleSwitch;

