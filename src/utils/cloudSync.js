// Seamless Real-Time Sync Engine between PC and Mobile
const getSyncEndpoint = () => {
  const isLocal = window.location.hostname === 'localhost' || window.location.hostname.startsWith('192.168.') || window.location.hostname.startsWith('10.');
  if (isLocal) {
    return `${window.location.origin}/english-immersion-os/api/sync`;
  }
  return null;
};

// Push all local progress keys to the sync database
export const pushStateToSyncServer = async () => {
  const endpoint = getSyncEndpoint();
  if (!endpoint) return false;

  try {
    const payload = {
      updatedAt: Date.now(),
      english_immersion_progress: localStorage.getItem('english_immersion_progress'),
      english_game_stats: localStorage.getItem('english_game_stats'),
      english_daily_vocab_goal: localStorage.getItem('english_daily_vocab_goal'),
      english_vocab_srs_state: localStorage.getItem('english_vocab_srs_state')
    };

    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    return res.ok;
  } catch (e) {
    console.warn("Sync push skipped (offline/standalone):", e);
    return false;
  }
};

// Pull and merge remote progress into local storage
export const pullStateFromSyncServer = async () => {
  const endpoint = getSyncEndpoint();
  if (!endpoint) return false;

  try {
    const res = await fetch(endpoint);
    if (!res.ok) return false;

    const data = await res.json();
    if (!data || !data.updatedAt) return false;

    let updated = false;

    if (data.english_immersion_progress) {
      localStorage.setItem('english_immersion_progress', data.english_immersion_progress);
      updated = true;
    }
    if (data.english_game_stats) {
      localStorage.setItem('english_game_stats', data.english_game_stats);
      updated = true;
    }
    if (data.english_daily_vocab_goal) {
      localStorage.setItem('english_daily_vocab_goal', data.english_daily_vocab_goal);
      updated = true;
    }
    if (data.english_vocab_srs_state) {
      localStorage.setItem('english_vocab_srs_state', data.english_vocab_srs_state);
      updated = true;
    }

    return updated;
  } catch (e) {
    console.warn("Sync pull skipped (offline/standalone):", e);
    return false;
  }
};
