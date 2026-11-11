// Code-native illustrations make spatial relations and clock times precise.
function Cat({x,y,scale=1}:{x:number;y:number;scale?:number}){return <g transform={`translate(${x} ${y}) scale(${scale})`}><path d="M-20 6 L-23-15 L-8-7 Q0-11 8-7 L23-15 L20 6 Q24 27 0 30 Q-24 27-20 6" fill="#d68d55" stroke="#654d3e" strokeWidth="2.5"/><path d="M-18-10 L-15 0 L-9-5 M18-10 L15 0 L9-5" fill="#eab7ae"/><ellipse cx="0" cy="19" rx="12" ry="9" fill="#f8e4c7"/><circle cx="-9" cy="10" r="2" fill="#29312d"/><circle cx="9" cy="10" r="2" fill="#29312d"/><path d="M-3 17 L3 17 L0 20 Z" fill="#654d3e"/><path d="M0 20v4m-3 0q3 3 6 0" fill="none" stroke="#654d3e" strokeWidth="1.4"/></g>}
function Box({x,y,w=78,h=58}:{x:number;y:number;w?:number;h?:number}){return <g><rect x={x} y={y} width={w} height={h} rx="5" fill="#e5ba78" stroke="#84643c" strokeWidth="2.5"/><path d={`M${x} ${y+10}h${w}M${x+w/2} ${y}v${h}`} fill="none" stroke="#b48b51" strokeWidth="2"/><path d={`M${x+w/2-8} ${y+1}h16v18h-16z`} fill="#f6ddb0"/></g>}
export function PositionScene({relation,label}:{relation:string;label:string}){
 let content;
 switch(relation){
 case 'between':content=<><Box x={24} y={116} w={76}/><Box x={220} y={116} w={76}/><Cat x={160} y={142}/></>;break;
 case 'left':case 'next':content=<><Box x={177} y={114}/><Cat x={106} y={142}/></>;break;
 case 'right':content=<><Box x={65} y={114}/><Cat x={214} y={142}/></>;break;
 case 'above':content=<><Box x={121} y={140}/><Cat x={160} y={55}/><path d="M160 99v23" stroke="#9ca790" strokeDasharray="4 5"/></>;break;
 case 'on':content=<><Box x={121} y={118}/><Cat x={160} y={88}/></>;break;
 case 'under':case 'below':content=<><Box x={121} y={48}/><Cat x={160} y={154}/></>;break;
 case 'front':content=<><Box x={121} y={112}/><Cat x={160} y={151}/></>;break;
 case 'behind':content=<><Cat x={160} y={100}/><Box x={121} y={112}/></>;break;
 case 'inside':content=<><path d="M115 112l-24-18h85l24 18" fill="#cba366" stroke="#84643c" strokeWidth="2"/><Cat x={160} y={104}/><Box x={121} y={122}/></>;break;
 default:return null;
 }
 return <svg className="position-scene" viewBox="0 0 320 220" role="img" aria-label={`The cat: ${label}`}><rect x="2" y="2" width="316" height="216" rx="32" fill="#eef0e2"/><ellipse cx="160" cy="198" rx="122" ry="8" fill="#dce0ce"/>{content}</svg>;
}
export function ClockVisual({time}:{time:[number,number]}){const [h,m]=time,minute=m*6,hour=(h%12)*30+m/2;return <svg className="clock-visual" viewBox="0 0 200 230" role="img" aria-label={`${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}`}><circle cx="100" cy="96" r="87" fill="#fffdf5" stroke="#355744" strokeWidth="4"/>{Array.from({length:12},(_,i)=><g key={i} transform={`rotate(${i*30} 100 96)`}><path d="M100 16v8" stroke="#9ca790" strokeWidth="2"/></g>)}{[12,3,6,9].map((n,i)=><text key={n} x={[100,169,100,31][i]} y={[40,102,167,102][i]} textAnchor="middle" fontSize="18" fill="#355744">{n}</text>)}<path d="M100 96V49" transform={`rotate(${hour} 100 96)`} stroke="#355744" strokeWidth="7" strokeLinecap="round"/><path d="M100 96V30" transform={`rotate(${minute} 100 96)`} stroke="#b84c38" strokeWidth="4" strokeLinecap="round"/><circle cx="100" cy="96" r="6" fill="#355744"/><text x="100" y="215" textAnchor="middle" fontSize="21" fill="#355744">{String(h).padStart(2,'0')}:{String(m).padStart(2,'0')}</text></svg>;}
