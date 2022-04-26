const form = document.querySelector("#myform");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const mail = document.querySelector('#mail');
    auth.sendPasswordResetEmail(mail.value)
        .then(()=>{
        alert('mail sent successfully.')
      }).catch((error)=>{
        alert(error);
      });
});