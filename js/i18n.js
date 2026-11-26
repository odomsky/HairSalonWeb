/* ============================================================
   Revu Hair and Braids (Veronika Štogrová): bilingual i18n system
   Default language: Czech (cs)
   ============================================================ */

'use strict';

const translations = {
  cs: {
    /* --- Navigation --- */
    nav_home:     'Domů',
    nav_services: 'Služby',
    nav_kanekalon:'Kanekalon',
    nav_clipin:   'Clip-in copy',
    nav_gallery:  'Galerie',
    nav_pricing:  'Ceník',
    nav_contact:  'Kontakt',

    /* --- Hero --- */
    hero_badge:    'Salon Dudek · Praha 10 Vršovice',
    hero_title_sub:'by Veronika Štogrová',
    hero_subtitle: 'Kadeřnice a braiderka v Praze 10. Copánky a dready v barvě vašich vlasů',
    hero_tag1:     '✂️ Moderní střihy',
    hero_tag2:     '🎨 Barvení',
    hero_tag3:     '🌿 Copánky',
    hero_tag4:     '✨ Kanekalon',
    hero_tag5:     '💛 Ochranné účesy',
    hero_btn_book:    '✨ Objednat se',
    hero_btn_pricing: 'Ceník',
    hero_scroll:   'Scroll',

    /* --- About --- */
    about_tag:     'O mně',
    about_tagline: 'Zdravé vlasy &amp; krásné copy,<br><em>to je má vášeň</em>',
    about_text:    'Jmenuji se Veronika Štogrová a věnuji se kadeřnictví se specializací na zaplétání kanekalonu a ochranné účesy. Kombinuji klasické kadeřnické služby s kreativním braidingem, od přirozených účesů až po výrazné festivalové styly. Ke každé klientce přistupuji individuálně, protože věřím, že správný účes dokáže dodat sebevědomí a radost z každého dne.',
    about_val1:    'Zdraví vlasů jako priorita č. 1',
    about_val2:    'Individuální přístup ke každé klientce',
    about_val3:    'Pohodlí a příjemná atmosféra',
    about_val4:    'Dlouhá životnost a precizní zpracování',
    about_spec_title: 'Moje specializace',
    spec1: 'Klasické střihy',
    spec2: 'Barvení &amp; tónování',
    spec3: 'Copánky s kanekalonem',
    spec4: 'Clip-in copy',
    spec5: 'Ochranné účesy',
    spec6: 'Festivalové styly',
    about_photo_label: 'Foto připravujeme',
    stat1_num:   '5+',
    stat1_label: 'let praxe',
    stat2_num:   '200+',
    stat2_label: 'spokojených klientek',
    stat3_num:   '30+',
    stat3_label: 'stylů copánků',

    /* --- Services --- */
    services_tag:  'Nabídka služeb',
    services_title:'Co pro vás <span>mohu udělat?</span>',
    services_desc: 'Nabízím komplexní péči o vaše vlasy, od klasického kadeřnictví po kreativní braiding a unikátní clip-in copy.',

    svc1_title: 'Klasické kadeřnické služby',
    svc1_desc:  'Profesionální péče o vlasy s důrazem na zdraví a individualitu každé klientky.',
    svc1_li1:   'Dámské střihy',
    svc1_li2:   'Pánské střihy',
    svc1_li3:   'Dětské střihy',
    svc1_li4:   'Foukaná a styling',
    svc1_li5:   'Úprava vlasů',
    svc1_li6:   'Barvení',
    svc1_li7:   'Tónování',
    svc1_li8:   'Regenerace vlasů',

    svc2_title: 'Braiding &amp; Kanekalon',
    svc2_desc:  'Ochranné a dekorativní účesy pro každou příležitost, od každodenního nošení po festivaly.',
    svc2_li1:   'Zaplétání kanekalonu',
    svc2_li2:   'Boxerské copánky',
    svc2_li3:   'Festivalové účesy',
    svc2_li4:   'Ochranné účesy',
    svc2_li5:   'Barevné copy',
    svc2_li6:   'Přirozené copy',
    svc2_li7:   'Maxi copy',
    svc2_li8:   'Účesy pro děti',
    svc2_li9:   'Účesy na akce &amp; párty',

    svc3_badge: 'Unikátní!',
    svc3_title: 'Clip-in copy',
    svc3_desc:  'Ručně vyráběné clip-in copy pro okamžitou proměnu. Elegantní i extravagantní, výběr je na vás.',
    svc3_li1:   'Ručně vyráběné',
    svc3_li2:   'Barevné &amp; extravagantní',
    svc3_li3:   'Elegantní přirozené',
    svc3_li4:   'Maxi copy',
    svc3_li5:   'Rychlá aplikace',
    svc3_li6:   'Opakované použití',

    /* --- Target --- */
    target_tag:   'Pro koho',
    target_title: 'Vhodné pro <span>každou z vás</span>',
    target_desc:  'Moje služby jsou určeny pro ženy, dívky a děti všech věkových kategorií s různými typy vlasů.',
    target1_title:'Hledáte změnu?',
    target1_desc: 'Chcete nový styl nebo osvěžit svůj look? Najdeme pro vás ideální účes.',
    target2_title:'Děti',
    target2_desc: 'Zaplétáme i dětské vlasy, bezpečně, šetrně a s úsměvem.',
    target3_title:'Festivalové návštěvnice',
    target3_desc: 'Výrazný festivalový look, který vydrží celý víkend a déle.',
    target4_title:'Jemné vlasy',
    target4_desc: 'Šetrné techniky pro jemné a citlivé vlasy bez zbytečné zátěže.',
    target5_title:'Ochranné účesy',
    target5_desc: 'Chraňte své vlasy před poškozením a zároveň vypadejte skvěle.',
    target6_title:'Nováčci v kanekalonu',
    target6_desc: 'Žádné zkušenosti? Nevadí! Poradím vám s výběrem barvy i stylu.',

    /* --- Kanekalon benefits --- */
    kanekalon_tag:  'Proč kanekalon?',
    kanekalon_title:'Výhody <span>kanekalonu</span>',
    kanekalon_desc: 'Kanekalon je syntetické vlákno, které umožňuje kreativní i ochranné účesy bez trvalého zásahu do vašich vlasů.',
    kben1_title: 'Prodloužení bez trvalého zásahu',
    kben1_text:  'Získáte dlouhé vlasy nebo výrazný účes bez barvení, chemie nebo trvalého poškození.',
    kben2_title: 'Ochrana vlastních vlasů',
    kben2_text:  'Copánky s kanekalonem jsou ochranný účes, vaše vlasy rostou pod nimi v klidu.',
    kben3_title: 'Výrazný styl bez barvení',
    kben3_text:  'Stovky barev kanekalonu vám umožní experimentovat bez rizika poškození vlasů barvením.',
    kben4_title: 'Rychlá změna vzhledu',
    kben4_text:  'Nový účes za pár hodin, bez čekání na dorůstání nebo měsíce péče.',
    kben5_title: 'Dlouhá výdrž',
    kben5_text:  'Správně zaplétaný kanekalon vydrží 4 až 8 týdnů. Dlouho krásně vypadat s minimální údržbou.',

    /* --- Gallery --- */
    gallery_tag:  'Galerie',
    gallery_title:'Ukázky <span>mých prací</span>',
    gallery_desc: 'Každý účes je originál. Prohlédněte si ukázky mých prací.',
    gallery_note: '📸 Fotogalerie: brzy doplníme',
    gallery_privacy: 'Obličeje klientek jsou kvůli soukromí rozmazané.',
    gallery_more: 'Další práce na Instagramu',
    gal1: 'Střihy',
    gal2: 'Barvení',
    gal3: 'Copánky',
    gal4: 'Kanekalon',
    gal5: 'Dětské účesy',
    gal6: 'Clip-in copy',
    gal1_aria: 'Galerie: Střihy',
    gal2_aria: 'Galerie: Barvení',
    gal3_aria: 'Galerie: Copánky',
    gal4_aria: 'Galerie: Kanekalon',
    gal5_aria: 'Galerie: Dětské účesy',
    gal6_aria: 'Galerie: Clip-in copy',

    /* --- Process --- */
    process_tag:  'Jak to funguje',
    process_title:'Průběh <span>objednání</span>',
    process_desc: 'Objednání je jednoduché, stačí pár kroků a váš nový účes je na cestě.',
    step1_num:   '01',
    step1_title: 'Napíšete zprávu',
    step1_desc:  'Napište mi na WhatsApp nebo Instagram, nebo zavolejte.',
    step2_num:   '02',
    step2_title: 'Domluvíme účes',
    step2_desc:  'Probereme, jaký účes chcete, a navrhnu nejlepší variantu pro váš typ vlasů.',
    step3_num:   '03',
    step3_title: 'Vybereme barvu',
    step3_desc:  'Pokud zvolíte kanekalon, pomůžu vám vybrat barvu nebo kombinaci barev.',
    step4_num:   '04',
    step4_title: 'Realizace',
    step4_desc:  'Přijdete na domluvený termín a odejdete s krásným novým účesem!',

    /* --- Pricing --- */
    pricing_tag:  'Ceník',
    pricing_title:'Orientační <span>ceny služeb</span>',
    pricing_desc: 'Konečná cena závisí na délce a hustotě vlasů, složitosti účesu a délce kanekalonu. Nezávazná konzultace zdarma.',
    price1_title: 'Kadeřnické služby',
    price1_li1:   'Dámský střih od 600 Kč',
    price1_li2:   'Pánský střih od 350 Kč',
    price1_li3:   'Barvení od 1 200 Kč',
    price1_li4:   'Foukaná od 400 Kč',
    price1_li5:   'Regenerace od 500 Kč',
    price1_cta:   'Objednat se',
    price2_title: 'Braiding &amp; Kanekalon',
    price2_li1:   'Copánky jako akcent (3 ks) od 600 Kč',
    price2_li2:   'Podplet v barvě vlasů od 1 500 Kč',
    price2_li3:   'Napletení vlastního setu od 1 500 Kč',
    price2_li4:   'Dětské copánky od 500 Kč',
    price2_li5:   'Box braids, Sfinga, fake dready (výroba + napletení) od 3 500 Kč',
    price2_cta:   'Objednat se',
    price3_badge: 'Výroba na míru',
    price3_title: 'Clip-in copy',
    price3_li1:   'Pár copánků na karabině 1 200 Kč',
    price3_li2:   'Sada 4 ks od 2 200 Kč',
    price3_li3:   'Maxi copy od 900 Kč / ks',
    price3_li4:   'Barevné sady na míru od 1 500 Kč',
    price3_cta:   'Objednat se',

    /* --- Gift vouchers --- */
    nav_vouchers:  'Poukazy',
    voucher_tag:   'Dárkový poukaz',
    voucher_title: 'Darujte <span>novou změnu</span>',
    voucher_desc:  'Poukaz na střih, barvu, copánky nebo clip-in copy. Platí 12 měsíců, takže se hodí i na festivalovou sezónu.',
    vcard1_title:  'Poukaz na částku',
    vcard1_li1:    '500 Kč',
    vcard1_li2:    '1 000 Kč',
    vcard1_li3:    '2 500 Kč',
    vcard1_li4:    'nebo jiná částka podle vás',
    vcard2_title:  'Poukaz na službu',
    vcard2_li1:    'Konkrétní střih, barva nebo copánky',
    vcard2_li2:    'Clip-in copy na karabině',
    vcard2_li3:    'Cena podle ceníku',
    vcard3_badge:  'Hotový dárek',
    vcard3_title:  'Jak poukaz získáte',
    vcard3_li2:    'Tištěný v obálce k vyzvednutí v salonu',
    vcard3_li3:    'Platnost 12 měsíců',
    vcard_cta:     'Objednat poukaz',
    pricing_note: 'Ceny jsou orientační. Přesná cena po konzultaci.',

    /* --- FAQ --- */
    faq_tag:   'Časté dotazy',
    faq_title: 'Nejčastější <span>otázky</span>',
    faq_q1: 'Jak dlouho vydrží kanekalon?',
    faq_a1: 'Správně zaplétaný kanekalon vydrží 4 až 8 týdnů. Záleží na typu účesu, péči a vašem životním stylu. S dodržením doporučeného postupu péče vydrží co nejdéle.',
    faq_q2: 'Bolí zaplétání?',
    faq_a2: 'Při zaplétání může být cítit mírné tahání, zejména u copánků u kořínků. Zaplétám vždy šetrně a dle vašich pocitů. Nepříjemnou bolest si říkejte, vždy přizpůsobím techniku.',
    faq_q3: 'Můžu si umýt vlasy s kanekalonem?',
    faq_a3: 'Ano! Vlasy s kanekalonem se mýt dají, jen trochu jinak než obvykle. Doporučuji ředěný šampon, jemnou masáž pokožky hlavy a důkladné sušení. Po objednání dostanete kompletní návod na péči.',
    faq_q4: 'Je kanekalon vhodný pro děti?',
    faq_a4: 'Ano, mám s dětskými zákaznicemi bohaté zkušenosti. Používám šetrné techniky, zaplétám lehčeji a účes přizpůsobím věku a délce vlasů dítěte.',
    faq_q5: 'Poškodí kanekalon moje vlasy?',
    faq_a5: 'Ne, pokud je zaplétán správně. Kanekalon je naopak ochranný účes, vaše vlasy jsou ukryty a chráněny. Klíčem je správná technika, ne příliš těsné zaplétání a pravidelná péče o pokožku hlavy.',

    /* --- Contact --- */
    contact_tag:   'Kontakt',
    contact_title: 'Objednejte se <span>ještě dnes</span>',
    contact_desc:  'Ráda se vám ozvu co nejdříve. Napište mi na WhatsApp nebo Instagram, nebo zavolejte.',
    contact_phone_label:    'Telefon',
    contact_ig_label:       'Instagram',
    contact_location_label: 'Lokace',
    contact_location_val:   '<a href="https://www.google.com/maps/search/?api=1&amp;query=Na+Kov%C3%A1rn%C4%9B+8%2C+Praha+10" target="_blank" rel="noopener">Salon Dudek, Na Kovárně 8, Praha 10 Vršovice</a>',

    /* --- Form --- */
    form_aria: 'Kontaktní formulář',
    form_interest_label: 'O co máte zájem?',
    int_braids: 'Copánky', int_colour: 'Barvení', int_cut: 'Střih', int_dreads: 'Fake dready',
    int_clipin: 'Copy na karabině', int_ext: 'Prodloužení vlasů', int_voucher: 'Dárkový poukaz',
    form_wa: 'Napsat na WhatsApp',
    form_ig: 'Napsat na Instagram',
    form_hint: 'Zpráva se předvyplní, stačí ji odeslat. Ozvu se co nejdříve.',
    contact_salon_web: 'Web salonu',
    msg_hello: 'Dobrý den, mám zájem o',
    msg_hello_plain: 'Dobrý den, chtěla bych se objednat.',
    msg_name: 'Jméno',
    form_title:            'Napište mi',
    form_name_label:       'Vaše jméno',
    form_name_placeholder: 'Nepovinné',
    form_email_label:      'E-mail',
    form_email_placeholder:'váš@email.cz',
    form_msg_label:        'Termín nebo dotaz',
    form_msg_placeholder:  'Nepovinné. Např. kdy se vám to hodí, délka a barva vlasů...',
    form_submit:           'Objednat se',

    contact_cta: 'Objednejte si termín ještě dnes ✨',

    /* --- Footer --- */
    footer_copy: '&copy; 2026 Revu Hair and Braids, Veronika Štogrová. Všechna práva vyhrazena.',
    footer_city: 'Salon Dudek, Na Kovárně 8, Praha 10 Vršovice',

    /* --- Form feedback messages --- */
    form_err_fields: 'Prosím vyplňte jméno a zprávu.',
    form_err_email:  'Zadejte prosím platnou e-mailovou adresu.',
    form_ig_copied:  'Zprávu jsem zkopírovala. V chatu na Instagramu ji vložte a odešlete.',
    form_ig_manual:  'Otevírám Instagram. Zprávu mi tam prosím pošlete, ozvu se co nejdříve.',
  },

  en: {
    /* --- Navigation --- */
    nav_home:     'Home',
    nav_services: 'Services',
    nav_kanekalon:'Kanekalon',
    nav_clipin:   'Clip-in tails',
    nav_gallery:  'Gallery',
    nav_pricing:  'Pricing',
    nav_contact:  'Contact',

    /* --- Hero --- */
    hero_badge:    'Salon Dudek · Prague 10 Vršovice',
    hero_title_sub:'by Veronika Štogrová',
    hero_subtitle: 'Hairdresser &amp; braider in Prague 10. Braids and dreads in the colour of your hair',
    hero_tag1:     '✂️ Modern cuts',
    hero_tag2:     '🎨 Colouring',
    hero_tag3:     '🌿 Braids',
    hero_tag4:     '✨ Kanekalon',
    hero_tag5:     '💛 Protective styles',
    hero_btn_book:    '✨ Book now',
    hero_btn_pricing: 'Pricing',
    hero_scroll:   'Scroll',

    /* --- About --- */
    about_tag:     'About me',
    about_tagline: 'Healthy hair &amp; beautiful braids,<br><em>that is my passion</em>',
    about_text:    'My name is Veronika Štogrová and I specialise in hairdressing with a focus on kanekalon braiding and protective styles. I combine classic hair salon services with creative braiding, from natural looks to bold festival styles. I approach every client individually, because I believe the right hairstyle can boost confidence and bring joy to every day.',
    about_val1:    'Hair health as priority no. 1',
    about_val2:    'Individual approach for every client',
    about_val3:    'Comfort and a pleasant atmosphere',
    about_val4:    'Long-lasting results and precise workmanship',
    about_spec_title: 'My specialisations',
    spec1: 'Classic cuts',
    spec2: 'Colouring &amp; toning',
    spec3: 'Kanekalon braids',
    spec4: 'Clip-in tails',
    spec5: 'Protective styles',
    spec6: 'Festival styles',
    about_photo_label: 'Photo coming soon',
    stat1_num:   '5+',
    stat1_label: 'years of experience',
    stat2_num:   '200+',
    stat2_label: 'happy clients',
    stat3_num:   '30+',
    stat3_label: 'braid styles',

    /* --- Services --- */
    services_tag:  'Services',
    services_title:'What can I <span>do for you?</span>',
    services_desc: 'I offer complete hair care, from classic hairdressing to creative braiding and unique clip-in tails.',

    svc1_title: 'Classic hair salon services',
    svc1_desc:  'Professional hair care with emphasis on health and individuality of every client.',
    svc1_li1:   'Ladies\' cuts',
    svc1_li2:   'Men\'s cuts',
    svc1_li3:   'Children\'s cuts',
    svc1_li4:   'Blowdry &amp; styling',
    svc1_li5:   'Hair styling',
    svc1_li6:   'Colouring',
    svc1_li7:   'Toning',
    svc1_li8:   'Hair treatment',

    svc2_title: 'Braiding &amp; Kanekalon',
    svc2_desc:  'Protective and decorative styles for every occasion, from everyday wear to festivals.',
    svc2_li1:   'Kanekalon braiding',
    svc2_li2:   'Box braids',
    svc2_li3:   'Festival styles',
    svc2_li4:   'Protective styles',
    svc2_li5:   'Colourful tails',
    svc2_li6:   'Natural tails',
    svc2_li7:   'Maxi tails',
    svc2_li8:   'Children\'s styles',
    svc2_li9:   'Event &amp; party styles',

    svc3_badge: 'Unique!',
    svc3_title: 'Clip-in tails',
    svc3_desc:  'Handmade clip-in tails for an instant transformation. Elegant or extravagant, the choice is yours.',
    svc3_li1:   'Handmade',
    svc3_li2:   'Colourful &amp; extravagant',
    svc3_li3:   'Elegant natural',
    svc3_li4:   'Maxi tails',
    svc3_li5:   'Quick application',
    svc3_li6:   'Reusable',

    /* --- Target --- */
    target_tag:   'Who is it for',
    target_title: 'Perfect for <span>everyone</span>',
    target_desc:  'My services are for women, girls and children of all ages with all hair types.',
    target1_title:'Looking for a change?',
    target1_desc: 'Want a new style or to freshen up your look? We\'ll find the perfect hairstyle for you.',
    target2_title:'Children',
    target2_desc: 'We braid children\'s hair too, safely, gently and with a smile.',
    target3_title:'Festival-goers',
    target3_desc: 'A bold festival look that lasts the whole weekend and beyond.',
    target4_title:'Fine hair',
    target4_desc: 'Gentle techniques for fine and sensitive hair without unnecessary stress.',
    target5_title:'Protective styles',
    target5_desc: 'Protect your hair from damage while looking amazing.',
    target6_title:'Kanekalon beginners',
    target6_desc: 'No experience? No problem! I\'ll guide you through choosing colour and style.',

    /* --- Kanekalon benefits --- */
    kanekalon_tag:  'Why kanekalon?',
    kanekalon_title:'Benefits of <span>kanekalon</span>',
    kanekalon_desc: 'Kanekalon is a synthetic fibre that enables creative and protective styles without permanently altering your natural hair.',
    kben1_title: 'Extension without permanence',
    kben1_text:  'Achieve long hair or a striking look without colouring, chemicals or permanent damage.',
    kben2_title: 'Protects your natural hair',
    kben2_text:  'Kanekalon braids are a protective style, your natural hair grows undisturbed underneath.',
    kben3_title: 'Bold style without colouring',
    kben3_text:  'Hundreds of kanekalon colours let you experiment without the risk of colour damage.',
    kben4_title: 'Quick transformation',
    kben4_text:  'A new hairstyle in a few hours, no waiting for growth or months of maintenance.',
    kben5_title: 'Long-lasting',
    kben5_text:  'Properly braided kanekalon lasts 4 to 8 weeks. Look great for a long time with minimal upkeep.',

    /* --- Gallery --- */
    gallery_tag:  'Gallery',
    gallery_title:'Examples of <span>my work</span>',
    gallery_desc: 'Every hairstyle is unique. Browse examples of my work.',
    gallery_note: '📸 Photo gallery: coming soon',
    gallery_privacy: 'Client faces are blurred for privacy.',
    gallery_more: 'More work on Instagram',
    gal1: 'Cuts',
    gal2: 'Colouring',
    gal3: 'Braids',
    gal4: 'Kanekalon',
    gal5: 'Children\'s styles',
    gal6: 'Clip-in tails',
    gal1_aria: 'Gallery: Cuts',
    gal2_aria: 'Gallery: Colouring',
    gal3_aria: 'Gallery: Braids',
    gal4_aria: 'Gallery: Kanekalon',
    gal5_aria: 'Gallery: Children\'s styles',
    gal6_aria: 'Gallery: Clip-in tails',

    /* --- Process --- */
    process_tag:  'How it works',
    process_title:'The <span>booking process</span>',
    process_desc: 'Booking is simple, just a few steps and your new hairstyle is on its way.',
    step1_num:   '01',
    step1_title: 'Send a message',
    step1_desc:  'Message me on WhatsApp or Instagram, or give me a call.',
    step2_num:   '02',
    step2_title: 'Agree on a style',
    step2_desc:  'We\'ll discuss what style you want and I\'ll suggest the best option for your hair type.',
    step3_num:   '03',
    step3_title: 'Choose a colour',
    step3_desc:  'If you choose kanekalon, I\'ll help you pick a colour or colour combination.',
    step4_num:   '04',
    step4_title: 'Appointment',
    step4_desc:  'You come in at the agreed time and leave with a beautiful new hairstyle!',

    /* --- Pricing --- */
    pricing_tag:  'Pricing',
    pricing_title:'Approximate <span>service prices</span>',
    pricing_desc: 'Final price depends on hair length and density, style complexity and kanekalon length. Free no-obligation consultation.',
    price1_title: 'Hair salon services',
    price1_li1:   'Ladies\' cut from 600 CZK',
    price1_li2:   'Men\'s cut from 350 CZK',
    price1_li3:   'Colouring from 1,200 CZK',
    price1_li4:   'Blowdry from 400 CZK',
    price1_li5:   'Hair treatment from 500 CZK',
    price1_cta:   'Book now',
    price2_title: 'Braiding &amp; Kanekalon',
    price2_li1:   'Accent braids (3 pcs) from 600 CZK',
    price2_li2:   'Hair-coloured underbraid from 1,500 CZK',
    price2_li3:   'Braiding in your own set from 1,500 CZK',
    price2_li4:   'Children\'s braids from 500 CZK',
    price2_li5:   'Box braids, Sphinx, faux dreads (made + braided) from 3,500 CZK',
    price2_cta:   'Book now',
    price3_badge: 'Custom made',
    price3_title: 'Clip-in tails',
    price3_li1:   'Pair of carabiner braids 1,200 CZK',
    price3_li2:   'Set of 4 from 2,200 CZK',
    price3_li3:   'Maxi tails from 900 CZK / piece',
    price3_li4:   'Custom colour sets from 1,500 CZK',
    price3_cta:   'Book now',

    /* --- Gift vouchers --- */
    nav_vouchers:  'Vouchers',
    voucher_tag:   'Gift voucher',
    voucher_title: 'Give <span>a fresh new look</span>',
    voucher_desc:  'A voucher for a cut, colour, braids or clip-in tails. Valid for 12 months, so it works for festival season too.',
    vcard1_title:  'Voucher for an amount',
    vcard1_li1:    '500 CZK',
    vcard1_li2:    '1,000 CZK',
    vcard1_li3:    '2,500 CZK',
    vcard1_li4:    'or any amount you choose',
    vcard2_title:  'Voucher for a service',
    vcard2_li1:    'A specific cut, colour or braids',
    vcard2_li2:    'Carabiner clip-in braids',
    vcard2_li3:    'Price as per the price list',
    vcard3_badge:  'Ready-made gift',
    vcard3_title:  'How you get it',
    vcard3_li2:    'Printed in an envelope, pick up at the salon',
    vcard3_li3:    'Valid for 12 months',
    vcard_cta:     'Order a voucher',
    pricing_note: 'Prices are approximate. Exact price after consultation.',

    /* --- FAQ --- */
    faq_tag:   'FAQ',
    faq_title: 'Frequently asked <span>questions</span>',
    faq_q1: 'How long does kanekalon last?',
    faq_a1: 'Properly braided kanekalon lasts 4 to 8 weeks. It depends on the style, care and your lifestyle. Following the recommended care routine will maximise longevity.',
    faq_q2: 'Does braiding hurt?',
    faq_a2: 'You may feel a gentle tugging, especially near the roots. I always braid carefully and adjust to how you feel. If anything is uncomfortable, just say so, I\'ll always adapt my technique.',
    faq_q3: 'Can I wash my hair with kanekalon?',
    faq_a3: 'Yes! Hair with kanekalon can be washed, just a little differently than usual. I recommend diluted shampoo, a gentle scalp massage and thorough drying. After your appointment you\'ll receive a complete care guide.',
    faq_q4: 'Is kanekalon suitable for children?',
    faq_a4: 'Yes, I have plenty of experience with young clients. I use gentle techniques, braid more loosely and adapt the style to the child\'s age and hair length.',
    faq_q5: 'Will kanekalon damage my hair?',
    faq_a5: 'No, if braided correctly. Kanekalon is actually a protective style, your hair is hidden and protected. The key is correct technique, not braiding too tightly and regular scalp care.',

    /* --- Contact --- */
    contact_tag:   'Contact',
    contact_title: 'Book your appointment <span>today</span>',
    contact_desc:  'I\'ll get back to you as soon as possible. Message me on WhatsApp or Instagram, or give me a call.',
    contact_phone_label:    'Phone',
    contact_ig_label:       'Instagram',
    contact_location_label: 'Location',
    contact_location_val:   '<a href="https://www.google.com/maps/search/?api=1&amp;query=Na+Kov%C3%A1rn%C4%9B+8%2C+Praha+10" target="_blank" rel="noopener">Salon Dudek, Na Kovárně 8, Prague 10 Vršovice</a>',

    /* --- Form --- */
    form_aria: 'Contact form',
    form_interest_label: 'What are you interested in?',
    int_braids: 'Braids', int_colour: 'Colouring', int_cut: 'Haircut', int_dreads: 'Faux dreads',
    int_clipin: 'Clip-in tails', int_ext: 'Hair extensions', int_voucher: 'Gift voucher',
    form_wa: 'Message on WhatsApp',
    form_ig: 'Message on Instagram',
    form_hint: 'Your message is prefilled, just send it. I will reply as soon as I can.',
    contact_salon_web: 'Salon website',
    msg_hello: 'Hello, I am interested in',
    msg_hello_plain: 'Hello, I would like to book an appointment.',
    msg_name: 'Name',
    form_title:            'Send me a message',
    form_name_label:       'Your name',
    form_name_placeholder: 'Optional',
    form_email_label:      'E-mail',
    form_email_placeholder:'your@email.com',
    form_msg_label:        'Preferred date or question',
    form_msg_placeholder:  'Optional. E.g. when suits you, hair length and colour...',
    form_submit:           'Book now',

    contact_cta: 'Book your appointment today ✨',

    /* --- Footer --- */
    footer_copy: '&copy; 2026 Revu Hair and Braids, Veronika Štogrová. All rights reserved.',
    footer_city: 'Salon Dudek, Na Kovárně 8, Prague 10 Vršovice',

    /* --- Form feedback messages --- */
    form_err_fields: 'Please fill in your name and message.',
    form_err_email:  'Please enter a valid e-mail address.',
    form_ig_copied:  'Your message is copied. Paste it into the Instagram chat and send it.',
    form_ig_manual:  'Opening Instagram. Please send me your message there, I\'ll reply as soon as I can.',
  }
};

/* ============================================================
   Active language (persisted in localStorage, default: cs)
   ============================================================ */
let currentLang = localStorage.getItem('lang') || 'cs';

/* ============================================================
   setLang: apply all translations to the DOM
   ============================================================ */
function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang === 'cs' ? 'cs' : 'en';

  const t = translations[lang];

  /* Text content / innerHTML */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
    }
  });

  /* Aria-labels */
  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (t[key] !== undefined) {
      el.setAttribute('aria-label', t[key]);
    }
  });

  /* Switcher button active state */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });
}

/* ============================================================
   getCurrentLang: used by main.js for form messages
   ============================================================ */
function getCurrentLang() {
  return currentLang;
}

/* ============================================================
   getT: get a single translation string (used by main.js)
   ============================================================ */
function getT(key) {
  return (translations[currentLang] && translations[currentLang][key]) || key;
}

/* ============================================================
   initI18n: attach click handlers and run initial render
   ============================================================ */
function initI18n() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });
  setLang(currentLang);
}
