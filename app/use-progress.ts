'use client';
import {useState,useEffect,useRef,useCallback} from 'react';
import {mergeEvents,summarise,type PracticeEvent} from './progress';
export function useProgress(){
 const [events,setEvents]=useState<PracticeEvent[]>([]),[status,setStatus]=useState<'loading'|'synced'|'saving'|'offline'|'signin'>('loading');
 const account=useRef<string|null>(null),pending=useRef<PracticeEvent[]>([]),all=useRef<PracticeEvent[]>([]),busy=useRef(false),storageProblem=useRef(false);
 const persist=()=>{if(account.current)try{localStorage.setItem('petit-mot-v2:'+account.current,JSON.stringify({events:all.current,pending:pending.current}));}catch{storageProblem.current=true;}};
 const sync=useCallback(async()=>{
  if(busy.current)return;busy.current=true;
  try{
   const response=await fetch('/api/progress',{cache:'no-store'});if(response.status===401){setStatus('signin');return;}if(!response.ok)throw Error();const data=await response.json() as {userId:string;events:PracticeEvent[]};
   if(!account.current){account.current=data.userId;try{const cache=JSON.parse(localStorage.getItem('petit-mot-v2:'+data.userId)||'null');if(cache){all.current=mergeEvents(cache.events||[],all.current);pending.current=mergeEvents(cache.pending||[],pending.current);}}catch{storageProblem.current=true;}}
   if(account.current!==data.userId){account.current=data.userId;all.current=[];pending.current=[];}
   all.current=mergeEvents(data.events,all.current);setEvents(all.current);persist();
   while(pending.current.length){setStatus('saving');const batch=pending.current.slice(0,100);const saved=await fetch('/api/progress',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({events:batch})});if(!saved.ok)throw Error();const ids=new Set(batch.map(e=>e.id));pending.current=pending.current.filter(e=>!ids.has(e.id));persist();}
   setStatus('synced');
  }catch{setStatus('offline');persist();}finally{busy.current=false;}
 },[]);
 useEffect(()=>{void sync();const focus=()=>void sync(),timer=setInterval(focus,30000);window.addEventListener('focus',focus);window.addEventListener('online',focus);return()=>{clearInterval(timer);window.removeEventListener('focus',focus);window.removeEventListener('online',focus);};},[sync]);
 function record(kind:PracticeEvent['kind'],target:string,grade:0|1|2){const event:PracticeEvent={id:crypto.randomUUID(),kind,target,grade,at:Date.now()};all.current=mergeEvents(all.current,[event]);pending.current.push(event);setEvents(all.current);persist();setStatus(account.current?'saving':'signin');void sync();}
 return {events,stats:summarise(events),status,record,sync,storageProblem:storageProblem.current};
}
