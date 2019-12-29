// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyDbAHE2fV-1zZ3EJXv5sKQ--YqgR5jMYWE',
  authDomain: 'habbitrabbit-9e705.firebaseapp.com',
  projectId: 'habbitrabbit-9e705'
});

var db = firebase.firestore();































  function testFirebase(event) {
    db.collection("users").add({
      first: "Ada",
      Last: "Lovelace",
      born: 1815
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id)
    })
    .catch(function(error) {
      console.error("error adding document: ", error)
    })

    // Add a second document with a generated ID.
    db.collection("users").add({
      first: "Alan",
      middle: "Mathison",
      last: "Turing",
      born: 1912
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  }

  function writeNewHabit(uid, username, body) {
    // habit entry
    var habitData = {
      author: username,
      uid: uid,
      body: body,
      startDate: Date()
    }

    // Get a key for a new Post
    var newHabitKey = firebase.database().ref().child('posts').push().key;

    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/posts/' + newPostKey] = postData;
    updates['/user-posts/' + uid + '/' + newPostKey] = postData;

    return firebase.database().ref().update(updates);
  }

  function updatePost(e) {
    const db = firebase.firestore();
    const myHabit = db.collection('habits').doc('firsthabit')
    myHabit.update({ firstHabit: e.target.value })
  }

  function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
  
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        const user = result.user;
        document.write(`Hello ${user.displayName}`);
        console.log(user)
        // Write anything else you want to happen after login here
      })
      .catch(console.log)
  
  }
  module.exports = app;