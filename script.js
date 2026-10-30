'use strict';
// Edit these values when your official contact and social URLs are ready.
const CONFIG = {
  email: '',
  github: '',
  linkedin: '',
  instagram: '',
  founderGithub: '',
  founderLinkedin: '',
  projects: []
};
const root = document.documentElement;
const themeButton = document.querySelector('#themeToggle');
let savedTheme;
try { savedTheme = localStorage.getItem('pardeshi-theme'); } catch (_) {}
const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
function setTheme(theme) { root.dataset.theme = theme; themeButton.textContent = theme === 'dark' ? '☀' : '☾'; themeButton.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`); try { localStorage.setItem('pardeshi-theme',theme); } catch (_) {} }
setTheme(initialTheme);
themeButton.addEventListener('click', () => setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark'));
const menuButton = document.querySelector('#menuToggle');
const navlinks = document.querySelector('#navlinks');
function closeMenu(){navlinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Open navigation');menuButton.textContent='☰';}
menuButton.addEventListener('click',()=>{const open=navlinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation':'Open navigation');menuButton.textContent=open?'✕':'☰';});
navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.querySelector('#year').textContent=new Date().getFullYear();
function validUrl(value){try{const url=new URL(value);return ['https:','http:'].includes(url.protocol) && Boolean(url.hostname) && !['example.com','yourusername'].includes(url.hostname);}catch{return false;}}
function addLink(container,label,url,primary=false){if(!validUrl(url))return;const a=document.createElement('a');a.className=`btn ${primary?'primary':'secondary'}`;a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=label+' ↗';container.append(a);}
const founderSocial=document.querySelector('#founderSocial');
addLink(founderSocial,'Connect on LinkedIn',CONFIG.founderLinkedin);addLink(founderSocial,'View My GitHub',CONFIG.founderGithub);
const contactLinks=document.querySelector('#contactLinks');
if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONFIG.email)){const a=document.createElement('a');a.href=`mailto:${CONFIG.email}`;a.className='btn primary';a.textContent='✉ Send an Email';contactLinks.append(a);document.querySelector('#contactNote').hidden=true;}
addLink(contactLinks,'GitHub',CONFIG.github);addLink(contactLinks,'LinkedIn',CONFIG.linkedin);addLink(contactLinks,'Instagram',CONFIG.instagram);
if(contactLinks.children.length)document.querySelector('#contactNote').hidden=true;
// To publish projects, add objects to CONFIG.projects with name, description, image, stack, github and demo.
const projectGrid=document.querySelector('#projectGrid');
const projects=Array.isArray(CONFIG.projects)?CONFIG.projects:[];
if(projects.length){document.querySelector('#projectEmpty').hidden=true;projects.forEach(project=>{if(!project.name || !project.description)return;const card=document.createElement('article');card.className='panel project-card reveal';if(project.image){const img=document.createElement('img');img.src=project.image;img.alt=`Preview of ${project.name}`;img.loading='lazy';card.append(img);}const content=document.createElement('div');content.className='project-card-content';const heading=document.createElement('h3');heading.textContent=project.name;const desc=document.createElement('p');desc.textContent=project.description;const stack=document.createElement('p');stack.className='stack';stack.textContent=Array.isArray(project.stack)?project.stack.join(' · '):project.stack||'';const links=document.createElement('div');links.className='project-links';for(const [label,url] of [['GitHub',project.github],['Live Demo',project.demo]]){if(validUrl(url)){const a=document.createElement('a');a.href=url;a.target='_blank';a.rel='noopener noreferrer';a.textContent=label+' ↗';links.append(a);}}content.append(heading,desc,stack,links);card.append(content);projectGrid.append(card);});if(!projectGrid.children.length)document.querySelector('#projectEmpty').hidden=false;}
if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches){const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.09});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
