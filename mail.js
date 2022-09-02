const firebaseConfig = {
    apiKey: "AIzaSyBVQvTWWRF3wowNjih_6sb2M5Wc0uPEjbQ",
    authDomain: "contactform-32544.firebaseapp.com",
    databaseURL: "https://contactform-32544-default-rtdb.firebaseio.com",
    projectId: "contactform-32544",
    storageBucket: "contactform-32544.appspot.com",
    messagingSenderId: "974418701503",
    appId: "1:974418701503:web:3116b27cb332a01e7e6a0a"
  };
firebase.initializeApp(firebaseConfig);
var contactFormDB = firebase.database().ref('contactForm')
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
