//YOUR FIREBASE LINKS
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
      firebase.database().ref("/" + room_name).on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  childData = childSnapshot.val();
                  if (childKey != "purpose") {
                        firebase_message_id = childKey;
                        message_data = childData;
                        //Start code

                        //End code
                  }
            });
      });
}
getData();

function logout() {
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}
var user_name = localStorage.getItem("user_name")
var room_name = localStorage.getItem("room_name")

function send() {
      message = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: message,
            like: 0
      });
      document.getElementById("msg").value=""
}