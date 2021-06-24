const usersRef = db.collection('doctors').doc(d_id);

usersRef.get()
  .then((docSnapshot) => {
    if (docSnapshot.exists) {
      alert("Doctor ID already taken!!! Try choosing another ID.😊😊");
      return;
    } else {
      h_name=db.collection("hospital").doc(h_id).get(h_name);
      alert(h_name);


      db.collection("doctors").doc(d_id).set({
        d_name: name,
        d_specialization:qlf,
        d_area:ctg,
        d_id:d_id,
        d_age:exp,
        d_email:email,
        h_id:h_id,
        h_name:h_name,
    })
    .then(() => {
        alert("Document successfully written!");
        window.location="homepage.html";
    })
    .catch((error) => {
        alert("Error writing document: ", error);
    });

    }
});


