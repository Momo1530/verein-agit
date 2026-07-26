"use client";
import { useState, useEffect, useRef } from 'react';

const translations = {
  de: {
    nav_angebote: "ANGEBOTE", nav_haltung: "HALTUNG", nav_team: "TEAM", nav_kontakt: "KONTAKT", nav_anfragen: "PROJEKT ANFRAGEN",
    contact_role: "Ansprechpartnerin/Bereichsleitung:<br/>MA 13 außerschulische Kinder- und Jugendarbeit",
    contact2_role: "Ansprechpartner/Bereichsleitung:<br/>MA 11 Einzel/Gruppentrainings",
    hero_subtitle: "PRÄVENTION - INTERVENTION - VERÄNDERUNG",
    hero_headline: "Gewaltprävention,<br/>die nicht beim<br/>Workshop endet.",
    hero_desc: "Wir begleiten Kinder, Jugendliche, Fachkräfte und Einrichtungen – präventiv, nach konkreten Vorfällen und auf dem Weg zu nachhaltiger Veränderung.",
    btn_angebote: "ANGEBOTE ANSEHEN", btn_mehr: "MEHR ÜBER AGIT \u2192",
    action_header: "WAS BRAUCHT IHRE EINRICHTUNG GERADE?",
    step_1: "VORBEUGEN", step_1_desc: "Präventive Workshops und Trainings zur Sensibilisierung und Stärkung von Gruppen.",
    step_2: "HANDELN", step_2_desc: "Schnelle Intervention und professionelle Begleitung nach konkreten Vorfällen.",
    step_3: "STÄRKEN", step_3_desc: "Langfristige Begleitung auf dem Weg zu nachhaltiger Veränderung und Resilienz.",
    hintergrund_title: "Hintergrund",
    hintergrund_text: "Gewalt begegnet uns immer wieder in vielen verschiedenen Formen und Gestalten im alltäglichen Leben. Oft fällt es uns schwer richtig zu reagieren, gefährliche Situationen im Vorfeld zu erkennen oder es fehlen uns geeignete Strategien Muster von Gewalt zu durchbrechen. Man wünscht sich, dass die Situation gar nicht erst entstanden wäre oder das man schnell und unbeschadet wieder herauskommt.<br/><br/>Der Verein AGIT – Antigewalt und Gewaltprävention bietet hierbei Unterstützung durch ein breites Spektrum an Schulungen, Workshops und Trainings für Berufsgruppen, die in ihrem Berufsalltag mit Gewalt konfrontiert sind. Des Weiteren haben wir auch eine Vielzahl von Angeboten für Kinder und Jugendliche sowie Jugendgruppen. Prinzipiell haben wir es uns zur Regel gemacht, jede Schulung, jeden Workshop und jedes Training auf die Zielgruppe und deren Problemlage speziell abzustimmen.<br/><br/>Die Gewaltprävention ist ein so umfangreiches Feld, so dass wir nach Vorgesprächen immer ein individuelles Angebot anfertigen, da wir der Meinung sind, in dieser Form am besten unterstützen zu können. Ziel ist ein unterstützendes, ergänzendes Angebot zum Thema Gewaltprävention das eine intensive Auseinandersetzung zu diesem Thema ermöglicht. AGIT ist ein Angebot in Zusammenarbeit mit Cult.prävention – Verein Cult – Jugendarbeit wirkt.",
    form_title: "Treten Sie mit uns in Kontakt",
    form_subtitle: "Schreiben Sie uns Ihr Anliegen, wir melden uns verlässlich zurück.",
    form_name: "Name", form_email: "E-Mail", form_phone: "Telefonnummer (optional)", form_subject: "Betreff", form_message: "Nachricht", form_submit: "Nachricht senden", form_success: "Ihre Nachricht wurde erfolgreich gesendet!",
    footer_desc: "Verein Antigewalt und Gewaltprävention", kontakt_title: "Kontakt", impressum_title: "Impressum"
  },
  tr: {
    nav_angebote: "TEKLİFLER", nav_haltung: "TUTUM", nav_team: "EKİP", nav_kontakt: "İLETİŞİM", nav_anfragen: "PROJE TALEP ET",
    hero_subtitle: "ÖNLEME - MÜDAHALE - DEĞİŞİM",
    hero_headline: "Atölye ile bitmeyen<br/>şiddet<br/>önleme.",
    hero_desc: "Çocuklara, gençlere, uzmanlara ve kurumlara eşlik ediyoruz – önleyici olarak, somut olaylardan sonra ve sürdürülebilir değişim yolunda.",
    btn_angebote: "TEKLİFLERİ GÖR", btn_mehr: "AGIT HAKKINDA DAHA FAZLA \u2192",
    action_header: "KURUMUNUZUN ŞU ANDA NEYE İHTİYACI VAR?",
    step_1: "ÖNLEME", step_1_desc: "Grupları bilinçlendirmek ve güçlendirmek için önleyici atölye çalışmaları ve eğitimler.",
    step_2: "HAREKETE GEÇME", step_2_desc: "Somut olaylardan sonra hızlı müdahale ve profesyonel rehberlik.",
    step_3: "GÜÇLENDİRME", step_3_desc: "Sürdürülebilir değişim ve psikolojik dayanıklılık yolunda uzun vadeli rehberlik.",
    hintergrund_title: "Arka Plan",
    hintergrund_text: "Şiddet, günlük yaşantımızda pek çok farklı biçim ve şekilde sürekli karşımıza çıkmaktadır. Çoğu zaman doğru tepkiyi vermek, tehlikeli durumları önceden fark etmek zordur veya şiddet kalıplarını kırmak için uygun stratejilerden yoksunuzdur. İnsan, bu durumun hiç ortaya çıkmamış olmasını veya oradan hızlı ve yara almadan kurtulmayı diler.<br/><br/>Biz 'Cult – Gençlik Çalışmaları İşe Yarar' derneği olarak, mesleki yaşamlarında şiddetle karşı karşıya kalan meslek gruplarına yönelik geniş bir eğitim, atölye ve seminer yelpazesi ile destek sunuyoruz. Ayrıca çocuklar, gençler ve gençlik grupları için de çeşitli tekliflerimiz bulunmaktadır. Prensip olarak her eğitimi, her atölyeyi ve her semineri hedef gruba ve onların sorunlarına özel olarak uyarlamayı kural edindik.<br/><br/>Şiddeti önleme öylesine geniş bir alandır ki, ön görüşmelerden sonra her zaman kişiye özel bir teklif hazırlarız, çünkü bu şekilde en iyi desteği sağlayabileceğimize inanıyoruz. Amaç, şiddeti önleme konusunda bu konunun yoğun bir şekilde ele alınmasını sağlayan destekleyici, tamamlayıcı bir teklif sunmaktır.",
    form_title: "Bizimle İletişime Geçin", form_subtitle: "Talebinizi bize yazın, size güvenilir bir şekilde geri dönüş yapacağız.", form_name: "İsim", form_email: "E-Posta", form_phone: "Telefon Numarası (isteğe bağlı)", form_subject: "Konu", form_message: "Mesaj", form_submit: "Mesajı Gönder", form_success: "Mesajınız başarıyla gönderildi!",
    footer_desc: "Şiddet Karşıtı ve Şiddeti Önleme Derneği", kontakt_title: "İletişim", impressum_title: "Künye"
  },
  ar: {
    nav_angebote: "العروض", nav_haltung: "الموقف", nav_team: "الفريق", nav_kontakt: "اتصل بنا", nav_anfragen: "طلب مشروع",
    hero_subtitle: "الوقاية - التدخل - التغيير",
    hero_headline: "الوقاية من العنف،<br/>التي لا تنتهي<br/>في ورشة العمل.",
    hero_desc: "نحن نرافق الأطفال والشباب والمهنيين والمؤسسات - بشكل وقائي، بعد أحداث محددة وعلى طريق التغيير المستدام.",
    btn_angebote: "عرض العروض", btn_mehr: "المزيد عن AGIT \u2192",
    action_header: "ما الذي تحتاجه مؤسستك الآن؟",
    step_1: "الوقاية", step_1_desc: "ورش عمل وتدريبات وقائية لزيادة الوعي وتقوية المجموعات.",
    step_2: "العمل", step_2_desc: "تدخل سريع وتوجيه مهني بعد حوادث محددة.",
    step_3: "التعزيز", step_3_desc: "دعم طويل الأمد على طريق التغيير المستدام والمرونة.",
    hintergrund_title: "خلفية",
    hintergrund_text: "يواجهنا العنف مرارًا وتكرارًا بأشكال وصور مختلفة في الحياة اليومية. غالبًا ما يصعب علينا التفاعل بشكل صحيح، أو التعرف على المواقف الخطيرة مسبقًا، أو نفتقر إلى الاستراتيجيات المناسبة لكسر أنماط العنف. يتمنى المرء ألا ينشأ الموقف في المقام الأول أو أن يخرج منه بسرعة وبدون أذى.<br/><br/>نحن في جمعية 'Cult - العمل الشبابي فعال' نقدم الدعم من خلال مجموعة واسعة من الدورات التدريبية وورش العمل للمجموعات المهنية التي تواجه العنف في حياتها اليومية. علاوة على ذلك، لدينا أيضًا مجموعة متنوعة من العروض للأطفال والشباب وكذلك مجموعات الشباب. كقاعدة عامة، نجعل من قاعدتنا تصميم كل تدريب وكل ورشة عمل خصيصًا لتناسب المجموعة المستهدفة ومشاكلها.<br/><br/>الوقاية من العنف مجال واسع لدرجة أننا نعد دائمًا عرضًا فرديًا بعد المناقشات الأولية، لأننا نعتقد أن هذه هي أفضل طريقة للدعم. الهدف هو توفير عرض داعم ومكمل حول موضوع الوقاية من العنف والذي يتيح فحصًا مكثفًا لهذا الموضوع.",
    form_title: "تواصل معنا", form_subtitle: "اكتب لنا طلبك وسنرد عليك بشكل موثوق.", form_name: "الاسم", form_email: "البريد الإلكتروني", form_phone: "رقم الهاتف (اختياري)", form_subject: "الموضوع", form_message: "الرسالة", form_submit: "إرسال الرسالة", form_success: "تم إرسال رسالتك بنجاح!",
    footer_desc: "جمعية مكافحة العنف والوقاية منه", kontakt_title: "اتصل", impressum_title: "بصمة"
  },
  ku: {
    nav_angebote: "PÊŞNIYAR", nav_haltung: "HELWEST", nav_team: "TÎM", nav_kontakt: "TÊKILÎ", nav_anfragen: "PROJE BIXWAZE",
    hero_subtitle: "PÊŞÎLÊGIRTIN - DESTÊWERDAN - GUHERÎN",
    hero_headline: "Pêşîlêgirtina şîdetê,<br/>ku bi atolyeyê<br/>naqede.",
    hero_desc: "Em bi zarok, ciwan, pispor û saziyan re hevalbendiyê dikin - ji bo pêşîlêgirtinê, piştî bûyerên taybetî û li ser riya guherîna domdar.",
    btn_angebote: "PÊŞNIYARAN BIBÎNE", btn_mehr: "ZÊDETIR LI SER AGIT \u2192",
    action_header: "SAZIYA TE NIHA HEWCEYÎ ÇI YE?",
    step_1: "PÊŞÎLÊGIRTIN", step_1_desc: "Atolyeyên pêşîlêgirtinê û perwerde ji bo bilindkirina hişyariyê û xurtkirina koman.",
    step_2: "ÇALAKÎ", step_2_desc: "Destêwerdana bilez û rêberiya pîşeyî piştî bûyerên taybetî.",
    step_3: "XURTKIRIN", step_3_desc: "Rêberiya demdirêj li ser riya guherîna domdar û rehetiyê.",
    hintergrund_title: "Paşxane",
    hintergrund_text: "Şîdet di jiyana rojane de bi gelek form û şêweyên cihêreng tim û tim derdikeve pêşiya me. Gelek caran ji me re zehmet e ku em bertekek rast nîşan bidin, rewşên xeternak ji berê de nas bikin an jî stratejiyên guncaw ji bo şikandina qalibên şîdetê kêm in. Mirov dixwaze ku ew rewş qet çênebûya an jî bi lez û bê zirar jê derkeve.<br/><br/>Em wekî komeleya 'Cult - Xebatên Ciwanan Bibandor e' bi riya perwerde, atolye û semînerên cihêreng ji bo komên pîşeyî yên ku di jiyana xwe ya kar de rastî şîdetê tên, piştgiriyê pêşkêş dikin. Wekî din, ji bo zarok, ciwan û komên ciwanan jî gelek pêşniyarên me hene. Wekî prensîb, me kiriye qaîde ku her perwerde û atolyeyekê bi taybetî ji bo koma armanc û pirsgirêkên wan amade bikin.<br/><br/>Pêşîlêgirtina şîdetê qadek ewqas berfireh e ku em her gav piştî hevdîtinên destpêkê pêşniyarek kesane amade dikin, ji ber ku em bawer dikin ku bi vî rengî em dikarin baştirîn piştgiriyê bidin. Armanc ew e ku ji bo pêşîlêgirtina şîdetê pêşniyarek piştgirî û temamker were pêşkêş kirin ku destûrê dide nîqaşek berfireh li ser vê mijarê.",
    form_title: "Bi me re têkiliyê daynin", form_subtitle: "Daxwaza xwe ji me re binivîsin, em ê bi pêbawerî bersiva we bidin.", form_name: "Nav", form_email: "E-Mail", form_phone: "Hejmara Telefonê (vebijarkî)", form_subject: "Mijar", form_message: "Peyam", form_submit: "Peyamê Bişîne", form_success: "Peyama we bi serkeftî hate şandin!",
    footer_desc: "Komeleya Dijî Şîdetê û Pêşîlêgirtinê", kontakt_title: "Têkilî", impressum_title: "Nasname"
  },
  bks: {
    nav_angebote: "PONUDE", nav_haltung: "STAV", nav_team: "TIM", nav_kontakt: "KONTAKT", nav_anfragen: "ZATRAŽI PROJEKAT",
    hero_subtitle: "PREVENCIJA - INTERVENCIJA - PROMJENA",
    hero_headline: "Prevencija nasilja,<br/>koja ne završava<br/>s radionicom.",
    hero_desc: "Pratimo djecu, mlade, stručnjake i institucije – preventivno, nakon konkretnih incidenata i na putu ka održivoj promjeni.",
    btn_angebote: "POGLEDAJ PONUDE", btn_mehr: "VIŠE O AGIT \u2192",
    action_header: "ŠTA VAŠA INSTITUCIJA TRENUTNO TREBA?",
    step_1: "SPRIJEČITI", step_1_desc: "Preventivne radionice i obuke za podizanje svijesti i osnaživanje grupa.",
    step_2: "DJELOVATI", step_2_desc: "Brza intervencija i stručno vodstvo nakon konkretnih incidenata.",
    step_3: "OSNAŽITI", step_3_desc: "Dugoročna podrška na putu ka održivoj promjeni i otpornosti.",
    hintergrund_title: "Pozadina",
    hintergrund_text: "Nasilje se stalno pojavljuje u mnogim različitim oblicima i formama u svakodnevnom životu. Često nam je teško pravilno reagovati, unaprijed prepoznati opasne situacije ili nam nedostaju odgovarajuće strategije za prekidanje obrazaca nasilja. Čovjek poželi da do situacije uopšte nije ni došlo ili da se iz nje brzo i neozlijeđeno izvuče.<br/><br/>Mi iz udruženja 'Cult - Rad sa mladima djeluje' nudimo podršku kroz širok spektar obuka, radionica i treninga za profesionalne grupe koje se u svojoj svakodnevici suočavaju sa nasiljem. Pored toga, imamo i raznovrsne ponude za djecu, mlade kao i omladinske grupe. U principu smo uveli pravilo da svaku obuku, radionicu i trening posebno prilagodimo ciljnoj grupi i njihovim problemima.<br/><br/>Prevencija nasilja je toliko opširno područje da nakon uvodnih razgovora uvijek pripremamo individualnu ponudu, jer smatramo da na taj način možemo najbolje pružiti podršku. Cilj je pružiti podržavajuću, dopunsku ponudu na temu prevencije nasilja koja omogućava intenzivno bavljenje ovom temom.",
    form_title: "Stupite u kontakt s nama", form_subtitle: "Napišite nam svoj zahtjev, pouzdano ćemo vam odgovoriti.", form_name: "Ime", form_email: "E-Mail", form_phone: "Broj telefona (opcionalno)", form_subject: "Predmet", form_message: "Poruka", form_submit: "Pošalji poruku", form_success: "Vaša poruka je uspješno poslana!",
    footer_desc: "Udruženje protiv nasilja i prevencije", kontakt_title: "Kontakt", impressum_title: "Impresum"
  }
};

export default function Home() {
  const [lang, setLang] = useState('de');
  const t = translations[lang] || translations.de;
  const isRtl = lang === 'ar';
  
  const [menuOpen, setMenuOpen] = useState(false);
  
  const scrollTextContainerRef = useRef(null);
  const scrollCharsRef = useRef([]);
  const hintergrundSectionRef = useRef(null);
  const ansprechpartnerSectionRef = useRef(null);
  
  const [formSuccess, setFormSuccess] = useState(false);

  // Initialize scroll chars
  useEffect(() => {
    if (scrollTextContainerRef.current) {
      // Clear old spans
      scrollTextContainerRef.current.innerHTML = '';
      
      // Parse HTML with <br/> safely
      const parts = t.hintergrund_text.split('<br/><br/>');
      
      parts.forEach((part, pIdx) => {
        const chars = part.split('');
        chars.forEach(char => {
          const span = document.createElement('span');
          span.className = 'scroll-char';
          span.textContent = char;
          scrollTextContainerRef.current.appendChild(span);
        });
        if (pIdx < parts.length - 1) {
          scrollTextContainerRef.current.appendChild(document.createElement('br'));
          scrollTextContainerRef.current.appendChild(document.createElement('br'));
        }
      });
      
      scrollCharsRef.current = document.querySelectorAll('.scroll-char');
    }
  }, [t.hintergrund_text]);

  // Scroll logic
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return; // Keine Scroll-Effekte auf Handy

    const handleScroll = () => {
      // Hintergrund Scroll Text
      if (hintergrundSectionRef.current && scrollCharsRef.current.length > 0) {
        const rect = hintergrundSectionRef.current.getBoundingClientRect();
        const scrollableDistance = rect.height - window.innerHeight;
        if (scrollableDistance > 0) {
          let p = rect.top <= 0 ? -rect.top / scrollableDistance : 0;
          p = Math.max(0, Math.min(1, p));
          const charsToReveal = Math.floor(p * scrollCharsRef.current.length);
          scrollCharsRef.current.forEach((char, index) => {
            char.style.opacity = index < charsToReveal ? 1 : 0.15;
          });
        }
      }
      
      // Ansprechpartner Scroll
      const ansprechSection = ansprechpartnerSectionRef.current;
      if (ansprechSection) {
        const rect = ansprechSection.getBoundingClientRect();
        const scrollableDistance = rect.height - window.innerHeight;
        
        if (scrollableDistance > 0) {
          let p = rect.top <= 0 ? -rect.top / scrollableDistance : 0;
          p = Math.max(0, Math.min(1, p));
          
          const img1 = document.getElementById('ansprech-img-1');
          const img2 = document.getElementById('ansprech-img-2');
          const text1 = document.getElementById('ansprech-text-1');
          const text2 = document.getElementById('ansprech-text-2');
          const startX = -window.innerWidth;
          
          if (p >= 0.80) {
            ansprechSection.classList.add('is-finale');
            if (img1) img1.style.transform = '';
            if (img2) img2.style.transform = '';
            if (text1) text1.style.transform = '';
            if (text2) text2.style.transform = '';
          } else {
            ansprechSection.classList.remove('is-finale');
            
            let img1P = Math.max(0, Math.min(1, p / 0.10));
            if (img1) img1.style.transform = `translateX(${startX + (0 - startX) * img1P}px)`;
            
            let text1P = Math.max(0, Math.min(1, (p - 0.10) / 0.10));
            if (text1) {
              if (p >= 0.45) {
                text1.style.opacity = '0';
              } else {
                text1.style.opacity = '1';
                text1.style.transform = `translate(${startX + (0 - startX) * text1P}px, -50%)`;
              }
            }
            
            let img2P = Math.max(0, Math.min(1, (p - 0.40) / 0.10));
            if (img2) img2.style.transform = `translateX(${startX + (-40 - startX) * img2P}px)`;
            
            let text2P = Math.max(0, Math.min(1, (p - 0.50) / 0.10));
            if (text2) {
              if (p < 0.45) {
                text2.style.opacity = '0';
              } else {
                text2.style.opacity = '1';
                text2.style.transform = `translate(${startX + (0 - startX) * text2P}px, -50%)`;
              }
            }
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTeamClick = (e) => {
    e.preventDefault();
    const section = ansprechpartnerSectionRef.current;
    if (section) {
      const rect = section.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      const targetY = (rect.top + window.scrollY) + (scrollableDistance * 0.9);
      window.scrollTo({ top: targetY, behavior: 'auto' });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSuccess(false);

    const formData = new FormData(e.target);
    formData.append('lang', lang);

    try {
      const res = await fetch('/mail.php', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.success) {
        setFormSuccess(true);
        e.target.reset();
        setTimeout(() => setFormSuccess(false), 6000);
      }
    } catch {
      // silent fail
    }
  };

  return (
    <div id="app" dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="navbar">
        <div className="logo">
          <svg className="nav-logo" viewBox="0 0 1024 1024" width="auto" height="90">
            <defs>
              <filter id="remove-white-header">
                <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -2 -2 -2 0 5" />
              </filter>
            </defs>
            <image href="/agit_logo.jpg" width="1024" height="1024" filter="url(#remove-white-header)" />
          </svg>
        </div>
        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          <a href="/angebote" onClick={() => setMenuOpen(false)}>{t.nav_angebote}</a>
          <a href="/haltung" onClick={() => setMenuOpen(false)}>{t.nav_haltung}</a>
          <a href="/team" onClick={() => setMenuOpen(false)}>{t.nav_team}</a>
          <a href="/kontakt" onClick={() => setMenuOpen(false)}>{t.nav_kontakt}</a>
        </nav>
        <div className="nav-actions">
          <div className="lang-selector">
            <select id="langSwitch" value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="de">DE</option>
              <option value="tr">TR</option>
              <option value="ar">AR</option>
              <option value="ku">KU</option>
              <option value="bks">BKS</option>
            </select>
          </div>
          <a href="/kontakt" className="btn btn-primary">{t.nav_anfragen}</a>
          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menü">
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
          </button>
        </div>
      </header>

      <main>
        <section className="hero" style={{ flexDirection: isRtl ? 'row-reverse' : 'row' }}>
          <div className="hero-content">
            <p className="subtitle">{t.hero_subtitle}</p>
            <h1 className="headline" dangerouslySetInnerHTML={{ __html: t.hero_headline }}></h1>
            <p className="description">{t.hero_desc}</p>
            <div className="hero-actions">
              <a href="#angebote" className="btn btn-solid">{t.btn_angebote}</a>
              <a href="#about" className="btn btn-link">{t.btn_mehr}</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/hero.jpg" alt="Group discussion on violence prevention" />
          </div>
        </section>

        <section className="action-steps">
          <div className="action-steps-header">
            <p>{t.action_header}</p>
          </div>
          <div className="steps-grid">
            <a href="#vorbeugen" className="step">
              <span className="step-num">01</span>
              <h3>{t.step_1}</h3>
              <p className="step-desc">{t.step_1_desc}</p>
              <span className="arrow">&rarr;</span>
            </a>
            <a href="#handeln" className="step">
              <span className="step-num">02</span>
              <h3>{t.step_2}</h3>
              <p className="step-desc">{t.step_2_desc}</p>
              <span className="arrow">&rarr;</span>
            </a>
            <a href="#staerken" className="step">
              <span className="step-num">03</span>
              <h3>{t.step_3}</h3>
              <p className="step-desc">{t.step_3_desc}</p>
              <span className="arrow">&rarr;</span>
            </a>
          </div>
        </section>

        <section className="hintergrund-scroll-section" id="hintergrund-section" ref={hintergrundSectionRef}>
          <div className="hintergrund-sticky-container">
            <div className="hintergrund-content">
              <h2 className="hintergrund-title">{t.hintergrund_title}</h2>
              <div id="scrollTextContainer" ref={scrollTextContainerRef}>
                {/* Dynamically populated by JS to wrap chars in spans */}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-section" id="kontakt-formular">
          <div className="contact-form-container">
            <h2 className="form-title">{t.form_title}</h2>
            <p className="form-subtitle">{t.form_subtitle}</p>
            
            <form id="main-contact-form" className="glass-form" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">{t.form_name}</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">{t.form_email}</label>
                  <input type="email" id="email" name="email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">{t.form_phone}</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">{t.form_subject}</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">{t.form_message}</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn">{t.form_submit}</button>
              {formSuccess && (
                <div id="form-success-msg" className="form-success">{t.form_success}</div>
              )}
            </form>
          </div>
        </section>

        <section className="ansprechpartner-scroll-section" id="ansprechpartner-section" dir="ltr" ref={ansprechpartnerSectionRef}>
          <div className="ansprech-sticky-container">
            <div className="ansprech-split-layout">
              <div className="ansprech-person" id="person-1">
                <div className="ansprech-image-wrapper" id="ansprech-img-1" style={{ zIndex: 1 }}>
                  <img src="/kuebra.png" alt="Kübra Erik" onError={(e) => { e.target.onerror = null; e.target.src='/mann.svg'; }} />
                </div>
                <div className="ansprech-details" id="ansprech-text-1">
                  <h3>Kübra Erik</h3>
                  <p className="ansprech-role" dangerouslySetInnerHTML={{ __html: t.contact_role || "Ansprechpartnerin/Bereichsleitung:<br/>MA 13 außerschulische Kinder- und Jugendarbeit" }}></p>
                  <div className="ansprech-contact-info">
                    <p><span><strong>E-Mail:</strong></span> <a href="mailto:k.erik@verein-agit.at">k.erik@verein-agit.at</a></p>
                    <p><span><strong>Mobil:</strong></span> +43/676/3668820</p>
                  </div>
                </div>
              </div>
              <div className="ansprech-person" id="person-2">
                <div className="ansprech-image-wrapper" id="ansprech-img-2" style={{ zIndex: 2 }}>
                  <img src="/murat.png" alt="Murat Percin" onError={(e) => { e.target.onerror = null; e.target.src='/mann.svg'; }} />
                </div>
                <div className="ansprech-details" id="ansprech-text-2">
                  <h3>Murat Percin, BA</h3>
                  <p className="ansprech-role" dangerouslySetInnerHTML={{ __html: t.contact2_role || "Ansprechpartner/Bereichsleitung:<br/>MA 11 Einzel/Gruppentrainings" }}></p>
                  <div className="ansprech-contact-info">
                    <p><span><strong>E-Mail:</strong></span> <a href="mailto:m.percin@verein-agit.at">m.percin@verein-agit.at</a></p>
                    <p><span><strong>Mobil:</strong></span> +43/676/3668823</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <footer id="impressum" className="site-footer">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <svg className="nav-logo" viewBox="0 0 1024 1024" width="auto" height="90">
                  <defs>
                    <filter id="remove-white-footer">
                      <feColorMatrix type="matrix" values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  -2 -2 -2 0 5" />
                    </filter>
                  </defs>
                  <image href="/agit_logo.jpg" width="1024" height="1024" filter="url(#remove-white-footer)" />
                </svg>
              </div>
              <p className="footer-desc">{t.footer_desc}</p>
            </div>
            
            <div className="footer-contact">
              <h4>{t.kontakt_title}</h4>
              <p>Gerichtsgasse 1<br/>1230 Wien<br/>Österreich</p>
              <p>Telefon: +43/1/524 88 73<br/>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
            </div>

            <div className="footer-legal">
              <h4>{t.impressum_title}</h4>
              <p>ZVR-Zahl: (bitte einfügen)<br/>Behörde: LPD Wien</p>
              <p className="small-text"><a href="/datenschutz">Datenschutzerklärung</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Verein AGIT. Alle Rechte vorbehalten.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
