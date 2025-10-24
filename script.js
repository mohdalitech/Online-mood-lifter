function firsttask(){
    let name=document.getElementById("name").value;
    let task1=document.getElementById("userid");
    let id=name[0]+name.length+name.slice(1);
    task1.innerText=id;
    task1.style.color="green";
}
function Yes(){
    alert("Your positive response is appreciared!");
    let btn1=document.getElementById("choice1");
    let btn2=document.getElementById("choice2");
    btn1.disabled=true;
    btn2.disabled=true;
}
function No(){
    let btn1=document.getElementById("choice1");
    let btn2=document.getElementById("choice2");
    let name=document.getElementById("name").value;
    alert("Why so ? Enter your reason in pop-up box:");
    let reason =prompt("Enter your reason:");
    alert(`Very sorry for you ${name},for your reason ${reason} of not responding to greeting..`);
    btn1.disabled=true;
    btn2.disabled=true;
}