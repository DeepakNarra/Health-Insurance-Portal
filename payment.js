// .onSnapshot((snapshot)=>{
//   snapshot.docs.map(async (doc)=>{
//       if(doc.id === uid){
//          _data = await doc.data();
//       }
//   })
// })
const mail = document.querySelector('#mail');
const submit = document.querySelector('.submit');
submit.onclick = (e)=>{
  e.preventDefault();
  const uid = localStorage.getItem('uid');
  db.collection('users')
    .doc(uid)
    .get()
    .then((doc)=>{
      let _data = doc.data().plans;
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "deepakchowdarynarra2000@gmail.com",
        Password : "9D8BFC48899EFAD57BB134E01BA881841558",
        To : `${mail.value}`,
        From : "deepakchowdarynarra2000@gmail.com",
        Subject : "Payment Details",
        Body : `Sucessfully Applied to your ${_data}} policy.`
      }).then(
        message => alert('Check your spam once.')
      );
    }).catch((error)=>{
      console.log(error);
    })
  
}