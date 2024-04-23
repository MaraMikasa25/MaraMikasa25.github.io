import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { 

  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  sendEmailVerification,
  sendPasswordResetEmail,
  deleteUser
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDulXP38o1PDMdQeM2-KvLmr6KyHsU7kpI",
  authDomain: "proyectologin-c5dd5.firebaseapp.com",
  projectId: "proyectologin-c5dd5",
  storageBucket: "proyectologin-c5dd5.appspot.com",
  messagingSenderId: "836599007275",
  appId: "1:836599007275:web:7ea1107f57cb145db5826e"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const user = auth.currentUser;

//Registro de Usario
export const registerauth = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

//Verifacion por correo
export const verification = () =>
  sendEmailVerification(auth.currentUser)

//autenticación de usuario
export const loginauth = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)

// Inicion Sesion Google
export const googleauth = (provider) =>
  signInWithPopup(auth, provider)

//  Inicion Sesion Facebook
export const facebookauth = (provider) =>
  signInWithPopup(auth, provider)

// Estado del Usuario logeado
export function userstate(){
  onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      console.log(uid)

    } else {
      window.location.href='../Index.html'
    }
  });
}

//Restablecer contraseña por correo
export const recoverypass = (email) =>
  sendPasswordResetEmail(auth, email)

// Cerrar sesion del usuario
export const loginout = () =>
  signOut(auth)


// Eliminar usuario
export const deleteuser = (user) =>
  deleteUser(user);

export { auth }; // Exportar la instancia de autenticación


