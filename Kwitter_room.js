const firebaseConfig = {
  apiKey: "AIzaSyA9iP5PBTn0Yvo-dYMiElLpj71QjRt8kKU",
  authDomain: "class-test-ddfaa.firebaseapp.com",
  databaseURL: "https://class-test-ddfaa-default-rtdb.firebaseio.com",
  projectId: "class-test-ddfaa",
  storageBucket: "class-test-ddfaa.appspot.com",
  messagingSenderId: "290099106641",
  appId: "1:290099106641:web:03f0da1ef63a0053363970"
};

firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addUser() {
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
     purpose: "Adding User" 
  });
}

function addRoom(){
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
        purpose:"Adding Room Name"
  });
  localStorage.setItem("room_name" , room_name);
  window.location= "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
 console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id=" + Room_names + "onclick = 'redirectToRoomName(this.id)'>#"+Room_names + "</div> <hr>";
 document.getElementById("output").innerHTML += row;   
 
 });});}
getData();

function redirectToRoomName(name) {
  console.log (name);
  localStorage.setItem ("room_name" , name);
  window.location = "kwitter_page.html";
  }