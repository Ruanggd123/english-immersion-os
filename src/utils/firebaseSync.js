import { ref, set, onValue, get } from 'firebase/database';
import { db, DB_ROOT_PATH } from '../firebase';

let isRemoteUpdate = false;

// Upload local progress to Firebase Realtime Database
export const syncStateToFirebase = async () => {
  if (isRemoteUpdate) return;

  try {
    const payload = {
      updatedAt: Date.now(),
      english_immersion_progress: localStorage.getItem('english_immersion_progress'),
      english_game_stats: localStorage.getItem('english_game_stats'),
      english_daily_vocab_goal: localStorage.getItem('english_daily_vocab_goal'),
      english_vocab_srs_state: localStorage.getItem('english_vocab_srs_state'),
      english_unlocked_blocks: localStorage.getItem('english_unlocked_blocks'),
      english_active_block_id: localStorage.getItem('english_active_block_id')
    };

    const progressRef = ref(db, DB_ROOT_PATH);
    await set(progressRef, payload);
    return true;
  } catch (err) {
    console.warn("Firebase sync upload note:", err);
    return false;
  }
};

// Listen in REAL-TIME to Firebase Database changes (Bi-directional WebSocket live sync)
export const subscribeToFirebaseRealtime = (onStateChange) => {
  try {
    const progressRef = ref(db, DB_ROOT_PATH);

    const unsubscribe = onValue(progressRef, (snapshot) => {
      const data = snapshot.val();
      if (!data || !data.updatedAt) return;

      isRemoteUpdate = true;
      let hasChanges = false;

      if (data.english_immersion_progress && data.english_immersion_progress !== localStorage.getItem('english_immersion_progress')) {
        localStorage.setItem('english_immersion_progress', data.english_immersion_progress);
        hasChanges = true;
      }

      if (data.english_game_stats && data.english_game_stats !== localStorage.getItem('english_game_stats')) {
        localStorage.setItem('english_game_stats', data.english_game_stats);
        hasChanges = true;
      }

      if (data.english_daily_vocab_goal && data.english_daily_vocab_goal !== localStorage.getItem('english_daily_vocab_goal')) {
        localStorage.setItem('english_daily_vocab_goal', data.english_daily_vocab_goal);
        hasChanges = true;
      }

      if (data.english_vocab_srs_state && data.english_vocab_srs_state !== localStorage.getItem('english_vocab_srs_state')) {
        localStorage.setItem('english_vocab_srs_state', data.english_vocab_srs_state);
        hasChanges = true;
      }

      if (data.english_unlocked_blocks && data.english_unlocked_blocks !== localStorage.getItem('english_unlocked_blocks')) {
        localStorage.setItem('english_unlocked_blocks', data.english_unlocked_blocks);
        hasChanges = true;
      }

      if (data.english_active_block_id && data.english_active_block_id !== localStorage.getItem('english_active_block_id')) {
        localStorage.setItem('english_active_block_id', data.english_active_block_id);
        hasChanges = true;
      }

      if (hasChanges && onStateChange) {
        onStateChange(data);
      }

      setTimeout(() => {
        isRemoteUpdate = false;
      }, 300);
    });

    return unsubscribe;
  } catch (err) {
    console.warn("Firebase realtime subscription error:", err);
    return () => {};
  }
};
