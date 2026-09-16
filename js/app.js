const KEY="conksCyberAcademyFinal";

let state=JSON.parse(localStorage.getItem(KEY)||"null")||{
xp:0,
lessons:[],
challenges:[],
badges:[],
streak:1
};

let currentCourse=null;
let currentLesson=0;

function save(){
localStorage.setItem(KEY,JSON.stringify(state));
}

function level(){
return Math.floor(state.xp/500)+1;
}

function levelName(){
const l=level();
if(l<3)return"BEGINNER";
if(l<6)return"STUDENT";
if(l<10)return"INTERMEDIATE";
if(l<15)return"ADVANCED";
return"CYBER EXPERT";
}

function lessonKey(course,index){
return course.id+"_"+index;
}

function totalLessons(){
return CURSOS.reduce((a,c)=>a+c.lessons.length,0);
}

function completedLessons(){
return state.lessons.length;
}

function progressCourse(course){
let done=course.lessons.filter((_,i)=>state.lessons.includes(lessonKey(course,i))).length;
return Math.round(done/course.lessons.length*100);
}

function render(){
document.getElementById("statXP").textContent=state.xp;
document.getElementById("statLessons").textContent=completedLessons();
document.getElementById("statChallenges").textContent=state.challenges.length;
document.getElementById("statBadges").textContent=state.badges.length;

document.getElementById("level").textContent="LVL "+level();
document.getElementById("xpTop").textContent=state.xp+" XP";

document.getElementById("terminalModules").textContent=CURSOS.length;
document.getElementById("terminalLessons").textContent=totalLessons();
document.getElementById("terminalLevel").textContent=levelName();

let overall=Math.round(completedLessons()/totalLessons()*100);
document.getElementById("overallProgress").textContent=overall+"%";
document.getElementById("overallBar").style.width=overall+"%";

renderCourses();
renderChallenges();
renderBadges();
}

function renderCourses(){
const grid=document.getElementById("coursesGrid");

grid.innerHTML=CURSOS.map((c,i)=>{
const p=progressCourse(c);

return `
<div class="course">
<div class="courseIcon">${c.icon}</div>
<small>MODULE ${String(i+1).padStart(2,"0")}</small>
<h3>${c.title}</h3>
<p>${c.desc}</p>
<div class="courseMeta">
<span>${c.lessons.length} AULAS</span>
<span>${p}%</span>
</div>
<div class="courseProgress"><i style="width:${p}%"></i></div>
<button onclick="openCourse('${c.id}')">${p===100?"REVISAR CURSO":"ESTUDAR MÓDULO"}</button>
</div>
`;
}).join("");
}

function renderChallenges(){
const grid=document.getElementById("challengesGrid");

grid.innerHTML=DESAFIOS.map(d=>{
const done=state.challenges.includes(d.id);

return `
<div class="challenge">
<div class="difficulty">${d.difficulty}</div>
<h3>${d.title}</h3>
<p>${d.text}</p>
<div style="margin-top:12px;color:#4ade80;font-size:10px">${d.xp} XP</div>
<button onclick="openChallenge('${d.id}')">${done?"CONCLUÍDO":"INICIAR DESAFIO"}</button>
</div>
`;
}).join("");
}

const BADGES=[
["🎯","Primeiro Passo","Complete sua primeira aula",()=>completedLessons()>=1],
["📚","Estudante","Complete 5 aulas",()=>completedLessons()>=5],
["⚡","100 XP","Alcance 100 XP",()=>state.xp>=100],
["🔥","10 Aulas","Complete 10 aulas",()=>completedLessons()>=10],
["🏆","Primeiro Desafio","Complete um desafio",()=>state.challenges.length>=1],
["🌐","Networker","Complete Redes e Protocolos",()=>progressCourse(CURSOS.find(c=>c.id==="redes"))===100],
["🐧","Linux User","Complete Linux para Cyber",()=>progressCourse(CURSOS.find(c=>c.id==="linux"))===100],
["🔑","Cryptographer","Complete Criptografia",()=>progressCourse(CURSOS.find(c=>c.id==="cripto"))===100],
["🛡️","Defensor","Complete Blue Team",()=>progressCourse(CURSOS.find(c=>c.id==="blue"))===100],
["🚀","1000 XP","Alcance 1000 XP",()=>state.xp>=1000],
["🧠","Cyber Student","Complete 30 aulas",()=>completedLessons()>=30],
["👑","Academy Master","Complete todos os módulos",()=>completedLessons()===totalLessons()]
];

function renderBadges(){
const grid=document.getElementById("badgesGrid");

BADGES.forEach((b,i)=>{
if(b[3]()&&!state.badges.includes(i)){
state.badges.push(i);
save();
}
});

grid.innerHTML=BADGES.map((b,i)=>{
const unlocked=state.badges.includes(i);

return `
<div class="badge ${unlocked?"unlocked":""}">
<div>${b[0]}</div>
<b>${b[1]}</b>
<span>${b[2]}</span>
</div>
`;
}).join("");
}

function openCourse(id){
currentCourse=CURSOS.find(c=>c.id===id);
currentLesson=0;

const firstIncomplete=currentCourse.lessons.findIndex((_,i)=>!state.lessons.includes(lessonKey(currentCourse,i)));
if(firstIncomplete>=0)currentLesson=firstIncomplete;

document.getElementById("studyScreen").style.display="block";
document.body.style.overflow="hidden";
showLesson();
}

function closeStudy(){
document.getElementById("studyScreen").style.display="none";
document.body.style.overflow="";
render();
}

function showLesson(){
const c=currentCourse;
const l=c.lessons[currentLesson];

const done=state.lessons.includes(lessonKey(c,currentLesson));
const pct=Math.round((currentLesson+1)/c.lessons.length*100);

document.getElementById("studyXP").textContent=state.xp+" XP";
document.getElementById("studyLevel").textContent="LVL "+level();

document.getElementById("studyContent").innerHTML=`
<div class="studyHeader">
<div>
<div class="contentLabel">MÓDULO ${CURSOS.indexOf(c)+1} // ${c.title}</div>
<h2>${c.icon} ${c.title}</h2>
</div>
<div class="studyProgress">AULA ${currentLesson+1} DE ${c.lessons.length}</div>
</div>

<div class="studyBar"><i style="width:${pct}%"></i></div>

<div class="lessonTitle">
<span>LESSON ${String(currentLesson+1).padStart(2,"0")}</span>
<h1>${l[0]}</h1>
</div>

<div class="explanation">
<div class="contentLabel">EXPLICAÇÃO COMPLETA</div>
<div class="lessonText">${l[1].trim()}</div>
</div>

<div class="exampleBox">
<div class="contentLabel">EXEMPLO PRÁTICO</div>
<p>${l[2]}</p>
</div>

<div class="importantBox">
<div class="contentLabel">O QUE VOCÊ PRECISA LEMBRAR</div>
<ul>${l[3].map(x=>`<li>${x}</li>`).join("")}</ul>
</div>

<div class="quizBox">
<div class="contentLabel">CHECKPOINT</div>
<h3>O que você aprendeu nesta aula?</h3>
<div class="answers">
${makeQuiz(c,currentLesson)}
</div>
<div id="lessonResult" class="result"></div>
</div>

<div class="studyNavigation">
<button onclick="previousLesson()" ${currentLesson===0?"disabled":""}>← AULA ANTERIOR</button>
<button class="primary" onclick="nextLesson()">${currentLesson===c.lessons.length-1?"FINALIZAR MÓDULO":"PRÓXIMA AULA →"}</button>
</div>
`;

if(done){
document.getElementById("lessonResult").textContent="✓ Aula já concluída. Você pode revisar o conteúdo ou avançar.";
document.getElementById("lessonResult").className="result show ok";
}
}

function makeQuiz(course,index){
const seed=(index*7+course.id.length)%4;
const q=[
"Qual conceito é mais importante nesta aula?",
"Qual alternativa representa uma boa prática?",
"Qual afirmação está correta?",
"Qual é o principal objetivo do conceito estudado?"
][seed];

const answers=[
"Aplicar o conceito de maneira segura e contextualizada",
"Ignorar controles de segurança",
"Confiar cegamente em qualquer entrada",
"Remover todos os registros"
];

return answers.map((a,i)=>`
<button onclick="answerLesson(${i})">${String.fromCharCode(65+i)}. ${a}</button>
`).join("");
}

function answerLesson(answer){
const result=document.getElementById("lessonResult");
const buttons=document.querySelectorAll(".answers button");

buttons.forEach((b,i)=>{
b.disabled=true;
if(i===0)b.classList.add("correct");
if(i===answer&&answer!==0)b.classList.add("wrong");
});

if(answer===0){
result.textContent="✓ CORRETO — +30 XP. Continue para a próxima aula.";
result.className="result show ok";

const key=lessonKey(currentCourse,currentLesson);

if(!state.lessons.includes(key)){
state.lessons.push(key);
state.xp+=30;
save();
render();
}

}else{
result.textContent="✕ Resposta incorreta. Revise a explicação acima e tente novamente.";
result.className="result show no";
}
}

function previousLesson(){
if(currentLesson>0){
currentLesson--;
showLesson();
}
}

function nextLesson(){
if(!state.lessons.includes(lessonKey(currentCourse,currentLesson))){
const result=document.getElementById("lessonResult");
result.textContent="Responda corretamente ao checkpoint antes de avançar.";
result.className="result show no";
return;
}

if(currentLesson<currentCourse.lessons.length-1){
currentLesson++;
showLesson();
}else{
showCompletion();
}
}

function showCompletion(){
document.getElementById("studyContent").innerHTML=`
<div class="courseComplete">
<div class="completeIcon">🎓</div>
<div class="contentLabel">MODULE COMPLETE</div>
<h1>${currentCourse.icon} ${currentCourse.title}</h1>
<p>
Você concluiu todas as aulas deste módulo.
Agora revise os conceitos, pratique os desafios e continue
para o próximo módulo.
</p>

<div class="completeStats">
<div><b>${currentCourse.lessons.length}</b><span>AULAS</span></div>
<div><b>+${currentCourse.lessons.length*30}</b><span>XP MÁXIMO</span></div>
</div>

<button class="primaryBtn" onclick="closeStudy()">VOLTAR PARA A ACADEMIA</button>
</div>
`;
}

function openChallenge(id){
const d=DESAFIOS.find(x=>x.id===id);
const done=state.challenges.includes(id);

document.getElementById("modalContent").innerHTML=`
<div class="contentLabel">${d.difficulty} // ${d.xp} XP</div>
<h2>🏁 ${d.title}</h2>
<p>${d.text}</p>

<div class="quizBox">
<div class="contentLabel">DESAFIO</div>
<p class="challengeQuestion">${d.text}</p>
<div class="answers" style="margin-top:18px">
${d.answers.map((a,i)=>`<button onclick="answerChallenge('${d.id}',${i},${d.correct})">${String.fromCharCode(65+i)}. ${a}</button>`).join("")}
</div>
<div id="challengeResult" class="result"></div>
</div>

${done?`<div class="result show ok">✓ Este desafio já foi concluído.</div>`:""}
`;

openModal();
}

function answerChallenge(id,answer,correct){
const result=document.getElementById("challengeResult");
const buttons=document.querySelectorAll("#modalContent .answers button");

buttons.forEach((b,i)=>{
b.disabled=true;
if(i===correct)b.classList.add("correct");
if(i===answer&&answer!==correct)b.classList.add("wrong");
});

if(answer===correct){
if(!state.challenges.includes(id)){
state.challenges.push(id);
const d=DESAFIOS.find(x=>x.id===id);
state.xp+=d.xp;
save();
render();
}
result.textContent="✓ DESAFIO CONCLUÍDO — XP adicionado ao seu perfil.";
result.className="result show ok";
}else{
result.textContent="✕ Resposta incorreta. Estude os módulos relacionados e tente novamente.";
result.className="result show no";
}
}

function openModal(){
document.getElementById("modal").classList.add("open");
}

function closeModal(){
document.getElementById("modal").classList.remove("open");
}

function scrollToCourses(){
document.getElementById("cursos").scrollIntoView();
}

function scrollToChallenges(){
document.getElementById("desafios").scrollIntoView();
}

document.addEventListener("keydown",e=>{
if(e.key==="Escape"){
closeModal();
if(document.getElementById("studyScreen").style.display==="block")closeStudy();
}
});

document.getElementById("modal").addEventListener("click",e=>{
if(e.target.id==="modal")closeModal();
});

render();
