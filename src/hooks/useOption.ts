import { useState } from 'react';

export const useOption = (optionArray: string[]) => {
  const [selectedOption, setSelectedOption] = useState<string>(optionArray[0]);

  const handleChangeOption = (option: string) => {
    setSelectedOption(option);
  };

  return { selectedOption, setSelectedOption, handleChangeOption };
};
