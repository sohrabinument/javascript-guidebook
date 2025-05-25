import { useEffect, useState } from "react";

// Language configuration for text-to-speech
const LANGUAGE_CONFIG = {
  german: "de-DE",
  bangla: "bn-BD",
  english: "en-US",
};

// Speech synthesis configuration
const SPEECH_CONFIG = {
  rate: 0.8,
  banglaFallbackLang: "hi-IN",
};

export default function TranslationCell({ word, bangla, german, english }) {
  const [hoveredText, setHoveredText] = useState(null);
  const [hoveredLang, setHoveredLang] = useState(null);
  const [voices, setVoices] = useState([]);

  // Initialize speech synthesis voices
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    // Handle Chrome's asynchronous voice loading
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }

    loadVoices();
  }, []);

  // Find appropriate voice for Bangla text
  const findBanglaVoice = () => {
    const banglaVoices = voices.filter(
      (voice) =>
        voice.lang.includes("bn") ||
        voice.lang.includes("hi") ||
        voice.name.toLowerCase().includes("bengali") ||
        voice.name.toLowerCase().includes("hindi")
    );

    return banglaVoices.length > 0 ? banglaVoices[0] : null;
  };

  // Configure speech synthesis utterance
  const configureUtterance = (text, lang) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = SPEECH_CONFIG.rate;

    if (lang === LANGUAGE_CONFIG.bangla) {
      const banglaVoice = findBanglaVoice();
      if (banglaVoice) {
        utterance.voice = banglaVoice;
        utterance.lang = banglaVoice.lang;
      } else {
        utterance.lang = SPEECH_CONFIG.banglaFallbackLang;
      }
    } else {
      utterance.lang = lang;
    }

    return utterance;
  };

  // Speak the provided text
  const speakText = (text, lang) => {
    window.speechSynthesis.cancel();
    const utterance = configureUtterance(text, lang);
    window.speechSynthesis.speak(utterance);
  };

  // Stop any ongoing speech
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
  };

  // Handle mouse enter events
  const handleCellHover = (text, lang) => {
    setHoveredText(text);
    setHoveredLang(lang);
    speakText(text, lang);
  };

  // Handle mouse leave events
  const handleCellLeave = () => {
    setHoveredText(null);
    setHoveredLang(null);
    stopSpeaking();
  };

  // Render a single table cell with hover functionality
  const renderCell = (content, lang, isBold = false) => (
    <td
      className="p-2 border border-gray-300 cursor-pointer hover:bg-gray-100"
      onMouseEnter={() => handleCellHover(content, lang)}
      onMouseLeave={handleCellLeave}
    >
      {isBold ? <strong>{content}</strong> : content}
    </td>
  );

  return (
    <>
      {renderCell(word, LANGUAGE_CONFIG.german, true)}
      {renderCell(bangla, LANGUAGE_CONFIG.bangla)}
      {renderCell(german, LANGUAGE_CONFIG.german)}
      {renderCell(english, LANGUAGE_CONFIG.english)}
    </>
  );
}
