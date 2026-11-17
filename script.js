const manualDialog=document.getElementById('manualDialog');
const profileDialog=document.getElementById('profileDialog');
document.getElementById('manualButton').addEventListener('click',()=>manualDialog.showModal());
document.getElementById('profileButton').addEventListener('click',()=>profileDialog.showModal());
document.querySelectorAll('[data-close]').forEach(btn=>btn.addEventListener('click',()=>btn.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
const nav=document.getElementById('mainNav');
document.getElementById('menuToggle').addEventListener('click',()=>nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
let role='parent';
const roleButtons=document.querySelectorAll('[data-role]');
function setRole(next){role=next;roleButtons.forEach(b=>b.classList.toggle('active',b.dataset.role===next));document.getElementById('profileForm').hidden=next==='doctor';document.getElementById('doctorPanel').hidden=next!=='doctor';if(next==='doctor')showRecords();}
roleButtons.forEach(b=>b.addEventListener('click',()=>setRole(b.dataset.role)));
function getRecords(){try{return JSON.parse(localStorage.getItem('littleTrackDemoRecords')||'[]')}catch{return []}}
function showRecords(){const records=getRecords();document.getElementById('recordList').innerHTML=records.length?records.map(r=>`<article class="steps article"><b>${escapeText(r.baby)}</b><p>Parent: ${escapeText(r.parent)} · Date of birth: ${escapeText(r.dob)}</p></article>`).join(''):'No submitted demo records.'}
function escapeText(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
document.getElementById('profileForm').addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);const record={parent:f.get('parent'),email:f.get('email'),mobile:f.get('mobile'),baby:f.get('baby'),dob:f.get('dob')};const records=getRecords();records.unshift(record);localStorage.setItem('littleTrackDemoRecords',JSON.stringify(records));document.getElementById('profileMessage').textContent='Demo profile saved in this browser. No information was sent to a server.';e.currentTarget.reset();});
