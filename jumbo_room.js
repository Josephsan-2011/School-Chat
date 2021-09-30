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
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name;

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
            });
      });
}
getData();