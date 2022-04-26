let plans = document.querySelector('.plans');
let uid = localStorage.getItem("uid");
if(!uid){
    window.location = "./index.html"
}
db.collection('users').onSnapshot((snapshot)=>{
    snapshot.docs.map((doc)=>{
        if(doc.id === uid){
            let data = doc.data();
            let div = document.createElement('div');
            div.innerHTML=
            `<div class="data">
                <h1>Welcome back ${data.fname} ${data.lname} </h1>
                <h4>Profile Details:</p>
                <p>age: ${data.age}</p>
                <p>Phone no. : ${data.phno}</p>
                <p>Your current plan: ${data.plans}</p>
            </div>`
            plans.appendChild(div);
        }
    })
})
const x = document.querySelector('.to');
console.log(x);
x.onclick = (e)=>{
    console.log(1);
    localStorage.clear();
}