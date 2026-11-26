importScripts("https://www.gstatic.com/firebasejs/11.4.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/11.4.0/firebase-messaging-compat.js");

const firebaseConfig = {
  apiKey: "%%VITE_FIREBASE_API_KEY%%",
  authDomain: "%%VITE_FIREBASE_AUTH_DOMAIN%%",
  projectId: "%%VITE_FIREBASE_PROJECT_ID%%",
  storageBucket: "%%VITE_FIREBASE_STORAGE_BUCKET%%",
  messagingSenderId: "%%VITE_FIREBASE_MESSAGING_SENDER_ID%%",
  appId: "%%VITE_FIREBASE_APP_ID%%",
};

const firebaseConfigIsReady = Object.values(firebaseConfig).every(
  (value) => value && !value.includes("%%"),
);

if (firebaseConfigIsReady) {
  firebase.initializeApp(firebaseConfig);

  if (typeof firebase.messaging.isSupported === "function") {
    firebase.messaging
      .isSupported()
      .then((supported) => {
        if (supported) {
          firebase.messaging();
        }
      })
      .catch((error) => {
        console.error("No se pudo inicializar Firebase Messaging:", error);
      });
  }
}
