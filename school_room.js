//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAj1FUUJRtUWHDRiByKMpVQ4KnftTnoWh0",
      authDomain: "jumbo-cd197.firebaseapp.com",
      databaseURL: "https://jumbo-cd197-default-rtdb.firebaseio.com",
      projectId: "jumbo-cd197",
      storageBucket: "jumbo-cd197.appspot.com",
      messagingSenderId: "530860609729",
      appId: "1:530860609729:web:d66a9440f8a7fb00e50440"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log(Room_names)
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >" + Room_names + "</div><hr>"
                  document.getElementById("output").innerHTML+=row
                  //End code
            });
      });
}
getData();

function add_room() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "school_room.html";
}
function redirectToRoomName(name) {
      localStorage.setItem("room_name",name);
      window.location="school_page.html"
}
function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}