const firebaseConfig = {
      apiKey: "AIzaSyCHY1v0TqWPPsEp_-hrqy7pCHGbmy7SxE0",
      authDomain: "arnavkwitter.firebaseapp.com",
      databaseURL: "https://arnavkwitter-default-rtdb.firebaseio.com",
      projectId: "arnavkwitter",
      storageBucket: "arnavkwitter.appspot.com",
      messagingSenderId: "720374483574",
      appId: "1:720374483574:web:0730b5ddd086aaeb142d57"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "It will help us to add room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
                  document.getElementById("output").innerHTML += row;
                        //End code
            });
      });
}
getData();

function redirectToRoomName(name) 
{
 console.log(name);
 localStorage.setItem("room_name",name);
 window.location = "kwitter_page.html";
}

function logout() 
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location = "index.html";
}
