import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { Dropdown, StyledDropdownOption } from '../UI/Dropdown/Dropdown';
import { setLanguage } from '../../store/languageSlice';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const dispatch = useDispatch();
  const { currentLanguage } = useSelector((state: RootState) => state.language);
  const [isOpen, setIsOpen] = useState(false);

  // Синхронизируем i18n с состоянием Redux
  useEffect(() => {
    if (i18n.language !== currentLanguage) {
      i18n.changeLanguage(currentLanguage);
    }
  }, [currentLanguage, i18n]);

  const handleLanguageChange = (lang: 'en' | 'ru') => {
    dispatch(setLanguage(lang));
    setIsOpen(false);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      triggerLabel={currentLanguage.toUpperCase()}
      triggerAriaLabel={i18n.t('toggle_language') + '. ' + i18n.t('current_language')}
    >
      <li>
        <StyledDropdownOption
          $isActive={currentLanguage === 'en'}
          onClick={() => handleLanguageChange('en')}
        >
          EN
        </StyledDropdownOption>
      </li>
      <li>
        <StyledDropdownOption
          $isActive={currentLanguage === 'ru'}
          onClick={() => handleLanguageChange('ru')}
        >
          RU
        </StyledDropdownOption>
      </li>
    </Dropdown>
  );
};

export default LanguageSwitcher;