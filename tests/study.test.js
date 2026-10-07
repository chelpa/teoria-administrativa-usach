import {test} from 'node:test';
import assert from 'node:assert/strict';
import {sources,concepts,quiz,cases,flashcards} from '../src/data.js';
import {loadProgress,emptyProgress,toggleRead,gradeQuestion,makeAttempt,reviewConcepts,reviewCards,STORAGE_KEY} from '../src/study.js';
import {existsSync} from 'node:fs';
test('all content references resolve to an existing file and valid page',()=>{
 for(const item of [...concepts,...quiz,...cases,...cases.flatMap(c=>c.questions)]){
  assert.ok(item.refs.length>0,item.id);
  for(const r of item.refs){let s=sources.find(s=>s.id===r.id);assert.ok(s,r.id);assert.ok(existsSync(new URL('../public/fuentes/'+s.file,import.meta.url)));assert.ok(r.page>=1&&r.page<=s.pages,`${item.id} page ${r.page}`)}
 }
});
test('question bank has unambiguous valid choices and targets',()=>{assert.equal(new Set(quiz.map(q=>q.id)).size,quiz.length);for(const q of quiz){assert.equal(new Set(q.options).size,q.options.length);assert.ok(q.options[q.correct]);assert.ok(concepts.some(c=>c.id===q.concept));assert.ok(q.explanation)}});
test('grading, final score and latest-answer review work across attempts',()=>{const q=quiz[0],correct=gradeQuestion(q,q.correct),wrong=gradeQuestion(q,(q.correct+1)%4);assert.equal(correct.correct,true);assert.equal(wrong.correct,false);assert.equal(makeAttempt([correct,wrong]).score,50);let p={...emptyProgress(),attempts:[makeAttempt([wrong])]};assert.deepEqual(reviewConcepts(p),[q.concept]);p.attempts.push(makeAttempt([correct]));assert.deepEqual(reviewConcepts(p),[])});
test('known cards are excluded except concepts with unresolved quiz errors',()=>{let p=emptyProgress();p.cards=Object.fromEntries(flashcards.map(c=>[c.id,'known']));assert.equal(reviewCards(flashcards,p).length,0);p.attempts=[makeAttempt([gradeQuestion(quiz[0],-1)])];assert.equal(reviewCards(flashcards,p)[0].id,'f-'+quiz[0].concept)});
test('progress survives storage, reading toggles and corrupt data is recoverable',()=>{let p=toggleRead(emptyProgress(),'tecnica');p.answers.e1='Mi respuesta';const memory=new Map([[STORAGE_KEY,JSON.stringify(p)]]);assert.deepEqual(loadProgress({getItem:k=>memory.get(k)}),p);assert.deepEqual(toggleRead(p,'tecnica').read,[]);assert.deepEqual(loadProgress({getItem:()=>'{broken'}),emptyProgress());assert.deepEqual(loadProgress({getItem:()=>{throw Error('disabled')}}),emptyProgress())});
