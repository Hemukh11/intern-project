const firebaseConfig = {
    apiKey: "AIzaSyAcIdw46Q29p7hVmfFlidnAY3CpPJQzOyY",
    authDomain: "gym-management-30a34.firebaseapp.com",
    databaseURL: "https://gym-management-30a34-default-rtdb.firebaseio.com",
    projectId: "gym-management-30a34",
    storageBucket: "gym-management-30a34.firebasestorage.app",
    messagingSenderId: "897107386453",
    appId: "1:897107386453:web:9e42f498eb1f8d583cf4dc"
  };
 
  firebase.initializeApp(firebaseConfig);

  firebase.database().ref('contactForm')