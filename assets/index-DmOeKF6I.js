import{r as E,j as c,c as xo,R as wo}from"./react-vendor-Ds7D3P6J.js";import{S as Di,C as vn,G as bn,B as Cn,T as Sn,D as Eo,F as Pi,a as Io,U as To,b as No,P as Ds,c as ko,V as xn,M as Ro,d as Ao,Z as Do,e as Po,f as Oo,E as Mo,g as Ps,h as jo,A as Os,L as Ms,i as Lo,j as js}from"./icons-CApdAs9-.js";import{g as on,a as Fo,C as Ls,b as Fs,B as Wo}from"./data-C-Ir4dd-.js";import"./phase-1-DoRlKjLf.js";import"./phase-2a-DGACCUXY.js";import"./phase-2b-BMBAOXY3.js";import"./phase-3a-Cjwfo6qQ.js";import"./phase-3b-CEAUSXPe.js";import"./phase-4a-BXILQOTN.js";import"./phase-4b-CDUmd3nW.js";import"./phase-4c-Cub_cTmo.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function Bo({progressData:n,setTab:e}){const{currentDay:t,completedDays:s,totalHours:i,streak:r}=n,[o,a]=E.useState(!1),l=(()=>{try{const f=JSON.parse(localStorage.getItem("english_game_stats")||"{}"),p=JSON.parse(localStorage.getItem("english_daily_vocab_goal")||"{}"),g=JSON.parse(localStorage.getItem("english_vocab_srs_state")||"{}"),b=Object.values(g),N=b.filter(G=>G.stage>=3||G.mastered).length,M=b.filter(G=>G.stage===1||G.stage===2).length,z=b.filter(G=>G.soundGap).length;return{xp:f.xp||0,level:f.level||1,bestStreak:f.bestStreak||0,todayCount:p.count||0,todayTarget:p.target||100,masteredCount:N,reviewingCount:M,soundGapCount:z,totalTracked:Object.keys(g).length}}catch{return{xp:0,level:1,bestStreak:0,todayCount:0,todayTarget:100,masteredCount:0,reviewingCount:0,soundGapCount:0,totalTracked:0}}})(),d=Math.min(100,Math.round(l.todayCount/l.todayTarget*100)),u=()=>{const f={version:"1.0",exportDate:new Date().toISOString(),english_immersion_progress:localStorage.getItem("english_immersion_progress"),english_game_stats:localStorage.getItem("english_game_stats"),english_daily_vocab_goal:localStorage.getItem("english_daily_vocab_goal"),english_vocab_srs_state:localStorage.getItem("english_vocab_srs_state")},p=new Blob([JSON.stringify(f,null,2)],{type:"application/json"}),g=URL.createObjectURL(p),b=document.createElement("a");b.href=g,b.download=`english_immersion_backup_${new Date().toISOString().slice(0,10)}.json`,b.click(),URL.revokeObjectURL(g)},h=f=>{var b;const p=(b=f.target.files)==null?void 0:b[0];if(!p)return;const g=new FileReader;g.onload=N=>{try{const M=JSON.parse(N.target.result);M.english_immersion_progress&&localStorage.setItem("english_immersion_progress",M.english_immersion_progress),M.english_game_stats&&localStorage.setItem("english_game_stats",M.english_game_stats),M.english_daily_vocab_goal&&localStorage.setItem("english_daily_vocab_goal",M.english_daily_vocab_goal),M.english_vocab_srs_state&&localStorage.setItem("english_vocab_srs_state",M.english_vocab_srs_state),a(!0),setTimeout(()=>{window.location.reload()},1200)}catch{alert("Erro ao ler o arquivo de backup. Verifique se o arquivo está correto.")}},g.readAsText(p)};return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.75rem",maxWidth:"1000px",margin:"0 auto"},children:[c.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(251, 191, 36, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)",border:"1px solid var(--accent-amber)",borderRadius:"var(--radius-xl)",padding:"2rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1.5rem"},children:[c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.5rem",flexWrap:"wrap"},children:[c.jsxs("span",{className:"badge badge-amber",children:[c.jsx(Di,{size:14})," Imersão Acelerada (4 Meses)"]}),c.jsxs("span",{className:"badge badge-emerald",children:[c.jsx(vn,{size:14})," Firebase Realtime Cloud: concursos-20cce"]})]}),c.jsx("h1",{style:{fontSize:"1.8rem",fontWeight:800,marginBottom:"0.4rem"},children:"Seu Progresso de Imersão & Fluência"}),c.jsxs("p",{style:{color:"var(--text-secondary)",maxWidth:"650px",fontSize:"0.95rem"},children:["Sincronizado automaticamente pelo ",c.jsx("strong",{children:"Firebase Realtime Database"})," entre o seu Computador e Celular!"]})]}),c.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap"},children:[c.jsxs("button",{className:"btn btn-emerald",onClick:()=>e("game"),style:{padding:"0.75rem 1.5rem",fontSize:"0.95rem"},children:[c.jsx(bn,{size:18})," Jogar Game de Escuta"]}),c.jsxs("button",{className:"btn btn-primary",onClick:()=>e("ai"),style:{padding:"0.75rem 1.5rem",fontSize:"0.95rem"},children:[c.jsx(Cn,{size:18})," Conversar com IA por Voz"]})]})]}),c.jsxs("div",{className:"grid-cards",children:[c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"card-header",children:[c.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:600},children:"VOCABULÁRIO HOJE"}),c.jsx(Sn,{size:20,color:"var(--accent-amber)"})]}),c.jsxs("div",{style:{fontSize:"2rem",fontWeight:800,color:"var(--accent-amber)",marginBottom:"0.5rem"},children:[l.todayCount," ",c.jsxs("span",{style:{fontSize:"1rem",color:"var(--text-muted)",fontWeight:500},children:["/ ",l.todayTarget," palavras"]})]}),c.jsx("div",{className:"progress-bar-bg",children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${d}%`}})}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"0.5rem",fontSize:"0.8rem",color:"var(--text-secondary)"},children:[c.jsxs("span",{children:[d,"% da Meta de Hoje"]}),c.jsxs("span",{children:["Faltam ",Math.max(0,l.todayTarget-l.todayCount)," palavras"]})]})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"card-header",children:[c.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:600},children:"BANCO DE RETENÇÃO (SRS)"}),c.jsx(Eo,{size:20,color:"var(--accent-emerald)"})]}),c.jsxs("div",{style:{fontSize:"2rem",fontWeight:800,color:"var(--accent-emerald)",marginBottom:"0.5rem"},children:[l.masteredCount," ",c.jsx("span",{style:{fontSize:"1rem",color:"var(--text-muted)",fontWeight:500},children:"dominadas"})]}),c.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:["🟨 ",c.jsx("strong",{children:l.reviewingCount})," em revisão • 👂 ",c.jsx("strong",{children:l.soundGapCount})," foco em pronúncia"]})]}),c.jsxs("div",{className:"card",children:[c.jsxs("div",{className:"card-header",children:[c.jsx("span",{style:{color:"var(--text-muted)",fontSize:"0.85rem",fontWeight:600},children:"NÍVEL & COMBO"}),c.jsx(Pi,{size:20,color:"var(--accent-amber)"})]}),c.jsxs("div",{style:{fontSize:"2rem",fontWeight:800,color:"var(--accent-blue)",marginBottom:"0.5rem"},children:["Nível ",l.level," ",c.jsxs("span",{style:{fontSize:"1rem",color:"var(--accent-amber)",fontWeight:700},children:["(",l.xp," XP)"]})]}),c.jsxs("p",{style:{fontSize:"0.85rem",color:"var(--text-secondary)"},children:["Sequência: ",c.jsxs("strong",{children:[r," dias"]})," • Recorde: ",c.jsxs("strong",{children:[l.bestStreak,"x combo 🔥"]})]})]})]}),c.jsxs("div",{className:"card",style:{borderColor:"rgba(16, 185, 129, 0.4)",background:"linear-gradient(135deg, var(--bg-card) 0%, rgba(16, 185, 129, 0.08) 100%)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[c.jsxs("div",{children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.4rem"},children:[c.jsx(vn,{size:18,color:"var(--accent-emerald)"}),c.jsx("span",{className:"badge badge-emerald",children:"Firebase Realtime Database Ativo"})]}),c.jsx("h3",{style:{fontSize:"1.25rem",fontWeight:800},children:"Sincronização em Nuvem Global"}),c.jsxs("p",{style:{fontSize:"0.88rem",color:"var(--text-secondary)",marginTop:"0.2rem",maxWidth:"650px"},children:["Seu banco de dados do Firebase (",c.jsx("strong",{children:"concursos-20cce"}),") está conectado. Você pode abrir o app em qualquer lugar do mundo no seu celular ou PC: o progresso sincroniza em milissegundos via WebSocket!"]})]}),c.jsxs("div",{style:{display:"flex",gap:"0.75rem",flexWrap:"wrap",alignItems:"center"},children:[c.jsxs("button",{className:"btn btn-secondary",onClick:u,style:{fontSize:"0.85rem"},children:[c.jsx(Io,{size:16})," Baixar Backup Local (.json)"]}),c.jsxs("label",{className:"btn btn-primary",style:{fontSize:"0.85rem",cursor:"pointer",margin:0},children:[c.jsx(To,{size:16})," Restaurar Arquivo",c.jsx("input",{type:"file",accept:".json",onChange:h,style:{display:"none"}})]})]})]}),o&&c.jsxs("div",{style:{marginTop:"1rem",padding:"0.75rem",background:"var(--accent-emerald-glow)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-sm)",color:"var(--accent-emerald)",fontSize:"0.85rem",display:"flex",alignItems:"center",gap:"0.5rem"},children:[c.jsx(No,{size:16})," Backup restaurado e sincronizado com o Firebase com sucesso!"]})]})]})}const zo=()=>{const n=window.speechSynthesis.getVoices();return n.length===0?null:n.find(e=>e.lang.startsWith("en")&&(e.name.toLowerCase().includes("natural")||e.name.toLowerCase().includes("online")||e.name.toLowerCase().includes("google us english")||e.name.toLowerCase().includes("samantha")||e.name.toLowerCase().includes("jenny")||e.name.toLowerCase().includes("guy")||e.name.toLowerCase().includes("aria")))||n.find(e=>e.lang==="en-US")||n.find(e=>e.lang.startsWith("en"))},we=(n,e=.9)=>{if(!n)return;const t=n.trim();if("speechSynthesis"in window&&window.speechSynthesis.cancel(),t.length<200)try{const s=`https://translate.google.com/translate_tts?ie=UTF-8&tl=en-US&client=tw-ob&q=${encodeURIComponent(t)}`,i=new Audio(s);i.playbackRate=e||.9;const r=i.play();r!==void 0&&r.then(()=>{}).catch(o=>{console.log("Fallback to WebSpeech SpeechSynthesis:",o),Ws(t,e)});return}catch(s){console.warn("Neural audio stream fallback:",s)}Ws(t,e)},Ws=(n,e)=>{if(!("speechSynthesis"in window))return;const t=new SpeechSynthesisUtterance(n);t.lang="en-US",t.rate=e,t.pitch=1;const s=()=>{const i=zo();i&&(t.voice=i),window.speechSynthesis.speak(t)};window.speechSynthesis.getVoices().length>0?s():window.speechSynthesis.onvoiceschanged=()=>{s(),window.speechSynthesis.onvoiceschanged=null}},Uo={hello:{pt:"olá",pos:"saudação"},ruan:{pt:"Ruan (seu nome)",pos:"nome próprio"},i:{pt:"eu",pos:"pronome"},am:{pt:"sou / estou",pos:"verbo to be"},your:{pt:"seu / sua",pos:"possessivo"},live:{pt:"ao vivo",pos:"adjetivo"},ai:{pt:"IA (Inteligência Artificial)",pos:"substantivo"},coach:{pt:"tutor / treinador",pos:"substantivo"},what:{pt:"qual / o que",pos:"pronome de pergunta"},technology:{pt:"tecnologia",pos:"substantivo"},do:{pt:"verbo auxiliar de pergunta",pos:"auxiliar"},you:{pt:"você",pos:"pronome"},like:{pt:"gostar",pos:"verbo"},software:{pt:"programa / software",pos:"substantivo"},development:{pt:"desenvolvimento",pos:"substantivo"},and:{pt:"e",pos:"conjunção"},english:{pt:"inglês",pos:"substantivo"},go:{pt:"ir / caminhar",pos:"verbo"},hand:{pt:"mão",pos:"substantivo"},in:{pt:"em / dentro",pos:"preposição"},favorite:{pt:"favorito / preferido",pos:"adjetivo"},awesome:{pt:"incrível / sensacional",pos:"adjetivo"},computer:{pt:"computador",pos:"substantivo"},science:{pt:"ciência",pos:"substantivo"},engineering:{pt:"engenharia",pos:"substantivo"},are:{pt:"são / estão",pos:"verbo to be"},great:{pt:"ótimo / grande",pos:"adjetivo"},fields:{pt:"áreas / campos de atuação",pos:"substantivo"},write:{pt:"escrever",pos:"verbo"},code:{pt:"código / programar",pos:"substantivo/verbo"},every:{pt:"todo / cada",pos:"adjetivo"},day:{pt:"dia",pos:"substantivo"},learning:{pt:"aprendendo",pos:"verbo gerúndio"},step:{pt:"passo",pos:"substantivo"},by:{pt:"por / através de",pos:"preposição"},is:{pt:"é / está",pos:"verbo to be"},main:{pt:"principal",pos:"adjetivo"},goal:{pt:"meta / objetivo",pos:"substantivo"}};function Vo(){const[n,e]=E.useState([{id:1,sender:"ai",text:"Hello Ruan! I am your Live AI Coach. What technology do you like?",ptTranslation:"Olá Ruan! Eu sou seu Tutor de IA Ao Vivo. De qual tecnologia você gosta?",suggestions:[{en:"I like Python and web development.",pt:"Eu gosto de Python e desenvolvimento web."},{en:"I use JavaScript on my computer.",pt:"Eu uso JavaScript no meu computador."},{en:"I am learning software engineering.",pt:"Estou aprendendo engenharia de software."}]}]),[t,s]=E.useState(""),[i,r]=E.useState(!1),[o,a]=E.useState(!1),[l,d]=E.useState(!1),[u,h]=E.useState(null),f=E.useRef(null),p=E.useRef(null);E.useEffect(()=>{if("SpeechRecognition"in window||"webkitSpeechRecognition"in window){d(!0);const y=window.SpeechRecognition||window.webkitSpeechRecognition;p.current=new y,p.current.continuous=!1,p.current.interimResults=!1,p.current.lang="en-US",p.current.onresult=k=>{const W=k.results[0][0].transcript;s(W),N(W)},p.current.onend=()=>{r(!1),o&&setTimeout(()=>{var k;try{(k=p.current)==null||k.start(),r(!0)}catch(W){console.log("Recognition restart note:",W)}},1500)},p.current.onerror=()=>{r(!1)}}},[o]),E.useEffect(()=>{var y;(y=f.current)==null||y.scrollIntoView({behavior:"smooth"})},[n]);const g=()=>{var y;o?(a(!1),r(!1),(y=p.current)==null||y.stop()):(a(!0),r(!0),we("Hello Ruan! Live call active. Speak to me naturally in English!",.88),setTimeout(()=>{var k;try{(k=p.current)==null||k.start()}catch{}},3500))},b=()=>{var y,k;l&&(i?((y=p.current)==null||y.stop(),r(!1)):(r(!0),(k=p.current)==null||k.start()))},N=(y=t)=>{if(!y.trim())return;const k={id:Date.now(),sender:"user",text:y};e(W=>[...W,k]),s(""),setTimeout(()=>{M(y)},600)},M=y=>{const k=y.toLowerCase();let W="Software development and English go hand in hand! What is your favorite technology?",le="Desenvolvimento de software e inglês andam de mãos dadas! Qual é a sua tecnologia favorita?",X=[{en:"I like Python and web development.",pt:"Eu gosto de Python e dev web."},{en:"I use JavaScript on my computer.",pt:"Eu uso JavaScript no meu computador."},{en:"I am learning software engineering.",pt:"Estou aprendendo engenharia de software."}];k.includes("python")||k.includes("code")||k.includes("computer")||k.includes("javascript")?(W="Awesome! Computer science and software engineering are great fields. Do you write code every day?",le="Incrível! Ciência da computação e engenharia de software são ótimas áreas. Você escreve código todos os dias?",X=[{en:"Yes, I code every day.",pt:"Sim, eu programo todos os dias."},{en:"I am building a new project.",pt:"Estou construindo um projeto novo."},{en:"I want to work in tech.",pt:"Quero trabalhar na área de tecnologia."}]):(k.includes("english")||k.includes("study")||k.includes("hello")||k.includes("hi"))&&(W="Learning English step by step is awesome! What is your main goal?",le="Aprender inglês passo a passo é incrível! Qual é o seu principal objetivo?",X=[{en:"My goal is a tech job.",pt:"Meu objetivo é um emprego em tecnologia."},{en:"I want to speak fluently.",pt:"Quero falar com fluência."},{en:"I study 4 hours a day.",pt:"Estudo 4 horas por dia."}]);const Q={id:Date.now()+1,sender:"ai",text:W,ptTranslation:le,suggestions:X};e(De=>[...De,Q]),we(W,.88)},z=y=>{s(y),N(y)},G=y=>y.split(" ").map((W,le)=>{const X=W.toLowerCase().replace(/[^a-z]/g,""),Q=Uo[X];return c.jsxs("span",{onClick:()=>{Q&&(h({word:X,info:Q}),we(X,.82))},onMouseEnter:()=>{Q&&h({word:X,info:Q})},style:{cursor:Q?"pointer":"default",padding:"0 2px",borderRadius:"4px",textDecoration:Q?"underline":"none",textDecorationColor:"var(--accent-blue)",textUnderlineOffset:"3px",color:"var(--text-primary)",transition:"all 0.15s ease"},title:Q?`Clique ou passe o mouse: "${X}" = ${Q.pt}`:void 0,children:[W," "]},le)});return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"1000px",margin:"0 auto"},children:[c.jsxs("div",{style:{background:o?"linear-gradient(135deg, rgba(16, 185, 129, 0.25) 0%, rgba(2, 132, 199, 0.25) 100%)":"linear-gradient(135deg, rgba(2, 132, 199, 0.2) 0%, rgba(192, 132, 252, 0.18) 100%)",border:o?"2px solid var(--accent-emerald)":"1px solid var(--accent-blue)",borderRadius:"var(--radius-xl)",padding:"1.5rem",display:"flex",justify:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",marginBottom:"0.3rem"},children:c.jsxs("span",{className:`badge ${o?"badge-emerald":"badge-blue"}`,children:[c.jsx(Ds,{size:14})," ",o?"📞 Chamada de Voz Ao Vivo Ativa (Full Duplex)":"🤖 Tutor de IA por Voz & Texto"]})}),c.jsx("h2",{style:{fontSize:"1.6rem",fontWeight:800},children:"Tutor de Inglês por Voz Ao Vivo"}),c.jsx("p",{style:{color:"var(--text-secondary)",fontSize:"0.9rem"},children:o?"A IA está te escutando continuamente pelo microfone! Fale em inglês naturalmente.":"Clique em 'Iniciar Chamada de Voz ao Vivo' para conversar continuamente sem mãos!"})]}),c.jsx("button",{className:"btn btn-emerald",onClick:g,style:{padding:"0.8rem 1.6rem",fontSize:"1rem",boxShadow:o?"0 0 20px var(--accent-emerald-glow)":"none"},children:o?c.jsxs(c.Fragment,{children:[c.jsx(ko,{size:18})," Encerrar Chamada"]}):c.jsxs(c.Fragment,{children:[c.jsx(Ds,{size:18})," Iniciar Chamada de Voz ao Vivo"]})})]}),u&&c.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--accent-blue)",padding:"0.85rem 1.25rem",borderRadius:"var(--radius-md)",display:"flex",justify:"space-between",alignItems:"center",boxShadow:"var(--shadow-md)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[c.jsx("span",{className:"badge badge-blue",children:"🔍 Dicionário Instantâneo"}),c.jsxs("span",{style:{fontSize:"1.1rem",fontWeight:800,color:"var(--accent-blue)",fontFamily:"var(--font-mono)"},children:['"',u.word,'"']}),c.jsxs("span",{style:{fontSize:"1rem",color:"var(--accent-emerald)",fontWeight:700},children:["= ",u.info.pt]}),c.jsxs("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)"},children:["(",u.info.pos,")"]})]}),c.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[c.jsxs("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem"},onClick:()=>we(u.word,.82),children:[c.jsx(xn,{size:14})," Ouvir Pronúncia"]}),c.jsx("button",{className:"btn btn-secondary",style:{padding:"0.3rem 0.6rem",fontSize:"0.8rem"},onClick:()=>h(null),children:"✕"})]})]}),c.jsxs("div",{style:{background:"var(--bg-card)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-xl)",padding:"1.5rem",minHeight:"400px",maxHeight:"600px",overflowY:"auto",display:"flex",flexDirection:"column",gap:"1.25rem"},children:[n.map(y=>c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:y.sender==="user"?"flex-end":"flex-start"},children:[c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",marginBottom:"0.25rem",fontWeight:700},children:y.sender==="user"?"Você":"🤖 Tutor de IA"}),c.jsxs("div",{style:{maxWidth:"85%",padding:"1rem 1.25rem",borderRadius:"var(--radius-lg)",background:y.sender==="user"?"linear-gradient(135deg, #0284c7 0%, #0369a1 100%)":"rgba(255, 255, 255, 0.06)",border:y.sender==="user"?"none":"1px solid var(--border-color)",color:"#ffffff",fontSize:"0.95rem",lineHeight:1.6},children:[c.jsxs("div",{style:{fontWeight:600},children:[y.sender==="ai"?G(y.text):y.text,y.sender==="ai"&&c.jsx("button",{style:{background:"none",border:"none",cursor:"pointer",padding:"0.2rem",marginLeft:"0.4rem"},onClick:()=>we(y.text,.88),children:c.jsx(xn,{size:16,color:"var(--accent-blue)"})})]}),y.sender==="ai"&&y.ptTranslation&&c.jsxs("div",{style:{marginTop:"0.5rem",paddingTop:"0.5rem",borderTop:"1px solid rgba(255, 255, 255, 0.1)",fontSize:"0.85rem",color:"var(--accent-blue)"},children:["💬 ",c.jsx("strong",{children:"Tradução em PT:"}),' "',y.ptTranslation,'"']})]}),y.sender==="ai"&&y.suggestions&&c.jsxs("div",{style:{marginTop:"0.75rem",width:"100%",maxWidth:"85%"},children:[c.jsx("span",{style:{fontSize:"0.75rem",color:"var(--text-muted)",fontWeight:700,display:"block",marginBottom:"0.4rem"},children:"💡 Dica do que responder (Clique para usar):"}),c.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.4rem"},children:y.suggestions.map((k,W)=>c.jsxs("button",{onClick:()=>z(k.en),className:"btn btn-secondary",style:{justifyContent:"flex-start",textAlign:"left",fontSize:"0.82rem",padding:"0.5rem 0.8rem",borderColor:"var(--accent-emerald-glow)",background:"rgba(16, 185, 129, 0.06)"},children:[c.jsxs("span",{style:{color:"var(--accent-emerald)",fontWeight:800},children:['"',k.en,'"']}),c.jsxs("span",{style:{color:"var(--text-muted)",marginLeft:"0.4rem",fontSize:"0.75rem"},children:["(",k.pt,")"]})]},W))})]})]},y.id)),c.jsx("div",{ref:f})]}),c.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center"},children:[c.jsx("button",{className:`btn ${i?"btn-emerald":"btn-secondary"}`,onClick:b,style:{padding:"0.8rem",borderRadius:"50%",width:"48px",height:"48px",flexShrink:0},title:i?"Escutando sua voz...":"Falar pelo Microfone",children:c.jsx(Ro,{size:20,color:i?"#fff":"var(--accent-blue)"})}),c.jsx("input",{type:"text",className:"input-field",placeholder:"Digite, use a chamada ao vivo ou escolha uma sugestão acima...",value:t,onChange:y=>s(y.target.value),onKeyDown:y=>y.key==="Enter"&&N(),style:{flex:1,padding:"0.85rem 1.25rem",fontSize:"0.95rem"}}),c.jsxs("button",{className:"btn btn-primary",onClick:()=>N(),style:{padding:"0.85rem 1.5rem"},children:[c.jsx(Ao,{size:18})," Enviar"]})]})]})}const Ho=()=>{};var Bs={};/**
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
 */const Oi={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const m=function(n,e){if(!n)throw He(e)},He=function(n){return new Error("Firebase Database ("+Oi.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const Mi=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},$o=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Hn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,d=l?n[i+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let f=(a&15)<<2|d>>6,p=d&63;l||(p=64,o||(f=64)),s.push(t[u],t[h],t[f],t[p])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Mi(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):$o(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const d=i<n.length?t[n.charAt(i)]:64;++i;const h=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||d==null||h==null)throw new Go;const f=r<<2|a>>4;if(s.push(f),d!==64){const p=a<<4&240|d>>2;if(s.push(p),h!==64){const g=d<<6&192|h;s.push(g)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Go extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ji=function(n){const e=Mi(n);return Hn.encodeByteArray(e,!0)},Nt=function(n){return ji(n).replace(/\./g,"")},wn=function(n){try{return Hn.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function qo(n){return Li(void 0,n)}function Li(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Yo(t)||(n[t]=Li(n[t],e[t]));return n}function Yo(n){return n!=="__proto__"}/**
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
 */function Ko(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Qo=()=>Ko().__FIREBASE_DEFAULTS__,Jo=()=>{if(typeof process>"u"||typeof Bs>"u")return;const n=Bs.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Xo=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&wn(n[1]);return e&&JSON.parse(e)},Fi=()=>{try{return Ho()||Qo()||Jo()||Xo()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Zo=n=>{var e,t;return(t=(e=Fi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},ea=n=>{const e=Zo(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},Wi=()=>{var n;return(n=Fi())==null?void 0:n.config};/**
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
 */class qt{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function ta(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[Nt(JSON.stringify(t)),Nt(JSON.stringify(o)),""].join(".")}/**
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
 */function na(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(na())}function sa(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ia(){return Oi.NODE_ADMIN===!0}function ra(){try{return typeof indexedDB=="object"}catch{return!1}}function oa(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const aa="FirebaseError";class ft extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=aa,Object.setPrototypeOf(this,ft.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?la(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new ft(i,a,s)}}function la(n,e){try{let t=0,s="";for(;t<n.length;){const i=n.indexOf("{$",t);if(i===-1){s+=n.substring(t);break}const r=n.indexOf("}",i+2);if(r===-1){s+=n.substring(t);break}const o=n.substring(i+2,r),a=e[o];s+=n.substring(t,i)+(a!=null?String(a):`<${o}?>`),t=r+1}return s}catch{return n}}/**
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
 */function it(n){return JSON.parse(n)}function $(n){return JSON.stringify(n)}/**
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
 */const Ui=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=it(wn(r[0])||""),t=it(wn(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},ca=function(n){const e=Ui(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},da=function(n){const e=Ui(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function me(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Be(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function zs(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function Rt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Us(r)&&Us(o)){if(!Rt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Us(n){return n!==null&&typeof n=="object"}/**
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
 */function ha(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class ua{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)s[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)s[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const f=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],d,u;for(let h=0;h<80;h++){h<40?h<20?(d=a^r&(o^a),u=1518500249):(d=r^o^a,u=1859775393):h<60?(d=r&o|a&(r|o),u=2400959708):(d=r^o^a,u=3395469782);const f=(i<<5|i>>>27)+d+l+u+s[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function $n(n,e){return`${n} failed: ${e} argument `}/**
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
 */const fa=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,m(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Yt=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function pt(n){return n&&n._delegate?n._delegate:n}/**
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
 */function Vi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function pa(n){return(await fetch(n,{credentials:"include"})).ok}class rt{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Se="[DEFAULT]";/**
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
 */class ma{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new qt;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(_a(e))try{this.getOrInitializeService({instanceIdentifier:Se})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Se){return this.instances.has(e)}getOptions(e=Se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ga(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Se){return this.component?this.component.multipleInstances?e:Se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ga(n){return n===Se?void 0:n}function _a(n){return n.instantiationMode==="EAGER"}/**
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
 */class ya{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ma(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var D;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(D||(D={}));const va={debug:D.DEBUG,verbose:D.VERBOSE,info:D.INFO,warn:D.WARN,error:D.ERROR,silent:D.SILENT},ba=D.INFO,Ca={[D.DEBUG]:"log",[D.VERBOSE]:"log",[D.INFO]:"info",[D.WARN]:"warn",[D.ERROR]:"error"},Sa=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Ca[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hi{constructor(e){this.name=e,this._logLevel=ba,this._logHandler=Sa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in D))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?va[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,D.DEBUG,...e),this._logHandler(this,D.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,D.VERBOSE,...e),this._logHandler(this,D.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,D.INFO,...e),this._logHandler(this,D.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,D.WARN,...e),this._logHandler(this,D.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,D.ERROR,...e),this._logHandler(this,D.ERROR,...e)}}const xa=(n,e)=>e.some(t=>n instanceof t);let Vs,Hs;function wa(){return Vs||(Vs=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ea(){return Hs||(Hs=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $i=new WeakMap,En=new WeakMap,Gi=new WeakMap,an=new WeakMap,Gn=new WeakMap;function Ia(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(_e(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&$i.set(t,n)}).catch(()=>{}),Gn.set(e,n),e}function Ta(n){if(En.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});En.set(n,e)}let In={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return En.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Gi.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return _e(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Na(n){In=n(In)}function ka(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(ln(this),e,...t);return Gi.set(s,e.sort?e.sort():[e]),_e(s)}:Ea().includes(n)?function(...e){return n.apply(ln(this),e),_e($i.get(this))}:function(...e){return _e(n.apply(ln(this),e))}}function Ra(n){return typeof n=="function"?ka(n):(n instanceof IDBTransaction&&Ta(n),xa(n,wa())?new Proxy(n,In):n)}function _e(n){if(n instanceof IDBRequest)return Ia(n);if(an.has(n))return an.get(n);const e=Ra(n);return e!==n&&(an.set(n,e),Gn.set(e,n)),e}const ln=n=>Gn.get(n);function Aa(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=_e(o);return s&&o.addEventListener("upgradeneeded",l=>{s(_e(o.result),l.oldVersion,l.newVersion,_e(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}const Da=["get","getKey","getAll","getAllKeys","count"],Pa=["put","add","delete","clear"],cn=new Map;function $s(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(cn.get(e))return cn.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Pa.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Da.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let d=l.store;return s&&(d=d.index(a.shift())),(await Promise.all([d[t](...a),i&&l.done]))[0]};return cn.set(e,r),r}Na(n=>({...n,get:(e,t,s)=>$s(e,t)||n.get(e,t,s),has:(e,t)=>!!$s(e,t)||n.has(e,t)}));/**
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
 */class Oa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Ma(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Ma(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tn="@firebase/app",Gs="0.16.1";/**
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
 */const ue=new Hi("@firebase/app"),ja="@firebase/app-compat",La="@firebase/analytics-compat",Fa="@firebase/analytics",Wa="@firebase/app-check-compat",Ba="@firebase/app-check",za="@firebase/auth",Ua="@firebase/auth-compat",Va="@firebase/database",Ha="@firebase/data-connect",$a="@firebase/database-compat",Ga="@firebase/functions",qa="@firebase/functions-compat",Ya="@firebase/installations",Ka="@firebase/installations-compat",Qa="@firebase/messaging",Ja="@firebase/messaging-compat",Xa="@firebase/performance",Za="@firebase/performance-compat",el="@firebase/remote-config",tl="@firebase/remote-config-compat",nl="@firebase/storage",sl="@firebase/storage-compat",il="@firebase/firestore",rl="@firebase/ai",ol="@firebase/firestore-compat",al="firebase",ll="12.18.0";/**
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
 */const Nn="[DEFAULT]",cl={[Tn]:"fire-core",[ja]:"fire-core-compat",[Fa]:"fire-analytics",[La]:"fire-analytics-compat",[Ba]:"fire-app-check",[Wa]:"fire-app-check-compat",[za]:"fire-auth",[Ua]:"fire-auth-compat",[Va]:"fire-rtdb",[Ha]:"fire-data-connect",[$a]:"fire-rtdb-compat",[Ga]:"fire-fn",[qa]:"fire-fn-compat",[Ya]:"fire-iid",[Ka]:"fire-iid-compat",[Qa]:"fire-fcm",[Ja]:"fire-fcm-compat",[Xa]:"fire-perf",[Za]:"fire-perf-compat",[el]:"fire-rc",[tl]:"fire-rc-compat",[nl]:"fire-gcs",[sl]:"fire-gcs-compat",[il]:"fire-fst",[ol]:"fire-fst-compat",[rl]:"fire-vertex","fire-js":"fire-js",[al]:"fire-js-all"};/**
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
 */const At=new Map,dl=new Map,kn=new Map;function qs(n,e){try{n.container.addComponent(e)}catch(t){ue.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Dt(n){const e=n.name;if(kn.has(e))return ue.debug(`There were multiple attempts to register component ${e}.`),!1;kn.set(e,n);for(const t of At.values())qs(t,n);for(const t of dl.values())qs(t,n);return!0}function hl(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ul(n){return n==null?!1:n.settings!==void 0}/**
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
 */const fl={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ce=new zi("app","Firebase",fl);/**
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
 */class pl{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}/**
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
 */const ml=ll;function qi(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:Nn,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw ce.create("bad-app-name",{appName:String(i)});if(t||(t=Wi()),!t)throw ce.create("no-options");const r=At.get(i);if(r)if(Rt(t,r.options)){if(Rt(s,r.config))return r;throw ce.create("duplicate-app",{appName:i,mismatchedParam:"config",oldValue:JSON.stringify(r.config),newValue:JSON.stringify(s)})}else throw ce.create("duplicate-app",{appName:i,mismatchedParam:"options",oldValue:JSON.stringify(r.options),newValue:JSON.stringify(t)});const o=new ya(i);for(const l of kn.values())o.addComponent(l);const a=new pl(t,s,o);return At.set(i,a),a}function gl(n=Nn){const e=At.get(n);if(!e&&n===Nn&&Wi())return qi();if(!e)throw ce.create("no-app",{appName:n});return e}function je(n,e,t){let s=cl[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ue.warn(o.join(" "));return}Dt(new rt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const _l="firebase-heartbeat-database",yl=1,ot="firebase-heartbeat-store";let dn=null;function Yi(){return dn||(dn=Aa(_l,yl,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ot)}catch(t){console.warn(t)}}}}).catch(n=>{throw ce.create("idb-open",{originalErrorMessage:n.message})})),dn}async function vl(n){try{const t=(await Yi()).transaction(ot),s=await t.objectStore(ot).get(Ki(n));return await t.done,s}catch(e){if(e instanceof ft)ue.warn(e.message);else{const t=ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ue.warn(t.message)}}}async function Ys(n,e){try{const s=(await Yi()).transaction(ot,"readwrite");await s.objectStore(ot).put(e,Ki(n)),await s.done}catch(t){if(t instanceof ft)ue.warn(t.message);else{const s=ce.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ue.warn(s.message)}}}function Ki(n){return`${n.name}!${n.options.appId}`}/**
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
 */const bl=1024,Cl=30;class Sl{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new wl(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ks();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Cl){const o=El(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ue.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ks(),{heartbeatsToSend:s,unsentEntries:i}=xl(this._heartbeatsCache.heartbeats),r=Nt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ue.warn(t),""}}}function Ks(){return new Date().toISOString().substring(0,10)}function xl(n,e=bl){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Qs(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Qs(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class wl{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ra()?oa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await vl(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ys(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Ys(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qs(n){return Nt(JSON.stringify({version:2,heartbeats:n})).length}function El(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Il(n){Dt(new rt("platform-logger",e=>new Oa(e),"PRIVATE")),Dt(new rt("heartbeat",e=>new Sl(e),"PRIVATE")),je(Tn,Gs,n),je(Tn,Gs,"esm2020"),je("fire-js","")}/**
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
 */Il("");var Js={};const Xs="@firebase/database",Zs="1.1.5";/**
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
 */let Qi="";function Tl(n){Qi=n}/**
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
 */class Nl{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),$(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:it(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class kl{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return me(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ji=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Nl(e)}}catch{}return new kl},Ee=Ji("localStorage"),Rl=Ji("sessionStorage");/**
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
 */const Le=new Hi("@firebase/database"),Al=function(){let n=1;return function(){return n++}}(),Xi=function(n){const e=fa(n),t=new ua;t.update(e);const s=t.digest();return Hn.encodeByteArray(s)},mt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=mt.apply(null,s):typeof s=="object"?e+=$(s):e+=s,e+=" "}return e};let Ze=null,ei=!0;const Dl=function(n,e){m(!0,"Can't turn on custom loggers persistently."),Le.logLevel=D.VERBOSE,Ze=Le.log.bind(Le)},K=function(...n){if(ei===!0&&(ei=!1,Ze===null&&Rl.get("logging_enabled")===!0&&Dl()),Ze){const e=mt.apply(null,n);Ze(e)}},gt=function(n){return function(...e){K(n,...e)}},Rn=function(...n){const e="FIREBASE INTERNAL ERROR: "+mt(...n);Le.error(e)},fe=function(...n){const e=`FIREBASE FATAL ERROR: ${mt(...n)}`;throw Le.error(e),new Error(e)},te=function(...n){const e="FIREBASE WARNING: "+mt(...n);Le.warn(e)},Pl=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&te("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Zi=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Ol=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},ze="[MIN_NAME]",Te="[MAX_NAME]",$e=function(n,e){if(n===e)return 0;if(n===ze||e===Te)return-1;if(e===ze||n===Te)return 1;{const t=ti(n),s=ti(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Ml=function(n,e){return n===e?0:n<e?-1:1},Ke=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+$(e))},qn=function(n){if(typeof n!="object"||n===null)return $(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=$(e[s]),t+=":",t+=qn(n[e[s]]);return t+="}",t},er=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function ne(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const tr=function(n){m(!Zi(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const d=[];for(l=t;l;l-=1)d.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)d.push(r%2?1:0),r=Math.floor(r/2);d.push(i?1:0),d.reverse();const u=d.join("");let h="";for(l=0;l<64;l+=8){let f=parseInt(u.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),h=h+f}return h.toLowerCase()},jl=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ll=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Fl(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const Wl=new RegExp("^-?(0*)\\d{1,10}$"),Bl=-2147483648,zl=2147483647,ti=function(n){if(Wl.test(n)){const e=Number(n);if(e>=Bl&&e<=zl)return e}return null},Ge=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw te("Exception was thrown by user callback.",t),e},Math.floor(0))}},Ul=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},et=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Vl{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ul(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){te(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Hl{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(K("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',te(e)}}class Tt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Tt.OWNER="owner";/**
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
 */const Yn="5",nr="v",sr="s",ir="r",rr="f",or=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ar="ls",lr="p",An="ac",cr="websocket",dr="long_polling";/**
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
 */class hr{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1,d=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=d,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ee.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ee.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function $l(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function ur(n,e,t){m(typeof e=="string","typeof type must == string"),m(typeof t=="object","typeof params must == object");let s;if(e===cr)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===dr)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$l(n)&&(t.ns=n.namespace);const i=[];return ne(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Gl{constructor(){this.counters_={}}incrementCounter(e,t=1){me(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return qo(this.counters_)}}/**
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
 */const hn={},un={};function Kn(n){const e=n.toString();return hn[e]||(hn[e]=new Gl),hn[e]}function ql(n,e){const t=n.toString();return un[t]||(un[t]=e()),un[t]}/**
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
 */class Yl{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ge(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ni="start",Kl="close",Ql="pLPCommand",Jl="pRTLPCB",fr="id",pr="pw",mr="ser",Xl="cb",Zl="seg",ec="ts",tc="d",nc="dframe",gr=1870,_r=30,sc=gr-_r,ic=25e3,rc=3e4;class Me{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=gt(e),this.stats_=Kn(t),this.urlFn=l=>(this.appCheckToken&&(l[An]=this.appCheckToken),ur(t,dr,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Yl(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(rc)),Ol(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Qn((...r)=>{const[o,a,l,d,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ni)this.id=a,this.password=l;else if(o===Kl)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ni]="t",s[mr]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Xl]=this.scriptTagHolder.uniqueCallbackIdentifier),s[nr]=Yn,this.transportSessionId&&(s[sr]=this.transportSessionId),this.lastSessionId&&(s[ar]=this.lastSessionId),this.applicationId&&(s[lr]=this.applicationId),this.appCheckToken&&(s[An]=this.appCheckToken),typeof location<"u"&&location.hostname&&or.test(location.hostname)&&(s[ir]=rr);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return Me.forceAllow_?!0:!Me.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!jl()&&!Ll()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=$(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=ji(t),i=er(s,sc);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[nc]="t",s[fr]=e,s[pr]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=$(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Qn{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Al(),window[Ql+this.uniqueCallbackIdentifier]=e,window[Jl+this.uniqueCallbackIdentifier]=t,this.myIFrame=Qn.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){K("frame writing exception"),a.stack&&K(a.stack),K(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||K("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[fr]=this.myID,e[pr]=this.myPW,e[mr]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+_r+s.length<=gr;){const o=this.pendingSegs.shift();s=s+"&"+Zl+i+"="+o.seg+"&"+ec+i+"="+o.ts+"&"+tc+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(ic)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{K("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const oc=16384,ac=45e3;let Pt=null;typeof MozWebSocket<"u"?Pt=MozWebSocket:typeof WebSocket<"u"&&(Pt=WebSocket);class ie{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=gt(this.connId),this.stats_=Kn(t),this.connURL=ie.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[nr]=Yn,typeof location<"u"&&location.hostname&&or.test(location.hostname)&&(o[ir]=rr),t&&(o[sr]=t),s&&(o[ar]=s),i&&(o[An]=i),r&&(o[lr]=r),ur(e,cr,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ee.set("previous_websocket_failure",!0);try{let s;ia(),this.mySock=new Pt(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ie.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Pt!==null&&!ie.forceDisallow_}static previouslyFailed(){return Ee.isInMemoryStorage||Ee.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ee.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=it(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(m(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=$(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=er(t,oc);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ac))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ie.responsesRequiredToBeHealthy=2;ie.healthyTimeout=3e4;/**
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
 */class at{static get ALL_TRANSPORTS(){return[Me,ie]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ie&&ie.isAvailable();let s=t&&!ie.previouslyFailed();if(e.webSocketOnly&&(t||te("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ie];else{const i=this.transports_=[];for(const r of at.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);at.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}at.globalTransportInitialized_=!1;/**
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
 */const lc=6e4,cc=5e3,dc=10*1024,hc=100*1024,fn="t",si="d",uc="s",ii="r",fc="e",ri="o",oi="a",ai="n",li="p",pc="h";class mc{constructor(e,t,s,i,r,o,a,l,d,u){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=d,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=gt("c:"+this.id+":"),this.transportManager_=new at(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=et(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>hc?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>dc?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fn in e){const t=e[fn];t===oi?this.upgradeIfSecondaryHealthy_():t===ii?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ri&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ke("t",e),s=Ke("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:li,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:oi,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:ai,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ke("t",e),s=Ke("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ke(fn,e);if(si in e){const s=e[si];if(t===pc){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===ai){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===uc?this.onConnectionShutdown_(s):t===ii?this.onReset_(s):t===fc?Rn("Server Error: "+s):t===ri?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Rn("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),Yn!==s&&te("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),et(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(lc))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):et(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(cc))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:li,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ee.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class yr{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class vr{constructor(e){this.allowedEvents_=e,this.listeners_={},m(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){m(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Ot extends vr{static getInstance(){return new Ot}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Bi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return m(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const ci=32,di=768;class A{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function T(){return new A("")}function S(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ve(n){return n.pieces_.length-n.pieceNum_}function P(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new A(n.pieces_,e)}function br(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function gc(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Cr(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Sr(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new A(e,0)}function B(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof A)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new A(t,0)}function w(n){return n.pieceNum_>=n.pieces_.length}function Z(n,e){const t=S(n),s=S(e);if(t===null)return e;if(t===s)return Z(P(n),P(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Jn(n,e){if(ve(n)!==ve(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function re(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ve(n)>ve(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class _c{constructor(e,t){this.errorPrefix_=t,this.parts_=Cr(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Yt(this.parts_[s]);xr(this)}}function yc(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Yt(e),xr(n)}function vc(n){const e=n.parts_.pop();n.byteLength_-=Yt(e),n.parts_.length>0&&(n.byteLength_-=1)}function xr(n){if(n.byteLength_>di)throw new Error(n.errorPrefix_+"has a key path longer than "+di+" bytes ("+n.byteLength_+").");if(n.parts_.length>ci)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+ci+") or object contains a cycle "+xe(n))}function xe(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Xn extends vr{static getInstance(){return new Xn}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return m(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Qe=1e3,bc=60*5*1e3,hi=30*1e3,Cc=1.3,Sc=3e4,xc="server_kill",ui=3;class he extends yr{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=he.nextPersistentConnectionId_++,this.log_=gt("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Qe,this.maxReconnectDelay_=bc,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Xn.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ot.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_($(r)),m(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new qt,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),m(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,d=a.s;he.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),d!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(d,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&me(e,"w")){const s=Be(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();te(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||da(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=hi)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=ca(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),m(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+$(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Rn("Unrecognized action received from server: "+$(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){m(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Qe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Qe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Sc&&(this.reconnectDelay_=Qe),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Cc)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+he.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},d=function(h){m(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:d};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,f]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?K("getToken() completed but was canceled"):(K("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=f&&f.token,a=new mc(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,p=>{te(p+" ("+this.repoInfo_.toString()+")"),this.interrupt(xc)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&te(h),l())}}}interrupt(e){K("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){K("Resuming connection for reason: "+e),delete this.interruptReasons_[e],zs(this.interruptReasons_)&&(this.reconnectDelay_=Qe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>qn(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new A(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){K("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ui&&(this.reconnectDelay_=hi,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){K("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ui&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Qi.replace(/\./g,"-")]=1,Bi()?e["framework.cordova"]=1:sa()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ot.getInstance().currentlyOnline();return zs(this.interruptReasons_)&&e}}he.nextPersistentConnectionId_=0;he.nextConnectionId_=0;/**
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
 */class x{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new x(e,t)}}/**
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
 */class Kt{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new x(ze,e),i=new x(ze,t);return this.compare(s,i)!==0}minPost(){return x.MIN}}/**
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
 */let Et;class wr extends Kt{static get __EMPTY_NODE(){return Et}static set __EMPTY_NODE(e){Et=e}compare(e,t){return $e(e.name,t.name)}isDefinedOn(e){throw He("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return x.MIN}maxPost(){return new x(Te,Et)}makePost(e,t){return m(typeof e=="string","KeyIndex indexValue must always be a string."),new x(e,Et)}toString(){return".key"}}const Fe=new wr;/**
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
 */class It{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class H{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??H.RED,this.left=i??ee.EMPTY_NODE,this.right=r??ee.EMPTY_NODE}copy(e,t,s,i,r){return new H(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ee.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return ee.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,H.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,H.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}H.RED=!0;H.BLACK=!1;class wc{copy(e,t,s,i,r){return this}insert(e,t,s){return new H(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ee{constructor(e,t=ee.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ee(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,H.BLACK,null,null))}remove(e){return new ee(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,H.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new It(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new It(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new It(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new It(this.root_,null,this.comparator_,!0,e)}}ee.EMPTY_NODE=new wc;/**
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
 */function Ec(n,e){return $e(n.name,e.name)}function Zn(n,e){return $e(n,e)}/**
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
 */let Dn;function Ic(n){Dn=n}const Er=function(n){return typeof n=="number"?"number:"+tr(n):"string:"+n},Ir=function(n){if(n.isLeafNode()){const e=n.val();m(typeof e=="string"||typeof e=="number"||typeof e=="object"&&me(e,".sv"),"Priority must be a string or number.")}else m(n===Dn||n.isEmpty(),"priority of unexpected type.");m(n===Dn||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let fi;class V{static set __childrenNodeConstructor(e){fi=e}static get __childrenNodeConstructor(){return fi}constructor(e,t=V.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,m(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ir(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new V(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return w(e)?this:S(e)===".priority"?this.priorityNode_:V.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:V.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=S(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(m(s!==".priority"||ve(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,V.__childrenNodeConstructor.EMPTY_NODE.updateChild(P(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Er(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=tr(this.value_):e+=this.value_,this.lazyHash_=Xi(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===V.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof V.__childrenNodeConstructor?-1:(m(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=V.VALUE_TYPE_ORDER.indexOf(t),r=V.VALUE_TYPE_ORDER.indexOf(s);return m(i>=0,"Unknown leaf type: "+t),m(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}V.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Tr,Nr;function Tc(n){Tr=n}function Nc(n){Nr=n}class kc extends Kt{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?$e(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return x.MIN}maxPost(){return new x(Te,new V("[PRIORITY-POST]",Nr))}makePost(e,t){const s=Tr(e);return new x(t,new V("[PRIORITY-POST]",s))}toString(){return".priority"}}const F=new kc;/**
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
 */const Rc=Math.log(2);class Ac{constructor(e){const t=r=>parseInt(Math.log(r)/Rc,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Mt=function(n,e,t,s){n.sort(e);const i=function(l,d){const u=d-l;let h,f;if(u===0)return null;if(u===1)return h=n[l],f=t?t(h):h,new H(f,h.node,H.BLACK,null,null);{const p=parseInt(u/2,10)+l,g=i(l,p),b=i(p+1,d);return h=n[p],f=t?t(h):h,new H(f,h.node,H.BLACK,g,b)}},r=function(l){let d=null,u=null,h=n.length;const f=function(g,b){const N=h-g,M=h;h-=g;const z=i(N+1,M),G=n[N],y=t?t(G):G;p(new H(y,G.node,b,null,z))},p=function(g){d?(d.left=g,d=g):(u=g,d=g)};for(let g=0;g<l.count;++g){const b=l.nextBitIsOne(),N=Math.pow(2,l.count-(g+1));b?f(N,H.BLACK):(f(N,H.BLACK),f(N,H.RED))}return u},o=new Ac(n.length),a=r(o);return new ee(s||e,a)};/**
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
 */let pn;const Oe={};class de{static get Default(){return m(Oe&&F,"ChildrenNode.ts has not been loaded"),pn=pn||new de({".priority":Oe},{".priority":F}),pn}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=Be(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ee?t:null}hasIndex(e){return me(this.indexSet_,e.toString())}addIndex(e,t){m(e!==Fe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(x.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Mt(s,e.getCompare()):a=Oe;const l=e.toString(),d={...this.indexSet_};d[l]=e;const u={...this.indexes_};return u[l]=a,new de(u,d)}addToIndexes(e,t){const s=kt(this.indexes_,(i,r)=>{const o=Be(this.indexSet_,r);if(m(o,"Missing index implementation for "+r),i===Oe)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(x.Wrap);let d=l.getNext();for(;d;)d.name!==e.name&&a.push(d),d=l.getNext();return a.push(e),Mt(a,o.getCompare())}else return Oe;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new x(e.name,a))),l.insert(e,e.node)}});return new de(s,this.indexSet_)}removeFromIndexes(e,t){const s=kt(this.indexes_,i=>{if(i===Oe)return i;{const r=t.get(e.name);return r?i.remove(new x(e.name,r)):i}});return new de(s,this.indexSet_)}}/**
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
 */let Je;class v{static get EMPTY_NODE(){return Je||(Je=new v(new ee(Zn),null,de.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ir(this.priorityNode_),this.children_.isEmpty()&&m(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Je}updatePriority(e){return this.children_.isEmpty()?this:new v(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Je:t}}getChild(e){const t=S(e);return t===null?this:this.getImmediateChild(t).getChild(P(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(m(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new x(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Je:this.priorityNode_;return new v(i,o,r)}}updateChild(e,t){const s=S(e);if(s===null)return t;{m(S(e)!==".priority"||ve(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(P(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(F,(o,a)=>{t[o]=a.val(e),s++,r&&v.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Er(this.getPriority().val())+":"),this.forEachChild(F,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Xi(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new x(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new x(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new x(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,x.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,x.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===_t?-1:0}withIndex(e){if(e===Fe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new v(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Fe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(F),i=t.getIterator(F);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Fe?null:this.indexMap_.get(e.toString())}}v.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Dc extends v{constructor(){super(new ee(Zn),v.EMPTY_NODE,de.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return v.EMPTY_NODE}isEmpty(){return!1}}const _t=new Dc;Object.defineProperties(x,{MIN:{value:new x(ze,v.EMPTY_NODE)},MAX:{value:new x(Te,_t)}});wr.__EMPTY_NODE=v.EMPTY_NODE;V.__childrenNodeConstructor=v;Ic(_t);Nc(_t);/**
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
 */const Pc=!0;function Y(n,e=null){if(n===null)return v.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),m(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new V(t,Y(e))}if(!(n instanceof Array)&&Pc){const t=[];let s=!1;if(ne(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=Y(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new x(o,l)))}}),t.length===0)return v.EMPTY_NODE;const r=Mt(t,Ec,o=>o.name,Zn);if(s){const o=Mt(t,F.getCompare());return new v(r,Y(e),new de({".priority":o},{".priority":F}))}else return new v(r,Y(e),de.Default)}else{let t=v.EMPTY_NODE;return ne(n,(s,i)=>{if(me(n,s)&&s.substring(0,1)!=="."){const r=Y(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(Y(e))}}Tc(Y);/**
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
 */class Oc extends Kt{constructor(e){super(),this.indexPath_=e,m(!w(e)&&S(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?$e(e.name,t.name):r}makePost(e,t){const s=Y(e),i=v.EMPTY_NODE.updateChild(this.indexPath_,s);return new x(t,i)}maxPost(){const e=v.EMPTY_NODE.updateChild(this.indexPath_,_t);return new x(Te,e)}toString(){return Cr(this.indexPath_,0).join("/")}}/**
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
 */class Mc extends Kt{compare(e,t){const s=e.node.compareTo(t.node);return s===0?$e(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return x.MIN}maxPost(){return x.MAX}makePost(e,t){const s=Y(e);return new x(t,s)}toString(){return".value"}}const jc=new Mc;/**
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
 */function kr(n){return{type:"value",snapshotNode:n}}function Ue(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function lt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function ct(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function Lc(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class es{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){m(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(lt(t,a)):m(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ue(t,s)):o.trackChildChange(ct(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(F,(i,r)=>{t.hasChild(i)||s.trackChildChange(lt(i,r))}),t.isLeafNode()||t.forEachChild(F,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(ct(i,r,o))}else s.trackChildChange(Ue(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?v.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class dt{constructor(e){this.indexedFilter_=new es(e.getIndex()),this.index_=e.getIndex(),this.startPost_=dt.getStartPost_(e),this.endPost_=dt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new x(t,s))||(s=v.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=v.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(v.EMPTY_NODE);const r=this;return t.forEachChild(F,(o,a)=>{r.matches(new x(o,a))||(i=i.updateImmediateChild(o,v.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Fc{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new dt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new x(t,s))||(s=v.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=v.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=v.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(v.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,v.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(f,p)=>h(p,f)}else o=this.index_.getCompare();const a=e;m(a.numChildren()===this.limit_,"");const l=new x(t,s),d=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let f=i.getChildAfterChild(this.index_,d,this.reverse_);for(;f!=null&&(f.name===t||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const p=f==null?1:o(f,l);if(u&&!s.isEmpty()&&p>=0)return r!=null&&r.trackChildChange(ct(t,s,h)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(lt(t,h));const b=a.updateImmediateChild(t,v.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(r!=null&&r.trackChildChange(Ue(f.name,f.node)),b.updateImmediateChild(f.name,f.node)):b}}else return s.isEmpty()?e:u&&o(d,l)>=0?(r!=null&&(r.trackChildChange(lt(d.name,d.node)),r.trackChildChange(Ue(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(d.name,v.EMPTY_NODE)):e}}/**
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
 */class ts{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=F}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return m(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return m(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ze}hasEnd(){return this.endSet_}getIndexEndValue(){return m(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return m(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Te}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return m(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===F}copy(){const e=new ts;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Wc(n){return n.loadsAllData()?new es(n.getIndex()):n.hasLimit()?new Fc(n):new dt(n)}function pi(n){const e={};if(n.isDefault())return e;let t;if(n.index_===F?t="$priority":n.index_===jc?t="$value":n.index_===Fe?t="$key":(m(n.index_ instanceof Oc,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=$(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=$(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+$(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=$(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+$(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function mi(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==F&&(e.i=n.index_.toString()),e}/**
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
 */class jt extends yr{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(m(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=gt("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=jt.getListenId_(e,s),a={};this.listens_[o]=a;const l=pi(e._queryParams);this.restRequest_(r+".json",l,(d,u)=>{let h=u;if(d===404&&(h=null,d=null),d===null&&this.onDataUpdate_(r,h,!1,s),Be(this.listens_,o)===a){let f;d?d===401?f="permission_denied":f="rest_error:"+d:f="ok",i(f,null)}})}unlisten(e,t){const s=jt.getListenId_(e,t);delete this.listens_[s]}get(e){const t=pi(e._queryParams),s=e._path.toString(),i=new qt;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ha(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=it(a.responseText)}catch{te("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&te("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Bc{constructor(){this.rootNode_=v.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Lt(){return{value:null,children:new Map}}function Rr(n,e,t){if(w(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=S(e);n.children.has(s)||n.children.set(s,Lt());const i=n.children.get(s);e=P(e),Rr(i,e,t)}}function Pn(n,e,t){n.value!==null?t(e,n.value):zc(n,(s,i)=>{const r=new A(e.toString()+"/"+s);Pn(i,r,t)})}function zc(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Uc{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&ne(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const gi=10*1e3,Vc=30*1e3,Hc=5*60*1e3;class $c{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Uc(e);const s=gi+(Vc-gi)*Math.random();et(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;ne(e,(i,r)=>{r>0&&me(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),et(this.reportStats_.bind(this),Math.floor(Math.random()*2*Hc))}}/**
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
 */var oe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(oe||(oe={}));function Ar(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ns(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ss(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class Ft{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=oe.ACK_USER_WRITE,this.source=Ar()}operationForChild(e){if(w(this.path)){if(this.affectedTree.value!=null)return m(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new A(e));return new Ft(T(),t,this.revert)}}else return m(S(this.path)===e,"operationForChild called for unrelated child."),new Ft(P(this.path),this.affectedTree,this.revert)}}/**
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
 */class ht{constructor(e,t){this.source=e,this.path=t,this.type=oe.LISTEN_COMPLETE}operationForChild(e){return w(this.path)?new ht(this.source,T()):new ht(this.source,P(this.path))}}/**
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
 */class Ne{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=oe.OVERWRITE}operationForChild(e){return w(this.path)?new Ne(this.source,T(),this.snap.getImmediateChild(e)):new Ne(this.source,P(this.path),this.snap)}}/**
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
 */class ut{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=oe.MERGE}operationForChild(e){if(w(this.path)){const t=this.children.subtree(new A(e));return t.isEmpty()?null:t.value?new Ne(this.source,T(),t.value):new ut(this.source,T(),t)}else return m(S(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ut(this.source,P(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ke{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(w(e))return this.isFullyInitialized()&&!this.filtered_;const t=S(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Gc{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function qc(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Lc(o.childName,o.snapshotNode))}),Xe(n,i,"child_removed",e,s,t),Xe(n,i,"child_added",e,s,t),Xe(n,i,"child_moved",r,s,t),Xe(n,i,"child_changed",e,s,t),Xe(n,i,"value",e,s,t),i}function Xe(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>Kc(n,a,l)),o.forEach(a=>{const l=Yc(n,a,r);i.forEach(d=>{d.respondsTo(a.type)&&e.push(d.createEvent(l,n.query_))})})}function Yc(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function Kc(n,e,t){if(e.childName==null||t.childName==null)throw He("Should only compare child_ events.");const s=new x(e.childName,e.snapshotNode),i=new x(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Qt(n,e){return{eventCache:n,serverCache:e}}function tt(n,e,t,s){return Qt(new ke(e,t,s),n.serverCache)}function Dr(n,e,t,s){return Qt(n.eventCache,new ke(e,t,s))}function On(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Re(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let mn;const Qc=()=>(mn||(mn=new ee(Ml)),mn);class O{static fromObject(e){let t=new O(null);return ne(e,(s,i)=>{t=t.set(new A(s),i)}),t}constructor(e,t=Qc()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:T(),value:this.value};if(w(e))return null;{const s=S(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(P(e),t);return r!=null?{path:B(new A(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(w(e))return this;{const t=S(e),s=this.children.get(t);return s!==null?s.subtree(P(e)):new O(null)}}set(e,t){if(w(e))return new O(t,this.children);{const s=S(e),r=(this.children.get(s)||new O(null)).set(P(e),t),o=this.children.insert(s,r);return new O(this.value,o)}}remove(e){if(w(e))return this.children.isEmpty()?new O(null):new O(null,this.children);{const t=S(e),s=this.children.get(t);if(s){const i=s.remove(P(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new O(null):new O(this.value,r)}else return this}}get(e){if(w(e))return this.value;{const t=S(e),s=this.children.get(t);return s?s.get(P(e)):null}}setTree(e,t){if(w(e))return t;{const s=S(e),r=(this.children.get(s)||new O(null)).setTree(P(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new O(this.value,o)}}fold(e){return this.fold_(T(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(B(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,T(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(w(e))return null;{const r=S(e),o=this.children.get(r);return o?o.findOnPath_(P(e),B(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,T(),t)}foreachOnPath_(e,t,s){if(w(e))return this;{this.value&&s(t,this.value);const i=S(e),r=this.children.get(i);return r?r.foreachOnPath_(P(e),B(t,i),s):new O(null)}}foreach(e){this.foreach_(T(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(B(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class ae{constructor(e){this.writeTree_=e}static empty(){return new ae(new O(null))}}function nt(n,e,t){if(w(e))return new ae(new O(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=Z(i,e);return r=r.updateChild(o,t),new ae(n.writeTree_.set(i,r))}else{const i=new O(t),r=n.writeTree_.setTree(e,i);return new ae(r)}}}function _i(n,e,t){let s=n;return ne(t,(i,r)=>{s=nt(s,B(e,i),r)}),s}function yi(n,e){if(w(e))return ae.empty();{const t=n.writeTree_.setTree(e,new O(null));return new ae(t)}}function Mn(n,e){return Ae(n,e)!=null}function Ae(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(Z(t.path,e)):null}function vi(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(F,(s,i)=>{e.push(new x(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new x(s,i.value))}),e}function ye(n,e){if(w(e))return n;{const t=Ae(n,e);return t!=null?new ae(new O(t)):new ae(n.writeTree_.subtree(e))}}function jn(n){return n.writeTree_.isEmpty()}function Ve(n,e){return Pr(T(),n.writeTree_,e)}function Pr(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(m(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Pr(B(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(B(n,".priority"),s)),t}}/**
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
 */function is(n,e){return Lr(e,n)}function Jc(n,e,t,s,i){m(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=nt(n.visibleWrites,e,t)),n.lastWriteId=s}function Xc(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Zc(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);m(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&ed(a,s.path)?i=!1:re(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return td(n),!0;if(s.snap)n.visibleWrites=yi(n.visibleWrites,s.path);else{const a=s.children;ne(a,l=>{n.visibleWrites=yi(n.visibleWrites,B(s.path,l))})}return!0}else return!1}function ed(n,e){if(n.snap)return re(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&re(B(n.path,t),e))return!0;return!1}function td(n){n.visibleWrites=Or(n.allWrites,nd,T()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function nd(n){return n.visible}function Or(n,e,t){let s=ae.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)re(t,o)?(a=Z(t,o),s=nt(s,a,r.snap)):re(o,t)&&(a=Z(o,t),s=nt(s,T(),r.snap.getChild(a)));else if(r.children){if(re(t,o))a=Z(t,o),s=_i(s,a,r.children);else if(re(o,t))if(a=Z(o,t),w(a))s=_i(s,T(),r.children);else{const l=Be(r.children,S(a));if(l){const d=l.getChild(P(a));s=nt(s,T(),d)}}}else throw He("WriteRecord should have .snap or .children")}}return s}function Mr(n,e,t,s,i){if(!s&&!i){const r=Ae(n.visibleWrites,e);if(r!=null)return r;{const o=ye(n.visibleWrites,e);if(jn(o))return t;if(t==null&&!Mn(o,T()))return null;{const a=t||v.EMPTY_NODE;return Ve(o,a)}}}else{const r=ye(n.visibleWrites,e);if(!i&&jn(r))return t;if(!i&&t==null&&!Mn(r,T()))return null;{const o=function(d){return(d.visible||i)&&(!s||!~s.indexOf(d.writeId))&&(re(d.path,e)||re(e,d.path))},a=Or(n.allWrites,o,e),l=t||v.EMPTY_NODE;return Ve(a,l)}}}function sd(n,e,t){let s=v.EMPTY_NODE;const i=Ae(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(F,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=ye(n.visibleWrites,e);return t.forEachChild(F,(o,a)=>{const l=Ve(ye(r,new A(o)),a);s=s.updateImmediateChild(o,l)}),vi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ye(n.visibleWrites,e);return vi(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function id(n,e,t,s,i){m(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=B(e,t);if(Mn(n.visibleWrites,r))return null;{const o=ye(n.visibleWrites,r);return jn(o)?i.getChild(t):Ve(o,i.getChild(t))}}function rd(n,e,t,s){const i=B(e,t),r=Ae(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=ye(n.visibleWrites,i);return Ve(o,s.getNode().getImmediateChild(t))}else return null}function od(n,e){return Ae(n.visibleWrites,e)}function ad(n,e,t,s,i,r,o){let a;const l=ye(n.visibleWrites,e),d=Ae(l,T());if(d!=null)a=d;else if(t!=null)a=Ve(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),f=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let p=f.getNext();for(;p&&u.length<i;)h(p,s)!==0&&u.push(p),p=f.getNext();return u}else return[]}function ld(){return{visibleWrites:ae.empty(),allWrites:[],lastWriteId:-1}}function Wt(n,e,t,s){return Mr(n.writeTree,n.treePath,e,t,s)}function rs(n,e){return sd(n.writeTree,n.treePath,e)}function bi(n,e,t,s){return id(n.writeTree,n.treePath,e,t,s)}function Bt(n,e){return od(n.writeTree,B(n.treePath,e))}function cd(n,e,t,s,i,r){return ad(n.writeTree,n.treePath,e,t,s,i,r)}function os(n,e,t){return rd(n.writeTree,n.treePath,e,t)}function jr(n,e){return Lr(B(n.treePath,e),n.writeTree)}function Lr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class dd{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;m(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),m(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,ct(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,lt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,Ue(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,ct(s,e.snapshotNode,i.oldSnap));else throw He("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class hd{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const Fr=new hd;class as{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ke(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return os(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Re(this.viewCache_),r=cd(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function ud(n){return{filter:n}}function fd(n,e){m(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),m(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function pd(n,e,t,s,i){const r=new dd;let o,a;if(t.type===oe.OVERWRITE){const d=t;d.source.fromUser?o=Ln(n,e,d.path,d.snap,s,i,r):(m(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered()&&!w(d.path),o=zt(n,e,d.path,d.snap,s,i,a,r))}else if(t.type===oe.MERGE){const d=t;d.source.fromUser?o=gd(n,e,d.path,d.children,s,i,r):(m(d.source.fromServer,"Unknown source."),a=d.source.tagged||e.serverCache.isFiltered(),o=Fn(n,e,d.path,d.children,s,i,a,r))}else if(t.type===oe.ACK_USER_WRITE){const d=t;d.revert?o=vd(n,e,d.path,s,i,r):o=_d(n,e,d.path,d.affectedTree,s,i,r)}else if(t.type===oe.LISTEN_COMPLETE)o=yd(n,e,t.path,s,r);else throw He("Unknown operation type: "+t.type);const l=r.getChanges();return md(e,o,l),{viewCache:o,changes:l}}function md(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=On(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(kr(On(e)))}}function Wr(n,e,t,s,i,r){const o=e.eventCache;if(Bt(s,t)!=null)return e;{let a,l;if(w(t))if(m(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const d=Re(e),u=d instanceof v?d:v.EMPTY_NODE,h=rs(s,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const d=Wt(s,Re(e));a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const d=S(t);if(d===".priority"){m(ve(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=bi(s,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=P(t);let h;if(o.isCompleteForChild(d)){l=e.serverCache.getNode();const f=bi(s,t,o.getNode(),l);f!=null?h=o.getNode().getImmediateChild(d).updateChild(u,f):h=o.getNode().getImmediateChild(d)}else h=os(s,d,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),d,h,u,i,r):a=o.getNode()}}return tt(e,a,o.isFullyInitialized()||w(t),n.filter.filtersNodes())}}function zt(n,e,t,s,i,r,o,a){const l=e.serverCache;let d;const u=o?n.filter:n.filter.getIndexedFilter();if(w(t))d=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const p=l.getNode().updateChild(t,s);d=u.updateFullNode(l.getNode(),p,null)}else{const p=S(t);if(!l.isCompleteForPath(t)&&ve(t)>1)return e;const g=P(t),N=l.getNode().getImmediateChild(p).updateChild(g,s);p===".priority"?d=u.updatePriority(l.getNode(),N):d=u.updateChild(l.getNode(),p,N,g,Fr,null)}const h=Dr(e,d,l.isFullyInitialized()||w(t),u.filtersNodes()),f=new as(i,h,r);return Wr(n,h,t,i,f,a)}function Ln(n,e,t,s,i,r,o){const a=e.eventCache;let l,d;const u=new as(i,e,r);if(w(t))d=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=tt(e,d,!0,n.filter.filtersNodes());else{const h=S(t);if(h===".priority")d=n.filter.updatePriority(e.eventCache.getNode(),s),l=tt(e,d,a.isFullyInitialized(),a.isFiltered());else{const f=P(t),p=a.getNode().getImmediateChild(h);let g;if(w(f))g=s;else{const b=u.getCompleteChild(h);b!=null?br(f)===".priority"&&b.getChild(Sr(f)).isEmpty()?g=b:g=b.updateChild(f,s):g=v.EMPTY_NODE}if(p.equals(g))l=e;else{const b=n.filter.updateChild(a.getNode(),h,g,f,u,o);l=tt(e,b,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Ci(n,e){return n.eventCache.isCompleteForChild(e)}function gd(n,e,t,s,i,r,o){let a=e;return s.foreach((l,d)=>{const u=B(t,l);Ci(e,S(u))&&(a=Ln(n,a,u,d,i,r,o))}),s.foreach((l,d)=>{const u=B(t,l);Ci(e,S(u))||(a=Ln(n,a,u,d,i,r,o))}),a}function Si(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Fn(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,d;w(t)?d=s:d=new O(null).setTree(t,s);const u=e.serverCache.getNode();return d.children.inorderTraversal((h,f)=>{if(u.hasChild(h)){const p=e.serverCache.getNode().getImmediateChild(h),g=Si(n,p,f);l=zt(n,l,new A(h),g,i,r,o,a)}}),d.children.inorderTraversal((h,f)=>{const p=!e.serverCache.isCompleteForChild(h)&&f.value===null;if(!u.hasChild(h)&&!p){const g=e.serverCache.getNode().getImmediateChild(h),b=Si(n,g,f);l=zt(n,l,new A(h),b,i,r,o,a)}}),l}function _d(n,e,t,s,i,r,o){if(Bt(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(w(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return zt(n,e,t,l.getNode().getChild(t),i,r,a,o);if(w(t)){let d=new O(null);return l.getNode().forEachChild(Fe,(u,h)=>{d=d.set(new A(u),h)}),Fn(n,e,t,d,i,r,a,o)}else return e}else{let d=new O(null);return s.foreach((u,h)=>{const f=B(t,u);l.isCompleteForPath(f)&&(d=d.set(u,l.getNode().getChild(f)))}),Fn(n,e,t,d,i,r,a,o)}}function yd(n,e,t,s,i){const r=e.serverCache,o=Dr(e,r.getNode(),r.isFullyInitialized()||w(t),r.isFiltered());return Wr(n,o,t,s,Fr,i)}function vd(n,e,t,s,i,r){let o;if(Bt(s,t)!=null)return e;{const a=new as(s,e,i),l=e.eventCache.getNode();let d;if(w(t)||S(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Wt(s,Re(e));else{const h=e.serverCache.getNode();m(h instanceof v,"serverChildren would be complete if leaf node"),u=rs(s,h)}u=u,d=n.filter.updateFullNode(l,u,r)}else{const u=S(t);let h=os(s,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?d=n.filter.updateChild(l,u,h,P(t),a,r):e.eventCache.getNode().hasChild(u)?d=n.filter.updateChild(l,u,v.EMPTY_NODE,P(t),a,r):d=l,d.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wt(s,Re(e)),o.isLeafNode()&&(d=n.filter.updateFullNode(d,o,r)))}return o=e.serverCache.isFullyInitialized()||Bt(s,T())!=null,tt(e,d,o,n.filter.filtersNodes())}}/**
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
 */class bd{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new es(s.getIndex()),r=Wc(s);this.processor_=ud(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(v.EMPTY_NODE,o.getNode(),null),d=r.updateFullNode(v.EMPTY_NODE,a.getNode(),null),u=new ke(l,o.isFullyInitialized(),i.filtersNodes()),h=new ke(d,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Qt(h,u),this.eventGenerator_=new Gc(this.query_)}get query(){return this.query_}}function Cd(n){return n.viewCache_.serverCache.getNode()}function Sd(n,e){const t=Re(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!w(e)&&!t.getImmediateChild(S(e)).isEmpty())?t.getChild(e):null}function xi(n){return n.eventRegistrations_.length===0}function xd(n,e){n.eventRegistrations_.push(e)}function wi(n,e,t){const s=[];if(t){m(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Ei(n,e,t,s){e.type===oe.MERGE&&e.source.queryId!==null&&(m(Re(n.viewCache_),"We should always have a full cache before handling merges"),m(On(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=pd(n.processor_,i,e,t,s);return fd(n.processor_,r.viewCache),m(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Br(n,r.changes,r.viewCache.eventCache.getNode(),null)}function wd(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(F,(r,o)=>{s.push(Ue(r,o))}),t.isFullyInitialized()&&s.push(kr(t.getNode())),Br(n,s,t.getNode(),e)}function Br(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return qc(n.eventGenerator_,e,t,i)}/**
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
 */let Ut;class Ed{constructor(){this.views=new Map}}function Id(n){m(!Ut,"__referenceConstructor has already been defined"),Ut=n}function Td(){return m(Ut,"Reference.ts has not been loaded"),Ut}function Nd(n){return n.views.size===0}function ls(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return m(r!=null,"SyncTree gave us an op for an invalid query."),Ei(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Ei(o,e,t,s));return r}}function kd(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Wt(t,i?s:null),l=!1;a?l=!0:s instanceof v?(a=rs(t,s),l=!1):(a=v.EMPTY_NODE,l=!1);const d=Qt(new ke(a,l,!1),new ke(s,i,!1));return new bd(e,d)}return o}function Rd(n,e,t,s,i,r){const o=kd(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),xd(o,t),wd(o,t)}function Ad(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=be(n);if(i==="default")for(const[l,d]of n.views.entries())o=o.concat(wi(d,t,s)),xi(d)&&(n.views.delete(l),d.query._queryParams.loadsAllData()||r.push(d.query));else{const l=n.views.get(i);l&&(o=o.concat(wi(l,t,s)),xi(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!be(n)&&r.push(new(Td())(e._repo,e._path)),{removed:r,events:o}}function zr(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function We(n,e){let t=null;for(const s of n.views.values())t=t||Sd(s,e);return t}function Ur(n,e){if(e._queryParams.loadsAllData())return Jt(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Vr(n,e){return Ur(n,e)!=null}function be(n){return Jt(n)!=null}function Jt(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Vt;function Dd(n){m(!Vt,"__referenceConstructor has already been defined"),Vt=n}function Pd(){return m(Vt,"Reference.ts has not been loaded"),Vt}let Od=1;class Ii{constructor(e){this.listenProvider_=e,this.syncPointTree_=new O(null),this.pendingWriteTree_=ld(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hr(n,e,t,s,i){return Jc(n.pendingWriteTree_,e,t,s,i),i?yt(n,new Ne(Ar(),e,t)):[]}function Ie(n,e,t=!1){const s=Xc(n.pendingWriteTree_,e);if(Zc(n.pendingWriteTree_,e)){let r=new O(null);return s.snap!=null?r=r.set(T(),!0):ne(s.children,o=>{r=r.set(new A(o),!0)}),yt(n,new Ft(s.path,r,t))}else return[]}function Xt(n,e,t){return yt(n,new Ne(ns(),e,t))}function Md(n,e,t){const s=O.fromObject(t);return yt(n,new ut(ns(),e,s))}function jd(n,e){return yt(n,new ht(ns(),e))}function Ld(n,e,t){const s=ds(n,t);if(s){const i=hs(s),r=i.path,o=i.queryId,a=Z(r,e),l=new ht(ss(o),a);return us(n,r,l)}else return[]}function Wn(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Vr(o,e))){const l=Ad(o,e,t,s);Nd(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const d=l.removed;if(a=l.events,!i){const u=d.findIndex(f=>f._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(f,p)=>be(p));if(u&&!h){const f=n.syncPointTree_.subtree(r);if(!f.isEmpty()){const p=Bd(f);for(let g=0;g<p.length;++g){const b=p[g],N=b.query,M=qr(n,b);n.listenProvider_.startListening(st(N),Ht(n,N),M.hashFn,M.onComplete)}}}!h&&d.length>0&&!s&&(u?n.listenProvider_.stopListening(st(e),null):d.forEach(f=>{const p=n.queryToTagMap.get(Zt(f));n.listenProvider_.stopListening(st(f),p)}))}zd(n,d)}return a}function Fd(n,e,t,s){const i=ds(n,s);if(i!=null){const r=hs(i),o=r.path,a=r.queryId,l=Z(o,e),d=new Ne(ss(a),l,t);return us(n,o,d)}else return[]}function Wd(n,e,t,s){const i=ds(n,s);if(i){const r=hs(i),o=r.path,a=r.queryId,l=Z(o,e),d=O.fromObject(t),u=new ut(ss(a),l,d);return us(n,o,u)}else return[]}function Ti(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(f,p)=>{const g=Z(f,i);r=r||We(p,g),o=o||be(p)});let a=n.syncPointTree_.get(i);a?(o=o||be(a),r=r||We(a,T())):(a=new Ed,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=v.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((p,g)=>{const b=We(g,T());b&&(r=r.updateImmediateChild(p,b))}));const d=Vr(a,e);if(!d&&!e._queryParams.loadsAllData()){const f=Zt(e);m(!n.queryToTagMap.has(f),"View does not exist, but we have a tag");const p=Ud();n.queryToTagMap.set(f,p),n.tagToQueryMap.set(p,f)}const u=is(n.pendingWriteTree_,i);let h=Rd(a,e,t,u,r,l);if(!d&&!o&&!s){const f=Ur(a,e);h=h.concat(Vd(n,e,f))}return h}function cs(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=Z(o,e),d=We(a,l);if(d)return d});return Mr(i,e,r,t,!0)}function yt(n,e){return $r(e,n.syncPointTree_,null,is(n.pendingWriteTree_,T()))}function $r(n,e,t,s){if(w(n.path))return Gr(n,e,t,s);{const i=e.get(T());t==null&&i!=null&&(t=We(i,T()));let r=[];const o=S(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const d=t?t.getImmediateChild(o):null,u=jr(s,o);r=r.concat($r(a,l,d,u))}return i&&(r=r.concat(ls(i,n,s,t))),r}}function Gr(n,e,t,s){const i=e.get(T());t==null&&i!=null&&(t=We(i,T()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,d=jr(s,o),u=n.operationForChild(o);u&&(r=r.concat(Gr(u,a,l,d)))}),i&&(r=r.concat(ls(i,n,s,t))),r}function qr(n,e){const t=e.query,s=Ht(n,t);return{hashFn:()=>(Cd(e)||v.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Ld(n,t._path,s):jd(n,t._path);{const r=Fl(i,t);return Wn(n,t,null,r)}}}}function Ht(n,e){const t=Zt(e);return n.queryToTagMap.get(t)}function Zt(n){return n._path.toString()+"$"+n._queryIdentifier}function ds(n,e){return n.tagToQueryMap.get(e)}function hs(n){const e=n.indexOf("$");return m(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new A(n.substr(0,e))}}function us(n,e,t){const s=n.syncPointTree_.get(e);m(s,"Missing sync point for query tag that we're tracking");const i=is(n.pendingWriteTree_,e);return ls(s,t,i,null)}function Bd(n){return n.fold((e,t,s)=>{if(t&&be(t))return[Jt(t)];{let i=[];return t&&(i=zr(t)),ne(s,(r,o)=>{i=i.concat(o)}),i}})}function st(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Pd())(n._repo,n._path):n}function zd(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Zt(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Ud(){return Od++}function Vd(n,e,t){const s=e._path,i=Ht(n,e),r=qr(n,t),o=n.listenProvider_.startListening(st(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)m(!be(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((d,u,h)=>{if(!w(d)&&u&&be(u))return[Jt(u).query];{let f=[];return u&&(f=f.concat(zr(u).map(p=>p.query))),ne(h,(p,g)=>{f=f.concat(g)}),f}});for(let d=0;d<l.length;++d){const u=l[d];n.listenProvider_.stopListening(st(u),Ht(n,u))}}return o}/**
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
 */class fs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new fs(t)}node(){return this.node_}}class ps{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=B(this.path_,e);return new ps(this.syncTree_,t)}node(){return cs(this.syncTree_,this.path_)}}const Hd=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ni=function(n,e,t){if(!n||typeof n!="object")return n;if(m(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return $d(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Gd(n[".sv"],e);m(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},$d=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:m(!1,"Unexpected server value: "+n)}},Gd=function(n,e,t){n.hasOwnProperty("increment")||m(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&m(!1,"Unexpected increment value: "+s);const i=e.node();if(m(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},qd=function(n,e,t,s){return ms(e,new ps(t,n),s)},Yr=function(n,e,t){return ms(n,new fs(e),t)};function ms(n,e,t){const s=n.getPriority().val(),i=Ni(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ni(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new V(a,Y(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new V(i))),o.forEachChild(F,(a,l)=>{const d=ms(l,e.getImmediateChild(a),t);d!==l&&(r=r.updateImmediateChild(a,d))}),r}}/**
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
 */class gs{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function _s(n,e){let t=e instanceof A?e:new A(e),s=n,i=S(t);for(;i!==null;){const r=Be(s.node.children,i)||{children:{},childCount:0};s=new gs(i,s,r),t=P(t),i=S(t)}return s}function qe(n){return n.node.value}function Kr(n,e){n.node.value=e,Bn(n)}function Qr(n){return n.node.childCount>0}function Yd(n){return qe(n)===void 0&&!Qr(n)}function en(n,e){ne(n.node.children,(t,s)=>{e(new gs(t,n,s))})}function Jr(n,e,t,s){t&&e(n),en(n,i=>{Jr(i,e,!0)})}function Kd(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function vt(n){return new A(n.parent===null?n.name:vt(n.parent)+"/"+n.name)}function Bn(n){n.parent!==null&&Qd(n.parent,n.name,n)}function Qd(n,e,t){const s=Yd(t),i=me(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Bn(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Bn(n))}/**
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
 */const Jd=/[\[\].#$\/\u0000-\u001F\u007F]/,Xd=/[\[\].#$\u0000-\u001F\u007F]/,gn=10*1024*1024,Xr=function(n){return typeof n=="string"&&n.length!==0&&!Jd.test(n)},Zr=function(n){return typeof n=="string"&&n.length!==0&&!Xd.test(n)},Zd=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Zr(n)},eh=function(n,e,t,s){ys($n(n,"value"),e,t)},ys=function(n,e,t){const s=t instanceof A?new _c(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+xe(s));if(typeof e=="function")throw new Error(n+"contains a function "+xe(s)+" with contents = "+e.toString());if(Zi(e))throw new Error(n+"contains "+e.toString()+" "+xe(s));if(typeof e=="string"&&e.length>gn/3&&Yt(e)>gn)throw new Error(n+"contains a string greater than "+gn+" utf8 bytes "+xe(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(ne(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Xr(o)))throw new Error(n+" contains an invalid key ("+o+") "+xe(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);yc(s,o),ys(n,a,s),vc(s)}),i&&r)throw new Error(n+' contains ".value" child '+xe(s)+" in addition to actual children.")}},eo=function(n,e,t,s){if(!Zr(t))throw new Error($n(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},th=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),eo(n,e,t)},nh=function(n,e){if(S(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},sh=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Xr(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Zd(t))throw new Error($n(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class ih{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function vs(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Jn(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function to(n,e,t){vs(n,t),no(n,s=>Jn(s,e))}function pe(n,e,t){vs(n,t),no(n,s=>re(s,e)||re(e,s))}function no(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(rh(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function rh(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ze&&K("event: "+t.toString()),Ge(s)}}}/**
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
 */const oh="repo_interrupt",ah=25;class lh{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new ih,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Lt(),this.transactionQueueTree_=new gs,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ch(n,e,t){if(n.stats_=Kn(n.repoInfo_),n.forceRestClient_||Ul())n.server_=new jt(n.repoInfo_,(s,i,r,o)=>{ki(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ri(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{$(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new he(n.repoInfo_,e,(s,i,r,o)=>{ki(n,s,i,r,o)},s=>{Ri(n,s)},s=>{hh(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=ql(n.repoInfo_,()=>new $c(n.stats_,n.server_)),n.infoData_=new Bc,n.infoSyncTree_=new Ii({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Xt(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Cs(n,"connected",!1),n.serverSyncTree_=new Ii({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const d=o(a,l);pe(n.eventQueue_,s._path,d)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function dh(n){const t=n.infoData_.getNode(new A(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function bs(n){return Hd({timestamp:dh(n)})}function ki(n,e,t,s,i){n.dataUpdateCount++;const r=new A(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=kt(t,d=>Y(d));o=Wd(n.serverSyncTree_,r,l,i)}else{const l=Y(t);o=Fd(n.serverSyncTree_,r,l,i)}else if(s){const l=kt(t,d=>Y(d));o=Md(n.serverSyncTree_,r,l)}else{const l=Y(t);o=Xt(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=tn(n,r)),pe(n.eventQueue_,a,o)}function Ri(n,e){Cs(n,"connected",e),e===!1&&fh(n)}function hh(n,e){ne(e,(t,s)=>{Cs(n,t,s)})}function Cs(n,e,t){const s=new A("/.info/"+e),i=Y(t);n.infoData_.updateSnapshot(s,i);const r=Xt(n.infoSyncTree_,s,i);pe(n.eventQueue_,s,r)}function so(n){return n.nextWriteId_++}function uh(n,e,t,s,i){Ss(n,"set",{path:e.toString(),value:t,priority:s});const r=bs(n),o=Y(t,s),a=cs(n.serverSyncTree_,e),l=Yr(o,a,r),d=so(n),u=Hr(n.serverSyncTree_,e,l,d,!0);vs(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(f,p)=>{const g=f==="ok";g||te("set at "+e+" failed: "+f);const b=Ie(n.serverSyncTree_,d,!g);pe(n.eventQueue_,e,b),_h(n,i,f,p)});const h=lo(n,e);tn(n,h),pe(n.eventQueue_,h,[])}function fh(n){Ss(n,"onDisconnectEvents");const e=bs(n),t=Lt();Pn(n.onDisconnect_,T(),(i,r)=>{const o=qd(i,r,n.serverSyncTree_,e);Rr(t,i,o)});let s=[];Pn(t,T(),(i,r)=>{s=s.concat(Xt(n.serverSyncTree_,i,r));const o=lo(n,i);tn(n,o)}),n.onDisconnect_=Lt(),pe(n.eventQueue_,T(),s)}function ph(n,e,t){let s;S(e._path)===".info"?s=Ti(n.infoSyncTree_,e,t):s=Ti(n.serverSyncTree_,e,t),to(n.eventQueue_,e._path,s)}function mh(n,e,t){let s;S(e._path)===".info"?s=Wn(n.infoSyncTree_,e,t):s=Wn(n.serverSyncTree_,e,t),to(n.eventQueue_,e._path,s)}function gh(n){n.persistentConnection_&&n.persistentConnection_.interrupt(oh)}function Ss(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),K(t,...e)}function _h(n,e,t,s){e&&Ge(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function io(n,e,t){return cs(n.serverSyncTree_,e,t)||v.EMPTY_NODE}function xs(n,e=n.transactionQueueTree_){if(e||nn(n,e),qe(e)){const t=oo(n,e);m(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&yh(n,vt(e),t)}else Qr(e)&&en(e,t=>{xs(n,t)})}function yh(n,e,t){const s=t.map(d=>d.currentWriteId),i=io(n,e,s);let r=i;const o=i.hash();for(let d=0;d<t.length;d++){const u=t[d];m(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=Z(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,d=>{Ss(n,"transaction put response",{path:l.toString(),status:d});let u=[];if(d==="ok"){const h=[];for(let f=0;f<t.length;f++)t[f].status=2,u=u.concat(Ie(n.serverSyncTree_,t[f].currentWriteId)),t[f].onComplete&&h.push(()=>t[f].onComplete(null,!0,t[f].currentOutputSnapshotResolved)),t[f].unwatcher();nn(n,_s(n.transactionQueueTree_,e)),xs(n,n.transactionQueueTree_),pe(n.eventQueue_,e,u);for(let f=0;f<h.length;f++)Ge(h[f])}else{if(d==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{te("transaction at "+l.toString()+" failed: "+d);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=d}tn(n,e)}},o)}function tn(n,e){const t=ro(n,e),s=vt(t),i=oo(n,t);return vh(n,i,s),s}function vh(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],d=Z(t,l.path);let u=!1,h;if(m(d!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,i=i.concat(Ie(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ah)u=!0,h="maxretry",i=i.concat(Ie(n.serverSyncTree_,l.currentWriteId,!0));else{const f=io(n,l.path,o);l.currentInputSnapshot=f;const p=e[a].update(f.val());if(p!==void 0){ys("transaction failed: Data returned ",p,l.path);let g=Y(p);typeof p=="object"&&p!=null&&me(p,".priority")||(g=g.updatePriority(f.getPriority()));const N=l.currentWriteId,M=bs(n),z=Yr(g,f,M);l.currentOutputSnapshotRaw=g,l.currentOutputSnapshotResolved=z,l.currentWriteId=so(n),o.splice(o.indexOf(N),1),i=i.concat(Hr(n.serverSyncTree_,l.path,z,l.currentWriteId,l.applyLocally)),i=i.concat(Ie(n.serverSyncTree_,N,!0))}else u=!0,h="nodata",i=i.concat(Ie(n.serverSyncTree_,l.currentWriteId,!0))}pe(n.eventQueue_,t,i),i=[],u&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(h),!1,null))))}nn(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)Ge(s[a]);xs(n,n.transactionQueueTree_)}function ro(n,e){let t,s=n.transactionQueueTree_;for(t=S(e);t!==null&&qe(s)===void 0;)s=_s(s,t),e=P(e),t=S(e);return s}function oo(n,e){const t=[];return ao(n,e,t),t.sort((s,i)=>s.order-i.order),t}function ao(n,e,t){const s=qe(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);en(e,i=>{ao(n,i,t)})}function nn(n,e){const t=qe(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,Kr(e,t.length>0?t:void 0)}en(e,s=>{nn(n,s)})}function lo(n,e){const t=vt(ro(n,e)),s=_s(n.transactionQueueTree_,e);return Kd(s,i=>{_n(n,i)}),_n(n,s),Jr(s,i=>{_n(n,i)}),t}function _n(n,e){const t=qe(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(m(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(m(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(Ie(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Kr(e,void 0):t.length=r+1,pe(n.eventQueue_,vt(e),i);for(let o=0;o<s.length;o++)Ge(s[o])}}/**
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
 */function bh(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ch(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):te(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ai=function(n,e){const t=Sh(n),s=t.namespace;t.domain==="firebase.com"&&fe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&fe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Pl();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new hr(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new A(t.pathString)}},Sh=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let d=n.indexOf("//");d>=0&&(a=n.substring(0,d-1),n=n.substring(d+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(i=bh(n.substring(u,h)));const f=Ch(n.substring(Math.min(n.length,h)));d=e.indexOf(":"),d>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(d+1),10)):d=e.length;const p=e.slice(0,d);if(p.toLowerCase()==="localhost")t="localhost";else if(p.split(".").length<=2)t=p;else{const g=e.indexOf(".");s=e.substring(0,g).toLowerCase(),t=e.substring(g+1),r=s}"ns"in f&&(r=f.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class xh{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+$(this.snapshot.exportVal())}}class wh{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Eh{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return m(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ws{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return w(this._path)?null:br(this._path)}get ref(){return new Ce(this._repo,this._path)}get _queryIdentifier(){const e=mi(this._queryParams),t=qn(e);return t==="{}"?"default":t}get _queryObject(){return mi(this._queryParams)}isEqual(e){if(e=pt(e),!(e instanceof ws))return!1;const t=this._repo===e._repo,s=Jn(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+gc(this._path)}}class Ce extends ws{constructor(e,t){super(e,t,new ts,!1)}get parent(){const e=Sr(this._path);return e===null?null:new Ce(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class $t{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new A(e),s=zn(this.ref,e);return new $t(this._node.getChild(t),s,F)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new $t(i,zn(this.ref,s),F)))}hasChild(e){const t=new A(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function co(n,e){return n=pt(n),n._checkNotDeleted("ref"),zn(n._root,e)}function zn(n,e){return n=pt(n),S(n._path)===null?th("child","path",e):eo("child","path",e),new Ce(n._repo,B(n._path,e))}function Ih(n,e){n=pt(n),nh("set",n._path),eh("set",e,n._path);const t=new qt;return uh(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class Es{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new xh("value",this,new $t(e.snapshotNode,new Ce(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new wh(this,e,t):null}matches(e){return e instanceof Es?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Th(n,e,t,s,i){const r=new Eh(t,void 0),o=new Es(r);return ph(n._repo,n,o),()=>mh(n._repo,n,o)}function Nh(n,e,t,s){return Th(n,"value",e)}Id(Ce);Dd(Ce);/**
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
 */const kh="FIREBASE_DATABASE_EMULATOR_HOST",Un={};let Rh=!1;function Ah(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=Vi(r);n.repoInfo_=new hr(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Dh(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||fe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),K("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ai(r,i),a=o.repoInfo,l;typeof process<"u"&&Js&&(l=Js[kh]),l?(r=`http://${l}?ns=${a.namespace}`,o=Ai(r,i),a=o.repoInfo):o.repoInfo.secure;const d=new Hl(n.name,n.options,e);sh("Invalid Firebase Database URL",o),w(o.path)||fe("Database URL must point to the root of a Firebase Database (not including a child path).");const u=Oh(a,n,d,new Vl(n,t));return new Mh(u,n)}function Ph(n,e){const t=Un[e];(!t||t[n.key]!==n)&&fe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),gh(n),delete t[n.key]}function Oh(n,e,t,s){let i=Un[e.name];i||(i={},Un[e.name]=i);let r=i[n.toURLString()];return r&&fe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new lh(n,Rh,t,s),i[n.toURLString()]=r,r}class Mh{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ch(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ce(this._repo,T())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ph(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&fe("Cannot call "+e+" on a deleted database.")}}function jh(n=gl(),e){const t=hl(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=ea("database");s&&Lh(t,...s)}return t}function Lh(n,e,t,s={}){n=pt(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&Rt(s,r.repoInfo_.emulatorOptions))return;fe("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&fe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Tt(Tt.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:ta(s.mockUserToken,n.app.options.projectId);o=new Tt(a)}Vi(e)&&pa(e),Ah(r,i,s,o)}/**
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
 */function Fh(n){Tl(ml),Dt(new rt("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Dh(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),je(Xs,Zs,n),je(Xs,Zs,"esm2020")}/**
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
 */he.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};he.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Fh();var Wh="firebase",Bh="12.18.0";/**
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
 */je(Wh,Bh,"app");const zh={apiKey:"AIzaSyABiFO7TWD7o-V_wpVenOMOf52ovKYPKms",authDomain:"concursos-20cce.firebaseapp.com",databaseURL:"https://concursos-20cce-default-rtdb.firebaseio.com",projectId:"concursos-20cce",storageBucket:"concursos-20cce.firebasestorage.app",messagingSenderId:"830415520406",appId:"1:830415520406:web:06f25ae36a70cfd84738b7",measurementId:"G-BF6WV175XG"},Uh=qi(zh),ho=jh(Uh),uo="english_immersion_os/user_progress";let Vn=!1;const Gt=async()=>{if(!Vn)try{const n={updatedAt:Date.now(),english_immersion_progress:localStorage.getItem("english_immersion_progress"),english_game_stats:localStorage.getItem("english_game_stats"),english_daily_vocab_goal:localStorage.getItem("english_daily_vocab_goal"),english_vocab_srs_state:localStorage.getItem("english_vocab_srs_state"),english_unlocked_blocks:localStorage.getItem("english_unlocked_blocks"),english_active_block_id:localStorage.getItem("english_active_block_id")},e=co(ho,uo);return await Ih(e,n),!0}catch(n){return console.warn("Firebase sync upload note:",n),!1}},Vh=n=>{try{const e=co(ho,uo);return Nh(e,s=>{const i=s.val();if(!i||!i.updatedAt)return;Vn=!0;let r=!1;i.english_immersion_progress&&i.english_immersion_progress!==localStorage.getItem("english_immersion_progress")&&(localStorage.setItem("english_immersion_progress",i.english_immersion_progress),r=!0),i.english_game_stats&&i.english_game_stats!==localStorage.getItem("english_game_stats")&&(localStorage.setItem("english_game_stats",i.english_game_stats),r=!0),i.english_daily_vocab_goal&&i.english_daily_vocab_goal!==localStorage.getItem("english_daily_vocab_goal")&&(localStorage.setItem("english_daily_vocab_goal",i.english_daily_vocab_goal),r=!0),i.english_vocab_srs_state&&i.english_vocab_srs_state!==localStorage.getItem("english_vocab_srs_state")&&(localStorage.setItem("english_vocab_srs_state",i.english_vocab_srs_state),r=!0),i.english_unlocked_blocks&&i.english_unlocked_blocks!==localStorage.getItem("english_unlocked_blocks")&&(localStorage.setItem("english_unlocked_blocks",i.english_unlocked_blocks),r=!0),i.english_active_block_id&&i.english_active_block_id!==localStorage.getItem("english_active_block_id")&&(localStorage.setItem("english_active_block_id",i.english_active_block_id),r=!0),r&&n&&n(i),setTimeout(()=>{Vn=!1},300)})}catch(e){return console.warn("Firebase realtime subscription error:",e),()=>{}}},yn=n=>{try{const e=window.AudioContext||window.webkitAudioContext;if(!e)return;const t=new e;if(n==="correct")[523.25,659.25,783.99].forEach((i,r)=>{const o=t.createOscillator(),a=t.createGain();o.type="sine",o.frequency.setValueAtTime(i,t.currentTime+r*.08),a.gain.setValueAtTime(.15,t.currentTime+r*.08),a.gain.exponentialRampToValueAtTime(.001,t.currentTime+r*.08+.35),o.connect(a),a.connect(t.destination),o.start(t.currentTime+r*.08),o.stop(t.currentTime+r*.08+.4)});else if(n==="wrong"){const s=t.createOscillator(),i=t.createGain();s.type="triangle",s.frequency.setValueAtTime(220,t.currentTime),s.frequency.setValueAtTime(175,t.currentTime+.1),i.gain.setValueAtTime(.18,t.currentTime),i.gain.exponentialRampToValueAtTime(.001,t.currentTime+.3),s.connect(i),i.connect(t.destination),s.start(t.currentTime),s.stop(t.currentTime+.35)}else n==="victory"&&[523.25,659.25,783.99,1046.5].forEach((i,r)=>{const o=t.createOscillator(),a=t.createGain();o.type="triangle",o.frequency.setValueAtTime(i,t.currentTime+r*.1),a.gain.setValueAtTime(.2,t.currentTime+r*.1),a.gain.exponentialRampToValueAtTime(.001,t.currentTime+r*.1+.5),o.connect(a),a.connect(t.destination),o.start(t.currentTime+r*.1),o.stop(t.currentTime+r*.1+.55)})}catch(e){console.warn("Sound effect note:",e)}};function Hh(){const[n,e]=E.useState("game"),[t,s]=E.useState("A1"),[i,r]=E.useState("listening"),[o,a]=E.useState(.88),[l,d]=E.useState(()=>{const _=localStorage.getItem("english_unlocked_blocks");return _?JSON.parse(_):["block_1"]}),[u,h]=E.useState(()=>localStorage.getItem("english_active_block_id")||"block_1"),[f,p]=E.useState(()=>{const _=localStorage.getItem("english_vocab_srs_state");return _?JSON.parse(_):{}}),[g,b]=E.useState(()=>{const _=localStorage.getItem("english_daily_vocab_goal"),C=new Date().toISOString().split("T")[0];if(_){const I=JSON.parse(_);if(I.date===C)return I}return{date:C,masteredIds:[],count:0,target:100}}),[N,M]=E.useState(()=>{const _=localStorage.getItem("english_game_stats");return _?JSON.parse(_):{xp:0,level:1,streak:0,bestStreak:0,totalAnswered:0,totalCorrect:0,lives:3}}),[z,G]=E.useState(null);E.useEffect(()=>{localStorage.setItem("english_unlocked_blocks",JSON.stringify(l)),localStorage.setItem("english_active_block_id",u),localStorage.setItem("english_vocab_srs_state",JSON.stringify(f)),localStorage.setItem("english_daily_vocab_goal",JSON.stringify(g)),localStorage.setItem("english_game_stats",JSON.stringify(N))},[l,u,f,g,N]);const y=on(u),k=_=>{const C=_.words||[];if(C.length===0)return{mastered:0,total:0,pct:0,isComplete:!1};let I=0;for(const j of C){const L=f[j.id];L&&(L.stage>=3||L.mastered)&&I++}const q=Math.round(I/C.length*100);return{mastered:I,total:C.length,pct:q,isComplete:I===C.length}},W=k(y),le=(_,C)=>{const I=_.words||[],q=I.filter(J=>{const U=C[J.id];return!U||U.stage<3}),j=I.filter(J=>{const U=C[J.id];return U&&U.stage>=3}),L=[...q,...j];return L.length>0?L:I},[X,Q]=E.useState(()=>le(y,f)),[De,sn]=E.useState(0),[fo,bt]=E.useState(null),[Pe,Ct]=E.useState(!1),[Ye,St]=E.useState(!1),[po,xt]=E.useState(!1),[rn,wt]=E.useState(!1);E.useEffect(()=>{const _=on(u);Q(le(_,f)),sn(0),bt(null),Ct(!1),St(!1),xt(i!=="listening"),wt(!1)},[u]);const R=X[De]||X[0],Is=R?f[R.id]||{stage:0,soundGap:!1}:{stage:0,soundGap:!1};E.useEffect(()=>{if(R&&n==="game"&&!z){const _=setTimeout(()=>{we(R.en,o)},200);return()=>clearTimeout(_)}},[De,u,n,z]);const Ts=(_=o)=>{R&&we(R.en,_)},mo=()=>{if(xt(!0),wt(!0),R){const _=R.id;p(C=>({...C,[_]:{...C[_]||{stage:0,streak:0},soundGap:!0}}))}},Ns=_=>{const C=on(u);if((C.words||[]).every(j=>{const L=_[j.id];return L&&(L.stage>=3||L.mastered)})){const j=C.num+1,L=`block_${j}`;Wo.some(U=>U.id===L)&&!l.includes(L)&&(d(U=>[...U,L]),G({completedBlock:C,nextBlockId:L,nextBlockNum:j}),yn("victory"))}},go=_=>{if(Pe||!R)return;bt(_),Ct(!0);const C=_===R.pt;St(C);const I=R.id,q=f[I]||{stage:0,streak:0};if(C){yn("correct");const j=Math.min(rn?2:3,q.stage+1),L=q.streak+1,J=j>=3,U={...f,[I]:{stage:j,streak:L,lastReviewed:Date.now(),mastered:J,soundGap:rn}};p(U),g.masteredIds.includes(I)||b(ge=>({...ge,masteredIds:[...ge.masteredIds,I],count:ge.count+1}));const se=N.streak+1,Co=10+(se>=3?5:0),As=N.xp+Co,So=Math.floor(As/100)+1;M(ge=>({...ge,xp:As,level:So,streak:se,bestStreak:Math.max(ge.bestStreak,se),totalAnswered:ge.totalAnswered+1,totalCorrect:ge.totalCorrect+1})),J&&Ns(U)}else{yn("wrong");const j={...f,[I]:{stage:0,streak:0,lastReviewed:Date.now(),mastered:!1,soundGap:!0}};p(j);const L={...R},J=[...X],U=Math.min(J.length,De+3);J.splice(U,0,L),Q(J),M(se=>({...se,streak:0,lives:Math.max(0,se.lives-1),totalAnswered:se.totalAnswered+1}))}setTimeout(()=>{Gt()},150)},_o=()=>{if(!R)return;const _=R.id,C={...f,[_]:{stage:3,streak:3,lastReviewed:Date.now(),mastered:!0,soundGap:!1}};p(C),g.masteredIds.includes(_)||b(I=>({...I,masteredIds:[...I.masteredIds,_],count:I.count+1})),Ns(C),setTimeout(()=>{Gt()},150),ks()},ks=()=>{if(De+1<X.length)sn(_=>_+1),bt(null),Ct(!1),St(!1),xt(i!=="listening"),wt(!1);else{const _=le(y,f);Q(_),sn(0),bt(null),Ct(!1),St(!1),xt(i!=="listening"),wt(!1)}},yo=_=>{l.includes(_)&&(h(_),e("game"))},vo=()=>{z&&(h(z.nextBlockId),G(null),e("game"))},bo=(_,C)=>C?c.jsx("span",{className:"badge badge-amber",children:"👂 Treinar Som"}):_>=3?c.jsx("span",{className:"badge badge-emerald",children:"🟩 Dominada"}):_===2?c.jsx("span",{className:"badge badge-blue",children:"🟨 Em Revisão (2/3)"}):_===1?c.jsx("span",{className:"badge badge-amber",children:"🟧 Praticando (1/3)"}):c.jsx("span",{className:"badge",style:{background:"rgba(255,255,255,0.08)",color:"var(--text-muted)"},children:"🟥 Nova"});Fo();const Rs=Math.min(100,Math.round(g.count/g.target*100));return c.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1.5rem",maxWidth:"950px",margin:"0 auto"},children:[c.jsxs("div",{style:{background:"linear-gradient(135deg, rgba(2, 132, 199, 0.18) 0%, rgba(16, 185, 129, 0.18) 100%)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-xl)",padding:"1.25rem 1.5rem",display:"flex",flexDirection:"column",gap:"0.75rem",boxShadow:"var(--shadow-sm)"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[c.jsx(Sn,{size:20,color:"var(--accent-amber)"}),c.jsx("span",{style:{fontWeight:800,fontSize:"0.95rem",color:"#fff"},children:"🎯 Meta do Dia: 100 Palavras"})]}),c.jsxs("div",{style:{fontSize:"0.85rem",fontWeight:800,color:"var(--accent-emerald)"},children:[g.count," / ",g.target," Palavras Aprendidas Hoje (",Rs,"%)"]})]}),c.jsx("div",{className:"progress-bar-bg",style:{height:"10px"},children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${Rs}%`}})})]}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.75rem",background:"var(--bg-card)",padding:"0.75rem 1.25rem",borderRadius:"var(--radius-lg)",border:"1px solid var(--border-color)"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.75rem"},children:[c.jsxs("span",{style:{fontSize:"1rem",fontWeight:800,color:"var(--accent-blue)"},children:["📍 ",y.title]}),c.jsxs("span",{className:"badge badge-emerald",style:{fontSize:"0.75rem"},children:[W.mastered,"/",W.total," Dominadas (",W.pct,"%)"]})]}),c.jsxs("div",{style:{display:"flex",gap:"0.5rem"},children:[c.jsxs("button",{className:`btn ${n==="game"?"btn-emerald":"btn-secondary"}`,onClick:()=>e("game"),style:{padding:"0.45rem 0.95rem",fontSize:"0.82rem"},children:[c.jsx(Do,{size:15})," Jogar Bloco"]}),c.jsxs("button",{className:`btn ${n==="map"?"btn-primary":"btn-secondary"}`,onClick:()=>e("map"),style:{padding:"0.45rem 0.95rem",fontSize:"0.82rem"},children:[c.jsx(Po,{size:15})," 🗺️ Mapa de Blocos"]})]})]}),n==="map"&&c.jsxs("div",{className:"card",style:{borderColor:"var(--accent-blue)",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)",fontWeight:800,textTransform:"uppercase",marginBottom:"0.6rem"},children:"Selecione o Nível de Domínio:"}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(180px, 1fr))",gap:"0.6rem"},children:Ls.map(_=>{const C=t===_.id,I=Fs(_.id),q=I.filter(j=>k(j).isComplete).length;return c.jsxs("button",{onClick:()=>s(_.id),style:{background:C?"linear-gradient(135deg, rgba(2, 132, 199, 0.25) 0%, rgba(16, 185, 129, 0.2) 100%)":"rgba(0,0,0,0.25)",border:C?"1px solid var(--accent-blue)":"1px solid var(--border-color)",padding:"1rem",borderRadius:"var(--radius-md)",textAlign:"left",cursor:"pointer",transition:"all 0.2s ease"},children:[c.jsxs("div",{style:{fontSize:"1.2rem",marginBottom:"0.2rem"},children:[_.icon," ",_.name]}),c.jsxs("div",{style:{fontSize:"0.78rem",color:C?"var(--accent-emerald)":"var(--text-muted)",fontWeight:700},children:[q," / ",I.length," Blocos Concluídos"]})]},_.id)})})]}),(()=>{const _=Ls.find(C=>C.id===t);return c.jsxs("div",{style:{background:"rgba(0,0,0,0.3)",padding:"0.85rem 1.2rem",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)",fontSize:"0.88rem",color:"var(--text-secondary)"},children:["💡 ",c.jsxs("strong",{children:["Objetivo do ",_.name,":"]})," ",_.description]})})(),c.jsxs("div",{children:[c.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-muted)",fontWeight:800,textTransform:"uppercase",marginBottom:"0.75rem"},children:["Blocos de Vocabulário do ",t," (Desbloqueio Progressivo):"]}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"0.85rem"},children:Fs(t).map(_=>{const C=l.includes(_.id),I=u===_.id,q=k(_);let j="rgba(0, 0, 0, 0.35)",L="var(--border-color)",J=c.jsx(Lo,{size:16,color:"var(--text-muted)"}),U="Bloqueado",se="var(--text-muted)";return q.isComplete?(j="rgba(16, 185, 129, 0.12)",L="var(--accent-emerald)",J=c.jsx(Ps,{size:16,color:"var(--accent-emerald)"}),U="100% Dominado!",se="var(--accent-emerald)"):C&&(j=I?"rgba(56, 189, 248, 0.15)":"rgba(255, 255, 255, 0.04)",L=I?"var(--accent-blue)":"rgba(56, 189, 248, 0.3)",J=c.jsx(Ms,{size:16,color:"var(--accent-blue)"}),U=I?"Jogando Agora":"Disponível",se="var(--accent-blue)"),c.jsxs("div",{onClick:()=>C&&yo(_.id),style:{background:j,border:`1px solid ${L}`,borderRadius:"var(--radius-md)",padding:"1.1rem",display:"flex",flexDirection:"column",gap:"0.65rem",cursor:C?"pointer":"not-allowed",opacity:C?1:.6,transition:"all 0.2s ease",boxShadow:I?"0 0 15px rgba(56, 189, 248, 0.2)":"none"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[c.jsxs("span",{style:{fontWeight:800,fontSize:"0.95rem",color:"#fff"},children:["Bloco ",_.num]}),J]}),c.jsxs("div",{style:{fontSize:"0.78rem",color:"var(--text-secondary)"},children:[_.wordsCount," Palavras • ",_.level]}),c.jsx("div",{className:"progress-bar-bg",style:{height:"6px"},children:c.jsx("div",{className:"progress-bar-fill",style:{width:`${q.pct}%`}})}),c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"0.75rem",marginTop:"0.2rem"},children:[c.jsx("span",{style:{color:se,fontWeight:700},children:U}),c.jsxs("span",{style:{color:"var(--text-muted)"},children:[q.mastered,"/",q.total]})]}),C&&c.jsx("button",{className:`btn ${I?"btn-emerald":"btn-secondary"}`,style:{padding:"0.35rem 0.65rem",fontSize:"0.75rem",width:"100%",marginTop:"0.2rem"},children:I?"Continuar Jogando ➔":"Treinar Este Bloco"})]},_.id)})})]})]}),n==="game"&&R&&c.jsxs("div",{className:"card",style:{borderColor:"var(--accent-emerald)",padding:"1.75rem",display:"flex",flexDirection:"column",gap:"1.5rem"},children:[c.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"0.5rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem"},children:[c.jsx("span",{className:"badge badge-blue",children:y.title}),bo(Is.stage,Is.soundGap),c.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)"},children:["• ",R.category||"Vocabulário"]})]}),!Pe&&c.jsxs("button",{onClick:_o,style:{background:"rgba(255,255,255,0.06)",border:"1px solid var(--border-color)",color:"var(--text-secondary)",padding:"0.35rem 0.75rem",borderRadius:"var(--radius-sm)",fontSize:"0.78rem",cursor:"pointer",display:"flex",alignItems:"center",gap:"0.35rem"},title:"Já sabe esta palavra? Marque como dominada para avançar no bloco!",children:[c.jsx(Oo,{size:13,color:"var(--accent-amber)"})," Já sei essa palavra"]})]}),c.jsxs("div",{style:{background:"rgba(0, 0, 0, 0.35)",border:"1px solid var(--border-color)",borderRadius:"var(--radius-lg)",padding:"1.75rem",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"1.15rem"},children:[c.jsxs("div",{style:{display:"flex",gap:"0.75rem",alignItems:"center",flexWrap:"wrap",justifyContent:"center"},children:[c.jsxs("button",{className:"btn btn-primary",onClick:()=>Ts(o),style:{padding:"0.9rem 1.8rem",fontSize:"1.05rem",borderRadius:"var(--radius-xl)",boxShadow:"0 0 25px rgba(2, 132, 199, 0.4)"},children:[c.jsx(xn,{size:22})," Ouvir Pronúncia"]}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>Ts(.68),style:{padding:"0.8rem 1.1rem",fontSize:"0.85rem",borderRadius:"var(--radius-xl)"},children:"🐢 0.68x Bem Lento"})]}),i==="listening"&&!po&&!Pe?c.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.4rem",marginTop:"0.3rem"},children:[c.jsx("span",{style:{fontSize:"1.3rem",fontWeight:800,color:"var(--text-muted)",letterSpacing:"0.25em"},children:"🔊 • • • • • •"}),c.jsxs("span",{style:{fontSize:"0.8rem",color:"var(--text-secondary)"},children:["(Identifique o significado ",c.jsx("strong",{children:"apenas escutando"}),"!)"]}),c.jsxs("button",{onClick:mo,style:{background:"rgba(56, 189, 248, 0.1)",border:"1px solid rgba(56, 189, 248, 0.3)",color:"var(--accent-blue)",fontSize:"0.8rem",fontWeight:700,cursor:"pointer",padding:"0.4rem 0.8rem",borderRadius:"var(--radius-sm)",display:"flex",alignItems:"center",gap:"0.4rem",marginTop:"0.4rem"},children:[c.jsx(Mo,{size:14})," Espiar escrita & Pronúncia"]})]}):c.jsxs("div",{style:{marginTop:"0.3rem",display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem",width:"100%"},children:[c.jsxs("div",{style:{fontSize:"1.9rem",fontWeight:800,color:"var(--accent-blue)",fontFamily:"var(--font-mono)"},children:['"',R.en,'"']}),c.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.12)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-md)",padding:"0.75rem 1.25rem",maxWidth:"550px",width:"100%",textAlign:"center",display:"flex",flexDirection:"column",gap:"0.3rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",flexWrap:"wrap"},children:[c.jsx("span",{style:{fontSize:"0.75rem",fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase"},children:"🗣️ Como se fala:"}),c.jsxs("span",{style:{fontSize:"1.15rem",fontWeight:800,color:"var(--accent-emerald)",fontFamily:"var(--font-mono)"},children:['"',R.phoneticPt||R.en,'"']}),R.ipa&&c.jsx("span",{style:{fontSize:"0.8rem",color:"var(--text-muted)",fontFamily:"var(--font-mono)"},children:R.ipa})]}),R.soundTip&&c.jsxs("div",{style:{fontSize:"0.82rem",color:"var(--text-secondary)",marginTop:"0.15rem"},children:["💡 ",c.jsx("strong",{children:"Dica:"})," ",R.soundTip]})]}),rn&&c.jsx("div",{style:{fontSize:"0.75rem",color:"var(--accent-amber)",fontWeight:700},children:"⚠️ Você precisou ver a escrita: esta palavra reaparecerá no modo auditivo para fixar o som!"})]})]}),c.jsxs("div",{children:[c.jsx("span",{style:{fontSize:"0.82rem",color:"var(--text-muted)",fontWeight:800,display:"block",marginBottom:"0.75rem",textTransform:"uppercase"},children:"Qual é o significado correto em português?"}),c.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:"0.75rem"},children:(R.options||[]).map((_,C)=>{const I=fo===_,q=_===R.pt;let j={padding:"1rem 1.15rem",fontSize:"0.92rem",textAlign:"left",justifyContent:"flex-start",borderRadius:"var(--radius-md)",transition:"all 0.15s ease",fontWeight:700};if(Pe){if(q)return c.jsxs("button",{className:"btn btn-emerald",style:{...j,boxShadow:"0 0 15px var(--accent-emerald-glow)"},children:[c.jsx(Ps,{size:18})," ",_," (Correto! 🎉)"]},C);if(I&&!Ye)return c.jsxs("button",{className:"btn btn-secondary",style:{...j,borderColor:"var(--accent-rose)",color:"var(--accent-rose)",background:"rgba(244, 63, 94, 0.15)"},children:[c.jsx(jo,{size:18})," ",_," (Incorreto)"]},C)}return c.jsxs("button",{onClick:()=>go(_),disabled:Pe,className:"btn btn-secondary",style:{...j,border:"1px solid var(--border-color)",background:"var(--bg-card)"},children:[c.jsx("span",{style:{width:"22px",height:"22px",borderRadius:"50%",background:"rgba(255,255,255,0.08)",display:"inline-flex",alignItems:"center",justifyContent:"center",fontSize:"0.75rem",marginRight:"0.5rem"},children:String.fromCharCode(65+C)}),_]},C)})})]}),Pe&&c.jsxs("div",{style:{background:Ye?"var(--accent-emerald-glow)":"rgba(244, 63, 94, 0.12)",border:Ye?"1px solid var(--accent-emerald)":"1px solid var(--accent-rose)",borderRadius:"var(--radius-md)",padding:"1.15rem",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"1rem"},children:[c.jsxs("div",{children:[c.jsx("div",{style:{fontSize:"1.05rem",fontWeight:800,color:Ye?"var(--accent-emerald)":"var(--accent-rose)"},children:Ye?"🎯 Resposta Correta! (+10 XP)":"❌ Você errou! (Re-inserida na fila de reforço)"}),c.jsxs("div",{style:{fontSize:"0.85rem",color:"var(--text-secondary)",marginTop:"0.2rem"},children:['"',R.en,'" = ',c.jsxs("strong",{children:['"',R.pt,'"']})]})]}),c.jsxs("button",{className:"btn btn-primary",onClick:ks,style:{padding:"0.7rem 1.6rem",fontSize:"0.95rem",fontWeight:800},children:["Próxima Palavra ",c.jsx(Os,{size:16})]})]})]}),z&&c.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0, 0, 0, 0.85)",backdropFilter:"blur(16px)",zIndex:1100,display:"flex",alignItems:"center",justifyContent:"center",padding:"1.5rem"},children:c.jsxs("div",{style:{background:"var(--bg-card)",border:"2px solid var(--accent-emerald)",borderRadius:"var(--radius-xl)",padding:"2.5rem 2rem",maxWidth:"520px",width:"100%",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",gap:"1.25rem",boxShadow:"0 0 50px rgba(16, 185, 129, 0.4)"},children:[c.jsx("div",{style:{width:"75px",height:"75px",borderRadius:"50%",background:"linear-gradient(135deg, #10b981 0%, #0284c7 100%)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",boxShadow:"0 0 35px rgba(16, 185, 129, 0.6)"},children:c.jsx(Sn,{size:40})}),c.jsxs("h2",{style:{fontSize:"1.8rem",fontWeight:800,color:"#fff"},children:["🎉 BLOCO ",z.completedBlock.num," CONCLUÍDO!"]}),c.jsxs("p",{style:{color:"var(--text-secondary)",fontSize:"0.95rem",lineHeight:1.6},children:["Parabéns! Você memorizou e dominou todas as ",c.jsxs("strong",{children:[z.completedBlock.wordsCount," palavras"]})," deste bloco!"]}),c.jsxs("div",{style:{background:"rgba(16, 185, 129, 0.15)",border:"1px solid var(--accent-emerald)",borderRadius:"var(--radius-md)",padding:"1rem",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"0.5rem",color:"var(--accent-emerald)",fontWeight:800,fontSize:"1rem"},children:[c.jsx(Ms,{size:20})," Bloco ",z.nextBlockNum," Desbloqueado!"]}),c.jsxs("div",{style:{display:"flex",gap:"0.75rem",width:"100%",flexWrap:"wrap"},children:[c.jsxs("button",{className:"btn btn-emerald",onClick:vo,style:{flex:1,padding:"0.85rem",fontSize:"1rem"},children:["Avançar para o Bloco ",z.nextBlockNum," ",c.jsx(Os,{size:18})]}),c.jsx("button",{className:"btn btn-secondary",onClick:()=>{G(null),e("map")},style:{padding:"0.85rem",fontSize:"0.9rem"},children:"Ver Mapa de Fases"})]})]})})]})}function $h(){const[n,e]=E.useState("game"),[t,s]=E.useState(!1),[i,r]=E.useState(()=>{const a=localStorage.getItem("english_immersion_progress");return a?JSON.parse(a):{currentDay:1,completedDays:0,totalHours:0,streak:1,todayTasks:{game_practice:!0,ai_speaking:!1}}});E.useEffect(()=>{Gt(),s(!0);const a=Vh(l=>{if(l.english_immersion_progress)try{r(JSON.parse(l.english_immersion_progress))}catch{}s(!0)});return()=>{a&&a()}},[]),E.useEffect(()=>{localStorage.setItem("english_immersion_progress",JSON.stringify(i)),Gt()},[i]);const o=a=>{r(l=>({...l,todayTasks:{...l.todayTasks,[a]:!l.todayTasks[a]}}))};return c.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column"},children:[c.jsx("header",{className:"app-header",children:c.jsxs("div",{className:"header-container",children:[c.jsxs("div",{className:"logo-group",children:[c.jsx("div",{className:"logo-icon",children:c.jsx(Di,{size:20})}),c.jsxs("div",{children:[c.jsx("h1",{className:"brand-title",children:"English Immersion OS"}),c.jsx("span",{className:"brand-subtitle",children:"Firebase Realtime Cloud • PC ↔ Celular"})]})]}),c.jsxs("nav",{className:"nav-tabs desktop-nav-tabs",children:[c.jsxs("button",{className:`tab-btn ${n==="game"?"active":""}`,onClick:()=>e("game"),style:{color:n==="game"?"var(--accent-amber)":"var(--text-secondary)",background:n==="game"?"rgba(251, 191, 36, 0.15)":"transparent",border:n==="game"?"1px solid rgba(251, 191, 36, 0.3)":"none"},children:[c.jsx(bn,{size:16})," 🎮 1. Game de Escuta & Palavras"]}),c.jsxs("button",{className:`tab-btn ${n==="ai"?"active":""}`,onClick:()=>e("ai"),children:[c.jsx(Cn,{size:16})," 🤖 2. Tutor de IA (Voz)"]}),c.jsxs("button",{className:`tab-btn ${n==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),children:[c.jsx(js,{size:16})," 📊 3. Meu Progresso"]})]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.65rem"},children:[c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.35rem",fontSize:"0.75rem",color:t?"var(--accent-emerald)":"var(--text-muted)",background:"rgba(16, 185, 129, 0.12)",padding:"0.25rem 0.6rem",borderRadius:"var(--radius-sm)",border:"1px solid rgba(16, 185, 129, 0.3)"},title:"Conectado ao Firebase Realtime Database",children:[c.jsx(vn,{size:13,color:"var(--accent-emerald)"})," Nuvem Conectada"]}),c.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.3rem"},className:"mobile-streak-pill",children:[c.jsx(Pi,{size:16,color:"var(--accent-amber)"}),c.jsxs("span",{style:{fontSize:"0.85rem",fontWeight:800,color:"var(--accent-amber)"},children:[i.streak,"d"]})]})]})]})}),c.jsxs("main",{className:"main-content",children:[n==="game"&&c.jsx(Hh,{}),n==="ai"&&c.jsx(Vo,{}),n==="dashboard"&&c.jsx(Bo,{progressData:i,toggleTask:o,setTab:e})]}),c.jsxs("nav",{className:"mobile-bottom-nav",children:[c.jsxs("button",{className:`mobile-nav-item ${n==="game"?"active-game":""}`,onClick:()=>e("game"),children:[c.jsx(bn,{size:20,color:n==="game"?"var(--accent-amber)":"inherit"}),c.jsx("span",{children:"Game"})]}),c.jsxs("button",{className:`mobile-nav-item ${n==="ai"?"active-ai":""}`,onClick:()=>e("ai"),children:[c.jsx(Cn,{size:20,color:n==="ai"?"var(--accent-blue)":"inherit"}),c.jsx("span",{children:"Tutor IA"})]}),c.jsxs("button",{className:`mobile-nav-item ${n==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),children:[c.jsx(js,{size:20}),c.jsx("span",{children:"Progresso"})]})]}),c.jsx("footer",{style:{textAlign:"center",padding:"1.5rem",borderTop:"1px solid var(--border-color)",color:"var(--text-muted)",fontSize:"0.85rem"},children:"English Immersion OS — Sincronização em Nuvem com Firebase Realtime Database."})]})}xo.createRoot(document.getElementById("root")).render(c.jsx(wo.StrictMode,{children:c.jsx($h,{})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/english-immersion-os/sw.js",{scope:"/english-immersion-os/"}).catch(n=>{console.warn("Service worker registration failed:",n)})});
