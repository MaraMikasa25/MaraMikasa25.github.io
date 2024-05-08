import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { 

  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  deleteUser,
  sendEmailVerification,
  sendPasswordResetEmail
  
} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'
import { 

  getFirestore,
  collection, 
  addDoc 

} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js"



// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore(app)

// Métodos de Autenticacion

// Registro de Usario
export const registerauth = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)

// Verifacion por correo
export const verification = () =>
  sendEmailVerification(auth.currentUser)

// Autenticación de usuario
export const loginauth = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)

// Inicio Sesion Google
export const googleauth = (provider) =>
  signInWithPopup(auth, provider)

// Inicio Sesion Facebook
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

// Restablecer contraseña por correo
export const recoverypass = (email) =>
  sendPasswordResetEmail(auth, email)

// Cerrar sesion del usuario
export const loginout = () =>
  signOut(auth)

// Eliminar usuario
export const deleteuser = (user) =>
  deleteUser(user)

export { auth };

// Métodos de Firestore Database

// Agregar Datos
export const addregister = (nombres, apellidos, fecha, cedula, estado, rh, genero, telefono, direccion, email) =>
  addDoc(collection(db, "Usuarios"), {

    nombre: nombres,
    apellido: apellidos,
    fecha: fecha,
    cedula: cedula,
    estado:estado,
    rh:rh,
    genero:genero,
    telefono: telefono,
    direccion: direccion,
    email: email

  });