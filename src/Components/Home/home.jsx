
import React, { useContext, useEffect } from 'react';
import { languageContext } from '../../Contexts/languageContext';

export default function Home() {
  const { lang, setLang } = useContext(languageContext);

  const handletoggle = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };
  useEffect(() => {
    // Update the direction based on the selected language
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);
  return (
    <div >
      <h2>Laguang is : {lang}</h2>
      <button className='btn btn-primary mx-5' onClick={handletoggle}>
        Change Language
      </button>
    </div>
  );
}
