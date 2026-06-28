const roles = [
"Embedded Systems Enthusiast",
"IoT Explorer",
"Front-End Developer",
"Future Full Stack Engineer"
];

let role = 0;
let letter = 0;
let deleting = false;

const typing = document.getElementById("typing-text");

function typeEffect(){

const text = roles[role];

if(!deleting){

typing.textContent = text.substring(0,letter+1);

letter++;

if(letter === text.length){

deleting = true;

setTimeout(typeEffect,1500);

return;

}

}else{

typing.textContent = text.substring(0,letter-1);

letter--;

if(letter===0){

deleting=false;

role++;

if(role>=roles.length){

role=0;

}

}

}

setTimeout(typeEffect,deleting?50:100);

}

typeEffect();

const navbar=document.querySelector(".header");

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

navbar.style.boxShadow="0 8px 30px rgba(0,0,0,.08)";
navbar.style.background="rgba(255,255,255,.95)";

}else{

navbar.style.boxShadow="none";
navbar.style.background="rgba(255,255,255,.88)";

}

});

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-180;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});

const reveal=document.querySelectorAll(
".about-card,.skill-card,.timeline-item,.project-card,.achievement-card,.certificate-card,.stat-card,.contact-card"
);

reveal.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=".8s ease";

});

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:.15
});

reveal.forEach(item=>{

observer.observe(item);

});

const counters=document.querySelectorAll(".stat-card h2");

const counterObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const original=counter.innerText;

const value=parseFloat(original);

if(isNaN(value)) return;

let start=0;

const increment=value/50;

function update(){

start+=increment;

if(start<value){

if(value%1!==0){

counter.innerText=start.toFixed(2);

}else{

counter.innerText=Math.floor(start);

}

requestAnimationFrame(update);

}else{

counter.innerText=original;

}

}

update();

counterObserver.unobserve(counter);

}

});

},{
threshold:.5
});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

const scrollBtn=document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

scrollBtn.style.display="flex";

scrollBtn.style.justifyContent="center";

scrollBtn.style.alignItems="center";

}else{

scrollBtn.style.display="none";

}

});

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

const menu=document.querySelector(".menu-btn");

const nav=document.querySelector(".nav-links");

menu.addEventListener("click",()=>{

nav.classList.toggle("show");

});

document.querySelectorAll(".nav-links a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("show");

});

});

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});

console.log("Welcome to Meena R Portfolio");