import {getChatGPTUser} from '../../chatgpt-auth';
import {getDb} from '../../../db';
import {practiceEvents} from '../../../db/schema';
import {eq} from 'drizzle-orm';
import {z} from 'zod';
export const dynamic='force-dynamic';
const eventSchema=z.object({id:z.string().uuid(),kind:z.enum(['word','gender','verb','sentence','listen','speak','lesson','round','skip']),target:z.string().min(1).max(180),grade:z.union([z.literal(0),z.literal(1),z.literal(2)]),at:z.number().int().min(0).max(4102444800000)}).strict();
const response=(body:unknown,status=200)=>Response.json(body,{status,headers:{'Cache-Control':'no-store'}});
export async function GET(){const user=await getChatGPTUser();if(!user)return response({error:'sign_in_required'},401);try{const rows=await getDb().select({id:practiceEvents.id,kind:practiceEvents.kind,target:practiceEvents.target,grade:practiceEvents.grade,at:practiceEvents.at}).from(practiceEvents).where(eq(practiceEvents.userId,user.userId));return response({userId:user.userId,events:rows});}catch{return response({error:'temporarily_unavailable'},503);}}
export async function POST(request:Request){
 const user=await getChatGPTUser();if(!user)return response({error:'sign_in_required'},401);
 const origin=request.headers.get('origin');if(origin&&origin!==new URL(request.url).origin)return response({error:'invalid_origin'},403);
 if(Number(request.headers.get('content-length')||0)>60000)return response({error:'too_large'},413);
 let body;try{const raw=await request.text();if(raw.length>60000)return response({error:'too_large'},413);body=z.object({events:z.array(eventSchema).min(1).max(100)}).strict().parse(JSON.parse(raw));}catch{return response({error:'invalid_events'},400);}
 try{await getDb().insert(practiceEvents).values(body.events.map(e=>({...e,userId:user.userId}))).onConflictDoNothing();return response({accepted:body.events.map(e=>e.id)});}catch{return response({error:'temporarily_unavailable'},503);}
}
