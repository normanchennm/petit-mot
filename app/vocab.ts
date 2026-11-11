export type ThemeId = 'clothes' | 'activities' | 'jobs' | 'transport' | 'accessories' | 'colours' | 'fabrics' | 'numbers' | 'digital' | 'cafe' | 'home' | 'greetings' | 'positions' | 'bedroom' | 'livingroom' | 'kitchen' | 'bathroom' | 'calendar' | 'time';
export type Word = { id: string; theme: ThemeId; fr: string; en: string; emoji: string; example: string; extra: boolean; aliases?: string[]; swatch?: string; plural?:string; scene?:string; clock?:[number,number]; course?:string };
export const themes: { id: ThemeId; title: string; french: string; emoji: string; colour: string; blurb: string; sticker: string }[] = [
  { id:'clothes', title:'What to wear', french:'Les vêtements', emoji:'👕', colour:'#e9a9cf', blurb:'From your favourite hoodie to wide-leg jeans.', sticker:'Style star' },
  { id:'activities', title:'Out & about', french:'Les activités', emoji:'🧘', colour:'#c7dca7', blurb:'Yoga, pickleball, little everyday adventures.', sticker:'Good energy' },
  { id:'jobs', title:'Working life', french:'Les professions', emoji:'💻', colour:'#b9b9ed', blurb:'Bakers, creators, designers & AI engineers.', sticker:'Dream job' },
  { id:'transport', title:'Let’s go', french:'Les transports', emoji:'🚲', colour:'#f8c990', blurb:'A bike ride, the metro, your next trip.', sticker:'Happy traveller' },
  { id:'accessories', title:'Little extras', french:'Les accessoires', emoji:'👜', colour:'#b7d9ea', blurb:'Tote bags, sunnies & finishing touches.', sticker:'Finishing touch' },
  { id:'colours', title:'In full colour', french:'Les couleurs', emoji:'🎨', colour:'#e9b6a6', blurb:'Every shade, from pink to sage green.', sticker:'Colour lover' },
  { id:'fabrics', title:'Feels like', french:'Les matières', emoji:'🧶', colour:'#e7d490', blurb:'Cosy wool, soft cotton & everyday fabrics.', sticker:'Cosy club' },
  { id:'numbers', title:'Make it count', french:'Les nombres', emoji:'🔢', colour:'#b8d4cb', blurb:'1–99, plus a few bigger numbers.', sticker:'Number wizard' },
  { id:'digital', title:'Digital life', french:'La vie numérique', emoji:'📱', colour:'#d6c3e9', blurb:'Texts, headphones, passwords & playlists.', sticker:'Well connected' },
];
// French | English | visual clue | simple present-tense example.
const core: Partial<Record<ThemeId, string>> = {
jobs: `une profession|a profession|💼|Quelle est ta profession ?
un acteur / une actrice|an actor|🎬|Elle est actrice.
un styliste / une styliste|a fashion stylist|👗|Il est styliste.
un chef / une cheffe|a head chef|👨‍🍳|La cheffe travaille au restaurant.
le médecin|a doctor|🩺|Le médecin aide les gens.
le chanteur / la chanteuse|a singer|🎤|La chanteuse chante.
le peintre / la peintre|a painter|🖌️|Le peintre peint un portrait.
le jardinier / la jardinière|a gardener|🪴|La jardinière aime les fleurs.
le couturier / la couturière|a tailor|🪡|La couturière fait une robe.
le sapeur-pompier|a firefighter|🚒|Le sapeur-pompier aide les gens.
le boucher / la bouchère|a butcher|🥩|Le boucher coupe la viande.
le serveur / la serveuse|a waiter|🍽️|La serveuse apporte le café.
le professeur|a teacher|🧑‍🏫|Le professeur explique la leçon.
le cuisinier / la cuisinière|a cook|🍳|Le cuisinier prépare le dîner.
le photographe / la photographe|a photographer|📷|La photographe prend des photos.
la musicienne / le musicien|a musician|🎹|La musicienne joue du piano.
l’infirmier / l’infirmière|a nurse|🏥|L’infirmière aide le médecin.
la danseuse / le danseur|a dancer|💃|La danseuse aime la musique.
le boulanger / la boulangère|a baker|🥖|Le boulanger fait du pain.
l’ingénieur / l’ingénieure|an engineer|🏗️|L’ingénieure construit un pont.
le policier / la policière|a police officer|👮|La policière aide les gens.
le vendeur / la vendeuse|a salesperson|🛍️|La vendeuse travaille ici.
le chauffeur / la chauffeure|a driver|🚌|Le chauffeur conduit le bus.
l’avocat / l’avocate|a lawyer|⚖️|L’avocate parle au juge.
l’étudiant / l’étudiante|a student|🎓|L’étudiante lit un livre.
le pilote / la pilote|a pilot|👩‍✈️|Le pilote est dans l’avion.
le journaliste / la journaliste|a journalist|📰|La journaliste écrit un article.
le facteur / la factrice|a mail carrier|📬|La factrice apporte le courrier.
le coiffeur / la coiffeuse|a hairdresser|✂️|Le coiffeur coupe les cheveux.
le fermier / la fermière|a farmer|🧑‍🌾|Le fermier travaille dehors.
l’écrivain / l’écrivaine|a writer|✍️|L’écrivaine écrit un livre.
la secrétaire / le secrétaire|a secretary|📋|La secrétaire répond au téléphone.
le plombier / la plombière|a plumber|🔧|Le plombier répare le robinet.
l’électricien / l’électricienne|an electrician|💡|L’électricienne répare la lumière.
le développeur / la développeuse|a software developer|👩‍💻|La développeuse écrit du code.
l’ingénieur logiciel / l’ingénieure logiciel|a software engineer|💻|L’ingénieur logiciel crée une application.
l’ingénieur en intelligence artificielle / l’ingénieure en intelligence artificielle|an AI engineer|🤖|L’ingénieure en intelligence artificielle travaille sur un modèle.
le data scientist / la data scientist|a data scientist|📊|Le data scientist analyse les données.
l’analyste de données|a data analyst|📈|L’analyste de données prépare un rapport.
le designer UX / la designeuse UX|a UX designer|📐|Le designer UX dessine un écran.
le chef de produit / la cheffe de produit|a product manager|🧩|La cheffe de produit parle à l’équipe.
le responsable des réseaux sociaux / la responsable des réseaux sociaux|a social media manager|📱|La responsable des réseaux sociaux publie une photo.
le créateur de contenu / la créatrice de contenu|a content creator|🎥|La créatrice de contenu filme une vidéo.
l’influenceur / l’influenceuse|an influencer|🤳|L’influenceuse partage une photo.
le spécialiste en cybersécurité / la spécialiste en cybersécurité|a cybersecurity specialist|🛡️|La spécialiste en cybersécurité protège le réseau.
le technicien en informatique / la technicienne en informatique|a computer technician|🖥️|Le technicien en informatique répare l’ordinateur.
le consultant en marketing digital / la consultante en marketing digital|a digital marketing consultant|📣|La consultante en marketing digital aide une marque.
le graphiste / la graphiste|a graphic designer|🎨|Le graphiste choisit les couleurs.
le vidéaste / la vidéaste|a videographer|📹|La vidéaste filme une vidéo.
le community manager / la community manager|an online community manager|💬|Le community manager répond aux commentaires.
le coach / la coach|a coach|🏅|La coach encourage l’équipe.
le livreur / la livreuse|a delivery driver|📦|Le livreur apporte le colis.`,
transport: `la voiture|a car|🚗|Je vais au travail en voiture.
le taxi|a taxi|🚕|Il prend un taxi.
le métro|the subway|🚇|Elle prend le métro.
le camion|a truck|🚚|Le camion est bleu.
le bus|a bus|🚌|Je prends le bus.
le camping-car|a camper van|🚐|Nous partons en camping-car.
le train|a train|🚆|Je voyage en train.
l’hélicoptère|a helicopter|🚁|L’hélicoptère est rouge.
l’avion|a plane|✈️|Je vais à Montréal en avion.
la fusée|a rocket|🚀|La fusée est grande.
le bateau|a boat|🛥️|Nous partons en bateau.
le sous-marin|a submarine|🌊|Le sous-marin est dans l’eau.
la moto|a motorbike|🏍️|Il va au travail à moto.
le vélo|a bike|🚲|Je vais au parc à vélo.
les pieds|feet|👣|Je vais à l’école à pied.`,
activities: `faire du ski|skiing|⛷️|Je fais du ski en hiver.
faire de la raquette|snowshoeing|❄️|Nous faisons de la raquette.
faire du bateau|boating|🛥️|Je fais du bateau sur le lac.
faire du cheval|horse riding|🏇|Elle fait du cheval.
faire du vélo|cycling|🚴|Je fais du vélo le dimanche.
faire de la randonnée|hiking|🥾|Je fais de la randonnée à Vancouver.
faire de la voile|sailing|⛵|Nous faisons de la voile.
faire une promenade|going for a walk|🚶|Je fais une promenade.
faire de la danse|dancing|💃|Elle fait de la danse.
faire du karaté / faire du judo|martial arts|🥋|Les enfants font du judo.
faire du sport|exercising|🏋️|Je fais du sport.
faire un match|playing a match|⚽|Nous faisons un match de foot.
faire de la natation|swimming|🏊|Tu fais de la natation.
faire du yoga|doing yoga|🧘|Je fais du yoga le matin.
faire la fête|partying|🎉|Nous faisons la fête.
faire la cuisine|cooking|🍳|Je fais la cuisine à la maison.
faire le ménage|housecleaning|🧹|Je fais le ménage.
faire la vaisselle|washing dishes|🧽|Il fait la vaisselle.
faire du café|making coffee|☕|Je fais du café.
faire des réparations|doing repairs|🔧|Elle fait des réparations.
faire la lessive|doing laundry|🧺|Je fais la lessive le samedi.
faire le lit|making the bed|🛏️|Je fais le lit.
faire de la musique|making music|🎶|Nous faisons de la musique.
faire de la lecture|reading|📖|Il fait de la lecture le soir.
faire une erreur|making a mistake|🙈|Je fais une erreur.
faire de la peinture|painting|🖌️|Elle fait de la peinture.
faire du bruit|making noise|📢|Le bus fait du bruit.
faire attention|paying attention|👀|Je fais attention.
faire des courses|grocery shopping|🛒|Je fais des courses le samedi.
faire des achats / faire du shopping|shopping|🛍️|Nous faisons des achats.`,
clothes: `une jupe|a skirt|👗|Elle porte une jupe verte.
une robe|a dress|👗|Je porte une robe bleue.
un jean|jeans|👖|Je porte un jean bleu.
un pantalon|trousers|👖|Il porte un pantalon noir.
un t-shirt|a T-shirt|👕|Je porte un t-shirt rouge.
une salopette|overalls|👖|Elle porte une salopette.
un sweat|a sweatshirt|👚|Il porte un sweat gris.
un pull|a sweater|🧶|Je porte un pull en laine.
une chemise|a shirt|👔|Il porte une chemise blanche.
un blouson|a casual jacket|🧥|Je porte un blouson noir.
une veste|a jacket or blazer|🧥|Elle porte une veste beige.
des baskets|sneakers|👟|Je porte des baskets blanches.
des bottes|boots|🥾|Elle porte des bottes noires.
des chaussures|shoes|👞|Il porte des chaussures noires.
des chaussettes|socks|🧦|Je porte des chaussettes roses.
une ceinture|a belt|👖|Ma ceinture est marron.
un chapeau|a hat|👒|Elle porte un chapeau jaune.
une casquette|a cap|🧢|Je porte une casquette bleue.`,
accessories: `les lunettes|glasses|👓|Je porte des lunettes.
le sac|a bag|🎒|Mon sac est vert.
le sac à main|a handbag|👜|Elle porte un sac à main.
la montre|a watch|⌚|Ma montre est rose.
le collier|a necklace|📿|Ce collier est beau.
les gants|gloves|🧤|Je porte des gants en hiver.
l’écharpe|a scarf|🧣|Mon écharpe est violette.
le parapluie|an umbrella|☂️|Je prends mon parapluie.`,
colours: `blanc / blanche|white|⚪|La chemise est blanche.
noir / noire|black|⚫|Le pantalon est noir.
rouge|red|🔴|La robe est rouge.
bleu / bleue|blue|🔵|Le jean est bleu.
vert / verte|green|🟢|Le sac est vert.
jaune|yellow|🟡|La casquette est jaune.
orange|orange|🟠|Le t-shirt est orange.
rose|pink|🌸|Le pull est rose.
violet / violette|purple|🟣|L’écharpe est violette.
marron|brown|🟤|Le sac est marron.
gris / grise|grey|🩶|Le sweat est gris.
beige|beige|🐚|La veste est beige.`,
fabrics: `en coton|made of cotton|☁️|Ce t-shirt est en coton.
en cuir|made of leather|👜|Ce sac est en cuir.
en laine|made of wool|🧶|Ce pull est en laine.
en plastique|made of plastic|🧴|Cette bouteille est en plastique.
en polyester|made of polyester|👕|Ce t-shirt est en polyester.
en soie|made of silk|🎀|Cette robe est en soie.`,
};
const extras: Partial<Record<ThemeId, string>> = {
clothes: `un sweat à capuche|a hoodie|🧥|Je porte un sweat à capuche.
un pantalon cargo|cargo trousers|👖|Mon pantalon cargo est vert.
un legging|leggings|🧘|Je porte un legging pour le yoga.
un crop top|a crop top|👚|Elle porte un crop top blanc.
une doudoune|a puffer jacket|🧥|Ma doudoune est chaude.
un jean large|wide-leg jeans|👖|Je porte un jean large.
un t-shirt oversize|an oversized T-shirt|👕|J’aime ce t-shirt oversize.
un pantalon de jogging|joggers|👖|Mon pantalon de jogging est gris.
une brassière de sport|a sports bra|🏃‍♀️|Je porte une brassière de sport.
un short de cycliste|bike shorts|🚴|Je porte un short de cycliste.
un gilet|a cardigan|🧶|Mon gilet est en laine.
un trench|a trench coat|🧥|Elle porte un trench beige.
des mocassins|loafers|👞|Je porte des mocassins noirs.
des bottines|ankle boots|👢|Ces bottines sont belles.`,
jobs: `un barista / une barista|a barista|☕|La barista prépare mon café.
un monteur vidéo / une monteuse vidéo|a video editor|🎞️|La monteuse vidéo travaille à la maison.
un développeur web / une développeuse web|a web developer|🌐|Le développeur web crée un site.
un développeur de jeux vidéo / une développeuse de jeux vidéo|a video game developer|🎮|Elle est développeuse de jeux vidéo.
un professeur de yoga / une professeure de yoga|a yoga teacher|🧘|Ma professeure de yoga est sympa.
un créateur de podcasts / une créatrice de podcasts|a podcast creator|🎙️|Le créateur de podcasts parle de musique.
un recruteur / une recruteuse|a recruiter|🤝|La recruteuse cherche une développeuse.
un chef de projet / une cheffe de projet|a project manager|🗓️|La cheffe de projet organise le travail.
un testeur de logiciels / une testeuse de logiciels|a software tester|🧪|La testeuse de logiciels trouve une erreur.
un livreur à vélo / une livreuse à vélo|a bicycle courier|🚴|La livreuse à vélo apporte mon repas.`,
activities: `faire du Pilates|doing Pilates|🧘‍♀️|Je fais du Pilates le mardi.
jouer au pickleball|playing pickleball|🏓|Je joue au pickleball avec mes amis.
faire de l’escalade|climbing|🧗|Elle fait de l’escalade.
faire de la musculation|weight training|🏋️|Je fais de la musculation.
courir|running|🏃|Je cours dans le parc.
écouter un podcast|listening to a podcast|🎧|J’écoute un podcast en français.
regarder une série|watching a series|📺|Je regarde une série le soir.
jouer aux jeux vidéo|playing video games|🎮|Il joue aux jeux vidéo.
prendre des photos|taking photos|📸|Je prends des photos.
faire une vidéo|making a video|🎥|Elle fait une vidéo.
télétravailler|working from home|🏠|Je télétravaille le vendredi.
faire une pause|taking a break|☕|Je fais une pause.
faire du paddle|paddleboarding|🏄|Je fais du paddle sur le lac.
faire du patin à roulettes|roller skating|🛼|Je fais du patin à roulettes.
aller au café|going to a café|☕|Je vais au café avec mes amis.
faire du yoga chaud|doing hot yoga|🧘‍♂️|Je fais du yoga chaud.`,
transport: `un vélo électrique|an electric bike|🚲⚡|Je prends mon vélo électrique.
une trottinette électrique|an electric scooter|🛴|Elle a une trottinette électrique.
une voiture électrique|an electric car|🚗⚡|Ma voiture électrique est blanche.
le covoiturage|carpooling|🚗👥|Je fais du covoiturage.
le tramway|a tram|🚊|Je prends le tramway.`,
accessories: `des lunettes de soleil|sunglasses|🕶️|Je porte des lunettes de soleil.
un sac à dos|a backpack|🎒|Mon sac à dos est bleu.
un tote bag|a tote bag|🛍️|Je prends mon tote bag.
un sac banane|a belt bag|👝|Elle porte un sac banane.
un chouchou|a scrunchie|🎀|Mon chouchou est rose.
des boucles d’oreilles|earrings|💎|Elle porte des boucles d’oreilles.
une montre connectée|a smartwatch|⌚|Ma montre connectée est noire.
une pince à cheveux|a hair clip|🎀|J’ai une pince à cheveux.`,
colours: `bleu marine|navy blue|🔵|Le pull est bleu marine.
vert sauge|sage green|🌿|La veste est vert sauge.
bordeaux|burgundy|🍷|Le sac est bordeaux.
blanc cassé|off-white|🤍|Le t-shirt est blanc cassé.`,
fabrics: `en lin|made of linen|🌾|Cette chemise est en lin.
en denim|made of denim|👖|Cette veste est en denim.
en polaire|made of fleece|🐑|Ce pull est en polaire.
en coton bio|made of organic cotton|🌱|Ce t-shirt est en coton bio.`,
digital: `un smartphone|a smartphone|📱|Mon smartphone est dans mon sac.
un ordinateur portable|a laptop|💻|Je travaille sur mon ordinateur portable.
des écouteurs sans fil|wireless earbuds|🎧|J’utilise des écouteurs sans fil.
un casque|headphones|🎧|Je porte un casque pour écouter de la musique.
un chargeur|a charger|🔌|Mon chargeur est sur la table.
une application|an app|📱|J’utilise une application de français.
un mot de passe|a password|🔑|Je change mon mot de passe.
le wifi|Wi-Fi|📶|Le wifi fonctionne ici.
un message|a message|💬|J’envoie un message.
une notification|a notification|🔔|Je reçois une notification.
une playlist|a playlist|🎵|J’écoute ma playlist.
un appel vidéo|a video call|🤳|Je fais un appel vidéo.
un abonnement|a subscription|🎟️|J’ai un abonnement.
une batterie|a battery|🔋|Ma batterie est vide.
un lien|a link|🔗|J’envoie un lien.
une capture d’écran|a screenshot|📷|Je fais une capture d’écran.`,
};
function parse(rows: Partial<Record<ThemeId,string>>, extra: boolean): Word[] {
  return Object.entries(rows).flatMap(([theme, data]) => (data || '').split('\n').filter(Boolean).map(line => {
    const [fr,en,emoji,example] = line.split('|');
    const id = theme+'-'+fr.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-');
    return {id,theme:theme as ThemeId,fr,en,emoji,example,extra};
  }));
}
export function frenchNumber(n: number): string {
  const small=['zéro','un','deux','trois','quatre','cinq','six','sept','huit','neuf','dix','onze','douze','treize','quatorze','quinze','seize'];
  if(n<17)return small[n];
  if(n<20)return 'dix-'+small[n-10];
  if(n<70){const t=['','','vingt','trente','quarante','cinquante','soixante'][Math.floor(n/10)];return t+(n%10===0?'':n%10===1?' et un':'-'+small[n%10]);}
  if(n<80)return n===71?'soixante et onze':'soixante-'+frenchNumber(n-60);
  if(n===80)return 'quatre-vingts';
  if(n<100)return 'quatre-vingt-'+frenchNumber(n-80);
  if(n<1000){const h=Math.floor(n/100),r=n%100;return (h===1?'cent':frenchNumber(h)+' cent'+(r?'':'s'))+(r?' '+frenchNumber(r):'');}
  if(n<1000000){const t=Math.floor(n/1000),r=n%1000;return (t===1?'mille':frenchNumber(t).replace(/cents$/,'cent').replace(/vingts$/,'vingt')+' mille')+(r?' '+frenchNumber(r):'');}
  return n===1000000?'un million':String(n);
}
const numberWords: Word[] = [...Array.from({length:99},(_,i)=>i+1),100,200,500,1000].map(n=>({id:'numbers-'+n,theme:'numbers',fr:frenchNumber(n),en:String(n),emoji:n<=10?'●'.repeat(n):'🔢',example:`Le nombre est ${frenchNumber(n)}.`,extra:n>99}));
export const words: Word[] = [...parse(core,false), ...numberWords, ...parse(extras,true)];
const swatches: Record<string,string> = {white:'#ffffff',black:'#25252b',red:'#e04a46',blue:'#4b78cf',green:'#469267',yellow:'#f0ce48',orange:'#ef9141',pink:'#e9a6c5',purple:'#9672c8',brown:'#925d40',grey:'#929498',beige:'#d9c5a1','navy blue':'#233c60','sage green':'#9eaf94',burgundy:'#852b46','off-white':'#f6f0e4'};
words.forEach(word=>{if(word.theme==='colours')word.swatch=swatches[word.en];});
const aliases: Record<string,string[]> = {
  'le professeur':['la professeure','une professeure'], 'le médecin':['la médecin','une médecin'],
  'le sapeur-pompier':['un pompier','une pompière','le pompier','la pompière'],
  'le designer UX / la designeuse UX':['une designer UX','la designer UX'],
  'un sweat à capuche':['un hoodie'], 'un crop top':['un haut court'],
  'un pantalon de jogging':['un jogging'], 'un trench':['un trench-coat'],
  'un gilet':['un cardigan'], 'des baskets':['des sneakers','des espadrilles'],
  'un tote bag':['un sac en toile'], 'faire du Pilates':['faire du pilates'],
  'jouer au pickleball':['faire du pickleball'], 'faire du yoga':['pratiquer le yoga'],
  'courir':['faire de la course à pied','faire du jogging'],
  'prendre des photos':['prendre une photo'], 'un smartphone':['un téléphone intelligent','un téléphone portable'],
  'des écouteurs sans fil':['des écouteurs bluetooth'], 'un ordinateur portable':['un portable'],
  'une playlist':['une liste de lecture'], 'une capture d’écran':['une capture écran'],
  'le covoiturage':['un covoiturage'], 'un casque':['un casque audio'],
};
words.forEach(word=>{if(aliases[word.fr])word.aliases=aliases[word.fr];});
export function normalise(value: string): string {return value.trim().toLocaleLowerCase('fr').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’']/g,' ').replace(/[-‐‑–]/g,' ').replace(/[.,!?]/g,'').replace(/\s+/g,' ');}
function withoutArticle(value: string): string {return value.replace(/^(un|une|le|la|les|des|l) /,'');}
export function isCorrectSpelling(input: string, word: Word): boolean {
  const normalized=normalise(input);
  if(!normalized)return false;
  const candidates=[...word.fr.split(' / '),...(word.aliases||[])];
  return candidates.some(c=>{const full=normalise(c);return normalized===full || normalized===withoutArticle(full);});
}
export function shuffle<T>(items:T[]):T[]{const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

// A1 foundations added separately from the original notes. IDs remain stable across additions.
themes.push(
 {id:'greetings',title:'Bonjour !',french:'Se présenter',emoji:'👋',colour:'#e8d596',blurb:'Saluer, remercier, parler de soi.',sticker:'Premier bonjour'},
 {id:'cafe',title:'Au café',french:'À boire et à manger',emoji:'☕',colour:'#e7b994',blurb:'Un café, un croissant, une petite pause.',sticker:'Pause café'},
 {id:'home',title:'Chez moi',french:'La maison et la famille',emoji:'🏡',colour:'#b9d5b0',blurb:'Ma famille, ma maison, mon quotidien.',sticker:'Bienvenue'}
);
words.push(...parse({
 greetings:`bonjour|hello|👋|Bonjour, Jamie !
bonsoir|good evening|🌙|Bonsoir, madame !
au revoir|goodbye|👋|Au revoir, à bientôt !
merci|thank you|💛|Merci beaucoup.
s’il vous plaît|please (polite)|🙏|Un café, s’il vous plaît.
excusez-moi|excuse me|🙋|Excusez-moi, monsieur.
oui|yes|✅|Oui, je parle français.
non|no|🙅|Non, je ne comprends pas.
à bientôt|see you soon|👋|Merci, à bientôt !
ça va|how are you / I’m fine|🙂|Bonjour, ça va ?`,
 cafe:`un café|a coffee|☕|Je bois un café.
un thé|a tea|🍵|Je prends un thé.
un croissant|a croissant|🥐|Je mange un croissant.
le pain|bread|🥖|J’aime le pain.
le lait|milk|🥛|Je bois du lait.
l’eau|water|💧|Je bois de l’eau.
une pomme|an apple|🍎|Je mange une pomme.
une salade|a salad|🥗|Je prends une salade.
le fromage|cheese|🧀|J’aime le fromage.
un sandwich|a sandwich|🥪|Je mange un sandwich.
une addition|a bill (in a restaurant)|🧾|L’addition, s’il vous plaît.
un menu|a menu|📋|Je regarde le menu.`,
 home:`une maison|a house|🏡|J’habite dans une maison.
un appartement|an apartment|🏢|Mon appartement est petit.
une chambre|a bedroom|🛏️|Ma chambre est ici.
une cuisine|a kitchen|🍳|La cuisine est petite.
une table|a table|🪑|Le livre est sur la table.
un livre|a book|📖|Je lis un livre.
une mère|a mother|👩|Ma mère parle français.
un père|a father|👨|Mon père fait la cuisine.
une sœur|a sister|👧|Ma sœur aime danser.
un frère|a brother|👦|Mon frère est étudiant.
un ami / une amie|a friend|🤝|Mon amie habite ici.
un chat|a cat|🐈|J’ai un chat.`
},true));

// Class notes from 9 November 2026, plus requested calendar/time foundations.
themes.push(
 {"id": "positions", "title": "Où est le chat ?", "french": "Les positions", "emoji": "🐈", "colour": "#d7c3e4", "blurb": "Les positions", "sticker": "Où est le chat ?"},
 {"id": "bedroom", "title": "Dans ma chambre", "french": "La chambre", "emoji": "🛏️", "colour": "#bcd8de", "blurb": "La chambre", "sticker": "Dans ma chambre"},
 {"id": "livingroom", "title": "Dans mon salon", "french": "Le salon", "emoji": "🛋️", "colour": "#e9c5a1", "blurb": "Le salon", "sticker": "Dans mon salon"},
 {"id": "kitchen", "title": "Dans ma cuisine", "french": "La cuisine", "emoji": "🍳", "colour": "#d2dca6", "blurb": "La cuisine", "sticker": "Dans ma cuisine"},
 {"id": "bathroom", "title": "Dans ma salle de bains", "french": "La salle de bains", "emoji": "🛁", "colour": "#b8d8e4", "blurb": "La salle de bains", "sticker": "Dans ma salle de bains"},
 {"id": "calendar", "title": "Mon calendrier", "french": "Les jours et les dates", "emoji": "📅", "colour": "#e9c4cf", "blurb": "Les jours et les dates", "sticker": "Mon calendrier"},
 {"id": "time", "title": "Quelle heure est-il ?", "french": "L’heure", "emoji": "🕒", "colour": "#e9d298", "blurb": "L’heure", "sticker": "Quelle heure est-il ?"}
);
const classNotes = parse({"positions": "sur|on|🐈|Le chat est sur la boîte.\nsous|under|🐈|Le chat est sous la boîte.\ndevant|in front of|🐈|Le lapin est devant la sacoche.\nderrière|behind|🐈|Le chat est derrière la boîte.\ndans|in / inside|🐈|Le panda roux est dans la boîte.\nentre|between|🐈|Le chat est entre les boîtes.\nà côté de|next to|🐈|Le chien est à côté du chat.\nau-dessus de|above (without touching)|🐈|La lampe est au-dessus de la table.\nen dessous de|below / underneath|🐈|Le tapis est en dessous de la table.\nà gauche de|to the left of|🐈|Le chat est à gauche de la boîte.\nà droite de|to the right of|🐈|Le chat est à droite de la boîte.\nune boîte|a box|📦|Le chat est dans la boîte.\nun panda roux|a red panda|🐾|Le panda roux est entre les boîtes.\nun lapin|a rabbit|🐇|Le lapin est devant la sacoche.\nune sacoche|a satchel / briefcase|💼|La sacoche est sous la table.\nun chien|a dog|🐕|Le chien est à côté de la niche.\nune niche|a doghouse|🏠|Le chien est devant la niche.\nun arbre|a tree|🌳|La niche est à côté de l’arbre.\ntout droit|straight ahead|⬆️|Je vais tout droit.\navant|before (in time)|⏮️|Je mange avant le cours.\naprès|after (in time)|⏭️|Je rentre après le cours.\nil y a|there is / there are|🏠|Dans ma chambre, il y a un lit.\nil n’y a pas de|there is no / there are no|🚫|Il n’y a pas de canapé dans ma cuisine.", "bedroom": "une fenêtre|a window|🪟|La fenêtre est à côté du lit.\nune lampe|a lamp|💡|La lampe est sur la table de nuit.\nun tableau|a painting / picture|🖼️|Il y a deux tableaux dans ma chambre.\nun miroir|a mirror|🪞|Le miroir est au-dessus de la commode.\nune commode|a chest of drawers|🗄️|La commode est à gauche du lit.\nun oreiller|a pillow|🛏️|Il y a deux oreillers sur mon lit.\nune plante|a plant|🪴|La plante est devant la fenêtre.\nune table de nuit|a bedside table|🛏️|La table de nuit est à côté du lit.\nun tapis|a rug|🧶|Le tapis est sous le lit.\nun lit|a bed|🛏️|Mon lit est dans ma chambre.\nune couette|a duvet|🛌|La couette est sur le lit.\nun drap|a bedsheet|🛏️|Les draps sont sur le lit.", "livingroom": "un salon|a living room|🛋️|Dans mon salon, il y a un canapé.\nune salle de séjour|a sitting room / living room|🛋️|La salle de séjour est à côté de la cuisine.\nun store|a window blind|🪟|Le store est devant la fenêtre.\nun plafond|a ceiling|⬆️|La lampe est au plafond.\nun mur|a wall|🧱|Le tableau est sur le mur.\nune étagère|a shelf / shelving unit|📚|Les livres sont sur l’étagère.\nune télé|a TV|📺|La télé est devant le canapé.\nun coussin|a cushion|🛋️|Le coussin est sur le canapé.\nune couverture|a blanket|🧶|La couverture est sur le fauteuil.\nun plancher|a floor (surface)|🪵|Le tapis est sur le plancher.\nun fauteuil|an armchair|🪑|Le fauteuil est à droite du canapé.\nun canapé|a sofa / couch|🛋️|Il y a un canapé dans le salon.\nune table basse|a coffee table|☕|La table basse est devant le canapé.", "kitchen": "un rideau|a curtain|🪟|Il y a des rideaux devant la fenêtre.\nun placard|a cupboard|🗄️|Les placards sont dans la cuisine.\nun frigo|a fridge|🧊|Le frigo est à côté du congélateur.\nun congélateur|a freezer|❄️|Le congélateur est à gauche du frigo.\nun micro-ondes|a microwave|🍲|Le micro-ondes est sur le plan de travail.\nun évier|a kitchen sink|🚰|L’évier est sous la fenêtre.\nun four|an oven|🥘|Le four est à côté du placard.\nun vase|a vase|🏺|Le vase est sur la table.\nune théière|a teapot|🫖|La théière est sur la table.\nune cafetière|a coffee maker / coffee pot|☕|La cafetière est à côté de la théière.\nune table à manger|a dining table|🍽️|Il y a quatre chaises autour de la table à manger.\nune chaise|a chair|🪑|La chaise est devant la table.", "bathroom": "une salle de bains|a bathroom|🛁|La salle de bains est à côté de ma chambre.\nun rideau de douche|a shower curtain|🚿|Le rideau de douche est devant la baignoire.\nune serviette de bain|a bath towel|🧺|La serviette de bain est sur l’étagère.\nune porte|a door|🚪|La porte est à droite du lavabo.\nune baignoire|a bathtub|🛁|La baignoire est sous la fenêtre.\nune douche|a shower|🚿|La douche est à côté du lavabo.\nun robinet|a tap / faucet|🚰|Le robinet est au-dessus du lavabo.\ndu papier hygiénique|toilet paper|🧻|Il y a du papier hygiénique dans la salle de bains.\nun lavabo|a bathroom sink / washbasin|🚰|Le miroir est au-dessus du lavabo.\nles toilettes|a toilet / the bathroom|🚽|Les toilettes sont à côté du lavabo."},false);
classNotes.forEach(w=>{w.course="2026-11-09";});
words.push(...classNotes);
words.push(...parse({"calendar": "lundi|Monday|📅|Le lundi, je travaille.\nmardi|Tuesday|📅|Le mardi, je fais du Pilates.\nmercredi|Wednesday|📅|Le mercredi, je parle français.\njeudi|Thursday|📅|Le jeudi, je vais au cours.\nvendredi|Friday|📅|Le vendredi, je fais du yoga.\nsamedi|Saturday|📅|Le samedi, je joue au pickleball.\ndimanche|Sunday|📅|Le dimanche, je vais au cours de français.\njanvier|January|🗓️|Mon cours commence en janvier.\nfévrier|February|🗓️|Mon anniversaire est en février.\nmars|March|🗓️|Nous sommes en mars.\navril|April|🗓️|Mon cours commence en avril.\nmai|May|🗓️|Mon anniversaire est en mai.\njuin|June|🗓️|Nous sommes en juin.\njuillet|July|🗓️|Mon cours commence en juillet.\naoût|August|🗓️|Mon anniversaire est en août.\nseptembre|September|🗓️|Mon cours commence en septembre.\noctobre|October|🗓️|Nous sommes en octobre.\nnovembre|November|🗓️|Nous sommes en novembre.\ndécembre|December|🗓️|Mon anniversaire est en décembre.\naujourd’hui|today|📍|Aujourd’hui, je parle français.\ndemain|tomorrow|➡️|Demain, c’est mardi.\nhier|yesterday|⬅️|Hier est le jour avant aujourd’hui.\nun jour|a day|📆|Une semaine a sept jours.\nune semaine|a week|📅|Il y a sept jours dans une semaine.\nun mois|a month|🗓️|Une année a douze mois.\nune année|a year|📆|Il y a douze mois dans une année.\nune date|a date (calendar)|📅|Quelle est la date aujourd’hui ?\nun anniversaire|a birthday|🎂|Mon anniversaire est le premier mai.\nle premier mai|May 1|📅|Mon anniversaire est le premier mai.\nle deux novembre|November 2|📅|Mon cours commence le deux novembre.\nle quinze août|August 15|📅|Mon anniversaire est le quinze août.", "time": "une heure|an hour / one o’clock|🕐|Le cours dure une heure.\nune minute|a minute|⏱️|Une heure a soixante minutes.\nune seconde|a second|⏱️|Une minute a soixante secondes.\nmidi|noon|🕛|Je mange à midi.\nminuit|midnight|🕛|Il est minuit.\nle matin|the morning|🌅|Le matin, je bois un café.\nl’après-midi|the afternoon|🌤️|L’après-midi, je travaille.\nle soir|the evening|🌆|Le soir, je parle français.\nla nuit|the night|🌙|La nuit, je dors.\nà quelle heure|at what time|🕒|À quelle heure commence le cours ?\nquelle heure est-il|what time is it|⌚|Quelle heure est-il ?\net quart|quarter past|🕒|Il est huit heures et quart.\net demie|half past (with heures)|🕣|Il est huit heures et demie.\nmoins le quart|quarter to|🕘|Il est neuf heures moins le quart.\nhuit heures|eight o’clock|🕗|Il est huit heures.\nhuit heures et quart|quarter past eight|🕗|Il est huit heures et quart.\nhuit heures et demie|half past eight|🕣|Il est huit heures et demie.\nneuf heures moins le quart|quarter to nine|🕘|Il est neuf heures moins le quart.\ndix-sept heures trente|17:30 / five thirty p.m.|🕠|Mon cours commence à dix-sept heures trente.\nvingt heures|20:00 / eight p.m.|🕗|Je mange à vingt heures.\nà l’heure|on time|✅|Je suis à l’heure pour mon cours.\nen retard|late|🏃|Je suis en retard pour mon cours."},true));
words.push(...[0,101,110,121,199,201,300,400,600,700,800,900,1001,2000,10000].map(n=>({id:"numbers-"+n,theme:"numbers" as ThemeId,fr:frenchNumber(n),en:String(n),emoji:"🔢",example:`Le nombre est ${frenchNumber(n)}.`,extra:true})));
const classPlurals:Record<string,string>={"un tableau": "des tableaux", "un oreiller": "des oreillers", "un drap": "des draps", "un coussin": "des coussins", "un rideau": "des rideaux", "un placard": "des placards", "une chaise": "des chaises", "un store": "des stores", "un canapé": "des canapés"};
const classAliases:Record<string,string[]>={"un canapé": ["un sofa", "un divan"], "une télé": ["une télévision"], "un frigo": ["un réfrigérateur"], "les toilettes": ["une toilette"], "du papier hygiénique": ["du papier toilette"], "en dessous de": ["au-dessous de"], "une salle de bains": ["une salle de bain"]};
const positions:Record<string,string>={"sur": "on", "sous": "under", "devant": "front", "derrière": "behind", "dans": "inside", "entre": "between", "à côté de": "next", "au-dessus de": "above", "en dessous de": "below", "à gauche de": "left", "à droite de": "right"};
const clocks:Record<string,[number,number]>={"midi": [12, 0], "minuit": [0, 0], "huit heures": [8, 0], "huit heures et quart": [8, 15], "huit heures et demie": [8, 30], "neuf heures moins le quart": [8, 45], "dix-sept heures trente": [17, 30], "vingt heures": [20, 0]};
words.forEach(w=>{if(classPlurals[w.fr])w.plural=classPlurals[w.fr];if(classAliases[w.fr])w.aliases=[...(w.aliases||[]),...classAliases[w.fr]];if(w.theme==="positions")w.scene=positions[w.fr];if(clocks[w.fr])w.clock=clocks[w.fr];});
