import{r as w,j as h,c as no,R as so}from"./react-vendor-Ds7D3P6J.js";import{S as On,C as hn,G as dn,B as un,T as yi,D as io,F as Mn,a as ro,U as oo,b as ao,P as Es,c as lo,V as fn,M as co,d as ho,H as uo,e as fo,Z as po,f as mo,g as go,E as _o,h as yo,i as vo,A as bo,L as ws}from"./icons-DUVW3UYy.js";import{g as Ge}from"./data-RuIHB0H8.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Co({progressData:n,setTab:e}){const{currentDay:t,completedDays:s,totalHours:i,streak:r}=n,[o,a]=w.useState(!1),l=(()=>{try{const f=JSON.parse(localStorage.getItem("english_game_stats")||"{}"),p=JSON.parse(localStorage.getItem("english_daily_vocab_goal")||"{}"),g=JSON.parse(localStorage.getItem("english_vocab_srs_state")||"{}"),_=Object.values(g),T=_.filter(O=>O.stage>=3||O.mastered).length,R=_.filter(O=>O.stage===1||O.stage===2).length,X=_.filter(O=>O.soundGap).length;return{xp:f.xp||0,level:f.level||1,bestStreak:f.bestStreak||0,todayCount:p.count||0,todayTarget:p.target||100,masteredCount:T,reviewingCount:R,soundGapCount:X,totalTracked:Object.keys(g).length}}catch{return{xp:0,level:1,bestStreak:0,todayCount:0,todayTarget:100,masteredCount:0,reviewingCount:0,soundGapCount:0,totalTracked:0}}})(),c=Math.min(100,Math.round(l.todayCount/l.todayTarget*100)),u=()=>{const f={version:"1.0",exportDate:new Date().toISOString(),english_immersion_progress:localStorage.getItem("english_immersion_progress"),english_game_stats:localStorage.getItem("english_game_stats"),english_daily_vocab_goal:localStorage.getItem("english_daily_vocab_goal"),english_vocab_srs_state:localStorage.getItem("english_vocab_srs_state")},p=new Blob([JSON.stringify(f,null,2)],{type:"application/json"}),g=URL.createObjectURL(p),_=document.createElement("a");_.href=g,_.download=`english_immersion_backup_${new Date().toISOString().slice(0,10)}.json`,_.click(),URL.revokeObjectURL(g)},d=f=>{var _;const p=(_=f.target.files)==null?void 0:_[0];if(!p)return;const g=new FileReader;g.onload=T=>{try{const R=JSON.parse(T.target.result);R.english_immersion_progress&&localStorage.setItem("english_immersion_progress",R.english_immersion_progress),R.english_game_stats&&localStorage.setItem("english_game_stats",R.english_game_stats),R.english_daily_vocab_goal&&localStorage.setItem("english_daily_vocab_goal",R.english_daily_vocab_goal),R.english_vocab_srs_state&&localStorage.setItem("english_vocab_srs_state",R.english_vocab_srs_state),a(!0),setTimeout(()=>{window.location.reload()},1200)}catch{alert("Erro ao ler o arquivo de backup. Verifique se o arquivo está correto.")}},g.readAsText(p)};return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.75rem",maxWidth:"1000px",margin:"0 auto"},children:[h.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)",border:"1px solid var(--accent-amber)",borderRadius:"var(--radius-xl)",padding:"2rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1.5rem"},children:[h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem",flexWrap:"wrap"},children:[h.jsxs("span",{className:"badge badge-amber",children:[h.jsx(On,{size:14})," Imersão Acelerada (4 Meses)"]}),h.jsxs("span",{className:"badge badge-emerald",children:[h.jsx(hn,{size:14})," Firebase Realtime Cloud: concursos-20cce"]})]}),h.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:800,marginBottom:"0.4rem"},children:"Seu Progresso de Imersão & Fluência"}),h.jsxs("p",{style:{color:"var(--text-secondary)",maxWidth:"650px",fontSize:"0.95rem"},children:["Sincronizado automaticamente pelo ",h.jsx("strong",{children:"Firebase Realtime Database"})," entre o seu Computador e Celular!"]})]}),h.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[h.jsxs("button",{className:"btn btn-emerald",onClick:()=>e("game"),style:{padding:"0.75rem 1.5rem",fontSize:"0.95rem"},children:[h.jsx(dn,{size:18})," Jogar Game de Escuta"]}),h.jsxs("button",{className:"btn btn-primary",onClick:()=>e("ai"),style:{padding:"0.75rem 1.5rem",fontSize:"0.95rem"},children:[h.jsx(un,{size:18})," Conversar com IA por Voz"]})]})]}),h.jsxs("div",{className:"grid-cards",children:[h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"card-header",children:[h.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:600},children:"VOCABULÁRIO HOJE"}),h.jsx(yi,{size:20,color:"var(--accent-amber)"})]}),h.jsxs("div",{style:{fontSize:"2rem",fontWeight:800,color:"var(--accent-amber)",marginBottom:"0.5rem"},children:[l.todayCount," ",h.jsxs("span",{style:{fontSize:"1rem",color:"var(--text-muted)",fontWeight:500},children:["/ ",l.todayTarget," palavras"]})]}),h.jsx("div",{className:"progress-bar-bg",children:h.jsx("div",{className:"progress-bar-fill",style:{width:`${c}%`}})}),h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"0.5rem",fontSize:"0.8rem",color:"var(--text-secondary)"},children:[h.jsxs("span",{children:[c,"% da Meta de Hoje"]}),h.jsxs("span",{children:["Faltam ",Math.max(0,l.todayTarget-l.todayCount)," palavras"]})]})]}),h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"card-header",children:[h.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:600},children:"BANCO DE RETENÇÃO (SRS)"}),h.jsx(io,{size:20,color:"var(--accent-emerald)"})]}),h.jsxs("div",{style:{fontSize:"2rem",fontWeight:800,color:"var(--accent-emerald)",marginBottom:"0.5rem"},children:[l.masteredCount," ",h.jsx("span",{style:{fontSize:"1rem",color:"var(--text-muted)",fontWeight:500},children:"dominadas"})]}),h.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:["🟨 ",h.jsx("strong",{children:l.reviewingCount})," em revisão • 👂 ",h.jsx("strong",{children:l.soundGapCount})," foco em pronúncia"]})]}),h.jsxs("div",{className:"card",children:[h.jsxs("div",{className:"card-header",children:[h.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:600},children:"NÍVEL & COMBO"}),h.jsx(Mn,{size:20,color:"var(--accent-amber)"})]}),h.jsxs("div",{style:{fontSize:"2rem",fontWeight:800,color:"var(--accent-blue)",marginBottom:"0.5rem"},children:["Nível ",l.level," ",h.jsxs("span",{style:{fontSize:"1rem",color:"var(--accent-amber)",fontWeight:700},children:["(",l.xp," XP)"]})]}),h.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:["Sequência: ",h.jsxs("strong",{children:[r," dias"]})," • Recorde: ",h.jsxs("strong",{children:[l.bestStreak,"x combo 🔥"]})]})]})]}),h.jsxs("div",{className:"card",style:{borderColor:"rgba(16, 185, 129, 0.4)",background:"linear-gradient(135deg, var(--bg-card) 0%, rgba(16, 185, 129, 0.08) 100%)"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[h.jsxs("div",{children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.4rem"},children:[h.jsx(hn,{size:18,color:"var(--accent-emerald)"}),h.jsx("span",{className:"badge badge-emerald",children:"Firebase Realtime Database Ativo"})]}),h.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800},children:"Sincronização em Nuvem Global"}),h.jsxs("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",marginTop:"0.2rem",maxWidth:"650px"},children:["Seu banco de dados do Firebase (",h.jsx("strong",{children:"concursos-20cce"}),") está conectado. Você pode abrir o app em qualquer lugar do mundo no seu celular ou PC: o progresso sincroniza em milissegundos via WebSocket!"]})]}),h.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",alignItems:"center"},children:[h.jsxs("button",{className:"btn btn-secondary",onClick:u,style:{fontSize:"0.85rem"},children:[h.jsx(ro,{size:16})," Baixar Backup Local (.json)"]}),h.jsxs("label",{className:"btn btn-primary",style:{fontSize:"0.85rem",cursor:"pointer",margin:0},children:[h.jsx(oo,{size:16})," Restaurar Arquivo",h.jsx("input",{type:"file",accept:".json",onChange:d,style:{display:"none"}})]})]})]}),o&&h.jsxs("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"var(--accent-emerald-glow)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-sm)",color:"var(--accent-emerald)",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(ao,{size:16})," Backup restaurado e sincronizado com o Firebase com sucesso!"]})]})]})}const So=()=>{const n=window.speechSynthesis.getVoices();return n.length===0?null:n.find(e=>e.lang.startsWith("en")&&(e.name.toLowerCase().includes("natural")||e.name.toLowerCase().includes("online")||e.name.toLowerCase().includes("google us english")||e.name.toLowerCase().includes("samantha")||e.name.toLowerCase().includes("jenny")||e.name.toLowerCase().includes("guy")||e.name.toLowerCase().includes("aria")))||n.find(e=>e.lang==="en-US")||n.find(e=>e.lang.startsWith("en"))},Se=(n,e=.9)=>{if(!n)return;const t=n.trim();if("speechSynthesis"in window&&window.speechSynthesis.cancel(),t.length<200)try{const s=`https://translate.google.com/translate_tts?ie=UTF-8&tl=en-US&client=tw-ob&q=${encodeURIComponent(t)}`,i=new Audio(s);i.playbackRate=e||.9;const r=i.play();r!==void 0&&r.then(()=>{}).catch(o=>{console.log("Fallback to WebSpeech SpeechSynthesis:",o),Is(t,e)});return}catch(s){console.warn("Neural audio stream fallback:",s)}Is(t,e)},Is=(n,e)=>{if(!("speechSynthesis"in window))return;const t=new SpeechSynthesisUtterance(n);t.lang="en-US",t.rate=e,t.pitch=1;const s=()=>{const i=So();i&&(t.voice=i),window.speechSynthesis.speak(t)};window.speechSynthesis.getVoices().length>0?s():window.speechSynthesis.onvoiceschanged=()=>{s(),window.speechSynthesis.onvoiceschanged=null}},Eo={hello:{pt:"olá",pos:"saudação"},ruan:{pt:"Ruan (seu nome)",pos:"nome próprio"},i:{pt:"eu",pos:"pronome"},am:{pt:"sou / estou",pos:"verbo to be"},your:{pt:"seu / sua",pos:"possessivo"},live:{pt:"ao vivo",pos:"adjetivo"},ai:{pt:"IA (Inteligência Artificial)",pos:"substantivo"},coach:{pt:"tutor / treinador",pos:"substantivo"},what:{pt:"qual / o que",pos:"pronome de pergunta"},technology:{pt:"tecnologia",pos:"substantivo"},do:{pt:"verbo auxiliar de pergunta",pos:"auxiliar"},you:{pt:"você",pos:"pronome"},like:{pt:"gostar",pos:"verbo"},software:{pt:"programa / software",pos:"substantivo"},development:{pt:"desenvolvimento",pos:"substantivo"},and:{pt:"e",pos:"conjunção"},english:{pt:"inglês",pos:"substantivo"},go:{pt:"ir / caminhar",pos:"verbo"},hand:{pt:"mão",pos:"substantivo"},in:{pt:"em / dentro",pos:"preposição"},favorite:{pt:"favorito / preferido",pos:"adjetivo"},awesome:{pt:"incrível / sensacional",pos:"adjetivo"},computer:{pt:"computador",pos:"substantivo"},science:{pt:"ciência",pos:"substantivo"},engineering:{pt:"engenharia",pos:"substantivo"},are:{pt:"são / estão",pos:"verbo to be"},great:{pt:"ótimo / grande",pos:"adjetivo"},fields:{pt:"áreas / campos de atuação",pos:"substantivo"},write:{pt:"escrever",pos:"verbo"},code:{pt:"código / programar",pos:"substantivo/verbo"},every:{pt:"todo / cada",pos:"adjetivo"},day:{pt:"dia",pos:"substantivo"},learning:{pt:"aprendendo",pos:"verbo gerúndio"},step:{pt:"passo",pos:"substantivo"},by:{pt:"por / através de",pos:"preposição"},is:{pt:"é / está",pos:"verbo to be"},main:{pt:"principal",pos:"adjetivo"},goal:{pt:"meta / objetivo",pos:"substantivo"}};function wo(){const[n,e]=w.useState([{id:1,sender:"ai",text:"Hello Ruan! I am your Live AI Coach. What technology do you like?",ptTranslation:"Olá Ruan! Eu sou seu Tutor de IA Ao Vivo. De qual tecnologia você gosta?",suggestions:[{en:"I like Python and web development.",pt:"Eu gosto de Python e desenvolvimento web."},{en:"I use JavaScript on my computer.",pt:"Eu uso JavaScript no meu computador."},{en:"I am learning software engineering.",pt:"Estou aprendendo engenharia de software."}]}]),[t,s]=w.useState(""),[i,r]=w.useState(!1),[o,a]=w.useState(!1),[l,c]=w.useState(!1),[u,d]=w.useState(null),f=w.useRef(null),p=w.useRef(null);w.useEffect(()=>{if("SpeechRecognition"in window||"webkitSpeechRecognition"in window){c(!0);const b=window.SpeechRecognition||window.webkitSpeechRecognition;p.current=new b,p.current.continuous=!1,p.current.interimResults=!1,p.current.lang="en-US",p.current.onresult=N=>{const L=N.results[0][0].transcript;s(L),T(L)},p.current.onend=()=>{r(!1),o&&setTimeout(()=>{var N;try{(N=p.current)==null||N.start(),r(!0)}catch(L){console.log("Recognition restart note:",L)}},1500)},p.current.onerror=()=>{r(!1)}}},[o]),w.useEffect(()=>{var b;(b=f.current)==null||b.scrollIntoView({behavior:"smooth"})},[n]);const g=()=>{var b;o?(a(!1),r(!1),(b=p.current)==null||b.stop()):(a(!0),r(!0),Se("Hello Ruan! Live call active. Speak to me naturally in English!",.88),setTimeout(()=>{var N;try{(N=p.current)==null||N.start()}catch{}},3500))},_=()=>{var b,N;l&&(i?((b=p.current)==null||b.stop(),r(!1)):(r(!0),(N=p.current)==null||N.start()))},T=(b=t)=>{if(!b.trim())return;const N={id:Date.now(),sender:"user",text:b};e(L=>[...L,N]),s(""),setTimeout(()=>{R(b)},600)},R=b=>{const N=b.toLowerCase();let L="Software development and English go hand in hand! What is your favorite technology?",re="Desenvolvimento de software e inglês andam de mãos dadas! Qual é a sua tecnologia favorita?",G=[{en:"I like Python and web development.",pt:"Eu gosto de Python e dev web."},{en:"I use JavaScript on my computer.",pt:"Eu uso JavaScript no meu computador."},{en:"I am learning software engineering.",pt:"Estou aprendendo engenharia de software."}];N.includes("python")||N.includes("code")||N.includes("computer")||N.includes("javascript")?(L="Awesome! Computer science and software engineering are great fields. Do you write code every day?",re="Incrível! Ciência da computação e engenharia de software são ótimas áreas. Você escreve código todos os dias?",G=[{en:"Yes, I code every day.",pt:"Sim, eu programo todos os dias."},{en:"I am building a new project.",pt:"Estou construindo um projeto novo."},{en:"I want to work in tech.",pt:"Quero trabalhar na área de tecnologia."}]):(N.includes("english")||N.includes("study")||N.includes("hello")||N.includes("hi"))&&(L="Learning English step by step is awesome! What is your main goal?",re="Aprender inglês passo a passo é incrível! Qual é o seu principal objetivo?",G=[{en:"My goal is a tech job.",pt:"Meu objetivo é um emprego em tecnologia."},{en:"I want to speak fluently.",pt:"Quero falar com fluência."},{en:"I study 4 hours a day.",pt:"Estudo 4 horas por dia."}]);const $={id:Date.now()+1,sender:"ai",text:L,ptTranslation:re,suggestions:G};e(I=>[...I,$]),Se(L,.88)},X=b=>{s(b),T(b)},O=b=>b.split(" ").map((L,re)=>{const G=L.toLowerCase().replace(/[^a-z]/g,""),$=Eo[G];return h.jsxs("span",{onClick:()=>{$&&(d({word:G,info:$}),Se(G,.82))},onMouseEnter:()=>{$&&d({word:G,info:$})},style:{cursor:$?"pointer":"default",padding:"0 2px",borderRadius:"4px",textDecoration:$?"underline":"none",textDecorationColor:"var(--accent-blue)",textUnderlineOffset:"3px",color:"var(--text-primary)",transition:"all 0.15s ease"},title:$?`Clique ou passe o mouse: "${G}" = ${$.pt}`:void 0,children:[L," "]},re)});return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"1000px",margin:"0 auto"},children:[h.jsxs("div",{style:{background:o?"linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(2, 132, 199, 0.25) 100%)":"linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(192, 132, 252, 0.18) 100%)",border:o?"2px solid var(--accent-emerald)":"1px solid var(--accent-blue)",borderRadius:"var(--radius-xl)",padding:"1.5rem",display:"flex",justify:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.3rem"},children:h.jsxs("span",{className:`badge ${o?"badge-emerald":"badge-blue"}`,children:[h.jsx(Es,{size:14})," ",o?"📞 Chamada de Voz Ao Vivo Ativa (Full Duplex)":"🤖 Tutor de IA por Voz & Texto"]})}),h.jsx("h2",{style:{fontSize:"1.6rem",fontWeight:800},children:"Tutor de Inglês por Voz Ao Vivo"}),h.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:o?"A IA está te escutando continuamente pelo microfone! Fale em inglês naturalmente.":"Clique em 'Iniciar Chamada de Voz ao Vivo' para conversar continuamente sem mãos!"})]}),h.jsx("button",{className:"btn btn-emerald",onClick:g,style:{padding:"0.8rem 1.6rem",fontSize:"1rem",boxShadow:o?"0 0 20px var(--accent-emerald-glow)":"none"},children:o?h.jsxs(h.Fragment,{children:[h.jsx(lo,{size:18})," Encerrar Chamada"]}):h.jsxs(h.Fragment,{children:[h.jsx(Es,{size:18})," Iniciar Chamada de Voz ao Vivo"]})})]}),u&&h.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--accent-blue)",padding:"0.85rem 1.25rem",borderRadius:"var(--radius-md)",display:"flex",justify:"space-between",alignItems:"center",boxShadow:"var(--shadow-md)"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[h.jsx("span",{className:"badge badge-blue",children:"🔍 Dicionário Instantâneo"}),h.jsxs("span",{style:{fontSize:"1.1rem",fontWeight:800,color:"var(--accent-blue)",fontFamily:"var(--font-mono)"},children:['"',u.word,'"']}),h.jsxs("span",{style:{fontSize:"1rem",color:"var(--accent-emerald)",fontWeight:700},children:["= ",u.info.pt]}),h.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["(",u.info.pos,")"]})]}),h.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[h.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem"},onClick:()=>Se(u.word,.82),children:[h.jsx(fn,{size:14})," Ouvir Pronúncia"]}),h.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem"},onClick:()=>d(null),children:"✕"})]})]}),h.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-xl)",padding:"1.5rem",minHeight:"400px",maxHeight:"600px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"1.25rem"},children:[n.map(b=>h.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:b.sender==="user"?"flex-end":"flex-start"},children:[h.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginBottom:"0.25rem",fontWeight:700},children:b.sender==="user"?"Você":"🤖 Tutor de IA"}),h.jsxs("div",{style:{maxWidth:"85%",padding:"1rem 1.25rem",borderRadius:"var(--radius-lg)",background:b.sender==="user"?"linear-gradient(135deg, #0284c7 0%, #0369a1 100%)":"rgba(255, 255, 255, 0.06)",border:b.sender==="user"?"none":"1px solid var(--border-color)",color:"#ffffff",fontSize:"0.95rem",lineHeight:1.6},children:[h.jsxs("div",{style:{fontWeight:600},children:[b.sender==="ai"?O(b.text):b.text,b.sender==="ai"&&h.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",padding:"0.2rem",marginLeft:"0.4rem"},onClick:()=>Se(b.text,.88),children:h.jsx(fn,{size:16,color:"var(--accent-blue)"})})]}),b.sender==="ai"&&b.ptTranslation&&h.jsxs("div",{style:{marginTop:"0.5rem",paddingTop:"0.5rem",borderTop:"1px solid rgba(255, 255, 255, 0.1)",fontSize:"0.85rem",color:"var(--accent-blue)"},children:["💬 ",h.jsx("strong",{children:"Tradução em PT:"}),' "',b.ptTranslation,'"']})]}),b.sender==="ai"&&b.suggestions&&h.jsxs("div",{style:{marginTop:"0.75rem",width:"100%",maxWidth:"85%"},children:[h.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700,display:"block",marginBottom:"0.4rem"},children:"💡 Dica do que responder (Clique para usar):"}),h.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem"},children:b.suggestions.map((N,L)=>h.jsxs("button",{onClick:()=>X(N.en),className:"btn btn-secondary",style:{justifyContent:"flex-start",textAlign:"left",fontSize:"0.82rem",padding:"0.5rem 0.8rem",borderColor:"var(--accent-emerald-glow)",background:"rgba(16, 185, 129, 0.06)"},children:[h.jsxs("span",{style:{color:"var(--accent-emerald)",fontWeight:800},children:['"',N.en,'"']}),h.jsxs("span",{style:{color:"var(--text-muted)",marginLeft:"0.4rem",fontSize:"0.75rem"},children:["(",N.pt,")"]})]},L))})]})]},b.id)),h.jsx("div",{ref:f})]}),h.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center"},children:[h.jsx("button",{className:`btn ${i?"btn-emerald":"btn-secondary"}`,onClick:_,style:{padding:"0.8rem",borderRadius:"50%",width:"48px",height:"48px",flexShrink:0},title:i?"Escutando sua voz...":"Falar pelo Microfone",children:h.jsx(co,{size:20,color:i?"#fff":"var(--accent-blue)"})}),h.jsx("input",{type:"text",className:"input-field",placeholder:"Digite, use a chamada ao vivo ou escolha uma sugestão acima...",value:t,onChange:b=>s(b.target.value),onKeyDown:b=>b.key==="Enter"&&T(),style:{flex:1,padding:"0.85rem 1.25rem",fontSize:"0.95rem"}}),h.jsxs("button",{className:"btn btn-primary",onClick:()=>T(),style:{padding:"0.85rem 1.5rem"},children:[h.jsx(ho,{size:18})," Enviar"]})]})]})}const Io=()=>{};var xs={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m=function(n,e){if(!n)throw Be(e)},Be=function(n){return new Error("Firebase Database ("+vi.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bi=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},xo=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ln={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,o||(f=64)),s.push(t[u],t[d],t[f],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(bi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):xo(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new To;const f=r<<2|a>>4;if(s.push(f),c!==64){const p=a<<4&240|c>>2;if(s.push(p),d!==64){const g=c<<6&192|d;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class To extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ci=function(n){const e=bi(n);return Ln.encodeByteArray(e,!0)},St=function(n){return Ci(n).replace(/\./g,"")},pn=function(n){try{return Ln.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n){return Si(void 0,n)}function Si(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Ro(t)||(n[t]=Si(n[t],e[t]));return n}function Ro(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ko(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ao=()=>ko().__FIREBASE_DEFAULTS__,Do=()=>{if(typeof process>"u"||typeof xs>"u")return;const n=xs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Po=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&pn(n[1]);return e&&JSON.parse(e)},Ei=()=>{try{return Io()||Ao()||Do()||Po()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Oo=n=>{var e,t;return(t=(e=Ei())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Mo=n=>{const e=Oo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},wi=()=>{var n;return(n=Ei())==null?void 0:n.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lo(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[St(JSON.stringify(t)),St(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ii(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fo())}function jo(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Wo(){return vi.NODE_ADMIN===!0}function zo(){try{return typeof indexedDB=="object"}catch{return!1}}function Bo(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo="FirebaseError";class dt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Uo,Object.setPrototypeOf(this,dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,xi.prototype.create)}}class xi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Vo(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new dt(i,a,s)}}function Vo(n,e){try{let t=0,s="";for(;t<n.length;){const i=n.indexOf("{$",t);if(i===-1){s+=n.substring(t);break}const r=n.indexOf("}",i+2);if(r===-1){s+=n.substring(t);break}const o=n.substring(i+2,r),a=e[o];s+=n.substring(t,i)+(a!=null?String(a):`<${o}?>`),t=r+1}return s}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(n){return JSON.parse(n)}function B(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=nt(pn(r[0])||""),t=nt(pn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},Ho=function(n){const e=Ti(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},$o=function(n){const e=Ti(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Fe(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Ts(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Et(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function wt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Ns(r)&&Ns(o)){if(!wt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Ns(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Go(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const f=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Fn(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ut=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ni(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qo(n){return(await fetch(n,{credentials:"include"})).ok}class st{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new Bt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Xo(e))try{this.getOrInitializeService({instanceIdentifier:be})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=be){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=be){return this.instances.has(e)}getOptions(e=be){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Jo(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=be){return this.component?this.component.multipleInstances?e:be:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Jo(n){return n===be?void 0:n}function Xo(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ko(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const ea={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},ta=D.INFO,na={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},sa=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=na[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ri{constructor(e){this.name=e,this._logLevel=ta,this._logHandler=sa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ea[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const ia=(n,e)=>e.some(t=>n instanceof t);let Rs,ks;function ra(){return Rs||(Rs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oa(){return ks||(ks=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ki=new WeakMap,mn=new WeakMap,Ai=new WeakMap,Jt=new WeakMap,jn=new WeakMap;function aa(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(pe(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&ki.set(t,n)}).catch(()=>{}),jn.set(e,n),e}function la(n){if(mn.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});mn.set(n,e)}let gn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return mn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ai.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return pe(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function ca(n){gn=n(gn)}function ha(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Xt(this),e,...t);return Ai.set(s,e.sort?e.sort():[e]),pe(s)}:oa().includes(n)?function(...e){return n.apply(Xt(this),e),pe(ki.get(this))}:function(...e){return pe(n.apply(Xt(this),e))}}function da(n){return typeof n=="function"?ha(n):(n instanceof IDBTransaction&&la(n),ia(n,ra())?new Proxy(n,gn):n)}function pe(n){if(n instanceof IDBRequest)return aa(n);if(Jt.has(n))return Jt.get(n);const e=da(n);return e!==n&&(Jt.set(n,e),jn.set(e,n)),e}const Xt=n=>jn.get(n);function ua(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=pe(o);return s&&o.addEventListener("upgradeneeded",l=>{s(pe(o.result),l.oldVersion,l.newVersion,pe(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const fa=["get","getKey","getAll","getAllKeys","count"],pa=["put","add","delete","clear"],Zt=new Map;function As(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Zt.get(e))return Zt.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=pa.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||fa.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Zt.set(e,r),r}ca(n=>({...n,get:(e,t,s)=>As(e,t)||n.get(e,t,s),has:(e,t)=>!!As(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(ga(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function ga(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const _n="@firebase/app",Ds="0.16.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new Ri("@firebase/app"),_a="@firebase/app-compat",ya="@firebase/analytics-compat",va="@firebase/analytics",ba="@firebase/app-check-compat",Ca="@firebase/app-check",Sa="@firebase/auth",Ea="@firebase/auth-compat",wa="@firebase/database",Ia="@firebase/data-connect",xa="@firebase/database-compat",Ta="@firebase/functions",Na="@firebase/functions-compat",Ra="@firebase/installations",ka="@firebase/installations-compat",Aa="@firebase/messaging",Da="@firebase/messaging-compat",Pa="@firebase/performance",Oa="@firebase/performance-compat",Ma="@firebase/remote-config",La="@firebase/remote-config-compat",Fa="@firebase/storage",ja="@firebase/storage-compat",Wa="@firebase/firestore",za="@firebase/ai",Ba="@firebase/firestore-compat",Ua="firebase",Va="12.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="[DEFAULT]",Ha={[_n]:"fire-core",[_a]:"fire-core-compat",[va]:"fire-analytics",[ya]:"fire-analytics-compat",[Ca]:"fire-app-check",[ba]:"fire-app-check-compat",[Sa]:"fire-auth",[Ea]:"fire-auth-compat",[wa]:"fire-rtdb",[Ia]:"fire-data-connect",[xa]:"fire-rtdb-compat",[Ta]:"fire-fn",[Na]:"fire-fn-compat",[Ra]:"fire-iid",[ka]:"fire-iid-compat",[Aa]:"fire-fcm",[Da]:"fire-fcm-compat",[Pa]:"fire-perf",[Oa]:"fire-perf-compat",[Ma]:"fire-rc",[La]:"fire-rc-compat",[Fa]:"fire-gcs",[ja]:"fire-gcs-compat",[Wa]:"fire-fst",[Ba]:"fire-fst-compat",[za]:"fire-vertex","fire-js":"fire-js",[Ua]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const It=new Map,$a=new Map,vn=new Map;function Ps(n,e){try{n.container.addComponent(e)}catch(t){ce.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xt(n){const e=n.name;if(vn.has(e))return ce.debug(`There were multiple attempts to register component ${e}.`),!1;vn.set(e,n);for(const t of It.values())Ps(t,n);for(const t of $a.values())Ps(t,n);return!0}function Ga(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function qa(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ya={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oe=new xi("app","Firebase",Ya);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw oe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=Va;function Di(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:yn,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw oe.create("bad-app-name",{appName:String(i)});if(t||(t=wi()),!t)throw oe.create("no-options");const r=It.get(i);if(r)if(wt(t,r.options)){if(wt(s,r.config))return r;throw oe.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(s)})}else throw oe.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(t)});const o=new Zo(i);for(const l of vn.values())o.addComponent(l);const a=new Qa(t,s,o);return It.set(i,a),a}function Ja(n=yn){const e=It.get(n);if(!e&&n===yn&&wi())return Di();if(!e)throw oe.create("no-app",{appName:n});return e}function Pe(n,e,t){let s=Ha[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ce.warn(o.join(" "));return}xt(new st(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa="firebase-heartbeat-database",Za=1,it="firebase-heartbeat-store";let en=null;function Pi(){return en||(en=ua(Xa,Za,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(it)}catch(t){console.warn(t)}}}}).catch(n=>{throw oe.create("idb-open",{originalErrorMessage:n.message})})),en}async function el(n){try{const t=(await Pi()).transaction(it),s=await t.objectStore(it).get(Oi(n));return await t.done,s}catch(e){if(e instanceof dt)ce.warn(e.message);else{const t=oe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ce.warn(t.message)}}}async function Os(n,e){try{const s=(await Pi()).transaction(it,"readwrite");await s.objectStore(it).put(e,Oi(n)),await s.done}catch(t){if(t instanceof dt)ce.warn(t.message);else{const s=oe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ce.warn(s.message)}}}function Oi(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=1024,nl=30;class sl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rl(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ms();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>nl){const o=ol(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ce.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ms(),{heartbeatsToSend:s,unsentEntries:i}=il(this._heartbeatsCache.heartbeats),r=St(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ce.warn(t),""}}}function Ms(){return new Date().toISOString().substring(0,10)}function il(n,e=tl){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ls(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ls(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class rl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zo()?Bo().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await el(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Os(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Os(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ls(n){return St(JSON.stringify({version:2,heartbeats:n})).length}function ol(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function al(n){xt(new st("platform-logger",e=>new ma(e),"PRIVATE")),xt(new st("heartbeat",e=>new sl(e),"PRIVATE")),Pe(_n,Ds,n),Pe(_n,Ds,"esm2020"),Pe("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */al("");var Fs={};const js="@firebase/database",Ws="1.1.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mi="";function ll(n){Mi=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),B(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:nt(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ue(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new cl(e)}}catch{}return new hl},Ee=Li("localStorage"),dl=Li("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new Ri("@firebase/database"),ul=function(){let n=1;return function(){return n++}}(),Fi=function(n){const e=Yo(n),t=new qo;t.update(e);const s=t.digest();return Ln.encodeByteArray(s)},ft=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ft.apply(null,s):typeof s=="object"?e+=B(s):e+=s,e+=" "}return e};let Je=null,zs=!0;const fl=function(n,e){m(!0,"Can't turn on custom loggers persistently."),Oe.logLevel=D.VERBOSE,Je=Oe.log.bind(Oe)},H=function(...n){if(zs===!0&&(zs=!1,Je===null&&dl.get("logging_enabled")===!0&&fl()),Je){const e=ft.apply(null,n);Je(e)}},pt=function(n){return function(...e){H(n,...e)}},bn=function(...n){const e="FIREBASE INTERNAL ERROR: "+ft(...n);Oe.error(e)},he=function(...n){const e=`FIREBASE FATAL ERROR: ${ft(...n)}`;throw Oe.error(e),new Error(e)},Q=function(...n){const e="FIREBASE WARNING: "+ft(...n);Oe.warn(e)},pl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ji=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},ml=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},je="[MIN_NAME]",Ie="[MAX_NAME]",Ue=function(n,e){if(n===e)return 0;if(n===je||e===Ie)return-1;if(e===je||n===Ie)return 1;{const t=Bs(n),s=Bs(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},gl=function(n,e){return n===e?0:n<e?-1:1},qe=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+B(e))},Wn=function(n){if(typeof n!="object"||n===null)return B(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=B(e[s]),t+=":",t+=Wn(n[e[s]]);return t+="}",t},Wi=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function K(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const zi=function(n){m(!ji(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},_l=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},yl=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function vl(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const bl=new RegExp("^-?(0*)\\d{1,10}$"),Cl=-2147483648,Sl=2147483647,Bs=function(n){if(bl.test(n)){const e=Number(n);if(e>=Cl&&e<=Sl)return e}return null},Ve=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Q("Exception was thrown by user callback.",t),e},Math.floor(0))}},El=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Xe=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,qa(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Q(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(H("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Q(e)}}class Ct{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ct.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="5",Bi="v",Ui="s",Vi="r",Hi="f",$i=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Gi="ls",qi="p",Cn="ac",Yi="websocket",Qi="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ee.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ee.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function xl(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Ji(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===Yi)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Qi)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);xl(n)&&(t.ns=n.namespace);const i=[];return K(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.counters_={}}incrementCounter(e,t=1){ue(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return No(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tn={},nn={};function Bn(n){const e=n.toString();return tn[e]||(tn[e]=new Tl),tn[e]}function Nl(n,e){const t=n.toString();return nn[t]||(nn[t]=e()),nn[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ve(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us="start",kl="close",Al="pLPCommand",Dl="pRTLPCB",Xi="id",Zi="pw",er="ser",Pl="cb",Ol="seg",Ml="ts",Ll="d",Fl="dframe",tr=1870,nr=30,jl=tr-nr,Wl=25e3,zl=3e4;class De{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=pt(e),this.stats_=Bn(t),this.urlFn=l=>(this.appCheckToken&&(l[Cn]=this.appCheckToken),Ji(t,Qi,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Rl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(zl)),ml(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Un((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Us)this.id=a,this.password=l;else if(o===kl)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Us]="t",s[er]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Pl]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Bi]=zn,this.transportSessionId&&(s[Ui]=this.transportSessionId),this.lastSessionId&&(s[Gi]=this.lastSessionId),this.applicationId&&(s[qi]=this.applicationId),this.appCheckToken&&(s[Cn]=this.appCheckToken),typeof location<"u"&&location.hostname&&$i.test(location.hostname)&&(s[Vi]=Hi);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){De.forceAllow_=!0}static forceDisallow(){De.forceDisallow_=!0}static isAvailable(){return De.forceAllow_?!0:!De.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!_l()&&!yl()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Ci(t),i=Wi(s,jl);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Fl]="t",s[Xi]=e,s[Zi]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=B(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Un{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=ul(),window[Al+this.uniqueCallbackIdentifier]=e,window[Dl+this.uniqueCallbackIdentifier]=t,this.myIFrame=Un.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){H("frame writing exception"),a.stack&&H(a.stack),H(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||H("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Xi]=this.myID,e[Zi]=this.myPW,e[er]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+nr+s.length<=tr;){const o=this.pendingSegs.shift();s=s+"&"+Ol+i+"="+o.seg+"&"+Ml+i+"="+o.ts+"&"+Ll+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Wl)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{H("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bl=16384,Ul=45e3;let Tt=null;typeof MozWebSocket<"u"?Tt=MozWebSocket:typeof WebSocket<"u"&&(Tt=WebSocket);class ee{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=pt(this.connId),this.stats_=Bn(t),this.connURL=ee.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Bi]=zn,typeof location<"u"&&location.hostname&&$i.test(location.hostname)&&(o[Vi]=Hi),t&&(o[Ui]=t),s&&(o[Gi]=s),i&&(o[Cn]=i),r&&(o[qi]=r),Ji(e,Yi,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ee.set("previous_websocket_failure",!0);try{let s;Wo(),this.mySock=new Tt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ee.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Tt!==null&&!ee.forceDisallow_}static previouslyFailed(){return Ee.isInMemoryStorage||Ee.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ee.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=nt(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=B(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Wi(t,Bl);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Ul))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ee.responsesRequiredToBeHealthy=2;ee.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{static get ALL_TRANSPORTS(){return[De,ee]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ee&&ee.isAvailable();let s=t&&!ee.previouslyFailed();if(e.webSocketOnly&&(t||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ee];else{const i=this.transports_=[];for(const r of rt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);rt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}rt.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vl=6e4,Hl=5e3,$l=10*1024,Gl=100*1024,sn="t",Vs="d",ql="s",Hs="r",Yl="e",$s="o",Gs="a",qs="n",Ys="p",Ql="h";class Kl{constructor(e,t,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=pt("c:"+this.id+":"),this.transportManager_=new rt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Xe(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Gl?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>$l?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sn in e){const t=e[sn];t===Gs?this.upgradeIfSecondaryHealthy_():t===Hs?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===$s&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=qe("t",e),s=qe("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Ys,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Gs,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:qs,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=qe("t",e),s=qe("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=qe(sn,e);if(Vs in e){const s=e[Vs];if(t===Ql){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===qs){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===ql?this.onConnectionShutdown_(s):t===Hs?this.onReset_(s):t===Yl?bn("Server Error: "+s):t===$s?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):bn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),zn!==s&&Q("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Xe(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Vl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Xe(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Hl))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Ys,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ee.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt extends ir{static getInstance(){return new Nt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ii()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=32,Ks=768;class k{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function x(){return new k("")}function C(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ge(n){return n.pieces_.length-n.pieceNum_}function P(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new k(n.pieces_,e)}function rr(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Jl(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function or(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function ar(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new k(e,0)}function j(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof k)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new k(t,0)}function E(n){return n.pieceNum_>=n.pieces_.length}function q(n,e){const t=C(n),s=C(e);if(t===null)return e;if(t===s)return q(P(n),P(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Vn(n,e){if(ge(n)!==ge(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function te(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ge(n)>ge(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Xl{constructor(e,t){this.errorPrefix_=t,this.parts_=or(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ut(this.parts_[s]);lr(this)}}function Zl(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ut(e),lr(n)}function ec(n){const e=n.parts_.pop();n.byteLength_-=Ut(e),n.parts_.length>0&&(n.byteLength_-=1)}function lr(n){if(n.byteLength_>Ks)throw new Error(n.errorPrefix_+"has a key path longer than "+Ks+" bytes ("+n.byteLength_+").");if(n.parts_.length>Qs)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Qs+") or object contains a cycle "+Ce(n))}function Ce(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends ir{static getInstance(){return new Hn}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye=1e3,tc=60*5*1e3,Js=30*1e3,nc=1.3,sc=3e4,ic="server_kill",Xs=3;class le extends sr{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=le.nextPersistentConnectionId_++,this.log_=pt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ye,this.maxReconnectDelay_=tc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Nt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(B(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new Bt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;le.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ue(e,"w")){const s=Fe(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Q(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||$o(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Js)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=Ho(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+B(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):bn("Unrecognized action received from server: "+B(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ye,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ye,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>sc&&(this.reconnectDelay_=Ye),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*nc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+le.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?H("getToken() completed but was canceled"):(H("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Kl(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{Q(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(ic)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Q(d),l())}}}interrupt(e){H("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){H("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ts(this.interruptReasons_)&&(this.reconnectDelay_=Ye,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Wn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new k(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){H("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Xs&&(this.reconnectDelay_=Js,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){H("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Xs&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Mi.replace(/\./g,"-")]=1,Ii()?e["framework.cordova"]=1:jo()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Nt.getInstance().currentlyOnline();return Ts(this.interruptReasons_)&&e}}le.nextPersistentConnectionId_=0;le.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new S(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new S(je,e),i=new S(je,t);return this.compare(s,i)!==0}minPost(){return S.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vt;class cr extends Vt{static get __EMPTY_NODE(){return vt}static set __EMPTY_NODE(e){vt=e}compare(e,t){return Ue(e.name,t.name)}isDefinedOn(e){throw Be("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return S.MIN}maxPost(){return new S(Ie,vt)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new S(e,vt)}toString(){return".key"}}const Me=new cr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class z{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??z.RED,this.left=i??Y.EMPTY_NODE,this.right=r??Y.EMPTY_NODE}copy(e,t,s,i,r){return new z(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return Y.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return Y.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}z.RED=!0;z.BLACK=!1;class rc{copy(e,t,s,i,r){return this}insert(e,t,s){return new z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Y{constructor(e,t=Y.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Y(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,z.BLACK,null,null))}remove(e){return new Y(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,z.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new bt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new bt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new bt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new bt(this.root_,null,this.comparator_,!0,e)}}Y.EMPTY_NODE=new rc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oc(n,e){return Ue(n.name,e.name)}function $n(n,e){return Ue(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sn;function ac(n){Sn=n}const hr=function(n){return typeof n=="number"?"number:"+zi(n):"string:"+n},dr=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ue(e,".sv"),"Priority must be a string or number.")}else m(n===Sn||n.isEmpty(),"priority of unexpected type.");m(n===Sn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs;class W{static set __childrenNodeConstructor(e){Zs=e}static get __childrenNodeConstructor(){return Zs}constructor(e,t=W.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),dr(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new W(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:W.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return E(e)?this:C(e)===".priority"?this.priorityNode_:W.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:W.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=C(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||ge(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,W.__childrenNodeConstructor.EMPTY_NODE.updateChild(P(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+hr(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=zi(this.value_):e+=this.value_,this.lazyHash_=Fi(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===W.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof W.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=W.VALUE_TYPE_ORDER.indexOf(t),r=W.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}W.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ur,fr;function lc(n){ur=n}function cc(n){fr=n}class hc extends Vt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Ue(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return S.MIN}maxPost(){return new S(Ie,new W("[PRIORITY-POST]",fr))}makePost(e,t){const s=ur(e);return new S(t,new W("[PRIORITY-POST]",s))}toString(){return".priority"}}const F=new hc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=Math.log(2);class uc{constructor(e){const t=r=>parseInt(Math.log(r)/dc,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Rt=function(n,e,t,s){n.sort(e);const i=function(l,c){const u=c-l;let d,f;if(u===0)return null;if(u===1)return d=n[l],f=t?t(d):d,new z(f,d.node,z.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=i(l,p),_=i(p+1,c);return d=n[p],f=t?t(d):d,new z(f,d.node,z.BLACK,g,_)}},r=function(l){let c=null,u=null,d=n.length;const f=function(g,_){const T=d-g,R=d;d-=g;const X=i(T+1,R),O=n[T],b=t?t(O):O;p(new z(b,O.node,_,null,X))},p=function(g){c?(c.left=g,c=g):(u=g,c=g)};for(let g=0;g<l.count;++g){const _=l.nextBitIsOne(),T=Math.pow(2,l.count-(g+1));_?f(T,z.BLACK):(f(T,z.BLACK),f(T,z.RED))}return u},o=new uc(n.length),a=r(o);return new Y(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rn;const Ae={};class ae{static get Default(){return m(Ae&&F,"ChildrenNode.ts has not been loaded"),rn=rn||new ae({".priority":Ae},{".priority":F}),rn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Fe(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Y?t:null}hasIndex(e){return ue(this.indexSet_,e.toString())}addIndex(e,t){m(e!==Me,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(S.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Rt(s,e.getCompare()):a=Ae;const l=e.toString(),c={...this.indexSet_};c[l]=e;const u={...this.indexes_};return u[l]=a,new ae(u,c)}addToIndexes(e,t){const s=Et(this.indexes_,(i,r)=>{const o=Fe(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===Ae)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(S.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Rt(a,o.getCompare())}else return Ae;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new S(e.name,a))),l.insert(e,e.node)}});return new ae(s,this.indexSet_)}removeFromIndexes(e,t){const s=Et(this.indexes_,i=>{if(i===Ae)return i;{const r=t.get(e.name);return r?i.remove(new S(e.name,r)):i}});return new ae(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qe;class v{static get EMPTY_NODE(){return Qe||(Qe=new v(new Y($n),null,ae.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&dr(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Qe}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Qe:t}}getChild(e){const t=C(e);return t===null?this:this.getImmediateChild(t).getChild(P(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new S(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Qe:this.priorityNode_;return new v(i,o,r)}}updateChild(e,t){const s=C(e);if(s===null)return t;{m(C(e)!==".priority"||ge(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(P(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(F,(o,a)=>{t[o]=a.val(e),s++,r&&v.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+hr(this.getPriority().val())+":"),this.forEachChild(F,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Fi(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new S(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new S(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new S(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,S.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===mt?-1:0}withIndex(e){if(e===Me||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Me||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(F),i=t.getIterator(F);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Me?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class fc extends v{constructor(){super(new Y($n),v.EMPTY_NODE,ae.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const mt=new fc;Object.defineProperties(S,{MIN:{value:new S(je,v.EMPTY_NODE)},MAX:{value:new S(Ie,mt)}});cr.__EMPTY_NODE=v.EMPTY_NODE;W.__childrenNodeConstructor=v;ac(mt);cc(mt);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=!0;function V(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new W(t,V(e))}if(!(n instanceof Array)&&pc){const t=[];let s=!1;if(K(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=V(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new S(o,l)))}}),t.length===0)return v.EMPTY_NODE;const r=Rt(t,oc,o=>o.name,$n);if(s){const o=Rt(t,F.getCompare());return new v(r,V(e),new ae({".priority":o},{".priority":F}))}else return new v(r,V(e),ae.Default)}else{let t=v.EMPTY_NODE;return K(n,(s,i)=>{if(ue(n,s)&&s.substring(0,1)!=="."){const r=V(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(V(e))}}lc(V);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc extends Vt{constructor(e){super(),this.indexPath_=e,m(!E(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Ue(e.name,t.name):r}makePost(e,t){const s=V(e),i=v.EMPTY_NODE.updateChild(this.indexPath_,s);return new S(t,i)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,mt);return new S(Ie,e)}toString(){return or(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc extends Vt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ue(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return S.MIN}maxPost(){return S.MAX}makePost(e,t){const s=V(e);return new S(t,s)}toString(){return".value"}}const _c=new gc;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n){return{type:"value",snapshotNode:n}}function We(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function ot(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function at(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function yc(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(ot(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(We(t,s)):o.trackChildChange(at(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(F,(i,r)=>{t.hasChild(i)||s.trackChildChange(ot(i,r))}),t.isLeafNode()||t.forEachChild(F,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(at(i,r,o))}else s.trackChildChange(We(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.indexedFilter_=new Gn(e.getIndex()),this.index_=e.getIndex(),this.startPost_=lt.getStartPost_(e),this.endPost_=lt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new S(t,s))||(s=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=v.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(F,(o,a)=>{r.matches(new S(o,a))||(i=i.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new lt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new S(t,s))||(s=v.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,p)=>d(p,f)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new S(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,c,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(at(t,s,d)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(ot(t,d));const _=a.updateImmediateChild(t,v.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(We(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(ot(c.name,c.node)),r.trackChildChange(We(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,v.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=F}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:je}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ie}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===F}copy(){const e=new qn;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function bc(n){return n.loadsAllData()?new Gn(n.getIndex()):n.hasLimit()?new vc(n):new lt(n)}function ei(n){const e={};if(n.isDefault())return e;let t;if(n.index_===F?t="$priority":n.index_===_c?t="$value":n.index_===Me?t="$key":(m(n.index_ instanceof mc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=B(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=B(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+B(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=B(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+B(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function ti(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==F&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends sr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=pt("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=kt.getListenId_(e,s),a={};this.listens_[o]=a;const l=ei(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Fe(this.listens_,o)===a){let f;c?c===401?f="permission_denied":f="rest_error:"+c:f="ok",i(f,null)}})}unlisten(e,t){const s=kt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=ei(e._queryParams),s=e._path.toString(),i=new Bt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Go(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=nt(a.responseText)}catch{Q("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Q("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return{value:null,children:new Map}}function mr(n,e,t){if(E(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=C(e);n.children.has(s)||n.children.set(s,At());const i=n.children.get(s);e=P(e),mr(i,e,t)}}function En(n,e,t){n.value!==null?t(e,n.value):Sc(n,(s,i)=>{const r=new k(e.toString()+"/"+s);En(i,r,t)})}function Sc(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&K(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=10*1e3,wc=30*1e3,Ic=5*60*1e3;class xc{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ec(e);const s=ni+(wc-ni)*Math.random();Xe(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;K(e,(i,r)=>{r>0&&ue(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Xe(this.reportStats_.bind(this),Math.floor(Math.random()*2*Ic))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ne||(ne={}));function gr(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Yn(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Qn(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ne.ACK_USER_WRITE,this.source=gr()}operationForChild(e){if(E(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new k(e));return new Dt(x(),t,this.revert)}}else return m(C(this.path)===e,"operationForChild called for unrelated child."),new Dt(P(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this.source=e,this.path=t,this.type=ne.LISTEN_COMPLETE}operationForChild(e){return E(this.path)?new ct(this.source,x()):new ct(this.source,P(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ne.OVERWRITE}operationForChild(e){return E(this.path)?new xe(this.source,x(),this.snap.getImmediateChild(e)):new xe(this.source,P(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ne.MERGE}operationForChild(e){if(E(this.path)){const t=this.children.subtree(new k(e));return t.isEmpty()?null:t.value?new xe(this.source,x(),t.value):new ht(this.source,x(),t)}else return m(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ht(this.source,P(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(E(e))return this.isFullyInitialized()&&!this.filtered_;const t=C(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Nc(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(yc(o.childName,o.snapshotNode))}),Ke(n,i,"child_removed",e,s,t),Ke(n,i,"child_added",e,s,t),Ke(n,i,"child_moved",r,s,t),Ke(n,i,"child_changed",e,s,t),Ke(n,i,"value",e,s,t),i}function Ke(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>kc(n,a,l)),o.forEach(a=>{const l=Rc(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Rc(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function kc(n,e,t){if(e.childName==null||t.childName==null)throw Be("Should only compare child_ events.");const s=new S(e.childName,e.snapshotNode),i=new S(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ht(n,e){return{eventCache:n,serverCache:e}}function Ze(n,e,t,s){return Ht(new Te(e,t,s),n.serverCache)}function _r(n,e,t,s){return Ht(n.eventCache,new Te(e,t,s))}function wn(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ne(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on;const Ac=()=>(on||(on=new Y(gl)),on);class M{static fromObject(e){let t=new M(null);return K(e,(s,i)=>{t=t.set(new k(s),i)}),t}constructor(e,t=Ac()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:x(),value:this.value};if(E(e))return null;{const s=C(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(P(e),t);return r!=null?{path:j(new k(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(E(e))return this;{const t=C(e),s=this.children.get(t);return s!==null?s.subtree(P(e)):new M(null)}}set(e,t){if(E(e))return new M(t,this.children);{const s=C(e),r=(this.children.get(s)||new M(null)).set(P(e),t),o=this.children.insert(s,r);return new M(this.value,o)}}remove(e){if(E(e))return this.children.isEmpty()?new M(null):new M(null,this.children);{const t=C(e),s=this.children.get(t);if(s){const i=s.remove(P(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new M(null):new M(this.value,r)}else return this}}get(e){if(E(e))return this.value;{const t=C(e),s=this.children.get(t);return s?s.get(P(e)):null}}setTree(e,t){if(E(e))return t;{const s=C(e),r=(this.children.get(s)||new M(null)).setTree(P(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new M(this.value,o)}}fold(e){return this.fold_(x(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(j(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,x(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(E(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(P(e),j(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,x(),t)}foreachOnPath_(e,t,s){if(E(e))return this;{this.value&&s(t,this.value);const i=C(e),r=this.children.get(i);return r?r.foreachOnPath_(P(e),j(t,i),s):new M(null)}}foreach(e){this.foreach_(x(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(j(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.writeTree_=e}static empty(){return new se(new M(null))}}function et(n,e,t){if(E(e))return new se(new M(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=q(i,e);return r=r.updateChild(o,t),new se(n.writeTree_.set(i,r))}else{const i=new M(t),r=n.writeTree_.setTree(e,i);return new se(r)}}}function si(n,e,t){let s=n;return K(t,(i,r)=>{s=et(s,j(e,i),r)}),s}function ii(n,e){if(E(e))return se.empty();{const t=n.writeTree_.setTree(e,new M(null));return new se(t)}}function In(n,e){return Re(n,e)!=null}function Re(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(q(t.path,e)):null}function ri(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(F,(s,i)=>{e.push(new S(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new S(s,i.value))}),e}function me(n,e){if(E(e))return n;{const t=Re(n,e);return t!=null?new se(new M(t)):new se(n.writeTree_.subtree(e))}}function xn(n){return n.writeTree_.isEmpty()}function ze(n,e){return yr(x(),n.writeTree_,e)}function yr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=yr(j(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(j(n,".priority"),s)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(n,e){return Sr(e,n)}function Dc(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=et(n.visibleWrites,e,t)),n.lastWriteId=s}function Pc(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Oc(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Mc(a,s.path)?i=!1:te(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Lc(n),!0;if(s.snap)n.visibleWrites=ii(n.visibleWrites,s.path);else{const a=s.children;K(a,l=>{n.visibleWrites=ii(n.visibleWrites,j(s.path,l))})}return!0}else return!1}function Mc(n,e){if(n.snap)return te(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&te(j(n.path,t),e))return!0;return!1}function Lc(n){n.visibleWrites=vr(n.allWrites,Fc,x()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Fc(n){return n.visible}function vr(n,e,t){let s=se.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)te(t,o)?(a=q(t,o),s=et(s,a,r.snap)):te(o,t)&&(a=q(o,t),s=et(s,x(),r.snap.getChild(a)));else if(r.children){if(te(t,o))a=q(t,o),s=si(s,a,r.children);else if(te(o,t))if(a=q(o,t),E(a))s=si(s,x(),r.children);else{const l=Fe(r.children,C(a));if(l){const c=l.getChild(P(a));s=et(s,x(),c)}}}else throw Be("WriteRecord should have .snap or .children")}}return s}function br(n,e,t,s,i){if(!s&&!i){const r=Re(n.visibleWrites,e);if(r!=null)return r;{const o=me(n.visibleWrites,e);if(xn(o))return t;if(t==null&&!In(o,x()))return null;{const a=t||v.EMPTY_NODE;return ze(o,a)}}}else{const r=me(n.visibleWrites,e);if(!i&&xn(r))return t;if(!i&&t==null&&!In(r,x()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(te(c.path,e)||te(e,c.path))},a=vr(n.allWrites,o,e),l=t||v.EMPTY_NODE;return ze(a,l)}}}function jc(n,e,t){let s=v.EMPTY_NODE;const i=Re(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(F,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=me(n.visibleWrites,e);return t.forEachChild(F,(o,a)=>{const l=ze(me(r,new k(o)),a);s=s.updateImmediateChild(o,l)}),ri(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=me(n.visibleWrites,e);return ri(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Wc(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=j(e,t);if(In(n.visibleWrites,r))return null;{const o=me(n.visibleWrites,r);return xn(o)?i.getChild(t):ze(o,i.getChild(t))}}function zc(n,e,t,s){const i=j(e,t),r=Re(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=me(n.visibleWrites,i);return ze(o,s.getNode().getImmediateChild(t))}else return null}function Bc(n,e){return Re(n.visibleWrites,e)}function Uc(n,e,t,s,i,r,o){let a;const l=me(n.visibleWrites,e),c=Re(l,x());if(c!=null)a=c;else if(t!=null)a=ze(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)d(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function Vc(){return{visibleWrites:se.empty(),allWrites:[],lastWriteId:-1}}function Pt(n,e,t,s){return br(n.writeTree,n.treePath,e,t,s)}function Jn(n,e){return jc(n.writeTree,n.treePath,e)}function oi(n,e,t,s){return Wc(n.writeTree,n.treePath,e,t,s)}function Ot(n,e){return Bc(n.writeTree,j(n.treePath,e))}function Hc(n,e,t,s,i,r){return Uc(n.writeTree,n.treePath,e,t,s,i,r)}function Xn(n,e,t){return zc(n.writeTree,n.treePath,e,t)}function Cr(n,e){return Sr(j(n.treePath,e),n.writeTree)}function Sr(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,at(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,ot(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,We(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,at(s,e.snapshotNode,i.oldSnap));else throw Be("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Er=new Gc;class Zn{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Te(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xn(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ne(this.viewCache_),r=Hc(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n){return{filter:n}}function Yc(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Qc(n,e,t,s,i){const r=new $c;let o,a;if(t.type===ne.OVERWRITE){const c=t;c.source.fromUser?o=Tn(n,e,c.path,c.snap,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!E(c.path),o=Mt(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===ne.MERGE){const c=t;c.source.fromUser?o=Jc(n,e,c.path,c.children,s,i,r):(m(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Nn(n,e,c.path,c.children,s,i,a,r))}else if(t.type===ne.ACK_USER_WRITE){const c=t;c.revert?o=eh(n,e,c.path,s,i,r):o=Xc(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===ne.LISTEN_COMPLETE)o=Zc(n,e,t.path,s,r);else throw Be("Unknown operation type: "+t.type);const l=r.getChanges();return Kc(e,o,l),{viewCache:o,changes:l}}function Kc(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=wn(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(pr(wn(e)))}}function wr(n,e,t,s,i,r){const o=e.eventCache;if(Ot(s,t)!=null)return e;{let a,l;if(E(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ne(e),u=c instanceof v?c:v.EMPTY_NODE,d=Jn(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Pt(s,Ne(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=C(t);if(c===".priority"){m(ge(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=oi(s,t,u,l);d!=null?a=n.filter.updatePriority(u,d):a=o.getNode()}else{const u=P(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const f=oi(s,t,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(c).updateChild(u,f):d=o.getNode().getImmediateChild(c)}else d=Xn(s,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Ze(e,a,o.isFullyInitialized()||E(t),n.filter.filtersNodes())}}function Mt(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(E(t))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,s);c=u.updateFullNode(l.getNode(),p,null)}else{const p=C(t);if(!l.isCompleteForPath(t)&&ge(t)>1)return e;const g=P(t),T=l.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?c=u.updatePriority(l.getNode(),T):c=u.updateChild(l.getNode(),p,T,g,Er,null)}const d=_r(e,c,l.isFullyInitialized()||E(t),u.filtersNodes()),f=new Zn(i,d,r);return wr(n,d,t,i,f,a)}function Tn(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const u=new Zn(i,e,r);if(E(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ze(e,c,!0,n.filter.filtersNodes());else{const d=C(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Ze(e,c,a.isFullyInitialized(),a.isFiltered());else{const f=P(t),p=a.getNode().getImmediateChild(d);let g;if(E(f))g=s;else{const _=u.getCompleteChild(d);_!=null?rr(f)===".priority"&&_.getChild(ar(f)).isEmpty()?g=_:g=_.updateChild(f,s):g=v.EMPTY_NODE}if(p.equals(g))l=e;else{const _=n.filter.updateChild(a.getNode(),d,g,f,u,o);l=Ze(e,_,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function ai(n,e){return n.eventCache.isCompleteForChild(e)}function Jc(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=j(t,l);ai(e,C(u))&&(a=Tn(n,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=j(t,l);ai(e,C(u))||(a=Tn(n,a,u,c,i,r,o))}),a}function li(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Nn(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;E(t)?c=s:c=new M(null).setTree(t,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,f)=>{if(u.hasChild(d)){const p=e.serverCache.getNode().getImmediateChild(d),g=li(n,p,f);l=Mt(n,l,new k(d),g,i,r,o,a)}}),c.children.inorderTraversal((d,f)=>{const p=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!u.hasChild(d)&&!p){const g=e.serverCache.getNode().getImmediateChild(d),_=li(n,g,f);l=Mt(n,l,new k(d),_,i,r,o,a)}}),l}function Xc(n,e,t,s,i,r,o){if(Ot(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(E(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return Mt(n,e,t,l.getNode().getChild(t),i,r,a,o);if(E(t)){let c=new M(null);return l.getNode().forEachChild(Me,(u,d)=>{c=c.set(new k(u),d)}),Nn(n,e,t,c,i,r,a,o)}else return e}else{let c=new M(null);return s.foreach((u,d)=>{const f=j(t,u);l.isCompleteForPath(f)&&(c=c.set(u,l.getNode().getChild(f)))}),Nn(n,e,t,c,i,r,a,o)}}function Zc(n,e,t,s,i){const r=e.serverCache,o=_r(e,r.getNode(),r.isFullyInitialized()||E(t),r.isFiltered());return wr(n,o,t,s,Er,i)}function eh(n,e,t,s,i,r){let o;if(Ot(s,t)!=null)return e;{const a=new Zn(s,e,i),l=e.eventCache.getNode();let c;if(E(t)||C(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Pt(s,Ne(e));else{const d=e.serverCache.getNode();m(d instanceof v,"serverChildren would be complete if leaf node"),u=Jn(s,d)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=C(t);let d=Xn(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=n.filter.updateChild(l,u,d,P(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,v.EMPTY_NODE,P(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Pt(s,Ne(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ot(s,x())!=null,Ze(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Gn(s.getIndex()),r=bc(s);this.processor_=qc(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(v.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),u=new Te(l,o.isFullyInitialized(),i.filtersNodes()),d=new Te(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ht(d,u),this.eventGenerator_=new Tc(this.query_)}get query(){return this.query_}}function nh(n){return n.viewCache_.serverCache.getNode()}function sh(n,e){const t=Ne(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!E(e)&&!t.getImmediateChild(C(e)).isEmpty())?t.getChild(e):null}function ci(n){return n.eventRegistrations_.length===0}function ih(n,e){n.eventRegistrations_.push(e)}function hi(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function di(n,e,t,s){e.type===ne.MERGE&&e.source.queryId!==null&&(m(Ne(n.viewCache_),"We should always have a full cache before handling merges"),m(wn(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Qc(n.processor_,i,e,t,s);return Yc(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Ir(n,r.changes,r.viewCache.eventCache.getNode(),null)}function rh(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(F,(r,o)=>{s.push(We(r,o))}),t.isFullyInitialized()&&s.push(pr(t.getNode())),Ir(n,s,t.getNode(),e)}function Ir(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Nc(n.eventGenerator_,e,t,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lt;class oh{constructor(){this.views=new Map}}function ah(n){m(!Lt,"__referenceConstructor has already been defined"),Lt=n}function lh(){return m(Lt,"Reference.ts has not been loaded"),Lt}function ch(n){return n.views.size===0}function es(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),di(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(di(o,e,t,s));return r}}function hh(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Pt(t,i?s:null),l=!1;a?l=!0:s instanceof v?(a=Jn(t,s),l=!1):(a=v.EMPTY_NODE,l=!1);const c=Ht(new Te(a,l,!1),new Te(s,i,!1));return new th(e,c)}return o}function dh(n,e,t,s,i,r){const o=hh(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),ih(o,t),rh(o,t)}function uh(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=_e(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(hi(c,t,s)),ci(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(hi(l,t,s)),ci(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!_e(n)&&r.push(new(lh())(e._repo,e._path)),{removed:r,events:o}}function xr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Le(n,e){let t=null;for(const s of n.views.values())t=t||sh(s,e);return t}function Tr(n,e){if(e._queryParams.loadsAllData())return $t(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Nr(n,e){return Tr(n,e)!=null}function _e(n){return $t(n)!=null}function $t(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ft;function fh(n){m(!Ft,"__referenceConstructor has already been defined"),Ft=n}function ph(){return m(Ft,"Reference.ts has not been loaded"),Ft}let mh=1;class ui{constructor(e){this.listenProvider_=e,this.syncPointTree_=new M(null),this.pendingWriteTree_=Vc(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Rr(n,e,t,s,i){return Dc(n.pendingWriteTree_,e,t,s,i),i?gt(n,new xe(gr(),e,t)):[]}function we(n,e,t=!1){const s=Pc(n.pendingWriteTree_,e);if(Oc(n.pendingWriteTree_,e)){let r=new M(null);return s.snap!=null?r=r.set(x(),!0):K(s.children,o=>{r=r.set(new k(o),!0)}),gt(n,new Dt(s.path,r,t))}else return[]}function Gt(n,e,t){return gt(n,new xe(Yn(),e,t))}function gh(n,e,t){const s=M.fromObject(t);return gt(n,new ht(Yn(),e,s))}function _h(n,e){return gt(n,new ct(Yn(),e))}function yh(n,e,t){const s=ns(n,t);if(s){const i=ss(s),r=i.path,o=i.queryId,a=q(r,e),l=new ct(Qn(o),a);return is(n,r,l)}else return[]}function Rn(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Nr(o,e))){const l=uh(o,e,t,s);ch(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(f,p)=>_e(p));if(u&&!d){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=Ch(f);for(let g=0;g<p.length;++g){const _=p[g],T=_.query,R=Dr(n,_);n.listenProvider_.startListening(tt(T),jt(n,T),R.hashFn,R.onComplete)}}}!d&&c.length>0&&!s&&(u?n.listenProvider_.stopListening(tt(e),null):c.forEach(f=>{const p=n.queryToTagMap.get(qt(f));n.listenProvider_.stopListening(tt(f),p)}))}Sh(n,c)}return a}function vh(n,e,t,s){const i=ns(n,s);if(i!=null){const r=ss(i),o=r.path,a=r.queryId,l=q(o,e),c=new xe(Qn(a),l,t);return is(n,o,c)}else return[]}function bh(n,e,t,s){const i=ns(n,s);if(i){const r=ss(i),o=r.path,a=r.queryId,l=q(o,e),c=M.fromObject(t),u=new ht(Qn(a),l,c);return is(n,o,u)}else return[]}function fi(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,p)=>{const g=q(f,i);r=r||Le(p,g),o=o||_e(p)});let a=n.syncPointTree_.get(i);a?(o=o||_e(a),r=r||Le(a,x())):(a=new oh,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,g)=>{const _=Le(g,x());_&&(r=r.updateImmediateChild(p,_))}));const c=Nr(a,e);if(!c&&!e._queryParams.loadsAllData()){const f=qt(e);m(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=Eh();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const u=Kn(n.pendingWriteTree_,i);let d=dh(a,e,t,u,r,l);if(!c&&!o&&!s){const f=Tr(a,e);d=d.concat(wh(n,e,f))}return d}function ts(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=q(o,e),c=Le(a,l);if(c)return c});return br(i,e,r,t,!0)}function gt(n,e){return kr(e,n.syncPointTree_,null,Kn(n.pendingWriteTree_,x()))}function kr(n,e,t,s){if(E(n.path))return Ar(n,e,t,s);{const i=e.get(x());t==null&&i!=null&&(t=Le(i,x()));let r=[];const o=C(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Cr(s,o);r=r.concat(kr(a,l,c,u))}return i&&(r=r.concat(es(i,n,s,t))),r}}function Ar(n,e,t,s){const i=e.get(x());t==null&&i!=null&&(t=Le(i,x()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Cr(s,o),u=n.operationForChild(o);u&&(r=r.concat(Ar(u,a,l,c)))}),i&&(r=r.concat(es(i,n,s,t))),r}function Dr(n,e){const t=e.query,s=jt(n,t);return{hashFn:()=>(nh(e)||v.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?yh(n,t._path,s):_h(n,t._path);{const r=vl(i,t);return Rn(n,t,null,r)}}}}function jt(n,e){const t=qt(e);return n.queryToTagMap.get(t)}function qt(n){return n._path.toString()+"$"+n._queryIdentifier}function ns(n,e){return n.tagToQueryMap.get(e)}function ss(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new k(n.substr(0,e))}}function is(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=Kn(n.pendingWriteTree_,e);return es(s,t,i,null)}function Ch(n){return n.fold((e,t,s)=>{if(t&&_e(t))return[$t(t)];{let i=[];return t&&(i=xr(t)),K(s,(r,o)=>{i=i.concat(o)}),i}})}function tt(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(ph())(n._repo,n._path):n}function Sh(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=qt(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Eh(){return mh++}function wh(n,e,t){const s=e._path,i=jt(n,e),r=Dr(n,t),o=n.listenProvider_.startListening(tt(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!_e(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!E(c)&&u&&_e(u))return[$t(u).query];{let f=[];return u&&(f=f.concat(xr(u).map(p=>p.query))),K(d,(p,g)=>{f=f.concat(g)}),f}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(tt(u),jt(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new rs(t)}node(){return this.node_}}class os{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=j(this.path_,e);return new os(this.syncTree_,t)}node(){return ts(this.syncTree_,this.path_)}}const Ih=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},pi=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return xh(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Th(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},xh=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Th=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Nh=function(n,e,t,s){return as(e,new os(t,n),s)},Pr=function(n,e,t){return as(n,new rs(e),t)};function as(n,e,t){const s=n.getPriority().val(),i=pi(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=pi(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new W(a,V(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new W(i))),o.forEachChild(F,(a,l)=>{const c=as(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function cs(n,e){let t=e instanceof k?e:new k(e),s=n,i=C(t);for(;i!==null;){const r=Fe(s.node.children,i)||{children:{},childCount:0};s=new ls(i,s,r),t=P(t),i=C(t)}return s}function He(n){return n.node.value}function Or(n,e){n.node.value=e,kn(n)}function Mr(n){return n.node.childCount>0}function Rh(n){return He(n)===void 0&&!Mr(n)}function Yt(n,e){K(n.node.children,(t,s)=>{e(new ls(t,n,s))})}function Lr(n,e,t,s){t&&e(n),Yt(n,i=>{Lr(i,e,!0)})}function kh(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function _t(n){return new k(n.parent===null?n.name:_t(n.parent)+"/"+n.name)}function kn(n){n.parent!==null&&Ah(n.parent,n.name,n)}function Ah(n,e,t){const s=Rh(t),i=ue(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,kn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,kn(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=/[\[\].#$\/\u0000-\u001F\u007F]/,Ph=/[\[\].#$\u0000-\u001F\u007F]/,an=10*1024*1024,Fr=function(n){return typeof n=="string"&&n.length!==0&&!Dh.test(n)},jr=function(n){return typeof n=="string"&&n.length!==0&&!Ph.test(n)},Oh=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jr(n)},Mh=function(n,e,t,s){hs(Fn(n,"value"),e,t)},hs=function(n,e,t){const s=t instanceof k?new Xl(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+Ce(s));if(typeof e=="function")throw new Error(n+"contains a function "+Ce(s)+" with contents = "+e.toString());if(ji(e))throw new Error(n+"contains "+e.toString()+" "+Ce(s));if(typeof e=="string"&&e.length>an/3&&Ut(e)>an)throw new Error(n+"contains a string greater than "+an+" utf8 bytes "+Ce(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(K(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Fr(o)))throw new Error(n+" contains an invalid key ("+o+") "+Ce(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Zl(s,o),hs(n,a,s),ec(s)}),i&&r)throw new Error(n+' contains ".value" child '+Ce(s)+" in addition to actual children.")}},Wr=function(n,e,t,s){if(!jr(t))throw new Error(Fn(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},Lh=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Wr(n,e,t)},Fh=function(n,e){if(C(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},jh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Oh(t))throw new Error(Fn(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ds(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Vn(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function zr(n,e,t){ds(n,t),Br(n,s=>Vn(s,e))}function de(n,e,t){ds(n,t),Br(n,s=>te(s,e)||te(e,s))}function Br(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(zh(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function zh(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Je&&H("event: "+t.toString()),Ve(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="repo_interrupt",Uh=25;class Vh{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new Wh,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=At(),this.transactionQueueTree_=new ls,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Hh(n,e,t){if(n.stats_=Bn(n.repoInfo_),n.forceRestClient_||El())n.server_=new kt(n.repoInfo_,(s,i,r,o)=>{mi(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>gi(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{B(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new le(n.repoInfo_,e,(s,i,r,o)=>{mi(n,s,i,r,o)},s=>{gi(n,s)},s=>{Gh(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Nl(n.repoInfo_,()=>new xc(n.stats_,n.server_)),n.infoData_=new Cc,n.infoSyncTree_=new ui({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Gt(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),fs(n,"connected",!1),n.serverSyncTree_=new ui({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);de(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function $h(n){const t=n.infoData_.getNode(new k(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function us(n){return Ih({timestamp:$h(n)})}function mi(n,e,t,s,i){n.dataUpdateCount++;const r=new k(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=Et(t,c=>V(c));o=bh(n.serverSyncTree_,r,l,i)}else{const l=V(t);o=vh(n.serverSyncTree_,r,l,i)}else if(s){const l=Et(t,c=>V(c));o=gh(n.serverSyncTree_,r,l)}else{const l=V(t);o=Gt(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Qt(n,r)),de(n.eventQueue_,a,o)}function gi(n,e){fs(n,"connected",e),e===!1&&Yh(n)}function Gh(n,e){K(e,(t,s)=>{fs(n,t,s)})}function fs(n,e,t){const s=new k("/.info/"+e),i=V(t);n.infoData_.updateSnapshot(s,i);const r=Gt(n.infoSyncTree_,s,i);de(n.eventQueue_,s,r)}function Ur(n){return n.nextWriteId_++}function qh(n,e,t,s,i){ps(n,"set",{path:e.toString(),value:t,priority:s});const r=us(n),o=V(t,s),a=ts(n.serverSyncTree_,e),l=Pr(o,a,r),c=Ur(n),u=Rr(n.serverSyncTree_,e,l,c,!0);ds(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||Q("set at "+e+" failed: "+f);const _=we(n.serverSyncTree_,c,!g);de(n.eventQueue_,e,_),Xh(n,i,f,p)});const d=qr(n,e);Qt(n,d),de(n.eventQueue_,d,[])}function Yh(n){ps(n,"onDisconnectEvents");const e=us(n),t=At();En(n.onDisconnect_,x(),(i,r)=>{const o=Nh(i,r,n.serverSyncTree_,e);mr(t,i,o)});let s=[];En(t,x(),(i,r)=>{s=s.concat(Gt(n.serverSyncTree_,i,r));const o=qr(n,i);Qt(n,o)}),n.onDisconnect_=At(),de(n.eventQueue_,x(),s)}function Qh(n,e,t){let s;C(e._path)===".info"?s=fi(n.infoSyncTree_,e,t):s=fi(n.serverSyncTree_,e,t),zr(n.eventQueue_,e._path,s)}function Kh(n,e,t){let s;C(e._path)===".info"?s=Rn(n.infoSyncTree_,e,t):s=Rn(n.serverSyncTree_,e,t),zr(n.eventQueue_,e._path,s)}function Jh(n){n.persistentConnection_&&n.persistentConnection_.interrupt(Bh)}function ps(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),H(t,...e)}function Xh(n,e,t,s){e&&Ve(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Vr(n,e,t){return ts(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function ms(n,e=n.transactionQueueTree_){if(e||Kt(n,e),He(e)){const t=$r(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Zh(n,_t(e),t)}else Mr(e)&&Yt(e,t=>{ms(n,t)})}function Zh(n,e,t){const s=t.map(c=>c.currentWriteId),i=Vr(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const u=t[c];m(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=q(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{ps(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(we(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&d.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();Kt(n,cs(n.transactionQueueTree_,e)),ms(n,n.transactionQueueTree_),de(n.eventQueue_,e,u);for(let f=0;f<d.length;f++)Ve(d[f])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{Q("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Qt(n,e)}},o)}function Qt(n,e){const t=Hr(n,e),s=_t(t),i=$r(n,t);return ed(n,i,s),s}function ed(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=q(t,l.path);let u=!1,d;if(m(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(we(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=Uh)u=!0,d="maxretry",i=i.concat(we(n.serverSyncTree_,l.currentWriteId,!0));else{const f=Vr(n,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){hs("transaction failed: Data returned ",p,l.path);let g=V(p);typeof p=="object"&&p!=null&&ue(p,".priority")||(g=g.updatePriority(f.getPriority()));const T=l.currentWriteId,R=us(n),X=Pr(g,f,R);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=X,l.currentWriteId=Ur(n),o.splice(o.indexOf(T),1),i=i.concat(Rr(n.serverSyncTree_,l.path,X,l.currentWriteId,l.applyLocally)),i=i.concat(we(n.serverSyncTree_,T,!0))}else u=!0,d="nodata",i=i.concat(we(n.serverSyncTree_,l.currentWriteId,!0))}de(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Kt(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Ve(s[a]);ms(n,n.transactionQueueTree_)}function Hr(n,e){let t,s=n.transactionQueueTree_;for(t=C(e);t!==null&&He(s)===void 0;)s=cs(s,t),e=P(e),t=C(e);return s}function $r(n,e){const t=[];return Gr(n,e,t),t.sort((s,i)=>s.order-i.order),t}function Gr(n,e,t){const s=He(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Yt(e,i=>{Gr(n,i,t)})}function Kt(n,e){const t=He(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Or(e,t.length>0?t:void 0)}Yt(e,s=>{Kt(n,s)})}function qr(n,e){const t=_t(Hr(n,e)),s=cs(n.transactionQueueTree_,e);return kh(s,i=>{ln(n,i)}),ln(n,s),Lr(s,i=>{ln(n,i)}),t}function ln(n,e){const t=He(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(we(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Or(e,void 0):t.length=r+1,de(n.eventQueue_,_t(e),i);for(let o=0;o<s.length;o++)Ve(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function nd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Q(`Invalid query segment '${t}' in query '${n}'`)}return e}const _i=function(n,e){const t=sd(n),s=t.namespace;t.domain==="firebase.com"&&he(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&he("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||pl();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Ki(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new k(t.pathString)}},sd=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(u,d)),u<d&&(i=td(n.substring(u,d)));const f=nd(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const p=e.slice(0,c);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class id{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+B(this.snapshot.exportVal())}}class rd{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return E(this._path)?null:rr(this._path)}get ref(){return new ye(this._repo,this._path)}get _queryIdentifier(){const e=ti(this._queryParams),t=Wn(e);return t==="{}"?"default":t}get _queryObject(){return ti(this._queryParams)}isEqual(e){if(e=ut(e),!(e instanceof gs))return!1;const t=this._repo===e._repo,s=Vn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Jl(this._path)}}class ye extends gs{constructor(e,t){super(e,t,new qn,!1)}get parent(){const e=ar(this._path);return e===null?null:new ye(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Wt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new k(e),s=An(this.ref,e);return new Wt(this._node.getChild(t),s,F)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Wt(i,An(this.ref,s),F)))}hasChild(e){const t=new k(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Yr(n,e){return n=ut(n),n._checkNotDeleted("ref"),An(n._root,e)}function An(n,e){return n=ut(n),C(n._path)===null?Lh("child","path",e):Wr("child","path",e),new ye(n._repo,j(n._path,e))}function ad(n,e){n=ut(n),Fh("set",n._path),Mh("set",e,n._path);const t=new Bt;return qh(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class _s{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new id("value",this,new Wt(e.snapshotNode,new ye(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new rd(this,e,t):null}matches(e){return e instanceof _s?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function ld(n,e,t,s,i){const r=new od(t,void 0),o=new _s(r);return Qh(n._repo,n,o),()=>Kh(n._repo,n,o)}function cd(n,e,t,s){return ld(n,"value",e)}ah(ye);fh(ye);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hd="FIREBASE_DATABASE_EMULATOR_HOST",Dn={};let dd=!1;function ud(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Ni(r);n.repoInfo_=new Ki(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function fd(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||he("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),H("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=_i(r,i),a=o.repoInfo,l;typeof process<"u"&&Fs&&(l=Fs[hd]),l?(r=`http://${l}?ns=${a.namespace}`,o=_i(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Il(n.name,n.options,e);jh("Invalid Firebase Database URL",o),E(o.path)||he("Database URL must point to the root of a Firebase Database (not including a child path).");const u=md(a,n,c,new wl(n,t));return new gd(u,n)}function pd(n,e){const t=Dn[e];(!t||t[n.key]!==n)&&he(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Jh(n),delete t[n.key]}function md(n,e,t,s){let i=Dn[e.name];i||(i={},Dn[e.name]=i);let r=i[n.toURLString()];return r&&he("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new Vh(n,dd,t,s),i[n.toURLString()]=r,r}class gd{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Hh(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ye(this._repo,x())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pd(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&he("Cannot call "+e+" on a deleted database.")}}function _d(n=Ja(),e){const t=Ga(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=Mo("database");s&&yd(t,...s)}return t}function yd(n,e,t,s={}){n=ut(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&wt(s,r.repoInfo_.emulatorOptions))return;he("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&he('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Ct(Ct.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Lo(s.mockUserToken,n.app.options.projectId);o=new Ct(a)}Ni(e)&&Qo(e),ud(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vd(n){ll(Ka),xt(new st("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return fd(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Pe(js,Ws,n),Pe(js,Ws,"esm2020")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */le.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};le.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};vd();var bd="firebase",Cd="12.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pe(bd,Cd,"app");const Sd={apiKey:"AIzaSyABiFO7TWD7o-V_wpVenOMOf52ovKYPKms",authDomain:"concursos-20cce.firebaseapp.com",databaseURL:"https://concursos-20cce-default-rtdb.firebaseio.com",projectId:"concursos-20cce",storageBucket:"concursos-20cce.firebasestorage.app",messagingSenderId:"830415520406",appId:"1:830415520406:web:06f25ae36a70cfd84738b7",measurementId:"G-BF6WV175XG"},Ed=Di(Sd),Qr=_d(Ed),Kr="english_immersion_os/user_progress";let Pn=!1;const zt=async()=>{if(!Pn)try{const n={updatedAt:Date.now(),english_immersion_progress:localStorage.getItem("english_immersion_progress"),english_game_stats:localStorage.getItem("english_game_stats"),english_daily_vocab_goal:localStorage.getItem("english_daily_vocab_goal"),english_vocab_srs_state:localStorage.getItem("english_vocab_srs_state")},e=Yr(Qr,Kr);return await ad(e,n),!0}catch(n){return console.warn("Firebase sync upload note:",n),!1}},wd=n=>{try{const e=Yr(Qr,Kr);return cd(e,s=>{const i=s.val();if(!i||!i.updatedAt)return;Pn=!0;let r=!1;i.english_immersion_progress&&i.english_immersion_progress!==localStorage.getItem("english_immersion_progress")&&(localStorage.setItem("english_immersion_progress",i.english_immersion_progress),r=!0),i.english_game_stats&&i.english_game_stats!==localStorage.getItem("english_game_stats")&&(localStorage.setItem("english_game_stats",i.english_game_stats),r=!0),i.english_daily_vocab_goal&&i.english_daily_vocab_goal!==localStorage.getItem("english_daily_vocab_goal")&&(localStorage.setItem("english_daily_vocab_goal",i.english_daily_vocab_goal),r=!0),i.english_vocab_srs_state&&i.english_vocab_srs_state!==localStorage.getItem("english_vocab_srs_state")&&(localStorage.setItem("english_vocab_srs_state",i.english_vocab_srs_state),r=!0),r&&n&&n(i),setTimeout(()=>{Pn=!1},300)})}catch(e){return console.warn("Firebase realtime subscription error:",e),()=>{}}},cn=n=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;if(n==="correct")[523.25,659.25,783.99].forEach((i,r)=>{const o=t.createOscillator(),a=t.createGain();o.type="sine",o.frequency.setValueAtTime(i,t.currentTime+r*.08),a.gain.setValueAtTime(.15,t.currentTime+r*.08),a.gain.exponentialRampToValueAtTime(.001,t.currentTime+r*.08+.35),o.connect(a),a.connect(t.destination),o.start(t.currentTime+r*.08),o.stop(t.currentTime+r*.08+.4)});else if(n==="wrong"){const s=t.createOscillator(),i=t.createGain();s.type="triangle",s.frequency.setValueAtTime(220,t.currentTime),s.frequency.setValueAtTime(175,t.currentTime+.1),i.gain.setValueAtTime(.18,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+.3),s.connect(i),i.connect(t.destination),s.start(t.currentTime),s.stop(t.currentTime+.35)}else n==="victory"&&[523.25,659.25,783.99,1046.5].forEach((i,r)=>{const o=t.createOscillator(),a=t.createGain();o.type="triangle",o.frequency.setValueAtTime(i,t.currentTime+r*.1),a.gain.setValueAtTime(.2,t.currentTime+r*.1),a.gain.exponentialRampToValueAtTime(.001,t.currentTime+r*.1+.5),o.connect(a),a.connect(t.destination),o.start(t.currentTime+r*.1),o.stop(t.currentTime+r*.1+.55)})}catch(e){console.warn("Sound effect note:",e)}};function Id({initialMode:n="listening"}){const[e,t]=w.useState(n),[s,i]=w.useState(null),[r,o]=w.useState(!1),[a,l]=w.useState(!1),[c,u]=w.useState(!1),[d,f]=w.useState(!1),[p,g]=w.useState(.88),[_,T]=w.useState(()=>{const y=localStorage.getItem("english_vocab_srs_state");return y?JSON.parse(y):{}}),[R,X]=w.useState(()=>{const y=localStorage.getItem("english_daily_vocab_goal"),A=new Date().toISOString().split("T")[0];if(y){const U=JSON.parse(y);if(U.date===A)return U}return{date:A,masteredIds:[],count:0,target:100}}),[O,b]=w.useState(()=>{const y=localStorage.getItem("english_game_stats");return y?JSON.parse(y):{xp:0,level:1,streak:0,bestStreak:0,totalAnswered:0,totalCorrect:0,lives:3}}),N=(y,A)=>{let U=Ge.essentialWords;y==="tech"&&(U=Ge.techWords),y==="sentences"&&(U=Ge.sentences),y==="blitz"&&(U=[...Ge.essentialWords,...Ge.techWords]);const ve=U.filter(J=>{const Z=A[J.id];return!Z||Z.stage<3}),ie=U.filter(J=>{const Z=A[J.id];return Z&&Z.stage>=3}),ke=[...ve,...ie].map(J=>({...J,shuffledOptions:[...J.options].sort(()=>Math.random()-.5)}));return ke.length>0?ke:U},[L,re]=w.useState(()=>N(e,_)),[G,$]=w.useState(0),I=L[G]||L[0],ys=I?_[I.id]||{stage:0,soundGap:!1}:{stage:0,soundGap:!1};w.useEffect(()=>{localStorage.setItem("english_vocab_srs_state",JSON.stringify(_))},[_]),w.useEffect(()=>{localStorage.setItem("english_daily_vocab_goal",JSON.stringify(R))},[R]),w.useEffect(()=>{localStorage.setItem("english_game_stats",JSON.stringify(O))},[O]),w.useEffect(()=>{if(I){const y=setTimeout(()=>{Se(I.en,p)},200);return()=>clearTimeout(y)}},[G,e]);const yt=y=>{t(y);const A=N(y,_);re(A),$(0),i(null),o(!1),l(!1),u(y!=="listening"),f(!1)},vs=(y=p)=>{I&&Se(I.en,y)},Jr=()=>{if(u(!0),f(!0),I){const y=I.id;T(A=>({...A,[y]:{...A[y]||{stage:0,streak:0},soundGap:!0}}))}},Xr=y=>{if(r||!I)return;i(y),o(!0);const A=y===I.pt;l(A);const U=I.id,ve=_[U]||{stage:0,streak:0};if(A){cn("correct");const ie=Math.min(d?2:3,ve.stage+1),ke=ve.streak+1,J={..._,[U]:{stage:ie,streak:ke,lastReviewed:Date.now(),mastered:ie>=3,soundGap:d}};T(J),R.masteredIds.includes(U)||X(fe=>({...fe,masteredIds:[...fe.masteredIds,U],count:fe.count+1}));const Z=O.streak+1,$e=10+(Z>=3?5:0),Ss=O.xp+$e,to=Math.floor(Ss/100)+1;b(fe=>({...fe,xp:Ss,level:to,streak:Z,bestStreak:Math.max(fe.bestStreak,Z),totalAnswered:fe.totalAnswered+1,totalCorrect:fe.totalCorrect+1}))}else{cn("wrong");const ie={..._,[U]:{stage:0,streak:0,lastReviewed:Date.now(),mastered:!1,soundGap:!0}};T(ie);const ke={...I,shuffledOptions:[...I.options].sort(()=>Math.random()-.5)},J=[...L],Z=Math.min(J.length,G+3);J.splice(Z,0,ke),re(J),b($e=>({...$e,streak:0,lives:Math.max(0,$e.lives-1),totalAnswered:$e.totalAnswered+1}))}setTimeout(()=>{zt()},100)},Zr=()=>{if(!I)return;const y=I.id;T(A=>({...A,[y]:{stage:3,streak:3,lastReviewed:Date.now(),mastered:!0,soundGap:!1}})),R.masteredIds.includes(y)||X(A=>({...A,masteredIds:[...A.masteredIds,y],count:A.count+1})),setTimeout(()=>{zt()},100),bs()},bs=()=>{if(G+1<L.length)$(y=>y+1),i(null),o(!1),l(!1),u(e!=="listening"),f(!1);else{const y=N(e,_);re(y),$(0),i(null),o(!1),l(!1),u(e!=="listening"),f(!1),cn("victory")}},eo=(y,A)=>A?h.jsx("span",{className:"badge badge-amber",children:"👂 Treinar Pronúncia/Som"}):y>=3?h.jsx("span",{className:"badge badge-emerald",children:"🟩 Dominada"}):y===2?h.jsx("span",{className:"badge badge-blue",children:"🟨 Em Revisão (2/3)"}):y===1?h.jsx("span",{className:"badge badge-amber",children:"🟧 Praticando (1/3)"}):h.jsx("span",{className:"badge",style:{background:"rgba(255,255,255,0.08)",color:"var(--text-muted)"},children:"🟥 Palavra Nova"}),Cs=Math.min(100,Math.round(R.count/R.target*100));return h.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"900px",margin:"0 auto"},children:[h.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(2, 132, 199, 0.18) 0%, rgba(16, 185, 129, 0.18) 100%)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-xl)",padding:"1.25rem 1.5rem",display:"flex",flexDirection:"column",gap:"0.75rem",boxShadow:"var(--shadow-sm)"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[h.jsx(yi,{size:20,color:"var(--accent-amber)"}),h.jsx("span",{style:{fontWeight:800,fontSize:"0.95rem",color:"#fff"},children:"🎯 Meta do Dia: 100 Palavras"})]}),h.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:800,color:"var(--accent-emerald)"},children:[R.count," / ",R.target," Palavras Aprendidas Hoje (",Cs,"%)"]})]}),h.jsx("div",{className:"progress-bar-bg",style:{height:"10px"},children:h.jsx("div",{className:"progress-bar-fill",style:{width:`${Cs}%`}})})]}),h.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"1rem 1.5rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[h.jsxs("div",{style:{width:"42px",height:"42px",borderRadius:"50%",background:"linear-gradient(135deg, #fbbf24 0%, #d97706 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#000",fontWeight:800,fontSize:"1rem"},children:["Lv.",O.level]}),h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:800},children:"PONTUAÇÃO"}),h.jsxs("div",{style:{fontSize:"1.1rem",fontWeight:800,color:"var(--accent-amber)"},children:["⚡ ",O.xp," XP"]})]})]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"1.25rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem"},children:[h.jsx(Mn,{size:20,color:O.streak>0?"var(--accent-amber)":"var(--text-muted)"}),h.jsxs("span",{style:{fontSize:"1rem",fontWeight:800,color:O.streak>0?"var(--accent-amber)":"var(--text-muted)"},children:[O.streak,"x Combo"]})]}),h.jsx("div",{style:{display:"flex",gap:"0.2rem",alignItems:"center"},children:[1,2,3].map(y=>h.jsx(uo,{size:20,fill:y<=O.lives?"var(--accent-rose)":"none",color:y<=O.lives?"var(--accent-rose)":"var(--text-muted)"},y))})]})]}),h.jsxs("div",{style:{display:"flex",gap:"0.5rem",overflowX:"auto",paddingBottom:"0.25rem"},children:[h.jsxs("button",{className:`btn ${e==="listening"?"btn-emerald":"btn-secondary"}`,onClick:()=>yt("listening"),style:{flex:1,fontSize:"0.82rem",whiteSpace:"nowrap"},children:[h.jsx(fo,{size:15})," 🎧 1. Desafio Auditivo"]}),h.jsxs("button",{className:`btn ${e==="blitz"?"btn-emerald":"btn-secondary"}`,onClick:()=>yt("blitz"),style:{flex:1,fontSize:"0.82rem",whiteSpace:"nowrap"},children:[h.jsx(po,{size:15})," ⚡ 2. Flash Blitz"]}),h.jsxs("button",{className:`btn ${e==="sentences"?"btn-emerald":"btn-secondary"}`,onClick:()=>yt("sentences"),style:{flex:1,fontSize:"0.82rem",whiteSpace:"nowrap"},children:[h.jsx(On,{size:15})," 🧩 3. Frases"]}),h.jsxs("button",{className:`btn ${e==="tech"?"btn-emerald":"btn-secondary"}`,onClick:()=>yt("tech"),style:{flex:1,fontSize:"0.82rem",whiteSpace:"nowrap"},children:[h.jsx(mo,{size:15})," 💻 4. TI & Código"]})]}),I&&h.jsxs("div",{className:"card",style:{borderColor:"var(--accent-emerald)",padding:"1.75rem",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[h.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[eo(ys.stage,ys.soundGap),h.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:["• ",I.category||"Vocabulário"]})]}),!r&&h.jsxs("button",{onClick:Zr,style:{background:"rgba(255,255,255,0.06)",border:"1px solid var(--border-color)",color:"var(--text-secondary)",padding:"0.3rem 0.65rem",borderRadius:"var(--radius-sm)",fontSize:"0.75rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.3rem"},title:"Pular e marcar como dominada",children:[h.jsx(go,{size:13,color:"var(--accent-amber)"})," Já sei essa palavra"]})]}),h.jsxs("div",{style:{background:"rgba(0, 0, 0, 0.35)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"1.75rem",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"1.15rem"},children:[h.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[h.jsxs("button",{className:"btn btn-primary",onClick:()=>vs(p),style:{padding:"0.9rem 1.8rem",fontSize:"1.05rem",borderRadius:"var(--radius-xl)",boxShadow:"0 0 25px rgba(2, 132, 199, 0.4)"},children:[h.jsx(fn,{size:22})," Ouvir Pronúncia"]}),h.jsx("button",{className:"btn btn-secondary",onClick:()=>vs(.68),style:{padding:"0.8rem 1.1rem",fontSize:"0.85rem",borderRadius:"var(--radius-xl)"},children:"🐢 0.68x Bem Lento"})]}),e==="listening"&&!c&&!r?h.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem",marginTop:"0.3rem"},children:[h.jsx("span",{style:{fontSize:"1.3rem",fontWeight:800,color:"var(--text-muted)",letterSpacing:"0.25em"},children:"🔊 • • • • • •"}),h.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:["(Identifique o significado ",h.jsx("strong",{children:"apenas escutando"}),"!)"]}),h.jsxs("button",{onClick:Jr,style:{background:"rgba(56, 189, 248, 0.1)",border:"1px solid rgba(56, 189, 248, 0.3)",color:"var(--accent-blue)",fontSize:"0.8rem",fontWeight:700,cursor:"pointer",padding:"0.4rem 0.8rem",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",gap:"0.4rem",marginTop:"0.4rem"},children:[h.jsx(_o,{size:14})," Espiar escrita & Pronúncia"]})]}):h.jsxs("div",{style:{marginTop:"0.3rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem",width:"100%"},children:[h.jsxs("div",{style:{fontSize:"1.9rem",fontWeight:800,color:"var(--accent-blue)",fontFamily:"var(--font-mono)"},children:['"',I.en,'"']}),h.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.12)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-md)",padding:"0.75rem 1.25rem",maxWidth:"550px",width:"100%",textAlign:"center",display:"flex",flexDirection:"column",gap:"0.3rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",flexWrap:"wrap"},children:[h.jsx("span",{style:{fontSize:"0.75rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase"},children:"🗣️ Como se fala:"}),h.jsxs("span",{style:{fontSize:"1.15rem",fontWeight:800,color:"var(--accent-emerald)",fontFamily:"var(--font-mono)"},children:['"',I.phoneticPt||I.en,'"']}),I.ipa&&h.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:I.ipa})]}),I.soundTip&&h.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",marginTop:"0.15rem"},children:["💡 ",h.jsx("strong",{children:"Dica de Som:"})," ",I.soundTip]})]}),d&&h.jsx("div",{style:{fontSize:"0.75rem",color:"var(--accent-amber)",fontWeight:700},children:"⚠️ Você precisou ver a escrita: o sistema agendou esta palavra para mais treinos auditivos!"})]})]}),h.jsxs("div",{children:[h.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)",fontWeight:800,display:"block",marginBottom:"0.75rem",textTransform:"uppercase"},children:"Qual é o significado correto em português?"}),h.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"0.75rem"},children:(I.shuffledOptions||I.options).map((y,A)=>{const U=s===y,ve=y===I.pt;let ie={padding:"1rem 1.15rem",fontSize:"0.92rem",textAlign:"left",justifyContent:"flex-start",borderRadius:"var(--radius-md)",transition:"all 0.15s ease",fontWeight:700};if(r){if(ve)return h.jsxs("button",{className:"btn btn-emerald",style:{...ie,boxShadow:"0 0 15px var(--accent-emerald-glow)"},children:[h.jsx(yo,{size:18})," ",y," (Correto! 🎉)"]},A);if(U&&!a)return h.jsxs("button",{className:"btn btn-secondary",style:{...ie,borderColor:"var(--accent-rose)",color:"var(--accent-rose)",background:"rgba(244, 63, 94, 0.15)"},children:[h.jsx(vo,{size:18})," ",y," (Incorreto)"]},A)}return h.jsxs("button",{onClick:()=>Xr(y),disabled:r,className:"btn btn-secondary",style:{...ie,border:"1px solid var(--border-color)",background:"var(--bg-card)"},children:[h.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"rgba(255,255,255,0.08)",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",marginRight:"0.5rem"},children:String.fromCharCode(65+A)}),y]},A)})})]}),r&&h.jsxs("div",{style:{background:a?"var(--accent-emerald-glow)":"rgba(244, 63, 94, 0.12)",border:a?"1px solid var(--accent-emerald)":"1px solid var(--accent-rose)",borderRadius:"var(--radius-md)",padding:"1.15rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[h.jsxs("div",{children:[h.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,color:a?"var(--accent-emerald)":"var(--accent-rose)"},children:a?"🎯 Resposta Correta! (+10 XP)":"❌ Você errou! (Palavra re-inserida na fila de reforço)"}),h.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:"0.2rem"},children:['"',I.en,'" = ',h.jsxs("strong",{children:['"',I.pt,'"']})]})]}),h.jsxs("button",{className:"btn btn-primary",onClick:bs,style:{padding:"0.7rem 1.6rem",fontSize:"0.95rem",fontWeight:800},children:["Próxima Palavra ",h.jsx(bo,{size:16})]})]})]})]})}function xd(){const[n,e]=w.useState("game"),[t,s]=w.useState(!1),[i,r]=w.useState(()=>{const a=localStorage.getItem("english_immersion_progress");return a?JSON.parse(a):{currentDay:1,completedDays:0,totalHours:0,streak:1,todayTasks:{game_practice:!0,ai_speaking:!1}}});w.useEffect(()=>{zt(),s(!0);const a=wd(l=>{if(l.english_immersion_progress)try{r(JSON.parse(l.english_immersion_progress))}catch{}s(!0)});return()=>{a&&a()}},[]),w.useEffect(()=>{localStorage.setItem("english_immersion_progress",JSON.stringify(i)),zt()},[i]);const o=a=>{r(l=>({...l,todayTasks:{...l.todayTasks,[a]:!l.todayTasks[a]}}))};return h.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[h.jsx("header",{className:"app-header",children:h.jsxs("div",{className:"header-container",children:[h.jsxs("div",{className:"logo-group",children:[h.jsx("div",{className:"logo-icon",children:h.jsx(On,{size:20})}),h.jsxs("div",{children:[h.jsx("h1",{className:"brand-title",children:"English Immersion OS"}),h.jsx("span",{className:"brand-subtitle",children:"Firebase Realtime Cloud • PC ↔ Celular"})]})]}),h.jsxs("nav",{className:"nav-tabs desktop-nav-tabs",children:[h.jsxs("button",{className:`tab-btn ${n==="game"?"active":""}`,onClick:()=>e("game"),style:{color:n==="game"?"var(--accent-amber)":"var(--text-secondary)",background:n==="game"?"rgba(251, 191, 36, 0.15)":"transparent",border:n==="game"?"1px solid rgba(251, 191, 36, 0.3)":"none"},children:[h.jsx(dn,{size:16})," 🎮 1. Game de Escuta & Palavras"]}),h.jsxs("button",{className:`tab-btn ${n==="ai"?"active":""}`,onClick:()=>e("ai"),children:[h.jsx(un,{size:16})," 🤖 2. Tutor de IA (Voz)"]}),h.jsxs("button",{className:`tab-btn ${n==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),children:[h.jsx(ws,{size:16})," 📊 3. Meu Progresso"]})]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.75rem",color:t?"var(--accent-emerald)":"var(--text-muted)",background:"rgba(16, 185, 129, 0.12)",padding:"0.25rem 0.6rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(16, 185, 129, 0.3)"},title:"Conectado ao Firebase Realtime Database",children:[h.jsx(hn,{size:13,color:"var(--accent-emerald)"})," Nuvem Conectada"]}),h.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},className:"mobile-streak-pill",children:[h.jsx(Mn,{size:16,color:"var(--accent-amber)"}),h.jsxs("span",{style:{fontSize:"0.85rem",fontWeight:800,color:"var(--accent-amber)"},children:[i.streak,"d"]})]})]})]})}),h.jsxs("main",{className:"main-content",children:[n==="game"&&h.jsx(Id,{}),n==="ai"&&h.jsx(wo,{}),n==="dashboard"&&h.jsx(Co,{progressData:i,toggleTask:o,setTab:e})]}),h.jsxs("nav",{className:"mobile-bottom-nav",children:[h.jsxs("button",{className:`mobile-nav-item ${n==="game"?"active-game":""}`,onClick:()=>e("game"),children:[h.jsx(dn,{size:20,color:n==="game"?"var(--accent-amber)":"inherit"}),h.jsx("span",{children:"Game"})]}),h.jsxs("button",{className:`mobile-nav-item ${n==="ai"?"active-ai":""}`,onClick:()=>e("ai"),children:[h.jsx(un,{size:20,color:n==="ai"?"var(--accent-blue)":"inherit"}),h.jsx("span",{children:"Tutor IA"})]}),h.jsxs("button",{className:`mobile-nav-item ${n==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),children:[h.jsx(ws,{size:20}),h.jsx("span",{children:"Progresso"})]})]}),h.jsx("footer",{style:{textAlign:"center",padding:"1.5rem",borderTop:"1px solid var(--border-color)",color:"var(--text-muted)",fontSize:"0.85rem"},children:"English Immersion OS — Sincronização em Nuvem com Firebase Realtime Database."})]})}no.createRoot(document.getElementById("root")).render(h.jsx(so.StrictMode,{children:h.jsx(xd,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/english-immersion-os/sw.js",{scope:"/english-immersion-os/"}).catch(n=>{console.warn("Service worker registration failed:",n)})});
