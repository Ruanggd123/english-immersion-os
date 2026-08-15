// High-Quality Studio Neural Audio Engine
const pickEnglishVoice = () => {
  const voices = window.speechSynthesis.getVoices();
  if (voices.length === 0) return null;
  return (
    voices.find(v =>
      v.lang.startsWith('en') && (
        v.name.toLowerCase().includes('natural') ||
        v.name.toLowerCase().includes('online') ||
        v.name.toLowerCase().includes('google us english') ||
        v.name.toLowerCase().includes('samantha') ||
        v.name.toLowerCase().includes('jenny') ||
        v.name.toLowerCase().includes('guy') ||
        v.name.toLowerCase().includes('aria')
      )
    ) || voices.find(v => v.lang === 'en-US') || voices.find(v => v.lang.startsWith('en'))
  );
};

export const speakNaturalEnglish = (text, rate = 0.9) => {
  if (!text) return;

  const cleanText = text.trim();

  // Cancel any active browser speech
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }

  // Method 1: Google Neural Studio-Quality MP3 Audio Stream for phrases < 200 characters
  if (cleanText.length < 200) {
    try {
      const googleTtsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=en-US&client=tw-ob&q=${encodeURIComponent(cleanText)}`;
      const audio = new Audio(googleTtsUrl);
      audio.playbackRate = rate || 0.9;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          // Playing neural studio audio successfully
        }).catch((err) => {
          // If browser blocks audio autoplay or network fails, fallback to WebSpeech with Natural voice filter
          console.log("Fallback to WebSpeech SpeechSynthesis:", err);
          fallbackWebSpeech(cleanText, rate);
        });
      }
      return;
    } catch (e) {
      console.warn("Neural audio stream fallback:", e);
    }
  }

  // Method 2: Fallback to Web Speech API with strict Natural/Neural Voice Selection
  fallbackWebSpeech(cleanText, rate);
};

export const stopSpeech = () => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

export const speakWebSpeech = (text, rate = 0.85) => {
  if (!text) return;
  if (!('speechSynthesis' in window)) return;

  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text.trim());
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = 1.0;

  const speakWithVoice = () => {
    const voice = pickEnglishVoice();
    if (voice) {
      utterance.voice = voice;
    }
    window.speechSynthesis.speak(utterance);
  };

  if (window.speechSynthesis.getVoices().length > 0) {
    speakWithVoice();
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      speakWithVoice();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }
};

const fallbackWebSpeech = (text, rate) => {
  if (!('speechSynthesis' in window)) return;

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = rate;
  utterance.pitch = 1.0;

  const speakWithVoice = () => {
    const voice = pickEnglishVoice();
    if (voice) {
      utterance.voice = voice;
    }
    window.speechSynthesis.speak(utterance);
  };

  if (window.speechSynthesis.getVoices().length > 0) {
    speakWithVoice();
  } else {
    window.speechSynthesis.onvoiceschanged = () => {
      speakWithVoice();
      window.speechSynthesis.onvoiceschanged = null;
    };
  }
};
