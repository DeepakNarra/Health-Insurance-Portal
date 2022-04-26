const SIGNUP = document.querySelector('#myform');

const login = (fname,lname,age,phno,email,password)=>{
    const t = auth.createUserWithEmailAndPassword(email,password);
    t.then((data)=>{
        localStorage.clear();
        localStorage.setItem('uid',data.user.uid);
        db.collection('users').doc(data.user.uid).set({
            "fname":fname,
            "lname":lname,
            "age":age,
            "phno":phno,
            "plans":[],
            "createdAt":firebase.firestore.Timestamp.now()
        })
        setTimeout(()=>{window.location="./insurance_plans.html";},2000);
        //  window.location="./insurance_plans.html";
    }).catch((error)=>{
        switch(error.code){
            case 'auth/invalid-email':
                alert('User does not exist.');
            case 'auth/invalid-password':
                alert('Password incorrect.');
            default:
                console.log(error);
        }
    })
}

SIGNUP.addEventListener("submit",(e)=>{
    e.preventDefault();
    const fname = document.querySelector('.fname');
    const lname = document.querySelector('.lname');
    const email = document.querySelector('.email');
    const phno = document.querySelector('.phno');
    const age = document.querySelector('.age');
    const password = document.querySelector('.pwd');
    login(fname.value,
        lname.value,
        age.value,
        phno.value,
        email.value,
        password.value
    );
})