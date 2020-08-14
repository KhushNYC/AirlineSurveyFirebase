
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCAojlk4cItXCh9K_Strme-fr_6HZQy5Vg",
    authDomain: "surveys-73f00.firebaseapp.com",
    databaseURL: "https://surveys-73f00.firebaseio.com",
    projectId: "surveys-73f00",
    storageBucket: "surveys-73f00.appspot.com",
    messagingSenderId: "266311893301",
    appId: "1:266311893301:web:87b1f6beda944a33f80c7c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();


const db = firebase.firestore();



//Submit listener
document.getElementById('surveyForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    //Get Values test
    
  var fdate = getInputVal('fdate');
  var ftime = getInputVal('ftime');
  var fnum = getInputVal('fnum');
  var msg = getInputVal('message');
  var selectedFrd = $("input:radio[name=frd]:checked").val()
  var selectedLug = $("input:radio[name=lug]:checked").val()
  var selectedSeat = $("input:radio[name=seat]:checked").val()
  var selectedCln = $("input:radio[name=cln]:checked").val()
  var selectedNse = $("input:radio[name=nse]:checked").val()


const surveydata = db.collection("surveydata");

  function getInputVal(id){
    return document.getElementById(id).value;
  }

    console.log("submit button works");

    surveydata.add({
        flightdate: fdate,
        flighttime: ftime,
        flightnum: fnum,
        comments: msg,
        friendliness: selectedFrd,
        spaceLuggage: selectedLug,
        seatComfort: selectedSeat,
        cleanliness: selectedCln,
        noiselevel: selectedNse,
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),

    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });

        };
    


    