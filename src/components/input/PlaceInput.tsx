import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { CITY_OPTIONS } from '../../constants/options';

interface PlaceInputProps {
  searchObj: string;
  handleChangeRegion: (option: string) => void;
  handleChangeCountry: (option: string) => void;
}

type SearchResult = { region: string; country: string };

export default function PlaceInput({ searchObj, handleChangeRegion, handleChangeCountry }: PlaceInputProps) {
  const [inputValue, setInputValue] = useState<string>('');
  const [suggestions, setSuggestions] = useState<SearchResult[]>([]);
  const [wantHide, setWantHide] = useState<boolean>(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWantHide(false);
    const value = e.target.value;
    setInputValue(value);

    if (value.trim() === '') {
      setSuggestions([]);
      return;
    }

    // 검색어 자동완성 기능
    const results: SearchResult[] = [];
    Object.entries(CITY_OPTIONS).forEach(([region, countries]) => {
      countries.forEach((country) => {
        if (country.includes(value) || region.includes(value)) {
          results.push({ region, country });
        }
      });
    });
    setSuggestions(results);
  };

  const handleMoveButton = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const value = (e.target as HTMLLIElement).innerText;
    const [region, country] = value.split(' ');
    handleChangeRegion(region);
    handleChangeCountry(country);
    setWantHide(true);
    setInputValue('');
  };

  useEffect(() => {
    const inputSection = document.getElementById('input-section');
    const inputField = document.getElementById('input-field');

    const handleToggleSuggestions = (e: MouseEvent) => {
      if (!wantHide && !inputSection?.contains(e.target as Node)) {
        setWantHide(true);
      } else if (wantHide && inputField?.contains(e.target as Node)) {
        setWantHide(false);
      }
    };

    document.addEventListener('click', handleToggleSuggestions);

    return () => {
      document.removeEventListener('click', handleToggleSuggestions);
    };
  }, [wantHide]);

  return (
    <section id="input-section">
      <div className="relative w-[750px] h-[60px] border border-black bg-white rounded-[4px] px-[16px] flex items-center justify-between">
        <input
          id="input-field"
          type="text"
          placeholder={`${searchObj} 검색해보세요!`}
          value={inputValue}
          onChange={handleInputChange}
          className="w-[85%] outline-none text-[18px] placeholder:text-[16px]"
        />

        <button>
          <img src="/search-glasses.svg" alt="검색" className="w-[30px] h-[30px]" />
        </button>
      </div>
      {suggestions.length > 0 && (
        <ul
          className={clsx(
            wantHide && 'hidden',
            'scrollbar-custom absolute left-100 w-[750px] max-h-[600px] overflow-y-auto border border-gray-500 rounded-[5px] bg-white p-[10px] z-20 flex flex-col'
          )}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="flex gap-[5px] hover:cursor-pointer hover:bg-slate-300 p-[10px]"
              onClick={handleMoveButton}
            >
              <img src="/search-glasses.svg" alt="검색" />
              <p>
                {suggestion.region} {suggestion.country}
              </p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
