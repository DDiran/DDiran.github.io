$(function() {

  var t = {
    intro_salute: {
    	en: "Hi I'm",
      	it: "Sono",
      	fr: "Je suis"
    },
    subtitle: {
      	en: "Business &middot; Marketing &middot; Technology",
      	it: "Commercio &middot; Marketing &middot; Tecnologia",
      	fr: "Entreprise &middot; Marketing &middot; Technologie"
    },
    title_one: {
    	en: "My current projects",
      	it: "I miei progetti attuali",
      	fr: "Mes projets actuels"
    },
    c_role1: {
    	en: "Co-Founder, Director | 2017 (Present)",
    	it: "Co-fondatore, Direttore | 2017 (Attuale)",
    	fr: "Co-fondateur, Directeur | 2017 (Actuel)"
    },
    c_location1: {
    	en: "Turin, Italy",
    	it: "Torino, Italia",
    	fr: "Turin, Italie"
    },
    c_content1: {
    	en: "At Nila Expeditions we pride ourselves in building 100% bespoke itineraries to luxury destinations in East Africa. Our goal is to challenge the status quo within the African travel industry and provide truly unique experiences.",
    	it: "Nila Expeditions propone itinerari interamente personalizzati in destinazioni di lusso dell'Africa Orientale. Il nostro obiettivo è cambiare lo standard dei viaggi turistici organizzati ed offrire delle esperienze veramente uniche ed irripetibili.",
    	fr: "Nila Expeditions offre des itinearires entièrement personalizés vers les destinations de luxe de l'Afrique de l'Est. Notre but est de changer les standards des voyages organisés et offrir des esperiences vraiment uniques, completement crées sur mesure."
    },
    title_two: {
    	en: "What I've worked on",
    	it: "Il mio lavoro",
    	fr: "Mon travail"
    },
    role_two: {
    	en: "Project Manager | 2015-2016",
    	it: "Project Manager | 2015-2016",
    	fr: "Project Manager | 2015-2016",
    },
    "Marketing Coordinator | Summer 2014": {
    	it: "Coordinatore di Marketing | Estate 2014",
    	fr: "Coordonnateur du Marketing | Été de 2014",
    },
    location_two: {
    	en: "Swansea, United Kingdom",
    	it: "Swansea, Regno Unito",
    	fr: "Swansea, Royaume-Uni"
    },
    content_two: {
    	en: "I had the pleasure of working for SDW on two separate occasions, first as a marketing intern and then after graduation as a tech project manager. I'm infinitely grateful for the opportunities I was given here and the mentorship I received from the company director, lead project manager and marketing manager.",
    	it: "Ho avuto il piacere di lavorare per SDW in due occasioni: dapprima per un tirocinio nel settore marketing ed in seguito, al conseguimento della laurea, come responsabile di progetto tecnico. Sono infinitamente riconoscente a tutto il management di SDW per le opportunità che mi sono state date e per la loro guida.",
    	fr: "J'ai eu le plasir de travailler deux fois pour SDW: d'abord pour un stage dans le marketing et, apres ma licence, comme responsable de project tecnique. Je suis tres reconaissant à toute la direction de SDW pour leur conseils et pour les opportunités que ils m'ont données."
    },
    role_three: {
    	en: "Marketing Intern | Summer 2013",
    	it: "Stagista di Marketing | Estate 2013",
    	fr: "Stagiaire en Marketing | Été de 2013"
    },
    location_three: {
    	en: "Arusha, Tanzania",
    	it: "Arusha, Tanzania",
    	fr: "Arsuah, Tanzanie"
    },
    content_three: {
    	en: "Initially, I re-implemented the same stock management system as I had for UZT the previous year and trained the operational staff on it's usage. I then took on a more marketing-oriented role by updating and modernizing the IP website and managing their social media.",
    	it: "Inizialmente ho implementato lo stesso sistema di gestione magazzino che avevo già utilizzato presso UZT l'anno precedente ed ho gestito la formazione dello staff per l'utilizzo del nuovo sistema. Successivamente ho avuto un ruolo più orientato al marketing, sia tramite i social media sia aggiornando e modernizzando il sito web.",
    	fr: "Au debout, j'ai mis au point le meme systeme de gestion des stock déjà utilisé auprés de UZT l'année precedente et j'ai aussi géré la formation du personnel pour l'utilisation du système. Ensuite, mon rôle à évoloué plus dans le marketing, avec la mis à jour du site web et à travers les social media."
    },
    role_four: {
    	en: "IT &amp; Operations Consultant | Summer 2012",
    	it: "Consulente di logistica e informatica | Estate 2012",
    	fr: "Consultant informatique et opérationnel | Été de 2012"
    },
    location_four: {
    	en: "Arusha &amp; Dar Es Salaam, Tanzania",
    	it: "Arusha &amp; Dar Es Salaam, Tanzania",
    	fr: "Arusha &amp; Dar Es Salaam, Tanzanie"
    },
    content_four: {
    	en: "My time at UZT was invaluable as it was my first experience in a professional environment. I worked closely with the two operations managers to implement an electronic stock management system across multiple branches of the organisation.",
    	it: "La mia esperienza presso UZT è stata di grande valore in quanto era la mia prima esperienza professionale. Ho lavorato in stretta collaborazione con due responsabili gestionali  ed ho implementato un sistema informatizzato di gestione del magazzino, utilizzato in diverse filiali dell'azienda.",
    	fr: "Mon temps ici a été inestimable parce que c'était ma première expérience dans un environnement professionnel. J'ai travaillé avec deux managers d'opérations pour mettre en place un système de gestion de stock électronique dans plusieurs branches de l'organisation (un à Arusha et un à Dar Es Salaam)."
    },
    title_five: {
    	en: "Where I studied",
    	it: "I miei studi",
    	fr: "Mes études"
    },
    role_five: {
    	en: "Marketing with Economics | 2012-2015",
    	it: "Marketing con Economia | 2012-2015",
    	fr: "Marketing avec Economie | 2012-2015"
    },
    location_five: {
    	en: "Aberystwyth, Wales",
    	it: "Aberystwyth, Galles",
    	fr: "Aberystwyth, Pays de Galles"
    },
    content_five: {
    	en: "It has been said that the years spent at university are the best in one's life. I didn't truly appreciate this until I came to AU. The people I met, the lessons I learned and the incredible academic environment I was part of have all helped shape who I am today.",
    	it: "Si dice che gli anni di università sono i migliori anni della propria vita. Ho potuto constatare di persona il valore di questo detto all'università di Aberystwyth, dove ho avuto la fortuna di ritrovarmi in un ambiente accademico eccezionale. Le persone che ho incontrato ed i corsi che ho frequentato hanno contribuito a fare di me la persona che sono oggi.",
    	fr: "On dit que les années passées à l'université sont les meilleures dans sa vie. Je n'ai vraiment pas apprécié cela jusqu'a' mon arrive' ici. Les personnes que j'ai rencontrées, les leçons que j'ai apprises et l'environnement académique incroyable dont j'étais partie ont tous contribué à façonner qui je suis aujourd'hui."
    },
    title_six: {
    	en: "Additional information",
    	it: "Altre Informazioni",
    	fr: "Informations Additionnelles"
    },
    content_six: {
    	en: "If you want to learn more about, be sure to download my CV and references. Alternatively, feel free to check out my LinkedIn profile.",
    	it: "Se volete scoprire di più potete scaricare il mio CV e le mie referenze. Altrimenti potete esplorare il mio profilo su LinkedIn.",
    	fr: "Si vous voulez savoir en plus, téléchargez mon CV et mes références. Alternativement, n'hésitez pas à consulter mon profil LinkedIn."
    },
    download: {
    	en: "Download CV <i class='fa fa-download'></i>",
    	it: "Scarica CV <i class='fa fa-download'></i>",
    	fr: "Télécharger CV <i class='fa fa-download'></i>"
    },
    learn: {
    	en: "Learn More <i class='fa fa-linkedin'></i>",
    	it: "Scopri Di Piu <i class='fa fa-linkedin'></i>",
    	fr: "Encore <i class='fa fa-download'></i>"
    },
    title_seven: {
    	en: "A few of my favorite things",
    	it: "Le mie attività preferite",
    	fr: "Quelques-unes de mes choses préférées"
    },
    "Family": {
    	it: "Famiglia",
    	fr: "Famille"
    },
    "Music": {
    	it: "Musica",
    	fr: "Musique"
    },
    "Snowboarding": {
    	it: "Tavola",
    	fr: "Snowboard"
    },
    "Trekking": {
    	it: "Montagne",
    	fr: "Montagnes"
    },
    "Travel": {
    	it: "Viaggiare",
    	fr: "Voyager"
    },
    "Beach Life": {
    	it: "Spiaggia",
    	fr: "Plage"
    },
    "Football": {
    	it: "Calcio",
    	fr: "Football"
    },
    "Photos": {
    	it: "Foto",
    	fr: "Photos"
    },
    "Cuisine": {
    	it: "Cucina",
    	fr: "Cuisine"
    },
    "Kindle": {
    	it: "Kindle",
    	fr: "Kindle"
    },
    title_eight: {
    	en: "My daily inspiration",
    	it: "La mia ispirazione giornaliera",
    	fr: "Mon inspiration quotidienne"
    },
    "Simplicity is the ultimate sophistication": {
    	it: "La semplicità è la più grande sofisticatezza.",
    	fr: ""
    },
    "A goal without a timeline is just a dream.": {
    	it: "Un obbiettivo senza un piano di azione è solo un sogno.",
    	fr: ""
    },
    "Life is about making an impact, not making an income.": {
    	it: "Lo scopo della vita è di create un impatto, non un reddito.",
    	fr: ""
    },
    "Launch and learn. Everything is progress": {
    	it: "Lancia e impara. Tutto il resto è progresso.",
    	fr: ""
    },
    "Discipline is the bridge between goals and accomplishment.": {
    	it: "La disciplina è il ponte tra gli obbiettivi e le realizazzioni.",
    	fr: ""
    },
    "I have not failed. I've just found 10,000 ways that won't work": {
    	it: "Non ho fallito. Ho semplicemente trovato 10,000 modi che non funzionano",
    	fr: ""
    },
    "All you need is a laptop and you can pretty much create almost any type of company.": {
    	it: "Hai solo bisogno di un portatile e puoi creare qualsiasi tipo di azienda.",
    	fr: ""
    },
    "If I have seen further it is by standing on the shoulders of giants.": {
    	it: "Se ho visto più lontano, è perché stavo sulle spalle di giganti.",
    	fr: ""
    },
    title_nine: {
    	en: "We live in a world defined by brands",
    	it: "Viviamo in un mondo dominato da marche",
    	fr: "Nous vivons dans un monde défini par les marques"
    },
    "Here's a (very) small sample of some of the brands I love.": {
    	it: "Ecco una piccola selezione di marche che adoro.",
    	fr: "Voici une petite illustration de quelques marques que j'aime."
    },
    title_ten: {
    	en: "Let's get in touch",
    	it: "Contattami",
    	fr: "Contactez moi"
    },
    "I'm always open to new opportunities - If you want to get in touch feel free to use any of the links below!": {
    	it: "Sono sempre aperto alle opportunià nuove - se volete contattarmi usate uno dei link sottostanti.",
    	fr: "Je suis toujours ouvert à de nouvelles opportunités - entrez en contact avec l'un des liens ci-dessous."
    },
    copyright: {
    	en: "Like my website? You can fork it on <a href='https://github.com/DDiran/DDiran.github.io'>GitHub<a/>!",
    	it: "Ti piace il mio sito? Puoi scaricarlo gratuitamente su <a href='https://github.com/DDiran/DDiran.github.io'>GitHub<a/>!",
    	fr: "Aimez-vous mon site? Téléchargez le gratuitemente sur <a href='https://github.com/DDiran/DDiran.github.io'>GitHub<a/>!"
    },
    "United Kingdom": {
        it: "Regno Unito",
        fr: "Royaume-Uni"
    },
    "Italy": {
        it: "Italia",
        fr: "Italie"
    },
    "Kenya": {
        it: "Kenia",
        fr: "Kenya"
    },
    "Tanzania": {
        it: "Tanzania",
        fr: "Tanzanie"
    },
    title_new: {
        en: "My background",
        it: "La mia storia",
        fr: "Mon histoire"
    },
    uk_story: {
        en: "Between my undergrad studies and the my time in employment I spent five unforgettable years here.",
        it: "Ho passato cinque anni indimenticabili in questo paese tra gli studi universitari e il lavoro.",
        fr: "J'ai passé cinq années inoubliables dans ce pays parmi les études et le travail."
    },
    italy_story: {
        en: "Where I spent the majority of my life, between my education and now employment. I am currently based here.",
        it: "Dove ho passato la maggior parte della mia vita. Al momento sono basato qui a Torino.",
        fr: "Où je passais la majeure partie de ma vie. Je suis actuellement à Turin."
    },
    kenya_story: {
        en: "I was born here in Mombasa in 1993 and I spent my early childhood running around the white sandy beaches of Diani.",
        it: "Sono nato qui a Mombasa nel 1993, trascorrendo la mia infanzia spassegiando nelle spiagge di Diani.",
        fr: "Je suis né ici à Mombasa en 1993 et ​​j'ai passé mon enfance autour de la plage de Diani."
    },
    tanzania_story: {
        en: "Where half of my family currently resides. I have been coming here regularly since 2003, and have worked for three different organisations based here.",
        it: "Dove abita attualmente la metà della mia famiglia. Visito regolarmente dal 2003 e ho anche lavorato per tre organizzazioni che sono basate qui.",
        fr: "C'est ici que la moitié de ma famille vit. J'ai visité régulièrement depuis 2003. J'ai aussi travaillé pour trois organisations ici."
    },
  };

  var _t = $('body').translate({lang: "en", t: t});
  var str = _t.g("translate");

  $(".lang_selector").click(function(ev) {
    var lang = $(this).attr("data-value");
    _t.lang(lang);

    ev.preventDefault();
  });
});