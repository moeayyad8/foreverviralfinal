import React from 'react';
import { useI18next } from 'react-i18next';

const LanguageSwitcher = () => {
  const { currentLocale, locales, changeLocale } = useI18next();

  return (
    <div>
      <p>Current Language: {currentLocale}</p>
      {locales.map((locale) => (
        <button
          key={locale}
          type="button"
          onClick={() => changeLocale(locale)}
          className={locale === currentLocale ? 'active' : ''}
        >
          {locale.toUpperCase()}
        </button>
      ))}
      <style jsx>{`
        .active {
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default LanguageSwitcher;





