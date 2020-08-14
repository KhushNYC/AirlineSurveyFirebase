
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


document.getElementById('viewsurvey').addEventListener('submit', submitForm);

const surveyList = document.querySelector("#survey-list");

function renderSurvey(doc){
let li = document.createElement('li');
let fdatelist = document.createElement('span');
let fnumlist = document.createElement('span');
let commentlist = document.createElement('span');
let ftimelist = document.createElement('span');
let cleanlist = document.createElement('span');
let friendlist = document.createElement('span');
let noiselist = document.createElement('span');
let comfortlist = document.createElement('span');
let spacelist = document.createElement('span');
let timesubmit = document.createElement('span');


li.setAttribute('data-id', doc.id);

let time = doc.data().timestamp;
let date = time.toDate();
let shortDate = date.toDateString();
let shortTime = date.toLocaleTimeString();




fdatelist.textContent =`Flight Date: ${doc.data().flightdate}`;
fnumlist.textContent = `Flight Number: ${doc.data().flightnum}`;
ftimelist.textContent = `Flight Time: ${doc.data().flighttime}`;
commentlist.textContent = `Comments: ${doc.data().comments}`;
cleanlist.textContent = `Cleanliness: ${doc.data().cleanliness}`;
friendlist.textContent = `Friendliness: ${doc.data().friendliness}`;
noiselist.textContent = `Noise Level: ${doc.data().noiselevel}`;
comfortlist.textContent = `Seat Comfort: ${doc.data().seatComfort}`;
spacelist.textContent = `Luggage Space: ${doc.data().spaceLuggage}`;
timesubmit.textContent = `Date/Time Submitted: ${date}`;


li.appendChild(fdatelist);
li.appendChild(fnumlist);
li.appendChild(ftimelist);
li.appendChild(commentlist);
li.appendChild(cleanlist);
li.appendChild(friendlist);
li.appendChild(noiselist);
li.appendChild(comfortlist);
li.appendChild(spacelist);
li.appendChild(timesubmit);
surveyList.appendChild(li);

}


function submitForm(e){
    e.preventDefault();
  
    db.collection("surveydata").orderBy("timestamp", "desc").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            console.log(doc.id, " :ID; ", doc.data());
           renderSurvey(doc);
     
        });

          });

        };
    


    