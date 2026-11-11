import {words,type Word,type ThemeId,shuffle} from './vocab';
import {verbs,subjectFor} from './verbs';
import type {RecordState,PracticeEvent} from './progress';
export type Exercise={id:string;kind:'word'|'spell'|'gender'|'verb'|'sentence'|'listen'|'speak'|'read'|'grammar';target:string;prompt:string;answer:string;choices?:string[];tokens?:string[];example:string;hint:string;english:string;word?:Word;audio?:string;subject?:string};
export type GrammarPrompt={prompt:string;answer:string;choices:string[];example:string;hint:string;english:string};
export type Lesson={id:string;title:string;theme:ThemeId;emoji:string;goal:string;en:string;vocab:string[];verb:string;sentences:string[];reading:string[];speaking:string;grammar?:GrammarPrompt[];course?:string};
export const lessons:Lesson[]=[
 {id:'bonjour',title:'Bonjour, c’est moi !',theme:'greetings' as ThemeId,emoji:'👋',goal:'Je me présente et je salue.',en:'Introduce yourself and greet someone.',vocab:['bonjour','merci','oui','non','au revoir','s’il vous plaît'],verb:'etre',sentences:['Je suis à Vancouver.','Je parle français.','J’habite au Canada.'],reading:['Bonjour ! Je m’appelle Léa. J’habite à Montréal.','Où habite Léa ?','À Montréal','À Paris','À Vancouver'],speaking:'Bonjour ! Je m’appelle Jamie. J’habite à Vancouver.'},
 {id:'cafe',title:'Une pause au café',theme:'cafe' as ThemeId,emoji:'☕',goal:'Je commande une boisson.',en:'Order a drink at a café.',vocab:['un café','un thé','un croissant','une pomme','le lait','l’eau'],verb:'avoir',sentences:['Je bois un café.','Je mange une pomme.','Un thé, s’il vous plaît.'],reading:['Au café, Léa prend un thé et un croissant. Le thé coûte trois euros.','Que boit Léa ?','Un thé','Un café','Du lait'],speaking:'Bonjour ! Un café et un croissant, s’il vous plaît.'},
 {id:'maison',title:'Bienvenue chez moi',theme:'home' as ThemeId,emoji:'🏡',goal:'Je parle de ma maison.',en:'Talk about your home and family.',vocab:['une maison','un appartement','une mère','un père','une sœur','un frère'],verb:'habiter',sentences:['J’habite dans une maison.','Ma sœur parle français.','Mon père fait la cuisine.'],reading:['Paul habite dans un appartement. Il a un chat. Sa sœur habite à Paris.','Quel animal a Paul ?','Un chat','Un chien','Un oiseau'],speaking:'J’habite à Vancouver. Et toi, tu habites où ?'},
 {id:'style',title:'Mon style',theme:'clothes' as ThemeId,emoji:'👕',goal:'Je parle de mes vêtements.',en:'Talk about what you wear.',vocab:['une robe','un jean','un pull','une chemise','un sweat à capuche','un pantalon cargo'],verb:'aimer',sentences:['Je porte un pull bleu.','Ma robe est rouge.','J’aime ce pantalon.'],reading:['Aujourd’hui, Léa porte un jean bleu et une chemise blanche.','De quelle couleur est la chemise ?','Blanche','Bleue','Rouge'],speaking:'Aujourd’hui, je porte un jean et un pull. Et toi ?'},
 {id:'bouger',title:'On bouge !',theme:'activities' as ThemeId,emoji:'🧘',goal:'Je parle de mes activités.',en:'Talk about hobbies and exercise.',vocab:['faire du yoga','faire du Pilates','jouer au pickleball','faire du vélo','faire la cuisine','faire une promenade'],verb:'faire',sentences:['Je fais du yoga.','Nous faisons du vélo.','Elle joue au pickleball.'],reading:['Le mardi, Jamie fait du Pilates. Le dimanche, Jamie fait du vélo.','Que fait Jamie le mardi ?','Du Pilates','Du vélo','Du ski'],speaking:'J’aime faire du yoga. Le week-end, je fais du vélo.'},
 {id:'trajet',title:'On y va !',theme:'transport' as ThemeId,emoji:'🚲',goal:'Je dis où je vais.',en:'Say where you go and how you travel.',vocab:['le vélo','le bus','le train','la voiture','l’avion','le métro'],verb:'aller',sentences:['Je vais au travail.','Nous allons au café.','Elle prend le bus.'],reading:['Paul va au travail en bus. Sa sœur va à l’école à vélo.','Comment Paul va-t-il au travail ?','En bus','À vélo','En train'],speaking:'Je vais au café à pied. Et toi ?'},
 {id:'travail',title:'Mon travail',theme:'jobs' as ThemeId,emoji:'💻',goal:'Je parle de mon travail.',en:'Talk about work and study.',vocab:['le professeur','le médecin','le boulanger / la boulangère','le développeur / la développeuse','un barista / une barista','l’étudiant / l’étudiante'],verb:'travailler',sentences:['Je travaille à la maison.','Elle est professeure.','Nous parlons français.'],reading:['Léa est barista. Elle travaille dans un café le lundi et le mardi.','Où travaille Léa ?','Dans un café','Dans une école','Dans un hôpital'],speaking:'Je travaille à Vancouver. J’apprends le français.'},
 {id:'quotidien',title:'Une petite journée',theme:'digital' as ThemeId,emoji:'📱',goal:'Je décris mon quotidien.',en:'Describe a simple day.',vocab:['un smartphone','un ordinateur portable','un message','une application','un chargeur','un mot de passe'],verb:'boire',sentences:['Je bois du thé.','J’envoie un message.','Je parle avec mon ami.'],reading:['Le matin, Paul boit du thé. Il travaille sur son ordinateur. Le soir, il écoute de la musique.','Que boit Paul le matin ?','Du thé','Du café','Du lait'],speaking:'Le matin, je bois du thé. Le soir, j’écoute de la musique.'},
];
export function gender(w:Word):'un'|'une'|null{if(w.fr.includes(' / '))return null;if(/^(un |le )/.test(w.fr))return 'un';if(/^(une |la )/.test(w.fr))return 'une';return ({'l’eau':'une','l’avion':'un','l’hélicoptère':'un','l’écharpe':'une'} as Record<string,'un'|'une'>)[w.fr]||null;}
export const noun=(w:Word)=>w.fr.replace(/^(un |une |le |la |les |des |l’)/,'');
export function wordExercise(w:Word,mode='quiz'):Exercise{const same=words.filter(x=>x.theme===w.theme&&x.id!==w.id);return {id:crypto.randomUUID(),kind:mode==='spell'?'spell':'word',target:w.id,prompt:w.en,english:w.en,answer:w.fr,choices:shuffle([w.fr,...shuffle(same).slice(0,3).map(x=>x.fr)]),example:w.example,word:w,hint:`Le mot commence par « ${noun(w).slice(0,Math.min(noun(w).length-1,2))}… ».`};}
export function genderExercise(w:Word):Exercise{return {id:crypto.randomUUID(),kind:'gender',target:w.id,prompt:noun(w),english:w.en,answer:gender(w)!,choices:['un','une'],example:w.example,word:w,hint:gender(w)==='un'?'C’est masculin.':'C’est féminin.'};}
export function verbExercise(id:string,index:number,write=false):Exercise{const v=verbs.find(v=>v.id===id)!;return {id:crypto.randomUUID(),kind:'verb',target:id+':'+index,prompt:v.fr,subject:subjectFor(v,index),answer:v.forms[index],choices:write?undefined:shuffle([v.forms[index],...shuffle([...new Set(v.forms)].filter(f=>f!==v.forms[index])).slice(0,3)]),example:v.examples[index],english:v.en,hint:`La forme commence par « ${v.forms[index][0]}… ».`};}
export function sentenceExercise(text:string,idx:string):Exercise{const tokens=text.replace(/[.!?]$/,'').split(' ');return {id:crypto.randomUUID(),kind:'sentence',target:idx,prompt:'Remets les mots dans l’ordre.',answer:tokens.join(' '),tokens:shuffle(tokens),example:text,english:'Put the words in order.',hint:`Commence par « ${tokens.slice(0,2).join(' ')}… ».`};}
export function guided(id:string,records:Record<string,RecordState>){const l=lessons.find(x=>x.id===id)!;const set=l.vocab.map(fr=>words.find(w=>w.fr===fr)!).filter(Boolean);const review=words.filter(w=>w.theme===l.theme&&records['word:'+w.id]?.due<=Date.now()).slice(0,2);const pool=[...new Map([...review,...set].map(w=>[w.id,w])).values()].slice(0,6);const exercises:Exercise[]=[...pool.slice(0,4).map(w=>wordExercise(w)),...pool.slice(4).map(w=>wordExercise(w,'spell'))];
 exercises.push(...pool.filter(w=>gender(w)).slice(0,2).map(genderExercise));exercises.push(...shuffle([0,1,2,3,4,5]).slice(0,3).map(i=>verbExercise(l.verb,i)));exercises.push(...l.sentences.map((s,i)=>sentenceExercise(s,l.id+':'+i)));
 for(const w of pool.slice(0,2)){const q=wordExercise(w);exercises.push({...q,kind:'listen',prompt:'Écoute. Quel mot entends-tu ?',audio:w.fr,hint:`Écoute encore. Le mot commence par « ${w.fr.slice(0,5)}… ».`});}
 exercises.push(...(l.grammar||[]).map((g,i):Exercise=>({...g,id:crypto.randomUUID(),kind:'grammar',target:l.id+':grammar:'+i,choices:shuffle(g.choices)})));
 exercises.push({id:crypto.randomUUID(),kind:'read',target:l.id,prompt:l.reading[1],answer:l.reading[2],choices:shuffle(l.reading.slice(2)),example:l.reading[0],english:'Read the short text, then answer.',hint:'Lis le texte encore une fois. Cherche le mot de la question.'});
 exercises.push({id:crypto.randomUUID(),kind:'speak',target:l.id,prompt:l.speaking,answer:l.speaking,audio:l.speaking,example:l.speaking,english:l.en,hint:'Dis une petite phrase à la fois.'});return exercises;}
export function eventKind(ex:Exercise):PracticeEvent['kind']{return ex.kind==='spell'?'word':ex.kind==='read'||ex.kind==='grammar'?'sentence':ex.kind;}

// Skipped sessions remain selectable; only future suggestions move past them.
export function nextLessonAfter(current:string,completed:Set<string>,skipped:Set<string>){
 const index=lessons.findIndex(l=>l.id===current);
 const ordered=[...lessons.slice(index+1),...lessons.slice(0,index)];
 return ordered.find(l=>!completed.has(l.id)&&!skipped.has(l.id));
}

const addedLessons:Lesson[] = [
 {
  "id": "positions-chat",
  "title": "Où est le chat ?",
  "theme": "positions",
  "emoji": "🐈",
  "goal": "Je situe un animal ou un objet.",
  "en": "Describe where an animal or object is.",
  "vocab": [
   "sur",
   "sous",
   "devant",
   "derrière",
   "dans",
   "entre"
  ],
  "verb": "etre",
  "sentences": [
   "Le chat est sous la boîte.",
   "Le lapin est devant la sacoche.",
   "Le panda roux est entre les boîtes."
  ],
  "reading": [
   "Le chat est dans la boîte. Le lapin est devant la boîte.",
   "Où est le chat ?",
   "Dans la boîte",
   "Devant la boîte",
   "Sous la boîte"
  ],
  "speaking": "Le chat est dans la boîte. Le lapin est devant la boîte.",
  "grammar": [
   {
    "prompt": "Entre : combien de boîtes ?",
    "answer": "Deux boîtes",
    "choices": [
     "Deux boîtes",
     "Une seule boîte",
     "Aucune boîte"
    ],
    "example": "Le chat est entre les deux boîtes.",
    "hint": "Cherche ce qui est de chaque côté du chat.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "Le cours commence à huit heures. Je mange ___ le cours.",
    "answer": "avant",
    "choices": [
     "avant",
     "devant",
     "derrière"
    ],
    "example": "Je mange avant le cours.",
    "hint": "Avant parle du temps ; devant parle de la position.",
    "english": "Choose the missing word or expression."
   }
  ],
  "course": "2026-11-09"
 },
 {
  "id": "positions-autour",
  "title": "À côté, à gauche, à droite",
  "theme": "positions",
  "emoji": "📍",
  "goal": "Je dis où se trouve un objet.",
  "en": "Describe where something is located.",
  "vocab": [
   "à côté de",
   "au-dessus de",
   "en dessous de",
   "à gauche de",
   "à droite de",
   "une boîte"
  ],
  "verb": "se-trouver",
  "sentences": [
   "Le chien se trouve à côté du chat.",
   "La lampe est au-dessus de la table.",
   "Le chat se trouve à droite de la boîte."
  ],
  "reading": [
   "La boîte est à gauche du lit. Le chat se trouve à droite du lit.",
   "Où se trouve le chat ?",
   "À droite du lit",
   "À gauche du lit",
   "Sous le lit"
  ],
  "speaking": "Le chat se trouve à côté de la boîte.",
  "grammar": [
   {
    "prompt": "Le chien est à côté ___ chat.",
    "answer": "du",
    "choices": [
     "du",
     "de la",
     "de l’",
     "des"
    ],
    "example": "Le chien est à côté du chat.",
    "hint": "Chat est masculin : de + le.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "Le chien est à côté ___ niche.",
    "answer": "de la",
    "choices": [
     "de la",
     "du",
     "de l’",
     "des"
    ],
    "example": "Le chien est à côté de la niche.",
    "hint": "Niche est féminin : garde de + la.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "Le chien est à côté ___ arbre.",
    "answer": "de l’",
    "choices": [
     "de l’",
     "du",
     "de la",
     "des"
    ],
    "example": "Le chien est à côté de l’arbre.",
    "hint": "Arbre commence par une voyelle.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "Le chat est à côté ___ boîtes.",
    "answer": "des",
    "choices": [
     "des",
     "du",
     "de la",
     "de l’"
    ],
    "example": "Le chat est à côté des boîtes.",
    "hint": "Au pluriel : de + les.",
    "english": "Choose the missing word or expression."
   }
  ],
  "course": "2026-11-09"
 },
 {
  "id": "chambre-objets",
  "title": "Dans ma chambre",
  "theme": "bedroom",
  "emoji": "🛏️",
  "goal": "Je décris ma chambre.",
  "en": "Name bedroom objects and describe their positions.",
  "vocab": [
   "un lit",
   "une couette",
   "un oreiller",
   "une lampe",
   "une commode",
   "une table de nuit"
  ],
  "verb": "se-trouver",
  "sentences": [
   "Dans ma chambre, il y a un lit.",
   "Le miroir est au-dessus de la commode.",
   "La lampe se trouve sur la table de nuit."
  ],
  "reading": [
   "Dans ma chambre, il y a un lit et une commode. Le miroir est au-dessus de la commode.",
   "Où est le miroir ?",
   "Au-dessus de la commode",
   "Sous le lit",
   "Dans la couette"
  ],
  "speaking": "Dans ma chambre, il y a un lit. La lampe est à côté du lit.",
  "grammar": [
   {
    "prompt": "Un tableau → deux ___.",
    "answer": "tableaux",
    "choices": [
     "tableaux",
     "tableaus",
     "tableau"
    ],
    "example": "Il y a deux tableaux dans ma chambre.",
    "hint": "La fin -eau prend -x au pluriel.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "Dans ma chambre, ___ un lit.",
    "answer": "il y a",
    "choices": [
     "il y a",
     "il est",
     "il a"
    ],
    "example": "Dans ma chambre, il y a un lit.",
    "hint": "Pour dire « there is », utilise il…",
    "english": "Choose the missing word or expression."
   }
  ],
  "course": "2026-11-09"
 },
 {
  "id": "salon-objets",
  "title": "Dans mon salon",
  "theme": "livingroom",
  "emoji": "🛋️",
  "goal": "Je décris mon salon.",
  "en": "Describe the living room and its furniture.",
  "vocab": [
   "un canapé",
   "un fauteuil",
   "une table basse",
   "une étagère",
   "un coussin",
   "une couverture"
  ],
  "verb": "avoir",
  "sentences": [
   "Dans mon salon, il y a un canapé.",
   "Le coussin est sur le fauteuil.",
   "La table basse est devant le canapé."
  ],
  "reading": [
   "Dans le salon, il y a un canapé et une table basse. La couverture est sur le canapé.",
   "Où est la couverture ?",
   "Sur le canapé",
   "Sous la table",
   "Dans le placard"
  ],
  "speaking": "Dans mon salon, il y a un canapé. La table basse est devant le canapé.",
  "grammar": [
   {
    "prompt": "Un store → deux ___.",
    "answer": "stores",
    "choices": [
     "stores",
     "storex",
     "store"
    ],
    "example": "Il y a deux stores dans le salon.",
    "hint": "Pour store, ajoute simplement -s.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "Le livre est à côté ___ fauteuil.",
    "answer": "du",
    "choices": [
     "du",
     "de la",
     "de l’",
     "des"
    ],
    "example": "Le livre est à côté du fauteuil.",
    "hint": "Fauteuil est masculin : de + le.",
    "english": "Choose the missing word or expression."
   }
  ],
  "course": "2026-11-09"
 },
 {
  "id": "cuisine-objets",
  "title": "Dans ma cuisine",
  "theme": "kitchen",
  "emoji": "🍳",
  "goal": "Je décris ma cuisine.",
  "en": "Name kitchen objects and describe what is there.",
  "vocab": [
   "un frigo",
   "un congélateur",
   "un micro-ondes",
   "un évier",
   "un four",
   "une théière"
  ],
  "verb": "etre",
  "sentences": [
   "Dans ma cuisine, il y a un frigo.",
   "L’évier est sous la fenêtre.",
   "Il n’y a pas de canapé dans ma cuisine."
  ],
  "reading": [
   "Dans la cuisine, le four est à côté du frigo. La théière est sur la table.",
   "Où est la théière ?",
   "Sur la table",
   "Dans le four",
   "Sous le frigo"
  ],
  "speaking": "Dans ma cuisine, il y a un frigo. L’évier est sous la fenêtre.",
  "grammar": [
   {
    "prompt": "Un rideau → deux ___.",
    "answer": "rideaux",
    "choices": [
     "rideaux",
     "rideaus",
     "rideau"
    ],
    "example": "Il y a deux rideaux dans ma cuisine.",
    "hint": "La fin -eau prend -x. Ce n’est pas une règle pour tous les mots en -n.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "Il n’y a pas ___ canapé dans la cuisine.",
    "answer": "de",
    "choices": [
     "de",
     "un",
     "du",
     "des"
    ],
    "example": "Il n’y a pas de canapé dans la cuisine.",
    "hint": "Après il n’y a pas, utilise de devant canapé.",
    "english": "Choose the missing word or expression."
   }
  ],
  "course": "2026-11-09"
 },
 {
  "id": "bains-objets",
  "title": "Dans ma salle de bains",
  "theme": "bathroom",
  "emoji": "🛁",
  "goal": "Je décris ma salle de bains.",
  "en": "Describe bathroom objects and their positions.",
  "vocab": [
   "une douche",
   "une baignoire",
   "un lavabo",
   "un robinet",
   "une serviette de bain",
   "une porte"
  ],
  "verb": "se-trouver",
  "sentences": [
   "Le miroir se trouve au-dessus du lavabo.",
   "La serviette est sur l’étagère.",
   "La baignoire est à côté de la douche."
  ],
  "reading": [
   "Dans la salle de bains, le miroir est au-dessus du lavabo. La porte est à droite de la douche.",
   "Où est le miroir ?",
   "Au-dessus du lavabo",
   "Sous la baignoire",
   "Devant la porte"
  ],
  "speaking": "Dans ma salle de bains, il y a une douche et un lavabo.",
  "grammar": [
   {
    "prompt": "La serviette est à côté ___ douche.",
    "answer": "de la",
    "choices": [
     "de la",
     "du",
     "de l’",
     "des"
    ],
    "example": "La serviette est à côté de la douche.",
    "hint": "Douche est féminin : de + la.",
    "english": "Choose the missing word or expression."
   }
  ],
  "course": "2026-11-09"
 },
 {
  "id": "nombres-quotidien",
  "title": "Les nombres au quotidien",
  "theme": "numbers",
  "emoji": "🔢",
  "goal": "Je reconnais les nombres et les prix.",
  "en": "Practise numbers, prices and hundreds.",
  "vocab": [
   "zéro",
   "dix",
   "vingt",
   "trente",
   "cent",
   "deux cents"
  ],
  "verb": "avoir",
  "sentences": [
   "J’ai vingt ans.",
   "Le café coûte trois euros.",
   "Il y a cent livres."
  ],
  "reading": [
   "Un café coûte trois euros. Un thé coûte deux euros.",
   "Combien coûte le café ?",
   "Trois euros",
   "Deux euros",
   "Dix euros"
  ],
  "speaking": "J’ai deux livres et trois stylos.",
  "grammar": [
   {
    "prompt": "80",
    "answer": "quatre-vingts",
    "choices": [
     "quatre-vingts",
     "quatre-vingt-un",
     "soixante-dix"
    ],
    "example": "Le nombre est quatre-vingts.",
    "hint": "À 80 exactement, vingt prend -s.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "81",
    "answer": "quatre-vingt-un",
    "choices": [
     "quatre-vingt-un",
     "quatre-vingts",
     "soixante et onze"
    ],
    "example": "Le nombre est quatre-vingt-un.",
    "hint": "Après 80, ajoute un sans et.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "200 livres",
    "answer": "deux cents livres",
    "choices": [
     "deux cents livres",
     "deux cent livres",
     "deux cent un livres"
    ],
    "example": "Il y a deux cents livres.",
    "hint": "Cent prend -s quand il est multiplié et ne précède pas un autre nombre.",
    "english": "Choose the missing word or expression."
   }
  ]
 },
 {
  "id": "jours-semaine",
  "title": "Ma semaine",
  "theme": "calendar",
  "emoji": "📅",
  "goal": "Je parle des jours de la semaine.",
  "en": "Practise weekdays and recurring activities.",
  "vocab": [
   "lundi",
   "mardi",
   "mercredi",
   "jeudi",
   "vendredi",
   "samedi"
  ],
  "verb": "s-appeler",
  "sentences": [
   "Le mardi, je fais du Pilates.",
   "Le dimanche, je parle français.",
   "Aujourd’hui, c’est lundi."
  ],
  "reading": [
   "Jamie fait du yoga le vendredi. Le dimanche, Jamie va au cours de français.",
   "Quel jour Jamie fait du yoga ?",
   "Le vendredi",
   "Le dimanche",
   "Le mardi"
  ],
  "speaking": "Le mardi, je fais du Pilates. Le dimanche, je parle français.",
  "grammar": [
   {
    "prompt": "Le jour après samedi, c’est ___.",
    "answer": "dimanche",
    "choices": [
     "dimanche",
     "vendredi",
     "lundi"
    ],
    "example": "Après samedi, c’est dimanche.",
    "hint": "C’est le dernier jour de la semaine dans ce calendrier.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "Pour une habitude chaque lundi :",
    "answer": "Le lundi, je travaille.",
    "choices": [
     "Le lundi, je travaille.",
     "En lundi, je travaille.",
     "À lundi, je travaille."
    ],
    "example": "Le lundi, je travaille.",
    "hint": "Le + jour exprime ici une habitude.",
    "english": "Choose the missing word or expression."
   }
  ]
 },
 {
  "id": "dates-calendrier",
  "title": "Une date dans mon calendrier",
  "theme": "calendar",
  "emoji": "🗓️",
  "goal": "Je dis une date et mon anniversaire.",
  "en": "Practise months, dates and birthdays.",
  "vocab": [
   "janvier",
   "avril",
   "mai",
   "août",
   "novembre",
   "décembre"
  ],
  "verb": "etre",
  "sentences": [
   "Mon anniversaire est le premier mai.",
   "Nous sommes en novembre.",
   "Le cours commence le deux novembre."
  ],
  "reading": [
   "L’anniversaire de Léa est le premier mai. L’anniversaire de Paul est le quinze août.",
   "Quand est l’anniversaire de Léa ?",
   "Le premier mai",
   "Le quinze août",
   "Le deux novembre"
  ],
  "speaking": "Mon anniversaire est le premier mai. Et toi ?",
  "grammar": [
   {
    "prompt": "1 mai : comment dit-on cette date ?",
    "answer": "le premier mai",
    "choices": [
     "le premier mai",
     "le un mai",
     "le première mai"
    ],
    "example": "Mon anniversaire est le premier mai.",
    "hint": "Pour le jour 1, utilise premier.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "2 novembre : comment dit-on cette date ?",
    "answer": "le deux novembre",
    "choices": [
     "le deux novembre",
     "le deuxième novembre",
     "le novembre deux"
    ],
    "example": "Le cours commence le deux novembre.",
    "hint": "Après le premier, utilise les nombres habituels.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "Le mois après novembre, c’est ___.",
    "answer": "décembre",
    "choices": [
     "décembre",
     "octobre",
     "janvier"
    ],
    "example": "Après novembre, c’est décembre.",
    "hint": "C’est le douzième mois.",
    "english": "Choose the missing word or expression."
   }
  ]
 },
 {
  "id": "heures-rendezvous",
  "title": "Quelle heure est-il ?",
  "theme": "time",
  "emoji": "🕒",
  "goal": "Je dis l’heure et l’heure d’un rendez-vous.",
  "en": "Practise clock times, half past and quarter to.",
  "vocab": [
   "huit heures",
   "huit heures et quart",
   "huit heures et demie",
   "neuf heures moins le quart",
   "midi",
   "dix-sept heures trente"
  ],
  "verb": "avoir",
  "sentences": [
   "Il est huit heures et demie.",
   "Le cours commence à dix-sept heures trente.",
   "Je mange à midi."
  ],
  "reading": [
   "Le cours commence à dix-sept heures trente. Jamie arrive à l’heure.",
   "À quelle heure commence le cours ?",
   "À dix-sept heures trente",
   "À midi",
   "À huit heures"
  ],
  "speaking": "Mon cours commence à dix-sept heures trente.",
  "grammar": [
   {
    "prompt": "08:30",
    "answer": "huit heures et demie",
    "choices": [
     "huit heures et demie",
     "huit heures et quart",
     "neuf heures moins le quart"
    ],
    "example": "Il est huit heures et demie.",
    "hint": "Trente minutes après huit heures.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "08:45",
    "answer": "neuf heures moins le quart",
    "choices": [
     "neuf heures moins le quart",
     "huit heures et quart",
     "neuf heures et quart"
    ],
    "example": "Il est neuf heures moins le quart.",
    "hint": "Il reste quinze minutes avant neuf heures.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "12:30",
    "answer": "midi et demi",
    "choices": [
     "midi et demi",
     "midi et demie",
     "minuit et demie"
    ],
    "example": "Il est midi et demi.",
    "hint": "Après midi et minuit, demi reste sans -e.",
    "english": "Choose the missing word or expression."
   },
   {
    "prompt": "Le cours commence ___ dix-sept heures trente.",
    "answer": "à",
    "choices": [
     "à",
     "en",
     "le"
    ],
    "example": "Le cours commence à dix-sept heures trente.",
    "hint": "Pour l’heure d’un rendez-vous, utilise à.",
    "english": "Choose the missing word or expression."
   }
  ]
 }
];
lessons.push(...addedLessons);
