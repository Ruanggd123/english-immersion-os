import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyABiFO7TWD7o-V_wpVenOMOf52ovKYPKms",
  authDomain: "concursos-20cce.firebaseapp.com",
  databaseURL: "https://concursos-20cce-default-rtdb.firebaseio.com",
  projectId: "concursos-20cce",
  storageBucket: "concursos-20cce.firebasestorage.app",
  messagingSenderId: "830415520406",
  appId: "1:830415520406:web:06f25ae36a70cfd84738b7",
  measurementId: "G-BF6WV175XG"
};

// Initialize Firebase App & Realtime Database
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// Database path for continuous sync
export const DB_ROOT_PATH = 'english_immersion_os/user_progress';
