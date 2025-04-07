/*

Create a React app with LanguageContext that stores the current language. Implement
a Translate component that receives a key and displays the corresponding translation based on
the language provided by the LanguageContext using useContext.

*/

import { createContext, useState } from "react";
import ChildLanguage from "./ChildLanguage";

const translations = {
  en: {
    hello:
      "Hello! I hope you're having a great day filled with joy and happiness. Hello and w",
    goodbye:
      "Goodbye! I hope we'll see each other again soon. May your day be filled with happi",
  },
  es: {
    hello:
      "¡Hola! Espero que estés teniendo un excelente día lleno de alegría y felicidad. ¡H",
    goodbye:
      "¡Adiós! Espero que nos volvamos a ver pronto. Que tu día esté lleno de felicidad y",
  },
  fr: {
    hello:
      "Salut! J'espère que tu passes une excellente journée remplie de joie et de bonheur",
    goodbye:
      "Au revoir! J'espère que nous nous reverrons bientôt. Que ta journée soit remplie d",
  },
};

export const LanguageContext = createContext();

function Language() {
  const [language, setLanguage] = useState("en"); // State to track the selected language

  return(<>
  <LanguageContext.Provider value={{ translations, language, setLanguage }}>
    <ChildLanguage />
  </LanguageContext.Provider>
  </>)
}
export default Language;
