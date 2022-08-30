
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js";
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtwNWZwCajlmj7Bbwv-M5pZ5Q7oXlaooI",
  authDomain: "email-791bf.firebaseapp.com",
  databaseURL: "https://email-791bf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "email-791bf",
  storageBucket: "email-791bf.appspot.com",
  messagingSenderId: "977175453628",
  appId: "1:977175453628:web:d117683add2b923b3055b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


function getEmail(){

    var regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   /*/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9]+).([a-z]+)(.[a-z]+)?$/;*/

    var inputEmail = document.getElementById("email");
    var email = inputEmail.value;

    if(email != ""){
        if(regExp.test(email)){
            writeUserData(email);
            alert("You have provided a valid email:" + email);
            inputEmail.style.borderColor = '#ffffff';
        }
        else{
            alert("Sorry!  Incorrect Email");
            inputEmail.style.borderColor = '#ff0000';
        }
    }
    else{
        inputEmail.style.borderColor = '#ff0000';
    }
}

function writeUserData(email) {
    push(ref(database, 'users/'), {
      email: email,
    });
}

var butt = document.getElementById("pulsante");
butt.onclick = getEmail;