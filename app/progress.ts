export type PracticeEvent={id:string;kind:'word'|'gender'|'verb'|'sentence'|'listen'|'speak'|'lesson'|'round'|'skip';target:string;grade:0|1|2;at:number};
export type RecordState={attempts:number;correct:number;last:number;grade:number;streak:number;due:number};
export function summarise(events:PracticeEvent[]){
 const records:Record<string,RecordState>={},lessons=new Set<string>(),skippedLessons=new Set<string>(),stickers=new Set<string>();let xp=0;
 for(const e of [...events].sort((a,b)=>a.at-b.at||a.id.localeCompare(b.id))){
  if(e.kind==='skip'){skippedLessons.add(e.target);continue;}if(e.kind==='lesson'){lessons.add(e.target);continue;}if(e.kind==='round'){stickers.add(e.target);continue;}
  xp+=e.kind==='speak'?2:e.grade===2?10:e.grade===1?6:2;
  const key=e.kind+':'+e.target,old=records[key],streak=e.grade===2?(old?.grade===2&&e.at-old.last<72000000?old.streak:(old?.streak||0)+1):0;
  records[key]={attempts:(old?.attempts||0)+1,correct:(old?.correct||0)+(e.grade===2?1:0),last:e.at,grade:e.grade,streak,due:e.at+(e.grade===0?0:e.grade===1?3600000:[1,3,7,14,30][Math.min(streak-1,4)]*86400000)};
 }
 return {records,lessons,skippedLessons,stickers,xp};
}
export function mergeEvents(...lists:PracticeEvent[][]){const map=new Map<string,PracticeEvent>();for(const list of lists)for(const e of list)map.set(e.id,e);return [...map.values()].sort((a,b)=>a.at-b.at||a.id.localeCompare(b.id));}
