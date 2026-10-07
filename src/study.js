export const STORAGE_KEY='usach-teoria-v1';
export const emptyProgress=()=>({version:1,read:[],cards:{},attempts:[],answers:{},mode:'study'});
export function normalizeProgress(value){
 const d=emptyProgress(); if(!value||value.version!==1)return d;
 return {...d,read:Array.isArray(value.read)?value.read.filter(x=>typeof x==='string'):[],cards:value.cards&&typeof value.cards==='object'?Object.fromEntries(Object.entries(value.cards).filter(([,v])=>['known','review'].includes(v))):{},attempts:Array.isArray(value.attempts)?value.attempts.filter(a=>a&&Array.isArray(a.results)&&Number.isFinite(a.score)):[],answers:value.answers&&typeof value.answers==='object'?Object.fromEntries(Object.entries(value.answers).filter(([,v])=>typeof v==='string')):{},mode:value.mode==='review'?'review':'study'};
}
export function loadProgress(storage){try{return normalizeProgress(JSON.parse(storage.getItem(STORAGE_KEY)))}catch{return emptyProgress()}}
export const toggleRead=(p,id)=>({...p,read:p.read.includes(id)?p.read.filter(x=>x!==id):[...p.read,id]});
export function gradeQuestion(q,choice){return {id:q.id,concept:q.concept,chapter:q.chapter,choice,correct:choice===q.correct}}
export function makeAttempt(results){return {date:new Date().toISOString(),results,score:Math.round(results.filter(r=>r.correct).length/results.length*100)}}
export function reviewConcepts(p){const latest=new Map(); for(const attempt of p.attempts)for(const r of attempt.results)latest.set(r.concept,r.correct);return [...latest].filter(([,v])=>!v).map(([id])=>id)}
export function reviewCards(cards,p){const wrong=new Set(reviewConcepts(p));return cards.filter(c=>p.cards[c.id]!=='known'||wrong.has(c.id.replace('f-','')))}
export const matchText=(a,b)=>a.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().includes(b.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase());
