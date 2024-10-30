import { CITY_OPTIONS } from '../../constants/options';
import { useChainOption } from '../../hooks/useChainOption';
import FilterButton from '../common/FilterButton';

export default function FilterButtonFormat() {
  const { primaryOption, secondaryOptions, selectedOption, handleChangeOption, handleChangeSecondaryButton } =
    useChainOption();

  return (
    <nav className="flex flex-col gap-y-[20px] mb-[30px]">
      <div className="flex flex-wrap gap-[8px]">
        {Object.keys(CITY_OPTIONS).map((option) => (
          <FilterButton
            key={option}
            buttonName={option}
            selectedOption={primaryOption}
            onClick={() => handleChangeSecondaryButton(option)}
          />
        ))}
      </div>
      <div className="flex flex-wrap gap-[8px]">
        {secondaryOptions.map((option) => (
          <FilterButton key={option} buttonName={option} selectedOption={selectedOption} onClick={handleChangeOption} />
        ))}
      </div>
    </nav>
  );
}
