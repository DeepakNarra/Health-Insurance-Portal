const LOGIN = document.querySelector('#myform');

const login = (email,password)=>{
    const t = auth.signInWithEmailAndPassword(email,password);
    t.then((data)=>{
        localStorage.setItem('uid',data.user.uid);
        window.location="./dashboard.html";
    }).catch((error)=>{
        switch(error.code){
            case 'auth/invalid-email':
                alert('User does not exist.');
            case 'auth/invalid-password':
                alert('Password incorrect.');
            default:
                console.log(error.code);
        }
    })
}

LOGIN.addEventListener("submit",(e)=>{
    e.preventDefault();
    const username = document.querySelector('.username');
    const password = document.querySelector('.password');
    login(username.value,password.value);
})