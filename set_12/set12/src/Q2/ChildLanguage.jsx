import React, { useContext } from "react";
import { LanguageContext } from "./Language";

const ChildLanguage = () => {
  const { translations, language, setLanguage } = useContext(LanguageContext);
  return (
    <div>
      <h1>{translations[language].hello}</h1>
      <h1>{translations[language].goodbye}</h1>
      <button onClick={() => setLanguage("es")}>Spanish</button>
      <button onClick={() => setLanguage("fr")}>French</button>
      <button onClick={() => setLanguage("en")}>English</button>
    </div>
  );
};

export default ChildLanguage;
