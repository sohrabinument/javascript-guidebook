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

export default function TranslationCell({
  word,
  bangla,
  german,
  english,
  examples,
}) {
  const [voices, setVoices] = useState([]);
  const [hoveredText, setHoveredText] = useState(null);
  const [hoveredLang, setHoveredLang] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  // Toggle dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isDropdownOpen]);

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

  // Render example item
  const renderExampleItem = (example, index, isDefault = false) => {
    const [germanPart, banglaPart] = example.split(" - ");

    return (
      <div
        key={index}
        className={`p-2 rounded cursor-pointer hover:bg-gray-10`}
      >
        <div
          className="text-sm hover:text-blue-600"
          onMouseEnter={() =>
            handleCellHover(germanPart.split(" (")[0], LANGUAGE_CONFIG.german)
          }
          onMouseLeave={handleCellLeave}
        >
          {germanPart}
        </div>
        <div
          className="text-sm text-gray-600 hover:text-blue-600"
          onMouseEnter={() =>
            handleCellHover(banglaPart, LANGUAGE_CONFIG.bangla)
          }
          onMouseLeave={handleCellLeave}
        >
          {banglaPart}
        </div>
      </div>
    );
  };

  // Render examples cell with dropdown
  const renderExamplesCell = () => {
    if (!examples || examples.length === 0) return null;

    return (
      <td className="relative p-2 border border-gray-300">
        <div className="dropdown-container">
          {/* Default example display */}
          <div
            className="flex items-center justify-between"
            onClick={toggleDropdown}
          >
            <div className="flex-1">
              {renderExampleItem(examples[0], 0, true)}
            </div>
            {examples.length > 1 && (
              <button
                onClick={toggleDropdown}
                className="p-1 ml-2 text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-label="Toggle examples dropdown"
              >
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            )}
          </div>

          {/* Dropdown menu */}
          {isDropdownOpen && examples.length > 1 && (
            <div className="absolute left-0 right-0 z-10 mt-1 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg top-full max-h-48">
              <div className="py-1">
                {examples
                  .slice(1)
                  .map((example, index) =>
                    renderExampleItem(example, index + 1)
                  )}
              </div>
            </div>
          )}
        </div>
      </td>
    );
  };

  return (
    <>
      {renderCell(word, LANGUAGE_CONFIG.german, true)}
      {renderCell(bangla, LANGUAGE_CONFIG.bangla)}
      {renderCell(german, LANGUAGE_CONFIG.german)}
      {renderCell(english, LANGUAGE_CONFIG.english)}
      {examples ? renderExamplesCell() : null}
    </>
  );
}
