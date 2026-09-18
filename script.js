const menu=document.querySelector('.menu');
const links=document.querySelector('.links');
menu.addEventListener('click',()=>links.classList.toggle('open'));

document.querySelectorAll('.links a,.footer-links a').forEach(a=>{
  a.addEventListener('click',()=>links.classList.remove('open'));
});

const toast=document.querySelector('.toast');
document.querySelectorAll('a[href="#bots"],a[href="#contact"]').forEach(a=>{
  a.addEventListener('click',e=>{
    if(a.getAttribute('href')==='#contact'){
      e.preventDefault();
      toast.textContent='NETWORK ACCESS: configure your Telegram/GitHub links in index.html';
      toast.classList.add('show');
      setTimeout(()=>toast.classList.remove('show'),2600);
    }
  });
});

const sections=[...document.querySelectorAll('main section[id],main section')];
const navLinks=[...document.querySelectorAll('.links a')];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const id=entry.target.id;
      navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+id));
    }
  });
},{threshold:.35});
sections.forEach(s=>observer.observe(s));

setInterval(()=>{
  document.querySelectorAll('.online i').forEach(dot=>{
    dot.style.opacity=dot.style.opacity==='0.35'?'1':'0.35';
  });
},1200);
