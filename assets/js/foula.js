/* ================= DONNÉES ================= */
const IMG=s=>`assets/img/${s}.webp`, IMGS=s=>`assets/img/${s}-s.webp`;
const TAILLES=[{ml:30,prix:69},{ml:50,prix:109},{ml:100,prix:139}];
const P=[
 {slug:'minuit-passe',nom:'Minuit Passé',n:'01',coul:'Noir',g:'radial-gradient(90% 80% at 50% 60%,#3a3036 0%,#151012 55%,#060506 100%)',tint:'#d8d0cd',dot:'#100D0F',
  fam:'Ambrée vanillée',court:'Vanillé & classe',
  accroche:"L'heure où tout devient possible. Une vanille noire, élégante et enveloppante, qui ne quitte jamais la soirée la première.",
  desc:"Minuit Passé, c'est la petite robe noire du parfum : une évidence chic. Une vanille profonde, travaillée sans sucre excessif, adoucie d'iris et réchauffée d'ambre et de bois de santal. Un sillage feutré qui murmure plutôt qu'il ne crie, pour celle qui n'a rien à prouver.",
  tete:['Bergamote','Poivre rose','Cardamome'],coeur:['Iris poudré',"Fleur d'oranger",'Jasmin'],fond:['Vanille bourbon','Fève tonka','Ambre','Santal'],
  moment:'Soir & nuit',sillage:'Enveloppant',tenue:85,intensite:75},
 {slug:'elle-ose',nom:'Elle Ose',n:'02',coul:'Rouge',g:'radial-gradient(90% 80% at 50% 60%,#c81f33 0%,#8A0F1C 50%,#33040a 100%)',tint:'#efcfcb',dot:'#8A0F1C',
  fam:'Chypre fruité',court:'Fruits rouges glamour',
  accroche:"Un baiser de fruits rouges sur une peau qui assume tout. Glamour, magnétique, irrésistiblement aphrodisiaque.",
  desc:"Elle Ose s'ouvre sur un éclat de framboise et de griotte juteuse, puis glisse vers une rose épicée et un jasmin sensuel. Le fond, patchouli et musc ambré, laisse sur la peau une chaleur qui appelle le regard. Le parfum du rouge à lèvres, des talons et des entrées remarquées.",
  tete:['Framboise','Griotte','Cassis'],coeur:['Rose de Damas','Jasmin sambac','Poivre rose'],fond:['Patchouli','Musc ambré','Vanille'],
  moment:'Soirées, rendez-vous',sillage:'Intense',tenue:80,intensite:90},
 {slug:'cest-elle',nom:"C'est Elle",n:'03',coul:'Rose',g:'radial-gradient(90% 80% at 50% 60%,#e2508a 0%,#A8174A 50%,#46071f 100%)',tint:'#f5d5e0',dot:'#A8174A',
  fam:'Florale rosée',court:'Rosé fulgurant',
  accroche:"Une rose qui éclot en un instant. Fulgurante, lumineuse : le parfum d'une métamorphose.",
  desc:"C'est Elle raconte le moment où l'on se reconnaît enfin dans le miroir. Un départ pétillant de litchi et de pamplemousse rose, un cœur de rose et de pivoine en pleine floraison, puis un fond de muscs blancs et de cèdre qui reste sur la peau comme une seconde nature.",
  tete:['Litchi','Pamplemousse rose','Bergamote'],coeur:['Rose de mai','Rose de Damas','Pivoine'],fond:['Muscs blancs','Cèdre','Ambroxan'],
  moment:'Jour, toute saison',sillage:'Rayonnant',tenue:70,intensite:65},
 {slug:'secret-de-femme',nom:'Secret de Femme',n:'04',coul:'Violet',g:'radial-gradient(90% 80% at 50% 60%,#8c47b8 0%,#4B1866 50%,#16051f 100%)',tint:'#e0d0ea',dot:'#4B1866',
  fam:'Orientale florale',court:'Intime & addictif',
  accroche:"Ce que l'on ne dit qu'à voix basse. Un parfum intime, addictif, qui se découvre de près.",
  desc:"Secret de Femme est un parfum de peau. Une prune veloutée et un fil de safran s'effacent devant une violette et une tubéreuse crémeuses, posées sur un fond d'ambre, de benjoin et de muscs cachemire. On s'en approche, on y revient : impossible de l'oublier, difficile de le décrire.",
  tete:['Prune','Safran','Mandarine'],coeur:['Violette','Tubéreuse','Héliotrope'],fond:['Ambre','Benjoin','Musc cachemire','Praline'],
  moment:'Intime, soir',sillage:'Proche, tenace',tenue:90,intensite:60},
 {slug:'belle-allure',nom:'Belle Allure',n:'05',coul:'Blanc',g:'radial-gradient(90% 80% at 50% 60%,#ffffff 0%,#f1ece9 50%,#d9d0cb 100%)',tint:'#efe7e1',dot:'#F3F0EE',claire:true,
  fam:'Florale blanche',court:'Floral élégant',
  accroche:"Elle entre, et la pièce change. Un floral blanc élégant, solaire et charismatique.",
  desc:"Belle Allure est le parfum de la prestance. Un néroli lumineux et une poire juteuse ouvrent sur un bouquet de jasmin, de fleur d'oranger et de magnolia, soutenu par un iris délicat. Le fond, bois de santal et muscs blancs, laisse l'impression nette d'une femme qu'on remarque sans qu'elle cherche à l'être.",
  tete:['Néroli','Poire','Bergamote'],coeur:['Jasmin',"Fleur d'oranger",'Magnolia','Iris'],fond:['Santal','Muscs blancs','Ambrette'],
  moment:'Bureau, cérémonies',sillage:'Élégant',tenue:75,intensite:55}
];
const COFFRET={slug:'coffret',nom:'Coffret Découverte',prix:29,desc:'5 fioles × 2 ml'};
const LIQ={'minuit-passe':['#2b2427','#0b090a'],'elle-ose':['#d22a3c','#6d0a15'],'cest-elle':['#ee6a9c','#9c1444'],'secret-de-femme':['#9a56c6','#3d1056'],'belle-allure':['#fbf6f0','#e6dcd3']};
function fiole(p){const [a,b]=LIQ[p.slug],id='f'+p.n;
 return `<svg class="fiole" viewBox="0 0 70 300" role="img" aria-label="Fiole 2 ml ${p.nom}, FOULA for her"><defs>
 <linearGradient id="or${id}" x1="0" x2="1"><stop offset="0" stop-color="#7a5a1c"/><stop offset=".28" stop-color="#f3d78f"/><stop offset=".5" stop-color="#c99a3e"/><stop offset=".72" stop-color="#fbe5a6"/><stop offset="1" stop-color="#6e4f16"/></linearGradient>
 <linearGradient id="lq${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${b}"/><stop offset="1" stop-color="${a}"/></linearGradient>
 <linearGradient id="vr${id}" x1="0" x2="1"><stop offset="0" stop-color="rgba(255,255,255,.55)"/><stop offset=".2" stop-color="rgba(255,255,255,.08)"/><stop offset=".8" stop-color="rgba(255,255,255,.05)"/><stop offset="1" stop-color="rgba(255,255,255,.4)"/></linearGradient></defs>
 <rect x="16" y="0" width="38" height="60" rx="4" fill="url(#or${id})"/>
 <g stroke="rgba(110,79,22,.45)" stroke-width=".8"><line x1="22" y1="6" x2="22" y2="54"/><line x1="29" y1="6" x2="29" y2="54"/><line x1="41" y1="6" x2="41" y2="54"/><line x1="48" y1="6" x2="48" y2="54"/></g>
 <rect x="13" y="58" width="44" height="10" rx="2" fill="url(#or${id})"/>
 <rect x="22" y="68" width="26" height="10" fill="rgba(255,255,255,.25)"/>
 <rect x="12" y="76" width="46" height="222" rx="9" fill="rgba(255,255,255,.14)" stroke="rgba(255,255,255,.55)" stroke-width="1"/>
 <rect x="16" y="92" width="38" height="202" rx="6" fill="url(#lq${id})"/>
 <rect x="19" y="126" width="32" height="134" fill="#F6EDE8"/>
 <rect x="21" y="128" width="28" height="130" fill="none" stroke="#C9A04A" stroke-width=".6"/>
 <g transform="translate(35 193) rotate(-90)" text-anchor="middle">
  <text y="-6.5" font-family="Marcellus,serif" font-size="6.4" letter-spacing="2.4" fill="#8E6A22">FOULA FOR HER</text>
  <text y="5" font-family="Italiana,serif" font-size="11.5" fill="#2A1A22">${p.nom}</text>
  <text y="13.5" font-family="Marcellus,serif" font-size="5.2" letter-spacing="1.6" fill="#7A6870">N°${p.n} · EDP · 2 ML</text></g>
 <rect x="12" y="76" width="46" height="222" rx="9" fill="url(#vr${id})"/>
 <rect x="17" y="84" width="3" height="200" rx="1.5" fill="rgba(255,255,255,.5)"/></svg>`}
function ecrin(){return `<div class="ecrin" id="ecrin"><div class="couv"><img src="assets/img/monogramme-or.webp" alt=""></div>
 <div class="fioles">${P.map(p=>`<div class="fl-w">${fiole(p)}</div>`).join('')}</div>
 <div class="avant"><b>FOULA</b><small>Coffret découverte · 5 × 2 ml</small></div></div>`}
const $=(s,c=document)=>c.querySelector(s),$$=(s,c=document)=>[...c.querySelectorAll(s)];
const eur=v=>v.toLocaleString('fr-FR',{style:'currency',currency:'EUR',minimumFractionDigits:0,maximumFractionDigits:2});
const RM=matchMedia('(prefers-reduced-motion: reduce)').matches;
const MOB=()=>innerWidth<=860;

/* ================= SCROLL FLUIDE ================= */
gsap.registerPlugin(ScrollTrigger);
let lenis=null;
if(!RM&&window.Lenis){lenis=new Lenis({lerp:.085,smoothWheel:true});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(t=>lenis.raf(t*1000));gsap.ticker.lagSmoothing(0)}
const stop=()=>lenis&&lenis.stop(),go=()=>lenis&&lenis.start();

/* ================= UTILITAIRES ANIM ================= */
function split(el){
  if(!el||el.dataset.split)return el;el.dataset.split=1;
  const walk=n=>{[...n.childNodes].forEach(c=>{
    if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(t=>{if(!t)return;if(/^\s+$/.test(t)){f.append(' ');return}const w=document.createElement('span');w.className='w';w.innerHTML=`<span>${t}</span>`;f.append(w)});c.replaceWith(f)}
    else if(c.nodeType===1&&!c.classList.contains('w'))walk(c)})};
  walk(el);return el;
}
function revelerTitres(scope=document){
  $$('[data-rev]',scope).forEach(el=>{split(el);gsap.from($$('.w>span',el),{yPercent:115,duration:1.2,ease:'expo.out',stagger:.06,scrollTrigger:{trigger:el,start:'top 88%'}})});
  $$('[data-fade]',scope).forEach(el=>gsap.from(el,{y:40,opacity:0,duration:1.3,ease:'expo.out',scrollTrigger:{trigger:el,start:'top 90%'}}));
  $$('[data-par]',scope).forEach(el=>gsap.to(el,{yPercent:+el.dataset.par,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:true}}));
}

/* ================= CURSEUR & MAGNÉTISME ================= */
const cur=$('.cur'),curR=$('.cur-r');
if(matchMedia('(hover:hover)').matches){
  const xd=gsap.quickTo(cur,'x',{duration:.12}),yd=gsap.quickTo(cur,'y',{duration:.12}),xr=gsap.quickTo(curR,'x',{duration:.5,ease:'power3'}),yr=gsap.quickTo(curR,'y',{duration:.5,ease:'power3'});
  addEventListener('pointermove',e=>{xd(e.clientX);yd(e.clientY);xr(e.clientX);yr(e.clientY)});
  document.addEventListener('pointerover',e=>{
    const c=e.target.closest('[data-cur]'),l=e.target.closest('a,button,summary,input');
    curR.classList.toggle('grand',!!c);$('span',curR).textContent=c?c.dataset.cur:'';
    curR.classList.toggle('lien',!c&&!!l);
  });
}
function magnetiser(scope=document){
  if(!matchMedia('(hover:hover)').matches||RM)return;
  $$('.btn',scope).forEach(b=>{
    b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();gsap.to(b,{x:(e.clientX-r.left-r.width/2)*.18,y:(e.clientY-r.top-r.height/2)*.3,duration:.6,ease:'power3'})});
    b.addEventListener('pointerleave',()=>gsap.to(b,{x:0,y:0,duration:.9,ease:'elastic.out(1,.4)'}));
  });
}

/* ================= PANIER ================= */
let panier=[];try{panier=JSON.parse(localStorage.getItem('foula-panier')||'[]')}catch(e){}
const sauver=()=>{try{localStorage.setItem('foula-panier',JSON.stringify(panier))}catch(e){}};
const prixL=l=>l.slug===COFFRET.slug?COFFRET.prix:TAILLES.find(t=>t.ml==l.ml).prix;
function ajouter(slug,ml,q=1){const k=slug+'|'+ml,l=panier.find(x=>x.k===k);l?l.q+=q:panier.push({k,slug,ml,q});sauver();majPanier();tiroir(true)}
function majPanier(){
  const n=panier.reduce((a,l)=>a+l.q,0),tot=panier.reduce((a,l)=>a+l.q*prixL(l),0),c=$('#compteur');
  c.textContent=n;c.classList.toggle('on',n>0);
  const r=Math.max(0,90-tot);
  $('#livr').innerHTML=(r>0?`Plus que <b>${eur(r)}</b> pour la livraison offerte`:'✦ La livraison vous est offerte')+`<div class="j"><i style="width:${Math.min(100,tot/90*100)}%"></i></div>`;
  if(!panier.length){$('#lignes').innerHTML=`<div class="vide"><p class="recit" style="font-size:22px;margin-bottom:28px">Votre panier attend son parfum.</p><a class="btn sombre" href="#/collection" onclick="tiroir(false)">Découvrir les parfums</a></div>`;$('#pied').innerHTML='';return}
  $('#lignes').innerHTML=panier.map((l,i)=>{const cof=l.slug===COFFRET.slug,p=cof?P[2]:P.find(x=>x.slug===l.slug);
    return `<div class="lg"><div class="v" style="background:${p.g}"><img src="${IMGS(p.slug)}" alt=""></div><div><b>${cof?COFFRET.nom:p.nom}</b><small>${cof?COFFRET.desc:'Eau de parfum · '+l.ml+' ml'}</small>
    <div class="mq"><button aria-label="Retirer un" onclick="qte(${i},-1)">−</button>${l.q}<button aria-label="Ajouter un" onclick="qte(${i},1)">+</button></div><button class="sup" onclick="qte(${i},-999)">Retirer</button></div><div>${eur(l.q*prixL(l))}</div></div>`}).join('');
  $('#pied').innerHTML=`<div class="tot"><span>Sous-total</span><span>${eur(tot)}</span></div><p>Deux échantillons offerts. Taxes incluses, livraison calculée à l'étape suivante.</p><button class="btn encre" onclick="toast('Paiement sécurisé Shopify · activé à la mise en ligne')">Passer commande <span class="fl">→</span></button>`;
}
function qte(i,d){panier[i].q+=d;if(panier[i].q<=0)panier.splice(i,1);sauver();majPanier()}
function tiroir(o){$('#tiroir').classList.toggle('on',o);$('#voile').classList.toggle('on',o);$('#tiroir').setAttribute('aria-hidden',!o);o?stop():go()}
function menu(o){$('#menuMob').classList.toggle('ouvert',o);$('#menuMob').setAttribute('aria-hidden',!o);o?stop():go()}
let tt;function toast(t){const e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('on'),2800)}

/* ================= COMPOSANTS ================= */
const carte=(p,i)=>`<article class="produit ${p.claire?'claire':''}" data-cur="Voir" onclick="location.hash='#/parfum/${p.slug}'">
  <div class="fd" style="background:${p.g}"></div>
  <div class="h"><span>N°${p.n}</span><span>${p.coul}</span></div>
  <img src="${IMG(p.slug)}" alt="Flacon ${p.nom}, eau de parfum FOULA for her" loading="lazy">
  <div class="b"><div><h3>${p.nom}</h3><div class="fam">${p.court}</div></div><div class="px">dès ${eur(TAILLES[0].prix)}</div></div></article>`;
const engag=`<div class="engag">
  <div data-fade><span>I</span><b>Créés par une femme</b><p>Chaque parfum est pensé et signé par Foula.</p></div>
  <div data-fade><span>II</span><b>Échantillons offerts</b><p>Deux découvertes glissées dans chaque commande.</p></div>
  <div data-fade><span>III</span><b>Livraison soignée</b><p>Offerte dès 90 €, expédiée sous 48 h.</p></div>
  <div data-fade><span>IV</span><b>Écrin cadeau</b><p>Emballage et mot manuscrit sur demande.</p></div></div>`;

/* ================= ACCUEIL ================= */
function pageAccueil(){
 return `
 <section class="hero" id="hero" data-header="sombre">
   <canvas id="sillage" aria-hidden="true"></canvas>
   <div class="titre"><h1 class="display" id="hTitre"><span class="l1">Elle laisse</span><span class="l2"><em>une</em> trace.</span></h1></div>
   <div class="flacons" id="flacons">${[0,1,2,3,4].map(i=>`<img src="${IMG(P[i].slug)}" alt="${P[i].nom}" data-i="${i}" ${i===2?'fetchpriority="high"':''}>`).join('')}</div>
   <div class="pied"><span class="defiler"><i></i>Défiler</span></div>
 </section>

 <div class="defile" aria-hidden="true"><div class="rang" id="rang1">${[...P,...P,...P].map(p=>`<span>${p.nom} <i>✦</i></span>`).join('')}</div></div>

 <section class="manif clair-sec" data-header="clair">
   <span class="label">Manifeste</span>
   <p class="grand" id="manif">FOULA for her est née d'une conviction : une femme mérite un parfum qui lui ressemble, pensé par quelqu'un qui la comprend. <em>Pas une déclinaison « féminine ».</em> Cinq parfums de niche, écrits au féminin du premier accord à la dernière note de fond.</p>
   <div class="sign"><i></i><span>Foula</span><i></i></div>
 </section>

 <section class="femmes" id="femmes" data-header="sombre">
   ${P.map((p,i)=>`<div class="fond ${i?'':'on'}" style="background:${p.g}"></div>`).join('')}
   <div class="num" id="fNum">01</div>
   <div class="halo"></div>
   <div class="scene">
     <div class="gauche">${P.map((p,i)=>`<div class="bloc ${i?'':'on'}" data-i="${i}"><div class="label">N°${p.n} · ${p.fam}</div><h2 class="display">${p.nom}</h2><p class="recit">${p.accroche}</p></div>`).join('')}</div>
     <div class="centre">${P.map((p,i)=>`<img src="${IMG(p.slug)}" alt="Flacon ${p.nom}" data-i="${i}" loading="lazy" data-cur="Découvrir" onclick="location.hash='#/parfum/${p.slug}'">`).join('')}</div>
     <div class="droite">${P.map((p,i)=>`<div class="bloc ${i?'':'on'}" data-i="${i}"><div class="notes"><div><b>Tête</b><span>${p.tete.join(', ')}</span></div><div><b>Cœur</b><span>${p.coeur.join(', ')}</span></div><div><b>Fond</b><span>${p.fond.join(', ')}</span></div></div><a class="btn" href="#/parfum/${p.slug}">Découvrir <span class="fl">→</span></a></div>`).join('')}</div>
   </div>
   <div class="prog">${P.map((p,i)=>`<button data-i="${i}" class="${i?'':'on'}" onclick="allerFemme(${i})"><i></i>${p.n}<span> · ${p.nom}</span></button>`).join('')}</div>
 </section>

 <section class="horiz" id="horiz" data-header="sombre">
   <div class="entete"><h2 class="display" data-rev>La collection</h2><a class="lien" href="#/collection" style="pointer-events:auto;color:var(--or-clair)">Tout voir</a></div>
   <div class="piste" id="piste">
     <div class="intro-p"><p class="recit" style="font-size:22px;color:rgba(246,237,232,.85)">Un même flacon couronné d'or. Pour chaque humeur, sa couleur.</p><div class="label" style="margin-top:26px">Faites défiler →</div></div>
     ${P.map(carte).join('')}
   </div>
 </section>

 <section class="hist" data-header="sombre">
   <div class="gauche"><div class="cadre"></div><img class="monog" id="monog" src="assets/img/monogramme-or.webp" alt="Monogramme FOULA" loading="lazy"><div class="script">Foula</div></div>
   <div class="droite">
     <div class="label">La maison</div>
     <h2 class="display" data-rev>Celle qu'on appelle Foula</h2>
     <div class="chap" data-fade><b>I</b><div><h3>L'enfance</h3><p>Dans sa famille, le parfum ne s'achète pas : il se raconte. On le partage autour de la table, on reconnaît quelqu'un à la trace qu'il laisse. C'est là qu'a grandi celle que tous surnomment Foula.</p></div></div>
     <div class="chap" data-fade><b>II</b><div><h3>La transmission</h3><p>Cette passion, elle la reçoit en héritage, comme un bijou de famille. Son frère, installé dans l'univers du parfum, lui ouvre les portes du métier : les matières, les accords, l'exigence des grandes maisons.</p></div></div>
     <div class="chap" data-fade><b>III</b><div><h3>La maison</h3><p>Ce savoir, elle veut l'offrir à son tour, aux femmes, et à elles seules. Ainsi naît FOULA for her.</p></div></div>
     <a class="btn" href="#/histoire" style="margin-top:30px">Lire son histoire <span class="fl">→</span></a>
   </div>
 </section>

 <section class="citation clair-sec" data-header="clair"><p data-rev>« Un savoir transmis, une passion offerte, <span>exclusivement à elle.</span> »</p></section>

 <section class="coffret" id="coffret" data-header="sombre">
   ${ecrin()}
   <div>
     <div class="label">Le coffret découverte</div>
     <h2 class="display" data-rev>Les cinq, avant de choisir</h2>
     <p data-fade>Cinq fioles de 2 ml, une pour chaque parfum, signées FOULA et marquées de leur nom et de leur numéro. De quoi vivre chaque parfum sur votre peau plusieurs jours avant d'adopter le vôtre. Son montant est déduit de votre premier flacon.</p>
     <div class="prix" data-fade>${eur(COFFRET.prix)} <small>5 × 2 ml</small></div>
     <button class="btn or" onclick="ajouter('${COFFRET.slug}',0)">Ajouter au panier <span class="fl">→</span></button>
   </div>
 </section>

 <section class="quiz-cta clair-sec" data-header="clair">
   <div class="gouttes">${P.map(p=>`<i style="background:${p.dot};border:1px solid rgba(142,106,34,.35)"></i>`).join('')}</div>
   <div class="label">Le diagnostic olfactif</div>
   <h2 class="display" data-rev>Quelle femme<br><em>êtes-vous</em> ce soir ?</h2>
   <p data-fade style="max-width:460px;margin:0 auto 40px;color:var(--gris)">Trois questions, trente secondes, et le parfum qui vous ressemble.</p>
   <a class="btn sombre" href="#/trouver">Commencer le diagnostic <span class="fl">→</span></a>
   ${engag}
 </section>`;
}

/* --- canvas sillage : volutes colorées + poussière d'or --- */
let rafS;
function sillage(){
  const c=$('#sillage');if(!c)return;const x=c.getContext('2d');let W,H,dpr=Math.min(devicePixelRatio,1.6);
  const rs=()=>{W=c.width=c.offsetWidth*dpr;H=c.height=c.offsetHeight*dpr};rs();addEventListener('resize',rs);
  const cols=['138,15,28','168,23,74','75,24,102','201,160,74','168,23,74'];
  const blobs=cols.map((col,i)=>({col,a:Math.random()*6.28,r:.28+Math.random()*.18,sp:.0006+Math.random()*.0005,ox:.15+i*.17,oy:.55+Math.random()*.25}));
  const dust=Array.from({length:MOB()?45:110},()=>({x:Math.random(),y:Math.random(),r:Math.random()*1.6+.3,v:Math.random()*.00035+.0001,o:Math.random()}));
  let mx=.5,my=.5;addEventListener('pointermove',e=>{mx=e.clientX/innerWidth;my=e.clientY/innerHeight});
  const t0=performance.now();
  (function f(){
    const t=performance.now()-t0;x.clearRect(0,0,W,H);x.globalCompositeOperation='lighter';
    blobs.forEach((b,i)=>{const px=(b.ox+Math.cos(b.a+t*b.sp)*.12+(mx-.5)*.04*(i+1))*W,py=(b.oy+Math.sin(b.a+t*b.sp*1.3)*.1+(my-.5)*.03)*H,R=b.r*Math.max(W,H);
      const g=x.createRadialGradient(px,py,0,px,py,R);g.addColorStop(0,`rgba(${b.col},.32)`);g.addColorStop(1,`rgba(${b.col},0)`);x.fillStyle=g;x.fillRect(0,0,W,H)});
    dust.forEach(d=>{d.y-=d.v;if(d.y<-.02){d.y=1.02;d.x=Math.random()}const tw=.5+.5*Math.sin(t*.002+d.o*9);x.fillStyle=`rgba(232,203,134,${.25+tw*.55})`;x.beginPath();x.arc(d.x*W+Math.sin(t*.0005+d.o*6)*12*dpr,d.y*H,d.r*dpr,0,6.28);x.fill()});
    x.globalCompositeOperation='source-over';rafS=requestAnimationFrame(f);
  })();
}

/* --- positions des flacons du hero (rangée en profondeur) --- */
function placerFlacons(spread=1){
  const imgs=$$('#flacons img');if(!imgs.length)return;
  const unit=MOB()?17:15.5;
  imgs.forEach(im=>{const i=+im.dataset.i,d=i-2,s=1-Math.abs(d)*.17;
    gsap.set(im,{xPercent:-50,x:`${d*unit*spread}vw`,scale:s,zIndex:10-Math.abs(d),filter:`drop-shadow(0 30px 40px rgba(0,0,0,.45)) brightness(${1-Math.abs(d)*.12})`})});
}
function animAccueil(intro){
  sillage();placerFlacons(0);
  const tl=gsap.timeline({delay:intro?.2:0});
  split($('#hTitre .l1'));split($('#hTitre .l2'));
  tl.from('#hTitre .w>span',{yPercent:120,duration:1.6,ease:'expo.out',stagger:.08})
    .from('#flacons img',{y:'40vh',opacity:0,duration:1.6,ease:'expo.out',stagger:{each:.08,from:'center'}},.15)
    .add(()=>{},'<')
    .to({},{duration:.01,onComplete:()=>{}})
    .fromTo({s:0},{s:0},{s:1,duration:1.6,ease:'expo.inOut',onUpdate(){placerFlacons(this.targets()[0].s)}},.6)
    .from('.hero .pied',{opacity:0,y:20,duration:1},1.2);
  // parallaxe souris
  if(matchMedia('(hover:hover)').matches){
    const fl=$('#flacons');addEventListener('pointermove',e=>{if(!fl.isConnected)return;const dx=e.clientX/innerWidth-.5,dy=e.clientY/innerHeight-.5;
      $$('img',fl).forEach(im=>{const d=Math.abs(+im.dataset.i-2);gsap.to(im,{xPercent:-50+dx*(8-d*2.5),yPercent:dy*(4-d),duration:1.4,ease:'power3',overwrite:'auto'})});
      gsap.to('#hTitre',{x:-dx*30,y:-dy*16,duration:1.6,ease:'power3'})});
  }
  // scroll hero : le titre recule, les flacons s'écartent et montent
  gsap.timeline({scrollTrigger:{trigger:'#hero',start:'top top',end:'bottom top',scrub:true}})
    .to('#hTitre',{yPercent:-40,opacity:0,scale:.92,ease:'none'},0)
    .to('#flacons',{y:'-14vh',ease:'none'},0)
    .to({s:1},{s:1.5,ease:'none',onUpdate(){placerFlacons(this.targets()[0].s)}},0);
  // marquee lié au scroll
  const rang=$('#rang1');let px=0,vit=1;
  gsap.ticker.add(defile);function defile(){if(!rang.isConnected){gsap.ticker.remove(defile);return}px-=vit;const w=rang.scrollWidth/3;if(-px>w)px+=w;rang.style.transform=`translateX(${px}px)`}
  ScrollTrigger.create({trigger:'.defile',start:'top bottom',end:'bottom top',onUpdate:s=>{vit=1+Math.abs(s.getVelocity())/180;gsap.to({},{duration:.6,onComplete:()=>vit=1})}});
  // manifeste mot à mot
  const m=$('#manif');const mots=[];m.querySelectorAll('em').forEach(e=>e.dataset.k=1);
  (function wrap(n){[...n.childNodes].forEach(c=>{if(c.nodeType===3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(t=>{if(/^\s+$/.test(t)||!t){f.append(t);return}const s=document.createElement('span');s.className='mot';s.textContent=t;mots.push(s);f.append(s)});c.replaceWith(f)}else wrap(c)})})(m);
  gsap.to(mots,{opacity:1,stagger:.1,ease:'none',scrollTrigger:{trigger:m,start:'top 78%',end:'bottom 45%',scrub:true}});
  femmes();horiz();
  gsap.to('#monog',{rotate:90,scale:1.12,ease:'none',scrollTrigger:{trigger:'.hist',start:'top bottom',end:'bottom top',scrub:true}});
  // éventail du coffret
  animEcrin(true);
}

function animEcrin(scroll){
  const f=$$('#ecrin .fl-w');if(!f.length)return;
  const cfg={y:'62%',rotate:0,duration:1.6,ease:'expo.out',stagger:.12};
  if(scroll)gsap.from(f,{...cfg,scrollTrigger:{trigger:'#ecrin',start:'top 70%'}});else gsap.from(f,{...cfg,delay:.4});
  gsap.to(f,{y:i=>[-6,-16,-24,-16,-6][i],rotate:i=>(i-2)*4,duration:1.8,ease:'expo.out',delay:scroll?0:1.2,scrollTrigger:scroll?{trigger:'#ecrin',start:'top 55%'}:null});
}
/* --- section épinglée « cinq femmes » --- */
let fIdx=0,fST;
function femmes(){
  const sec=$('#femmes');if(!sec)return;
  const imgs=$$('.centre img',sec),fonds=$$('.fond',sec),G=$$('.gauche .bloc',sec),D=$$('.droite .bloc',sec),bars=$$('.prog i',sec),btns=$$('.prog button',sec);
  gsap.set(imgs,{opacity:0,y:60,rotate:-6,scale:.9});gsap.set(imgs[0],{opacity:1,y:0,rotate:0,scale:1});
  $$('h2',sec).forEach(split);
  const montrer=(i,prev)=>{
    const dir=i>prev?1:-1;
    fonds.forEach((f,k)=>gsap.to(f,{opacity:k===i?1:0,duration:1.1,ease:'power2.inOut'}));
    sec.classList.toggle('claire',!!P[i].claire);
    gsap.to(imgs[prev],{opacity:0,y:-80*dir,rotate:8*dir,scale:.88,duration:.9,ease:'power3.inOut'});
    gsap.fromTo(imgs[i],{opacity:0,y:100*dir,rotate:-8*dir,scale:.9},{opacity:1,y:0,rotate:0,scale:1,duration:1.2,ease:'expo.out',delay:.15});
    [G,D].forEach(L=>{L[prev].classList.remove('on');L[i].classList.add('on')});
    gsap.fromTo($$('.w>span',G[i]),{yPercent:115},{yPercent:0,duration:1.1,ease:'expo.out',stagger:.06});
    gsap.fromTo([$('.label',G[i]),$('.recit',G[i]),...$$('.notes div,.btn',D[i])],{opacity:0,y:24},{opacity:1,y:0,duration:1,ease:'expo.out',stagger:.07,delay:.1});
    const num=$('#fNum');gsap.to(num,{opacity:0,y:-30*dir,duration:.35,onComplete:()=>{num.textContent=P[i].n;gsap.fromTo(num,{opacity:0,y:30*dir},{opacity:1,y:0,duration:.6})}});
    btns.forEach((b,k)=>b.classList.toggle('on',k===i));
  };
  fST=ScrollTrigger.create({trigger:sec,start:'top top',end:()=>'+='+innerHeight*4.2,pin:true,anticipatePin:1,
    onUpdate:s=>{const p=s.progress*5,i=Math.min(4,Math.floor(p));bars.forEach((b,k)=>gsap.set(b,{scaleX:k<i?1:k===i?p-i:0}));if(i!==fIdx){const pr=fIdx;fIdx=i;montrer(i,pr)}}});
  fIdx=0;
}
function allerFemme(i){if(!fST)return;const y=fST.start+(fST.end-fST.start)*(i+.5)/5;lenis?lenis.scrollTo(y,{duration:1.4}):scrollTo({top:y,behavior:'smooth'})}

/* --- collection horizontale --- */
function horiz(){
  const sec=$('#horiz'),piste=$('#piste');if(!sec)return;
  if(MOB()){sec.style.overflowX='auto';sec.style.scrollSnapType='x mandatory';$$('.produit',piste).forEach(p=>p.style.scrollSnapAlign='center');return}
  gsap.to(piste,{x:()=>-(piste.scrollWidth-innerWidth),ease:'none',scrollTrigger:{trigger:sec,start:'top top',end:()=>'+='+(piste.scrollWidth-innerWidth),pin:true,scrub:1,invalidateOnRefresh:true,anticipatePin:1}});
  $$('.produit img',piste).forEach(im=>gsap.fromTo(im,{rotate:-4},{rotate:4,ease:'none',scrollTrigger:{trigger:sec,start:'top top',end:()=>'+='+(piste.scrollWidth-innerWidth),scrub:true}}));
}

/* ================= COLLECTION (éditoriale, alternée) ================= */
function pageCollection(){
 return `<section class="ed-tete" data-header="sombre"><div class="label">Collection N°1 · Eaux de parfum</div><h1 class="display" data-rev>Les parfums</h1><p class="recit" data-fade>Cinq parfums de niche, cinq caractères. Laquelle êtes-vous aujourd'hui ?</p></section>
 ${P.map((p,i)=>`<section class="ed ${i%2?'inv':''}" data-header="${i%2?'clair':'clair'}">
   <div class="img" data-cur="Voir" onclick="location.hash='#/parfum/${p.slug}'"><div class="fd" style="background:${p.g}"></div><img src="${IMG(p.slug)}" alt="Flacon ${p.nom}" loading="lazy" data-par="-8"></div>
   <div class="txt"><div class="label">N°${p.n} · ${p.fam}</div><h2 class="display" data-rev>${p.nom}</h2><p class="recit" data-fade>${p.accroche}</p>
   <div class="pyr" data-fade><b>Tête</b>${p.tete.join(', ')}<br><b>Cœur</b>${p.coeur.join(', ')}<br><b>Fond</b>${p.fond.join(', ')}</div>
   <div class="act" data-fade><a class="btn sombre" href="#/parfum/${p.slug}">Découvrir <span class="fl">→</span></a><button class="lien" onclick="ajouter('${p.slug}',50)">Ajouter · 50 ml · ${eur(TAILLES[1].prix)}</button></div></div>
 </section>`).join('')}
 <section class="quiz-cta clair-sec" data-header="clair" style="padding-top:110px">${engag}</section>`;
}

/* ================= PRODUIT ================= */
let tailleP=50;
function pageProduit(slug){
 const p=P.find(x=>x.slug===slug);if(!p)return pageCollection();const autres=P.filter(x=>x!==p);
 return `<section class="p-hero ${p.claire?'claire':''}" id="pHero" data-header="${p.claire?'clair':'sombre'}">
   <div class="fd" style="background:${p.g}"></div>
   <div class="fil"><a href="#/">Accueil</a> · <a href="#/collection">Les parfums</a> · ${p.nom}</div>
   <div class="geant-nom" id="gNom">${p.nom}</div>
   <img class="fl" id="pFl" src="${IMG(p.slug)}" alt="Flacon ${p.nom} FOULA for her, eau de parfum">
   <div class="bas"><div class="g"><span class="label">N°${p.n} · ${p.coul}</span><p>${p.accroche}</p></div>
   <div class="d"><h1 class="display" id="pH1">${p.nom}</h1><div class="px">Eau de parfum · dès ${eur(TAILLES[0].prix)}</div></div></div>
 </section>
 <section class="achat" id="achat" data-header="clair">
   <div class="vis"><div class="fd" style="background:${p.g}"></div><img src="${IMG(p.slug)}" alt="" loading="lazy"></div>
   <div>
     <div class="label">${p.fam} · Eau de parfum</div>
     <h2 class="display" data-rev>${p.nom}</h2>
     <p class="recit" data-fade>${p.desc}</p>
     <div class="prix" id="prixP">${eur(TAILLES[1].prix)} <small>TTC</small></div>
     <div class="label" style="letter-spacing:.26em">Contenance</div>
     <div class="tailles" role="radiogroup" aria-label="Contenance">${TAILLES.map((t,i)=>`<button role="radio" aria-checked="${i==1}" class="${i==1?'on':''}" data-ml="${t.ml}" onclick="taille(this)"><b>${t.ml} ml</b><small>${eur(t.prix)}</small></button>`).join('')}</div>
     <div class="ligne-achat" id="btnAchat"><div class="qte"><button aria-label="Diminuer" onclick="qP(-1)">−</button><span id="qP">1</span><button aria-label="Augmenter" onclick="qP(1)">+</button></div>
     <button class="btn encre" onclick="ajouter('${p.slug}',tailleP,+$('#qP').textContent)">Ajouter au panier <span class="fl">→</span></button></div>
     <div class="reass"><div>Deux échantillons offerts avec votre flacon</div><div>Livraison offerte dès 90 €, expédition sous 48 h</div><div>Écrin cadeau et mot manuscrit sur demande</div></div>
     <div class="acc">
       <details open><summary>Caractère</summary><div class="corps"><div class="jauges"><div class="jauge"><span>Tenue</span><div class="bj"><i style="width:${p.tenue}%"></i></div></div><div class="jauge"><span>Intensité</span><div class="bj"><i style="width:${p.intensite}%"></i></div></div></div></div></details>
       <details><summary>Le rituel</summary><div class="corps">Vaporisez à 15 cm de la peau, sur les points de chaleur : creux du cou, poignets, arrière des oreilles. Ne frottez pas, laissez le parfum se révéler. Pour un sillage plus doux, une brume dans les cheveux suffit.</div></details>
       <details><summary>Composition</summary><div class="corps">Alcohol denat., parfum (fragrance), aqua. Liste complète des allergènes disponible sur demande.</div></details>
       <details><summary>Livraison &amp; retours</summary><div class="corps">Expédition sous 48 h ouvrées en France et en Belgique. Livraison offerte dès 90 €. Retours acceptés sous 14 jours pour tout flacon non ouvert.</div></details>
     </div>
   </div>
 </section>
 <section class="notes-p ${p.claire?'claire':''}" data-header="${p.claire?'clair':'sombre'}">
   ${[['Tête','Les premières minutes',p.tete],['Cœur','Après une demi-heure',p.coeur],['Fond','Le sillage, des heures durant',p.fond]].map((n,i)=>`<div class="n"><div class="fd" style="background:${p.g};opacity:${.72+i*.14}"></div><b data-fade>${['I','II','III'][i]}</b><div><h3>${n[0]}</h3><small>${n[1]}</small><ul>${n[2].map(x=>`<li data-fade>${x}</li>`).join('')}</ul></div></div>`).join('')}
 </section>
 <section class="metas-p" data-header="clair"><div data-fade>Famille<strong>${p.fam}</strong></div><div data-fade>Moment<strong>${p.moment}</strong></div><div data-fade>Sillage<strong>${p.sillage}</strong></div></section>
 <section class="autres" data-header="sombre"><div class="tete"><h2 class="display" data-rev>Les autres femmes FOULA</h2><a class="lien" href="#/collection" style="color:var(--or-clair)">Tous les parfums</a></div>
 <div class="grille">${autres.map(carte).join('')}</div></section>`;
}
function taille(b){tailleP=+b.dataset.ml;$$('.tailles button').forEach(x=>{x.classList.toggle('on',x===b);x.setAttribute('aria-checked',x===b)});$('#prixP').innerHTML=eur(TAILLES.find(t=>t.ml==tailleP).prix)+' <small>TTC</small>';majBarre()}
function qP(d){const e=$('#qP');e.textContent=Math.max(1,+e.textContent+d)}
let pCourant=null;
function majBarre(){const p=pCourant;if(!p)return;$('#barreAchat').innerHTML=`<img src="${IMGS(p.slug)}" alt=""><div class="t"><b>${p.nom}</b><small>Eau de parfum · ${tailleP} ml</small></div><button class="btn or" onclick="ajouter('${p.slug}',tailleP,1)">Ajouter · ${eur(TAILLES.find(t=>t.ml==tailleP).prix)}</button>`}
function animProduit(){
  const tl=gsap.timeline();
  tl.from('#pFl',{y:'30vh',opacity:0,rotate:-6,duration:1.7,ease:'expo.out'}).from('#gNom',{opacity:0,scale:1.15,duration:2,ease:'expo.out'},0).from('.p-hero .bas',{opacity:0,y:30,duration:1.2,ease:'expo.out'},.4);split($('#pH1'));tl.from('#pH1 .w>span',{yPercent:115,duration:1.3,ease:'expo.out',stagger:.07},.5);
  gsap.to('#pFl',{y:'-12vh',rotate:3,ease:'none',scrollTrigger:{trigger:'#pHero',start:'top top',end:'bottom top',scrub:true}});
  gsap.to('#gNom',{xPercent:-12,ease:'none',scrollTrigger:{trigger:'#pHero',start:'top top',end:'bottom top',scrub:true}});
  majBarre();
  ScrollTrigger.create({trigger:'#btnAchat',start:'bottom top',endTrigger:'.autres',end:'top bottom',onToggle:s=>$('#barreAchat').classList.toggle('on',s.isActive)});
}

/* ================= HISTOIRE ================= */
function pageHistoire(){
 return `<section class="ed-tete" data-header="sombre" style="padding-bottom:120px"><div class="label">La maison</div><h1 class="display" data-rev>Celle qu'on<br>appelle Foula</h1><p class="recit" data-fade>Dans sa famille, le parfum ne s'achète pas : il se raconte.</p></section>
 <section class="hist" data-header="sombre">
   <div class="gauche"><div class="cadre"></div><img class="monog" id="monog" src="assets/img/monogramme-or.webp" alt="Monogramme FOULA"><div class="script">Foula</div></div>
   <div class="droite">
     <div class="chap" data-fade><b>I</b><div><h3>L'enfance</h3><p>On le partage autour de la table, on reconnaît quelqu'un à la trace qu'il laisse dans un couloir. C'est dans ce décor qu'a grandi une jeune femme que tous surnomment, depuis toujours, Foula. Très tôt, elle apprend à nommer ce qu'elle sent : la rose qui s'ouvre au matin, la vanille qui réchauffe une étoffe, le fruit rouge qui pétille sur la peau.</p></div></div>
     <div class="chap" data-fade><b>II</b><div><h3>La transmission</h3><p>Cette passion, elle la reçoit en héritage, comme on transmet un bijou de famille. Son frère, installé dans l'univers du parfum, lui ouvre les portes du métier : les matières premières, les accords, l'exigence des grandes maisons. Elle observe, elle apprend, et une évidence s'impose.</p></div></div>
     <div class="chap" data-fade><b>III</b><div><h3>La maison</h3><p>Ce savoir, elle veut l'offrir à son tour. Mais pas à tout le monde : aux femmes, exclusivement. Créer pour elles des parfums qui ne s'excusent pas d'être féminins, qui révèlent plutôt qu'ils ne masquent.</p></div></div>
     <div class="chap" data-fade><b>IV</b><div><h3>Aujourd'hui</h3><p>FOULA for her réunit cinq parfums, cinq visages d'une même femme. Une maison née d'une transmission familiale, signée d'une femme, et dédiée à toutes celles qui font de leur parfum une signature.</p></div></div>
   </div>
 </section>
 <section class="citation clair-sec" data-header="clair"><p data-rev>« Chaque femme a son sillage. <span>Je voulais leur offrir le leur.</span> »</p><div style="font-family:Pinyon;font-size:48px;color:var(--or);margin-top:30px" data-fade>Foula</div></section>
 <section class="quiz-cta clair-sec" data-header="clair" style="padding-top:0"><a class="btn sombre" href="#/collection">Découvrir les parfums <span class="fl">→</span></a>${engag}</section>`;
}

/* ================= DIAGNOSTIC ================= */
const Q=[
 {q:'Votre moment préféré ?',r:[['Le matin','La lumière qui se lève',{2:2,4:1}],["L'après-midi",'Un rendez-vous important',{4:2,2:1}],['Le soir','Une table, une robe',{1:2,0:1}],['Après minuit','Quand tout se tait',{0:2,3:2}]]},
 {q:'Quel mot vous ressemble ?',r:[['Audace','Je ne demande pas la permission',{1:3}],['Mystère','On ne me connaît jamais tout à fait',{3:3}],['Élégance','Le détail fait tout',{4:2,0:1}],['Renouveau','Je change, je me révèle',{2:3}]]},
 {q:'Sur votre peau, vous voulez…',r:[['La vanille','Douce et chic',{0:3}],['Les fruits rouges','Gourmands et sensuels',{1:3}],['La rose','Fraîche et lumineuse',{2:3}],['Les fleurs blanches','Pures et solaires',{4:3}],['Les notes poudrées','Intimes, de peau',{3:3}]]}
];
let sc,eQ;
function pageTrouver(){sc=[0,0,0,0,0];eQ=0;
 return `<section class="quiz-p" data-header="sombre"><div class="label">Le diagnostic olfactif</div><div class="points">${Q.map((_,i)=>`<i class="${i?'':'on'}"></i>`).join('')}</div>
 ${Q.map((x,i)=>`<div class="q ${i?'':'on'}" data-e="${i}"><h2 class="display">${x.q}</h2><div class="choix">${x.r.map(r=>`<button onclick='rep(${JSON.stringify(r[2])})'><small>${r[0]}</small><span>${r[1]}</span></button>`).join('')}</div></div>`).join('')}
 <div class="q" id="res"></div></section>`}
function rep(s){for(const k in s)sc[k]+=s[k];eQ++;
 const qs=$$('.q');const cur=qs.find(q=>q.classList.contains('on'));
 gsap.to(cur,{opacity:0,y:-30,duration:.45,ease:'power2.in',onComplete:()=>{cur.classList.remove('on');gsap.set(cur,{opacity:1,y:0});
  $$('.quiz-p .points i').forEach((p,k)=>p.classList.toggle('on',k<=eQ));
  let nx;if(eQ<Q.length)nx=$(`.q[data-e="${eQ}"]`);else{const i=sc.indexOf(Math.max(...sc)),p=P[i];nx=$('#res');
   nx.innerHTML=`<div class="res"><div class="vis"><div class="fd" style="background:${p.g}"></div><img src="${IMG(p.slug)}" alt="Flacon ${p.nom}"></div><div><div class="label">Votre parfum</div><h2 class="display" style="margin:14px 0 20px;text-align:left">${p.nom}</h2><p class="recit" style="font-size:20px;margin-bottom:22px">${p.accroche}</p><p style="color:rgba(246,237,232,.7);margin-bottom:34px">${p.tete.join(', ')} · ${p.coeur.join(', ')} · ${p.fond.join(', ')}</p><div style="display:flex;gap:14px;flex-wrap:wrap"><button class="btn or" onclick="ajouter('${p.slug}',50)">Ajouter · 50 ml</button><a class="btn" href="#/parfum/${p.slug}">Découvrir <span class="fl">→</span></a></div><p style="margin-top:28px"><button class="lien" onclick="naviguer()">Recommencer</button></p></div></div>`;magnetiser(nx)}
  nx.classList.add('on');gsap.from(nx,{opacity:0,y:40,duration:.9,ease:'expo.out'})}});
}

function pageCoffret(){
 const a=pageAccueil();const c=a.slice(a.indexOf('<section class="coffret"'));const fin=c.indexOf('</section>')+10;
 return `<section class="ed-tete" data-header="sombre" style="padding-bottom:40px"><div class="label">L'avant-goût</div><h1 class="display" data-rev>Le coffret</h1></section>${c.slice(0,fin)}
 <section class="horiz" id="horiz" data-header="sombre" style="padding-top:20px"><div class="piste" id="piste" style="padding-top:60px">${P.map(carte).join('')}</div></section>`;
}


/* ================= PAGES SERVICE CLIENTES ================= */
const INFOS={
 livraison:['Livraison & retours',`<h2>Expédition</h2><p>Chaque commande est préparée à la main, emballée dans son écrin et expédiée sous 48 heures ouvrées. Vous recevez un lien de suivi dès le départ de votre colis.</p>
  <h2>Zones et délais</h2><ul><li>France métropolitaine : 2 à 3 jours ouvrés</li><li>Belgique et Luxembourg : 3 à 4 jours ouvrés</li><li>Union européenne : 4 à 7 jours ouvrés</li></ul>
  <h2>Frais de livraison</h2><p>La livraison est offerte dès 90 € d'achat. En dessous, les frais sont calculés automatiquement à l'étape du paiement, selon le pays et le mode choisi.</p>
  <h2>Retours</h2><p>Vous disposez de 14 jours après réception pour nous retourner un flacon non ouvert et dans son emballage d'origine. Le remboursement est effectué sous 14 jours après réception du retour, sur le moyen de paiement utilisé.</p><p>Pour des raisons d'hygiène, les flacons ouverts et les fioles d'échantillon ne peuvent être repris, sauf défaut.</p>`],
 contact:['Contact',`<h2>Écrivez-nous</h2><p>Une question sur un parfum, une commande ou un cadeau ? Notre équipe vous répond sous 24 heures ouvrées.</p>
  <form class="form-c" onsubmit="event.preventDefault();toast('Message envoyé · réponse sous 24 h');this.reset()">
   <div class="duo"><div><label for="c-p">Prénom</label><input id="c-p" required autocomplete="given-name"></div><div><label for="c-e">E-mail</label><input id="c-e" type="email" required autocomplete="email"></div></div>
   <div><label for="c-s">Sujet</label><select id="c-s"><option>Conseil parfum</option><option>Ma commande</option><option>Cadeau et écrin</option><option>Presse et partenariats</option><option>Autre</option></select></div>
   <div><label for="c-m">Message</label><textarea id="c-m" required></textarea></div>
   <div><button class="btn encre" type="submit">Envoyer <span class="fl">→</span></button></div></form>`],
 faq:['Questions fréquentes',`<div class="faq">
  <details open><summary>Quelle est la concentration des parfums FOULA ?</summary><p>Tous nos parfums sont des eaux de parfum, concentrées pour offrir une belle tenue sur la peau et un sillage présent.</p></details>
  <details><summary>Comment choisir mon parfum à distance ?</summary><p>Faites notre diagnostic olfactif en trois questions, ou commandez le coffret découverte : cinq fioles de 2 ml pour essayer chaque parfum plusieurs jours. Son montant est déduit de votre premier flacon.</p></details>
  <details><summary>Les échantillons sont-ils vraiment offerts ?</summary><p>Oui. Deux échantillons sont glissés dans chaque commande de flacon, pour vous faire découvrir un autre visage de la maison.</p></details>
  <details><summary>Puis-je offrir un parfum FOULA ?</summary><p>Bien sûr. Choisissez l'écrin cadeau et ajoutez un mot : nous l'écrivons à la main et aucun prix n'apparaît dans le colis.</p></details>
  <details><summary>Comment conserver mon parfum ?</summary><p>À l'abri de la lumière et de la chaleur, bouchon bien fermé. Évitez la salle de bain : une coiffeuse ou un tiroir lui conviendront mieux.</p></details>
  <details><summary>Où trouver la liste des allergènes ?</summary><p>La liste complète figure sur chaque emballage et peut vous être envoyée sur simple demande via la page contact.</p></details></div>`],
 cgv:['Conditions générales de vente',`<h2>Objet</h2><p>Les présentes conditions régissent les ventes réalisées sur la boutique en ligne FOULA for her. Toute commande implique leur acceptation sans réserve.</p>
  <h2>Prix</h2><p>Les prix sont indiqués en euros, toutes taxes comprises, hors frais de livraison. Ils peuvent être modifiés à tout moment ; le prix appliqué est celui affiché au moment de la validation de la commande.</p>
  <h2>Commande et paiement</h2><p>La commande est confirmée par e-mail après validation du paiement. Le paiement est sécurisé et s'effectue par carte bancaire, Apple Pay, Google Pay ou PayPal.</p>
  <h2>Droit de rétractation</h2><p>Conformément à l'article L221-18 du Code de la consommation, vous disposez de 14 jours à compter de la réception pour exercer votre droit de rétractation, pour tout produit non ouvert et dans son emballage d'origine.</p>
  <h2>Garanties</h2><p>Les produits bénéficient de la garantie légale de conformité et de la garantie des vices cachés, dans les conditions prévues par la loi.</p>
  <h2>Médiation</h2><p>En cas de litige, une solution amiable sera recherchée en priorité. À défaut, vous pouvez recourir gratuitement à un médiateur de la consommation.</p>`],
 mentions:['Mentions légales',`<h2>Éditeur</h2><p>Le site FOULA for her est édité par la maison FOULA for her. Sa raison sociale, son siège et son immatriculation seront publiés ici à la mise en ligne.</p>
  <h2>Hébergement</h2><p>Shopify International Limited, Victoria Buildings, 1-2 Haddington Road, Dublin 4, Irlande.</p>
  <h2>Propriété intellectuelle</h2><p>La marque FOULA for her, le monogramme, les noms des parfums, les visuels et les textes de ce site sont protégés. Toute reproduction sans autorisation écrite est interdite.</p>
  <h2>Conception</h2><p>Site conçu et développé par Monsieur.H.</p>`],
 confidentialite:['Confidentialité',`<h2>Vos données</h2><p>Nous collectons uniquement les informations nécessaires au traitement de vos commandes, à l'envoi de notre lettre si vous y êtes inscrite, et à l'amélioration de votre expérience.</p>
  <h2>Utilisation</h2><p>Vos données ne sont jamais vendues ni cédées. Elles sont partagées uniquement avec nos prestataires de paiement et de livraison, pour l'exécution de votre commande.</p>
  <h2>Vos droits</h2><p>Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition. Il vous suffit de nous écrire via la page contact.</p>
  <h2>Cookies</h2><p>Nous utilisons des cookies nécessaires au fonctionnement du site et, avec votre accord, des cookies de mesure d'audience.</p>`]
};
function pageInfos(k){
 const it=INFOS[k]||INFOS.livraison;
 return `<section class="ed-tete" data-header="sombre" style="padding-bottom:90px"><div class="label">Service clientes</div><h1 class="display" data-rev style="font-size:clamp(52px,8vw,130px)">${it[0]}</h1></section>
 <section class="infos" data-header="clair"><nav aria-label="Service clientes">${Object.entries(INFOS).map(([s,v])=>`<a href="#/infos/${s}" class="${(INFOS[k]?k:'livraison')===s?'on':''}">${v[0]}</a>`).join('')}</nav><div class="corps-i" data-fade>${it[1]}</div></section>`;
}
/* ================= ROUTEUR, SEO, HEADER ================= */
const META={
 '':['FOULA for her — Parfums de niche par une femme, pour les femmes',"Maison de parfum de niche féminine : cinq eaux de parfum créées par une femme, pour les femmes."],
 collection:['Les parfums — FOULA for her',"Minuit Passé, Elle Ose, C'est Elle, Secret de Femme, Belle Allure : les cinq eaux de parfum FOULA for her."],
 histoire:['La maison — FOULA for her',"L'histoire de Foula : une passion du parfum transmise en famille, offerte exclusivement aux femmes."],
 trouver:['Le diagnostic olfactif — FOULA for her','Trois questions pour découvrir le parfum FOULA qui vous ressemble.'],
 coffret:['Coffret découverte 5 × 2 ml — FOULA for her','Les cinq parfums FOULA en miniatures de 2 ml, pour choisir le vôtre.']
};
const meta=(t,d)=>{document.title=t;$('meta[name=description]').setAttribute('content',d)};
let premier=true;
function naviguer(){
  if(premier){rendre(true);return}
  const v=$('#voilePage');
  gsap.timeline().set(v,{yPercent:100,y:0,visibility:'visible'}).to(v,{yPercent:0,duration:.7,ease:'expo.inOut'}).add(()=>rendre(false)).to(v,{yPercent:-100,duration:.8,ease:'expo.inOut'}).set(v,{visibility:'hidden'});
}
function rendre(intro){try{_rendre(intro)}catch(e){console.error('FOULA',e);premier=false;ScrollTrigger.refresh()}}
function _rendre(intro){
  cancelAnimationFrame(rafS);ScrollTrigger.getAll().forEach(t=>t.kill());fST=null;pCourant=null;
  tiroir(false);menu(false);$('#barreAchat').classList.remove('on');
  const h=location.hash.replace(/^#\/?/,'').split('/'),app=$('#app');let ld='';
  if(lenis)lenis.scrollTo(0,{immediate:true});else scrollTo(0,0);
  if(h[0]==='infos'){const it=INFOS[h[1]]||INFOS.livraison;app.innerHTML=pageInfos(h[1]);meta(`${it[0]} — FOULA for her`,`${it[0]} : toutes les informations de la maison FOULA for her.`)}
  else if(h[0]==='parfum'){const p=P.find(x=>x.slug===h[1]);app.innerHTML=pageProduit(h[1]);tailleP=50;
    if(p){pCourant=p;meta(`${p.nom} — Eau de parfum ${p.fam.toLowerCase()} | FOULA for her`,`${p.nom}, eau de parfum FOULA for her. ${p.accroche}`);
      ld=JSON.stringify({"@context":"https://schema.org","@type":"Product","name":p.nom,"brand":{"@type":"Brand","name":"FOULA for her"},"description":p.desc,"category":"Eau de parfum","offers":{"@type":"AggregateOffer","priceCurrency":"EUR","lowPrice":TAILLES[0].prix,"highPrice":TAILLES[2].prix,"offerCount":3,"availability":"https://schema.org/InStock"}});animProduit()}}
  else{const k=h[0]||'',f={collection:pageCollection,histoire:pageHistoire,trouver:pageTrouver,coffret:pageCoffret}[k]||pageAccueil;app.innerHTML=f();meta(...(META[k]||META['']));
    if(f===pageAccueil)animAccueil(intro);
    if(f===pageHistoire)gsap.to('#monog',{rotate:90,scale:1.12,ease:'none',scrollTrigger:{trigger:'.hist',start:'top bottom',end:'bottom top',scrub:true}});
    if(f===pageCoffret){animEcrin(false);horiz()}
    if(f===pageTrouver)gsap.from('.quiz-p .q.on',{opacity:0,y:40,duration:1.1,ease:'expo.out',delay:.2})}
  $('#ld-page').textContent=ld;
  $$('[data-nav]').forEach(a=>a.classList.toggle('actif',a.dataset.nav===h[0]));
  revelerTitres(app);magnetiser(app);lastY=0;$('#header').classList.remove('cache');onScroll();
  let rT;$$('img',app).forEach(i=>{if(!i.complete)i.addEventListener('load',()=>{clearTimeout(rT);rT=setTimeout(()=>ScrollTrigger.refresh(),120)},{once:true})});
  requestAnimationFrame(()=>ScrollTrigger.refresh());
  premier=false;
}
/* header : se cache en descendant, change de couleur selon la section */
let lastY=0;
function headerTheme(){
  const hd=$('#header'),ligne=hd.offsetHeight/2;let clair=false;
  for(const sec of $$('[data-header]')){const r=sec.getBoundingClientRect();if(r.top<=ligne&&r.bottom>ligne){clair=sec.dataset.header==='clair';break}}
  hd.classList.toggle('sur-clair',clair);
}
function onScroll(){
  const y=Math.max(window.scrollY||0,document.documentElement.scrollTop||0,document.body.scrollTop||0,lenis?lenis.scroll:0),hd=$('#header');
  hd.classList.toggle('haut',y<=12);
  if(!$('#tiroir').classList.contains('on')){if(y>lastY+8&&y>420)hd.classList.add('cache');else if(y<lastY-4||y<420)hd.classList.remove('cache')}
  lastY=y;headerTheme();
}
addEventListener('scroll',onScroll,{passive:true});document.addEventListener('touchmove',onScroll,{passive:true});if(lenis)lenis.on('scroll',onScroll);
/* contrôle à chaque image : couvre le défilement par inertie de l'iPhone */
let _yv=-1;gsap.ticker.add(()=>{const y=Math.max(window.scrollY||0,document.documentElement.scrollTop||0,document.body.scrollTop||0);if(y!==_yv){_yv=y;onScroll()}});
document.body.addEventListener('scroll',onScroll,{passive:true});
addEventListener('hashchange',naviguer);
addEventListener('keydown',e=>{if(e.key==='Escape'){tiroir(false);menu(false)}});
let rsT;addEventListener('resize',()=>{clearTimeout(rsT);rsT=setTimeout(()=>{if(innerWidth!==window._w){window._w=innerWidth;rendre(false)}},400)});window._w=innerWidth;

/* ================= LOADER ================= */
$('#footP').innerHTML=P.map(p=>`<li><a href="#/parfum/${p.slug}">${p.nom}</a></li>`).join('');
majPanier();
function libererLoader(){const l=$('#loader');if(l)l.remove();document.body.classList.remove('charge');go()}
/* filet de sécurité : quoi qu'il arrive, le site s'affiche au bout de 6 s */
setTimeout(()=>{if($('#loader')){try{if(premier)rendre(true)}catch(e){console.error(e)}libererLoader()}},6000);
(function intro(){
  const cpt=$('#loader .compte'),o={v:0};
  if(RM||!window.gsap){libererLoader();try{naviguer()}catch(e){console.error(e)}return}
  document.body.classList.add('charge');stop();
  gsap.timeline()
   .from('#loader .mono',{opacity:0,scale:.7,duration:1.1,ease:'expo.out'})
   .from('#loader .nom',{opacity:0,letterSpacing:'1.2em',duration:1.4,ease:'expo.out'},.1)
   .to(o,{v:100,duration:1.6,ease:'power2.inOut',onUpdate:()=>cpt.textContent=String(Math.round(o.v)).padStart(3,'0')},.2)
   .to('#loader .trait i',{scaleX:1,duration:1.6,ease:'power2.inOut'},.2)
   .add(()=>{try{naviguer()}catch(e){console.error(e)}},1.6)
   .to('#loader .centre',{opacity:0,y:-20,duration:.6,ease:'power2.in'},1.85)
   .to('#loader .haut',{yPercent:-100,duration:1.2,ease:'expo.inOut'},2.2)
   .to('#loader .bas',{yPercent:100,duration:1.2,ease:'expo.inOut'},2.2)
   .add(libererLoader);
})();
