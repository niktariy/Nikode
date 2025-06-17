import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown, StyledDropdownOption } from '../UI/Dropdown/Dropdown';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  // const dispatch = useDispatch();
  const [currentLng, setCurrentLng] = useState(i18n.language);
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = async (lang: 'en' | 'ru') => {
    await i18n.changeLanguage(lang);
    setCurrentLng(i18n.language);
    setIsOpen(false);
  };

  return (
    <Dropdown
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      triggerLabel={currentLng.toUpperCase()}
      triggerAriaLabel={i18n.t('toggle_language') + '. ' + i18n.t('current_language')}
    >
      <li>
        <StyledDropdownOption
          $isActive={currentLng === 'en'}
          onClick={() => handleLanguageChange('en')}
        >
          EN
        </StyledDropdownOption>
      </li>
      <li>
        <StyledDropdownOption
          $isActive={currentLng === 'ru'}
          onClick={() => handleLanguageChange('ru')}
        >
          RU
        </StyledDropdownOption>
      </li>
    </Dropdown>
  );
};

export default LanguageSwitcher;