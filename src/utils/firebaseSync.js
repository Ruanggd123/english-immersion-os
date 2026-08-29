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
      english_journal_state: localStorage.getItem('english_journal_state'),
      english_saturday_tests: localStorage.getItem('english_saturday_tests')
    };

    const progressRef = ref(db, DB_ROOT_PATH);
    await set(progressRef, payload);
    return true;
  } catch (err) {
    console.warn("Firebase sync upload note:", err);
    return false;
  }
};

// Diagnostic: Perform instant live write & read handshake test with Firebase Realtime Database
export const testFirebaseRealtimeConnection = async () => {
  const startTime = Date.now();
  try {
    const pingRef = ref(db, 'english_immersion_os/connection_test');
    const testData = {
      pingTimestamp: startTime,
      clientDevice: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop',
      testStatus: 'ACTIVE'
    };

    await set(pingRef, testData);
    const snapshot = await get(pingRef);
    const val = snapshot.val();

    const latency = Date.now() - startTime;
    return {
      success: !!(val && val.pingTimestamp === startTime),
      latencyMs: latency,
      timestamp: new Date().toLocaleTimeString(),
      dbUrl: "https://concursos-20cce-default-rtdb.firebaseio.com",
      path: 'english_immersion_os/user_progress'
    };
  } catch (err) {
    return {
      success: false,
      error: err.message || 'Erro ao conectar com Firebase Realtime Database',
      latencyMs: 0,
      timestamp: new Date().toLocaleTimeString()
    };
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

      const keysToSync = [
        'english_immersion_progress',
        'english_game_stats',
        'english_daily_vocab_goal',
        'english_vocab_srs_state',
        'english_journal_state',
        'english_saturday_tests'
      ];

      keysToSync.forEach(key => {
        if (data[key] && data[key] !== localStorage.getItem(key)) {
          localStorage.setItem(key, data[key]);
          hasChanges = true;
        }
      });

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

