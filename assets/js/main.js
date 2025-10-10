// simple theme toggle persisted in localStorage
(function(){
const btn = document.getElementById('theme-toggle');
if(!btn) return;
const root = document.documentElement;
const stored = localStorage.getItem('theme');
if(stored === 'dark') root.classList.add('dark');


btn.addEventListener('click', ()=>{
const isDark = root.classList.toggle('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
})();
