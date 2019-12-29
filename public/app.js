document.addEventListener("DOMContentLoaded", event => {

    const app = firebase.app()

    console.log(app)

    const db = firebase.firestore(); //accesses the database

    const myHabit = db.collection('habits').doc('firsthabit') //defines the collection
    //the firestore is structured by collection then doc, then subcollection, then doc, etc.
    myHabit.onSnapshot( doc => {

      const data = doc.data()
      console.log(data)
      document.querySelector('#firstHabit').innerHTML = data.firstHabit
      // document.write( data.firstHabit + `<br>`)
      // document.write( data.startDate + `<br>`)
        
      })

      //Example - How to add Data. You don't need to crate collections and documents for
      // they are implicitley added the first time you add data to your document. 
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
  })

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