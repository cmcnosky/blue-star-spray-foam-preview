'use strict';
(()=>{
  const root=document.documentElement;
  const theme=document.querySelector('.theme-toggle');
  const updateThemeLabel=()=>{if(theme)theme.setAttribute('aria-label',root.dataset.theme==='light'?'Use dim colors':'Use light colors')};
  updateThemeLabel();
  theme?.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='light'?'dark':'light';try{localStorage.setItem('bs-main-theme',root.dataset.theme)}catch{}updateThemeLabel()});
  const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('#main-nav');
  function closeMenu(){if(!menu||!nav)return;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open navigation');nav.classList.remove('open')}
  menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open);if(open)nav.querySelector('a')?.focus()});
  nav?.addEventListener('click',event=>{if(event.target instanceof Element && event.target.closest('a'))closeMenu()});
  document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu?.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus()}});
  document.addEventListener('click',event=>{if(menu&&nav&&!nav.contains(event.target)&&!menu.contains(event.target))closeMenu()});
  const frame=document.querySelector('#project-intake');
  if(!frame)return;
  const loading=document.querySelector('#intake-loading');
  const productionOrigin='https://blue-star-spray-foam-rebuild.cmcnosky.chatgpt.site';
  const localPreview=['127.0.0.1','localhost'].includes(location.hostname);
  // Local development uses the local intake service; production always uses the existing secure host.
  if(localPreview)frame.src='http://127.0.0.1:5173/intake-embed';
  const expectedOrigin=localPreview?'http://127.0.0.1:5173':productionOrigin;
  let dirty=false,receivedState=false;
  window.addEventListener('message',event=>{
    if(event.origin!==expectedOrigin||event.source!==frame.contentWindow)return;
    const d=event.data;
    if(!d||typeof d!=='object'||Array.isArray(d))return;
    const keys=Object.keys(d).sort().join(',');
    if(keys!=='dirty,height,submitted,type'||d.type!=='blue-star:intake-state'||typeof d.height!=='number'||!Number.isFinite(d.height)||typeof d.dirty!=='boolean'||typeof d.submitted!=='boolean')return;
    frame.style.height=Math.max(360,Math.min(20004,Math.ceil(d.height)+4))+'px';
    dirty=d.dirty&&!d.submitted;receivedState=true;
    if(loading)loading.hidden=true;
  });
  setTimeout(()=>{if(!receivedState&&loading)loading.textContent='If the form does not appear below, use “Open the form in a new tab” below, or call Josh at (864) 373-4464.'},15000);
  window.addEventListener('beforeunload',event=>{if(dirty){event.preventDefault();event.returnValue=''}});
  document.addEventListener('click',event=>{
    const a=event.target instanceof Element ? event.target.closest('a') : null;
    if(!dirty||!a||a.target==='_blank'||a.hasAttribute('download'))return;
    const href=a.getAttribute('href')||'';
    if(!href||/^(#|tel:|mailto:)/.test(href))return;
    if(!window.confirm('You have an unfinished project. Leaving may lose unsent entries. A request already being sent may still complete. Leave anyway?'))event.preventDefault();
    else dirty=false;
  });
})();
