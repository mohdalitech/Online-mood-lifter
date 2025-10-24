function firsttask(){
    let name=document.getElementById("name").value;
    let task1=document.getElementById("userid");
    let id=name[0]+name.length+name.slice(1);
    task1.innerText=id;
    task1.style.color="green";
}
function Yes(){
    alert("Your positive response is appreciated!");
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
function mood(){
let mood_1=document.getElementById("select").value;
let image=document.getElementById("image");
let video=document.getElementById("video")
if(mood_1==="Calm🧘"){
    image.src="calm.png";
    video.src="https://www.youtube.com/embed/ZToicYcHIOU?si=6KgYaOXmPLd3mav-"; 
}
if(mood_1==="Busy🧠"){
    image.src="busy.png";
    video.src="https://www.youtube.com/embed/HGn5XJtwmAY?si=HhCf6wD82aZkG433";
}
if(mood_1==="Overthinking😵")
{
    image.src="overthink.png";
    video.src="https://www.youtube.com/embed/m1RGFegL83c?si=EFbXtB7dC9_n9KI4";
}
if(mood_1==="Peaceful🌿")
{
    image.src="peace.png";
    video.src="https://www.youtube.com/embed/KLuTLF3x9sA?si=JQu2HijlVatpGxA6";
}
}

