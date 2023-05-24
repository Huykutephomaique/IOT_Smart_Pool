const firebaseConfig = {
	apiKey: "AIzaSyA7YI8i-JzTj6yDkSulyj2CZddYtEBxWcY",
	authDomain: "test-e30c6.firebaseapp.com",
	databaseURL: "https://test-e30c6-default-rtdb.firebaseio.com",
	projectId: "test-e30c6",
	storageBucket: "test-e30c6.appspot.com",
	messagingSenderId: "391512786950",
	appId: "1:391512786950:web:8a1dad8127c04af4011b87",
	measurementId: "G-67EDY1925E"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
      var database = firebase.database();
      var tempRef = database.ref("/temperature");
      var humidRef = database.ref("/humidity");
      var lightRef = database.ref("/light");
      var soilRef = database.ref("/soil");

      tempRef.on("value", function(snapshot) {
        document.getElementById("temperature").innerHTML = snapshot.val();
      });
      humidRef.on("value", function(snapshot) {
        document.getElementById("humidity").innerHTML = snapshot.val();
      });
      lightRef.on("value", function(snapshot) {
        document.getElementById("light").innerHTML = snapshot.val();
      });
      soilRef.on("value", function(snapshot) {
        document.getElementById("soil").innerHTML = snapshot.val();
      });

      var temperatureSpan = document.getElementById("temperature");

      tempRef.on("value", function(snapshot) {
      temperatureSpan.innerHTML = snapshot.val();
      });
      
//button 
// Your web app's Firebase configuration
// Initialize Firebase

$(document).ready(function(){
	var database = firebase.database();
	var Led1Status;
	var Led2Status;
	var Led3Status;
	var Led4Status;
	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		Led2Status = snap.val().Led2Status;
		Led3Status = snap.val().Led3Status;
		Led4Status = snap.val().Led4Status;
		if(Led1Status == "1"){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
		if(Led2Status == "1"){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
		}
		if(Led3Status == "1"){
			document.getElementById("unact2").style.display = "none";
			document.getElementById("act2").style.display = "block";
		} else {
			document.getElementById("unact2").style.display = "block";
			document.getElementById("act2").style.display = "none";
		}
		if(Led4Status == "1"){
			document.getElementById("unact3").style.display = "none";
			document.getElementById("act3").style.display = "block";
		} else {
			document.getElementById("unact3").style.display = "block";
			document.getElementById("act3").style.display = "none";
		}
	});

	$(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");
		if(Led1Status == "1"){
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
	$(".toggle-btn1").click(function(){
		var firebaseRef = firebase.database().ref().child("Led2Status");
		if(Led2Status == "1"){
			firebaseRef.set("0");
			Led2Status = "0";
		} else {
			firebaseRef.set("1");
			Led2Status = "1";
		}
	})
	$(".toggle-btn2").click(function(){
		var firebaseRef = firebase.database().ref().child("Led3Status");
		if(Led3Status == "1"){
			firebaseRef.set("0");
			Led3Status = "0";
		} else {
			firebaseRef.set("1");
			Led3Status = "1";
		}
	})
	$(".toggle-btn3").click(function(){
		var firebaseRef = firebase.database().ref().child("Led4Status");
		if(Led4Status == "1"){
			firebaseRef.set("0");
			Led4Status = "0";
		} else {
			firebaseRef.set("1");
			Led4Status = "1";
		}
	})
});