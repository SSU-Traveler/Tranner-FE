import { useState } from 'react';
import { CITY_OPTIONS } from '../constants/options';
import { useOption } from './useOption';

export const useChainOption = () => {
  const [primaryOption, setPrimaryOption] = useState<string>(Object.keys(CITY_OPTIONS)[0]);
  const [secondaryOptions, setSecondaryOptions] = useState<string[]>(CITY_OPTIONS[primaryOption]);

  const { selectedOption, setSelectedOption, handleChangeOption } = useOption(CITY_OPTIONS[primaryOption]);

  const handleChangeSecondaryButton = (option: string) => {
    setPrimaryOption(option);
    setSecondaryOptions(CITY_OPTIONS[option]);
    setSelectedOption(CITY_OPTIONS[option][0]);
  };

  return {
    primaryOption,
    secondaryOptions,
    selectedOption,
    handleChangeOption,
    handleChangeSecondaryButton,
  };
};
