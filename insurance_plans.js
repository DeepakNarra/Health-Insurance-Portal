
const plans = document.querySelectorAll('.plan');
for(let i=0;i<plans.length;i++){
    plans[i].addEventListener('submit',(e)=>{
        e.preventDefault();
        let uid = localStorage.getItem('uid');
        console.log(uid);
        let plan=plans[i].childNodes[1].childNodes[3].childNodes[1].textContent;
        db.collection('users').doc(uid).update({
            "plans":firebase.firestore.FieldValue.arrayUnion(plan)
        })
        window.setTimeout((e)=>{
            window.location = "./payment.html" ;
        },1000);
    })
}