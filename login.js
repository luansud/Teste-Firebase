import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, get, ref, child } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

      const firebaseConfig = {
        apiKey: "AIzaSyAttEWZLZe0nF8jtU9-xL9GMnvrZ7rT4Kk",
        authDomain: "teste-firebase-86e62.firebaseapp.com",
        projectId: "teste-firebase-86e62",
        storageBucket: "teste-firebase-86e62.appspot.com",
        messagingSenderId: "361551422097",
        appId: "1:361551422097:web:2dec8fc08dc7436d6fd530",
      };

      // Initialize Firebase
      const app = initializeApp(firebaseConfig);

      // Initialize Database
      const db = getDatabase();
      const dbref = ref(db);
      const auth = getAuth(app);

      // Assigning the elements to variables
      let EmailInp = document.getElementById("emailInp");
      let PassInp = document.getElementById("passwordInp");
      let FnameInp = document.getElementById("fnameInp");
      let LnameInp = document.getElementById("lnameInp");
      let MainForm = document.getElementById("MainForm");

      // Creating a function to Register a a user.
      let SignInUser = evt => {
        evt.preventDefault();
        // Creating the user using the credentials and the variables assigned below
        signInWithEmailAndPassword(auth, EmailInp.value, PassInp.value)
        .then((credentials)=>{
          console.log(credentials);

        })// Creating a error messages to show up if something go wrong
        .catch((error)=>{
          alert(error.message);
          console.log(error.code);
          console.log(error.message);
        })
      }

      MainForm.addEventListener("submit", (evt) => {
        SignInUser(evt);
      });