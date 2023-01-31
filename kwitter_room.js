var firebaseConfig = {
      apiKey: "AIzaSyDUCiD-Cf3KAtgiHiasEV9CU_8ozjYTbDY",
      authDomain: "kwitter-232ce.firebaseapp.com",
      databaseURL: "https://kwitter-232ce-default-rtdb.firebaseio.com",
      projectId: "kwitter-232ce",
      storageBucket: "kwitter-232ce.appspot.com",
      messagingSenderId: "803497971500",
      appId: "1:803497971500:web:ce2bf57fe135c5000ca689"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
      user_name = localStorage.getItem("user_name");

      document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

      function addRoom()
      {
            room_name = document.getElementById("room_name").value;

            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });

            localStorage.setItem("room_name", room_name);

            window.location = "kwitter_page.html";
      }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='rediretToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
     document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function rediretToRoomName(name)
{
      console.log(name);
      localStorage.setitem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}