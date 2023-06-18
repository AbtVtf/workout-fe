// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "Ghidul suprem pentru a cumpăra o mașină la mâna a doua",
    author: "Albert",
    date: "12 Ian, 2023",
    time: "9pm",
    imgUrl: img01,
    description1: `
    Cumpărarea unei mașini second-hand poate fi o sarcină descurajantă, mai ales pentru cei care cumpără pentru prima dată. Nu este la fel de simplu ca și cum ai lua mașina pentru o tură în jurul blocului și apoi să dai banii. Există numeroși factori de luat în considerare și capcane de evitat. Această postare pe blog oferă un ghid detaliat cu privire la ceea ce trebuie să căutați atunci când cumpărați o mașină la mâna a doua, incluzând exemple din viața reală pentru a ilustra punctele importante. Haideți să ne scufundăm!
    
    Cercetare preliminară
    Înainte de a pune piciorul într-o reprezentanță sau de a răsfoi listele online, știți ce vă doriți. Înțelegerea cerințelor dumneavoastră vă va ajuta să evitați achizițiile impulsive sau să cedați la persuasiunea unui vânzător iscusit.
    
    Fiabilitatea: Verificați fiabilitatea diferitelor mărci și modele. Site-urile web precum Consumer Reports sau J.D. Power oferă evaluări complete ale fiabilității pe baza a numeroși factori.
    
    Inspecție și test drive
    După ce ați făcut cercetările preliminare și ați găsit o mașină care vă interesează, este timpul să faceți o inspecție și un test drive.
    
    Verificarea exteriorului și a interiorului: Căutați semne de rugină, vopsea nepotrivită, lovituri și zgârieturi pe caroserie. În timp ce problemele cosmetice minore pot fi trecute cu vederea, rugina substanțială sau reparațiile prost executate pot indica probleme grave. Examinați interiorul pentru uzură excesivă, scaune deteriorate și caracteristici nefuncționale. Sarah, de exemplu, a evitat să cumpere un BMW aparent bine întreținut, când a găsit în interior daune substanțiale provocate de apă, ceea ce indica posibile pagube provocate de inundații.
    `,
    description2: ` 
    Sub capotă: Examinați motorul pentru scurgeri de ulei, furtunuri deteriorate și curele uzate. Verificați starea bateriei, a lichidului de răcire și a uleiului de motor. Este recomandabil să aduceți un mecanic dacă nu vă simțiți confortabil să evaluați singur aceste aspecte.
    
    Anvelope: Verificați dacă anvelopele sunt uzate uniform. Uzura neuniformă ar putea fi un semn de aliniere slabă sau de probleme de suspensie. De asemenea, luați în considerare costul de înlocuire dacă anvelopele se apropie de sfârșitul duratei de viață.
    
    Revizuiți raportul istoric al vehiculului
    Un raport istoric al vehiculului oferă informații despre proprietatea anterioară, accidente, probleme legate de titlu, verificarea kilometrajului și istoricul serviciilor. Companii precum Carfax sau AutoCheck furnizează aceste rapoarte. De exemplu, Jane era cât pe ce să cumpere un Ford Focus 2018 cu un kilometraj redus la un preț bun, dar, după ce a consultat raportul istoric, a descoperit că era un vehicul de recuperare (un vehicul considerat pierdere totală de către o companie de asigurări), ceea ce poate implica riscuri potențiale.
    
    Încheierea afacerii
    Odată ce s-a convenit asupra prețului, este timpul să încheiați afacerea. Asigurați-vă întotdeauna că obțineți un act de vânzare, titlul de proprietate semnat al vehiculului și orice alte documente necesare în funcție de locația dvs.
    
    În concluzie, achiziționarea unei mașini second-hand necesită o analiză atentă și o examinare meticuloasă. Urmați pașii din acest ghid pentru a vă asigura că veți obține un vehicul second-hand fiabil, sigur și demn de încredere, care vă va servi bine în anii următori. Mult noroc!
 `,
    quote:
      "Test drive: În timpul testului de conducere, fiți atenți la modul în care mașina accelerează, frânează și virează. Ascultați zgomotele neobișnuite și observați orice mirosuri ciudate. Nu vă grăbiți în timpul testului; nu vă grăbiți; nu vă grăbiți pentru a vă face o idee despre mașină.",
  },

  {
    id: 2,
    title: "Perechea ta perfectă pe patru roți",
    author: "Dan",
    date: "20 Mar, 2023",
    time: "9pm",
    imgUrl: img02,
    description1: `
    Perechea ta perfectă pe patru roți: Un ghid amănunțit pentru a găsi mașina potrivită
Achiziționarea unei mașini, fie că este nouă sau la mâna a doua, reprezintă o investiție semnificativă. Nu este vorba doar de a ajunge din punctul A în punctul B; este vorba de alegerea unui vehicul care să se potrivească stilului dumneavoastră de viață, personalității și bugetului. Acest ghid cuprinzător vă va ajuta să navigați în acest proces și vă va oferi considerații cheie, împreună cu câteva exemple din viața reală pentru a ilustra mai bine aceste puncte. Așadar, puneți-vă centura și haideți să pornim la drum pentru a vă găsi mașina ideală!
   `,
    description2: ` 
    1. Determinați de ce aveți nevoie
    Înainte de a ne afunda în marea de mașini disponibile, trebuie mai întâi să vă înțelegeți nevoile. Gândiți-vă la următorii factori:
    
    Scop: Utilizarea principală a vehiculului dumneavoastră joacă un rol crucial în procesul de luare a deciziei. Dacă îl folosiți în principal pentru a face naveta în oraș, o mașină compactă, cu un consum redus de combustibil, cum ar fi o Toyota Corolla sau Honda Civic, ar putea fi alegerea ideală. În schimb, dacă parcurgeți adesea terenuri accidentate, un SUV sau o camionetă ar putea fi mai potrivite.
    
    Capacitatea pentru pasageri: Numărul de pasageri pe care îi transportați de obicei ar trebui să influențeze dimensiunea vehiculului dumneavoastră. De exemplu, o familie de cinci persoane ar putea găsi un SUV sau un monovolum precum Honda Odyssey mai confortabil și mai practic decât un sedan mic.
    
    Spațiul de încărcare: Dacă transportați frecvent obiecte de mari dimensiuni, luați în considerare un vehicul cu un spațiu amplu în portbagaj sau o camionetă. De exemplu, Mike, un muzician local, a ales un break în detrimentul unui sedan pentru a putea găzdui echipamentul său pentru concerte.
    
    2. Stabiliți un buget
    Înțelegerea sumei pe care v-o puteți permite este un pas esențial în procesul de cumpărare a unei mașini.
    
    Costul total de proprietate: Nu uitați că costul unei mașini nu reprezintă doar prețul de achiziție. Luați în considerare cheltuieli precum asigurarea, întreținerea, combustibilul și eventualele taxe de finanțare. Potrivit AAA, costul mediu anual pentru a deține și a opera un vehicul nou în 2021 a fost de 9.666 de dolari.
    
    Nou vs. Folosit: Mașinile noi vin cu un preț mai mare, dar oferă acoperire de garanție și cele mai recente caracteristici. Mașinile second-hand sunt mai accesibile, dar ar putea avea costuri de întreținere mai mari. Luați în considerare un vehicul second-hand certificat pentru un amestec de economii și siguranță.
    
    Finanțare: Dacă aveți în vedere un împrumut auto, încercați să obțineți o rată lunară care să nu depășească 15% din salariul dvs. net. De exemplu, dacă Ioan aduce acasă 4.000 de dolari pe lună, plata pentru mașină nu ar trebui să depășească 600 de dolari.
    
    3. Cercetați
    După ce v-ați determinat nevoile și ați stabilit un buget, este timpul să cercetați potențialele vehicule.
    
    Recenzii și evaluări: Consultați recenziile experților pe site-uri precum Edmunds, Kelley Blue Book și Consumer Reports. Uitați-vă la ratingurile de siguranță de la IIHS și NHTSA.
    
    Fiabilitatea: Anumite mărci și modele sunt cunoscute pentru longevitatea lor. De exemplu, conform Consumer Reports, modele precum Toyota Prius și Lexus GX sunt printre cele mai fiabile.
    
    Mărturii: Contactați proprietarii actuali ai modelelor pe care le aveți în vedere. De exemplu, Sarah a vrut un Jeep Wrangler pentru aspectul său robust, dar s-a răzgândit după ce a auzit de la proprietarii actuali despre confortul de rulare. `,
    quote:
      "Test drive: În timpul testului de conducere, fiți atenți la modul în care mașina accelerează, frânează și virează. Ascultați zgomotele neobișnuite și observați orice mirosuri ciudate. Nu vă grăbiți în timpul testului; nu vă grăbiți; nu vă grăbiți pentru a vă face o idee despre mașină.",
  },

  {
    id: 3,
    title:
      "Cele mai bune motive pentru a schimba mașina veche cu una nouă: un ghid complet",
    author: "Mihai",
    date: "22 Mai, 2023",
    time: "9pm",
    imgUrl: img03,
    description1: `
    Când vine vorba de prietenii noștri fideli pe patru roți, întrebarea nu este întotdeauna "dacă", ci "când" ar trebui să ne gândim să trecem mai departe. Să păstrăm o mașină veche poate părea opțiunea cea mai rentabilă, dar există momente în care schimbarea ei pentru un model nou (sau nou pentru tine) ar putea fi de fapt cea mai bună alegere, atât din punct de vedere financiar, cât și practic. În această postare pe blog, analizăm în profunzime principalele motive pentru a vă schimba mașina veche.

    1. Creșterea costurilor de reparații și întreținere
    Cel mai direct semn că ar putea fi timpul să vă luați adio de la vechea mașină este atunci când costurile de reparații și întreținere încep să crească. Pe măsură ce vehiculele îmbătrânesc, uzura va duce în mod inevitabil la drumuri mai frecvente la mecanic.
    
    Luați-o în considerare pe Laura, care deținea un Ford Explorer din 2002 cu peste 320.000 de kilometri la bord. Când și-a calculat costurile de reparații pentru anul respectiv - inclusiv o reconstrucție a transmisiei, frâne noi și alte câteva reparații mai mici - și-a dat seama că a cheltuit mai mult pentru a menține vechiul Ford în funcțiune decât ar fi cheltuit pentru un an de plăți la un vehicul mai nou și mai fiabil.
    
    2. Îmbunătățiri de siguranță
    Un alt factor cheie de luat în considerare este siguranța. De-a lungul anilor, progresele în tehnologia auto au făcut ca mașinile mai noi să fie substanțial mai sigure. Vehiculele de astăzi au caracteristici precum avertizarea de coliziune frontală, frânarea automată de urgență, avertizarea de părăsire a benzii de rulare și detectarea unghiului mort. Dacă mașina dvs. veche nu dispune de aceste caracteristici care ar putea salva vieți, ar putea fi momentul să luați în considerare o actualizare.
    
    Luați-l pe John, de exemplu. După ce a fost la un pas de accident pe autostradă, el și-a schimbat sedanul din 1997, fără caracteristici de siguranță avansate, cu un model 2019 echipat cu sisteme de siguranță moderne. Acum se simte mult mai în siguranță pe șosea, în special în timpul conducerii pe autostradă. `,
    description2: ` 
    3. Eficiență îmbunătățită a combustibilului
    Pe măsură ce tehnologia autoturismelor a avansat, la fel și eficiența combustibilului. Modelele mai noi au adesea ratinguri mpg îmbunătățite în comparație cu vehiculele mai vechi, ceea ce ar putea duce la economii semnificative la pompă în timp.
    
    Luați-o în considerare pe Sarah, care face naveta de 80 de kilometri în fiecare zi cu SUV-ul său din 2004 care are o medie de 15 mpg. Dacă ar trece la un model mai nou, cu o medie de 25 mpg, ar reduce costurile de combustibil cu aproximativ 40% - o economie substanțială în decursul unui an.
    
    4. Noi tehnologii și caracteristici de confort
    Deși s-ar putea să nu fie esențial, faptul de a avea cele mai noi tehnologii și caracteristici de confort poate îmbunătăți semnificativ experiența de condus. Mașinile mai noi oferă caracteristici precum sisteme avansate de infotainment, integrarea smartphone-urilor, scaune încălzite, climatizare automată și multe altele.
    
    Bill, un agent imobiliar, și-a schimbat vechea mașină de bază cu un model mai nou, cu sistem de navigație integrat, conectivitate Bluetooth și un scaun mai confortabil. El a considerat că aceste caracteristici sunt neprețuite pentru munca sa, făcând ca experiența sa zilnică de condus să fie mai plăcută și mai puțin stresantă.
     `,
    quote:
      "Test drive: În timpul testului de conducere, fiți atenți la modul în care mașina accelerează, frânează și virează. Ascultați zgomotele neobișnuite și observați orice mirosuri ciudate. Nu vă grăbiți în timpul testului; nu vă grăbiți; nu vă grăbiți pentru a vă face o idee despre mașină.",
  },
];

export default blogData;
