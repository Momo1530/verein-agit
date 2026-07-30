"use client";
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from './hooks/useLanguage';

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
    hintergrund_text: "Gewalt begegnet uns immer wieder in vielen verschiedenen Formen und Gestalten im alltäglichen Leben. Oft fällt es uns schwer richtig zu reagieren, gefährliche Situationen im Vorfeld zu erkennen oder es fehlen uns geeignete Strategien Muster von Gewalt zu durchbrechen. Man wünscht sich, dass die Situation gar nicht erst entstanden wäre oder das man schnell und unbeschadet wieder herauskommt.<br/><br/>Der Verein AGIT – Antigewalt und Gewaltprävention bietet hierbei Unterstützung durch ein breites Spektrum an Schulungen, Workshops und Trainings für Berufsgruppen, die in ihrem Berufsalltag mit Gewalt konfrontiert sind. Des Weiteren haben wir auch eine Vielzahl von Angeboten für Kinder und Jugendliche sowie Jugendgruppen. Prinzipiell haben wir es uns zur Regel gemacht, jede Schulung, jeden Workshop und jedes Training auf die Zielgruppe und deren Problemlage speziell abzustimmen.<br/><br/>Die Gewaltprävention ist ein so umfangreiches Feld, so dass wir nach Vorgesprächen immer ein individuelles Angebot anfertigen, da wir der Meinung sind, in dieser Form am besten unterstützen zu können. Ziel ist ein unterstützendes, ergänzendes Angebot zum Thema Gewaltprävention das eine intensive Auseinandersetzung zu diesem Thema ermöglicht.",
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
    hintergrund_text: "Şiddet, günlük yaşantımızda pek çok farklı biçim ve şekilde sürekli karşımıza çıkmaktadır. Çoğu zaman doğru tepkiyi vermek, tehlikeli durumları önceden fark etmek zordur veya şiddet kalıplarını kırmak için uygun stratejilerden yoksunuzdur. İnsan, bu durumun hiç ortaya çıkmamış olmasını veya oradan hızlı ve yara almadan kurtulmayı diler.<br/><br/>AGIT Derneği – Şiddet Karşıtı ve Şiddeti Önleme olarak, mesleki yaşamlarında şiddetle karşı karşıya kalan meslek gruplarına yönelik geniş bir eğitim, atölye ve seminer yelpazesi ile destek sunuyoruz. Ayrıca çocuklar, gençler ve gençlik grupları için de çeşitli tekliflerimiz bulunmaktadır. Prensip olarak her eğitimi, her atölyeyi ve her semineri hedef gruba ve onların sorunlarına özel olarak uyarlamayı kural edindik.<br/><br/>Şiddeti önleme öylesine geniş bir alandır ki, ön görüşmelerden sonra her zaman kişiye özel bir teklif hazırlarız, çünkü bu şekilde en iyi desteği sağlayabileceğimize inanıyoruz. Amaç, şiddeti önleme konusunda bu konunun yoğun bir şekilde ele alınmasını sağlayan destekleyici, tamamlayıcı bir teklif sunmaktır.",
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
    hintergrund_text: "يواجهنا العنف مرارًا وتكرارًا بأشكال وصور مختلفة في الحياة اليومية. غالبًا ما يصعب علينا التفاعل بشكل صحيح، أو التعرف على المواقف الخطيرة مسبقًا، أو نفتقر إلى الاستراتيجيات المناسبة لكسر أنماط العنف. يتمنى المرء ألا ينشأ الموقف في المقام الأول أو أن يخرج منه بسرعة وبدون أذى.<br/><br/>نحن في جمعية AGIT – مكافحة العنف والوقاية منه نقدم الدعم من خلال مجموعة واسعة من الدورات التدريبية وورش العمل للمجموعات المهنية التي تواجه العنف في حياتها اليومية. علاوة على ذلك، لدينا أيضًا مجموعة متنوعة من العروض للأطفال والشباب وكذلك مجموعات الشباب. كقاعدة عامة، نجعل من قاعدتنا تصميم كل تدريب وكل ورشة عمل خصيصًا لتناسب المجموعة المستهدفة ومشاكلها.<br/><br/>الوقاية من العنف مجال واسع لدرجة أننا نعد دائمًا عرضًا فرديًا بعد المناقشات الأولية، لأننا نعتقد أن هذه هي أفضل طريقة للدعم. الهدف هو توفير عرض داعم ومكمل حول موضوع الوقاية من العنف والذي يتيح فحصًا مكثفًا لهذا الموضوع.",
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
    hintergrund_text: "Şîdet di jiyana rojane de bi gelek form û şêweyên cihêreng tim û tim derdikeve pêşiya me. Gelek caran ji me re zehmet e ku em bertekek rast nîşan bidin, rewşên xeternak ji berê de nas bikin an jî stratejiyên guncaw ji bo şikandina qalibên şîdetê kêm in. Mirov dixwaze ku ew rewş qet çênebûya an jî bi lez û bê zirar jê derkeve.<br/><br/>Em wekî komeleya AGIT – Dijî Şîdetê û Pêşîlêgirtinê bi riya perwerde, atolye û semînerên cihêreng ji bo komên pîşeyî yên ku di jiyana xwe ya kar de rastî şîdetê tên, piştgiriyê pêşkêş dikin. Wekî din, ji bo zarok, ciwan û komên ciwanan jî gelek pêşniyarên me hene. Wekî prensîb, me kiriye qaîde ku her perwerde û atolyeyekê bi taybetî ji bo koma armanc û pirsgirêkên wan amade bikin.<br/><br/>Pêşîlêgirtina şîdetê qadek ewqas berfireh e ku em her gav piştî hevdîtinên destpêkê pêşniyarek kesane amade dikin, ji ber ku em bawer dikin ku bi vî rengî em dikarin baştirîn piştgiriyê bidin. Armanc ew e ku ji bo pêşîlêgirtina şîdetê pêşniyarek piştgirî û temamker were pêşkêş kirin ku destûrê dide nîqaşek berfireh li ser vê mijarê.",
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
    hintergrund_text: "Nasilje se stalno pojavljuje u mnogim različitim oblicima i formama u svakodnevnom životu. Često nam je teško pravilno reagovati, unaprijed prepoznati opasne situacije ili nam nedostaju odgovarajuće strategije za prekidanje obrazaca nasilja. Čovjek poželi da do situacije uopšte nije ni došlo ili da se iz nje brzo i neozlijeđeno izvuče.<br/><br/>Mi iz udruženja AGIT – Protiv nasilja i prevencije nudimo podršku kroz širok spektar obuka, radionica i treninga za profesionalne grupe koje se u svojoj svakodnevici suočavaju sa nasiljem. Pored toga, imamo i raznovrsne ponude za djecu, mlade kao i omladinske grupe. U principu smo uveli pravilo da svaku obuku, radionicu i trening posebno prilagodimo ciljnoj grupi i njihovim problemima.<br/><br/>Prevencija nasilja je toliko opširno područje da nakon uvodnih razgovora uvijek pripremamo individualnu ponudu, jer smatramo da na taj način možemo najbolje pružiti podršku. Cilj je pružiti podržavajuću, dopunsku ponudu na temu prevencije nasilja koja omogućava intenzivno bavljenje ovom temom.",
    form_title: "Stupite u kontakt s nama", form_subtitle: "Napišite nam svoj zahtjev, pouzdano ćemo vam odgovoriti.", form_name: "Ime", form_email: "E-Mail", form_phone: "Broj telefona (opcionalno)", form_subject: "Predmet", form_message: "Poruka", form_submit: "Pošalji poruku", form_success: "Vaša poruka je uspješno poslana!",
    footer_desc: "Udruženje protiv nasilja i prevencije", kontakt_title: "Kontakt", impressum_title: "Impresum"
  },
  fa: {
    nav_angebote: "خدمات", nav_haltung: "موضع‌گیری", nav_team: "تیم", nav_kontakt: "تماس", nav_anfragen: "درخواست پروژه",
    contact_role: "مخاطب/مدیر بخش:<br/>MA 13 کار با کودکان و نوجوانان خارج از مدرسه",
    contact2_role: "مخاطب/مدیر بخش:<br/>MA 11 آموزش‌های فردی/گروهی",
    hero_subtitle: "پیشگیری - مداخله - تغییر",
    hero_headline: "پیشگیری از خشونت،<br/>که با کارگاه<br/>پایان نمی‌یابد.",
    hero_desc: "ما کودکان، نوجوانان، متخصصان و مؤسسات را همراهی می‌کنیم – پیشگیرانه، پس از وقایع مشخص و در مسیر تغییر پایدار.",
    btn_angebote: "مشاهده خدمات", btn_mehr: "بیشتر درباره AGIT →",
    action_header: "مؤسسه شما در حال حاضر به چه چیزی نیاز دارد؟",
    step_1: "پیشگیری", step_1_desc: "کارگاه‌ها و آموزش‌های پیشگیرانه برای افزایش آگاهی و تقویت گروه‌ها.",
    step_2: "اقدام", step_2_desc: "مداخله سریع و راهنمایی حرفه‌ای پس از وقایع مشخص.",
    step_3: "توانمندسازی", step_3_desc: "همراهی بلندمدت در مسیر تغییر پایدار و تاب‌آوری.",
    hintergrund_title: "پیشینه",
    hintergrund_text: "خشونت به اشکال و صورت‌های گوناگون بارها و بارها در زندگی روزمره با ما روبرو می‌شود. اغلب برای ما دشوار است که واکنش درستی نشان دهیم، موقعیت‌های خطرناک را از پیش تشخیص دهیم یا استراتژی‌های مناسبی برای شکستن الگوهای خشونت داشته باشیم. انسان آرزو می‌کند که کاش آن موقعیت هرگز پیش نمی‌آمد یا اینکه بتواند سریع و بدون آسیب از آن خارج شود.<br/><br/>انجمن AGIT – ضدخشونت و پیشگیری از خشونت با ارائه طیف گسترده‌ای از آموزش‌ها، کارگاه‌ها و دوره‌های آموزشی برای گروه‌های حرفه‌ای که در کار روزمره خود با خشونت مواجه هستند، حمایت ارائه می‌دهد. علاوه بر این، ما همچنین طیف وسیعی از خدمات را برای کودکان، نوجوانان و گروه‌های جوانان داریم. اصولاً ما آن را به عنوان قاعده خود قرار داده‌ایم که هر آموزش، هر کارگاه و هر دوره را به طور خاص برای گروه هدف و مشکلات آن‌ها تنظیم کنیم.<br/><br/>پیشگیری از خشونت چنان حوزه گسترده‌ای است که ما پس از گفتگوهای اولیه همیشه یک پیشنهاد فردی تهیه می‌کنیم، زیرا معتقدیم به این شکل می‌توانیم بهترین حمایت را ارائه دهیم. هدف ارائه یک پیشنهاد حمایتی و تکمیلی در زمینه پیشگیری از خشونت است که امکان بررسی عمیق این موضوع را فراهم می‌کند.",
    form_title: "با ما در تماس باشید", form_subtitle: "درخواست خود را برای ما بنویسید، ما به طور قابل اعتماد پاسخ خواهیم داد.", form_name: "نام", form_email: "ایمیل", form_phone: "شماره تلفن (اختیاری)", form_subject: "موضوع", form_message: "پیام", form_submit: "ارسال پیام", form_success: "پیام شما با موفقیت ارسال شد!",
    footer_desc: "انجمن ضدخشونت و پیشگیری از خشونت", kontakt_title: "تماس", impressum_title: "مشخصات"
  }
};

export default function Home() {
  const { lang, setLang } = useLanguage();
  const t = translations[lang] || translations.de;
  const isRtl = lang === 'ar';
  
  const [menuOpen, setMenuOpen] = useState(false);
  
  const [formSuccess, setFormSuccess] = useState(false);
  const ansprechpartnerSectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || window.turnstileLoaded) return;
    window.turnstileLoaded = true;
    const script = document.createElement('script');
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const section = ansprechpartnerSectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('is-visible');
            observer.unobserve(section);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSuccess(false);

    const form = e.target;

    const submitForm = async () => {
      const formData = new FormData(form);
      formData.append('lang', lang);

      try {
        const res = await fetch('/mail.php', {
          method: 'POST',
          body: formData
        });
        const data = await res.json();
        if (data.success) {
          setFormSuccess(true);
          form.reset();
          setTimeout(() => setFormSuccess(false), 6000);
        }
      } catch {
        // silent fail
      }
    };

    if (!window.turnstile) {
      await submitForm();
      return;
    }

    try {
      const token = await new Promise((resolve, reject) => {
        window.turnstile.render('#cf-turnstile-container', {
          sitekey: '0x4AAAAAAECHdB2byZJ3ZQG5',
          callback: resolve,
          'error-callback': reject
        });
      });

      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = 'cf-turnstile-response';
      input.value = token;
      form.appendChild(input);

      await submitForm();
      input.remove();
      window.turnstile.remove('#cf-turnstile-container');
    } catch {
      // silent fail
    }
  };

  return (
    <div id="app" dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="navbar">
        <a href="/" className="logo-link">
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
        </a>
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
              <option value="fa">FA</option>
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
              <a href="/angebote" className="btn btn-solid">{t.btn_angebote}</a>
              <a href="/angebote" className="btn btn-link">{t.btn_mehr}</a>
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
            <a href="/angebote#vorbeugen" className="step">
              <h3>{t.step_1}</h3>
              <p className="step-desc">{t.step_1_desc}</p>
              <span className="arrow">&rarr;</span>
            </a>
            <a href="/angebote#handeln" className="step">
              <h3>{t.step_2}</h3>
              <p className="step-desc">{t.step_2_desc}</p>
              <span className="arrow">&rarr;</span>
            </a>
            <a href="/angebote#staerken" className="step">
              <h3>{t.step_3}</h3>
              <p className="step-desc">{t.step_3_desc}</p>
              <span className="arrow">&rarr;</span>
            </a>
          </div>
        </section>

        <section className="hintergrund-section" id="hintergrund-section">
          <div className="hintergrund-container">
            <div className="hintergrund-content">
              <h2 className="hintergrund-title">{t.hintergrund_title}</h2>
              <div className="hintergrund-text" dangerouslySetInnerHTML={{ __html: t.hintergrund_text }} />
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
              <div className="form-group hp-field" aria-hidden="true" style={{ position: 'absolute', left: '-9999px', opacity: 0 }}>
                <label htmlFor="website">Website</label>
                <input type="text" id="website" name="website" tabIndex="-1" autoComplete="off" />
              </div>
              <button type="submit" className="btn btn-primary form-submit-btn">{t.form_submit}</button>
              <div id="cf-turnstile-container" style={{ marginTop: '12px' }}></div>
              {formSuccess && (
                <div id="form-success-msg" className="form-success">{t.form_success}</div>
              )}
            </form>
          </div>
        </section>

        <section className="ansprechpartner-section" id="ansprechpartner-section" ref={ansprechpartnerSectionRef}>
          <div className="ansprechpartner-row">
            <div className="ansprechperson-image-col fly-from-left delay-1">
              <img src="/murat.png" alt="Murat Percin" onError={(e) => { e.target.onerror = null; e.target.src='/mann.svg'; }} />
            </div>
            <div className="ansprechperson-text-col fly-from-right delay-2">
              <h3>Murat Percin, BA</h3>
              <p className="ansprechperson-role" dangerouslySetInnerHTML={{ __html: t.contact2_role || "Ansprechpartner/Bereichsleitung:<br/>MA 11 Einzel/Gruppentrainings" }}></p>
              <div className="ansprechperson-contact">
                <p><strong>E-Mail:</strong> <a href="mailto:m.percin@verein-agit.at">m.percin@verein-agit.at</a></p>
                <p><strong>Mobil:</strong> +43/676/3668823</p>
              </div>
            </div>
            
            <div className="ansprechperson-image-col fly-from-left delay-3">
              <img src="/kuebra.png" alt="Kübra Erik" onError={(e) => { e.target.onerror = null; e.target.src='/mann.svg'; }} />
            </div>
            <div className="ansprechperson-text-col fly-from-right delay-4">
              <h3>Kübra Erik</h3>
              <p className="ansprechperson-role" dangerouslySetInnerHTML={{ __html: t.contact_role || "Ansprechpartnerin/Bereichsleitung:<br/>MA 13 außerschulische Kinder- und Jugendarbeit" }}></p>
              <div className="ansprechperson-contact">
                <p><strong>E-Mail:</strong> <a href="mailto:k.erik@verein-agit.at">k.erik@verein-agit.at</a></p>
                <p><strong>Mobil:</strong> +43/676/3668820</p>
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
              <p>Telefon: +43/1/111111111<br/>E-Mail: <a href="mailto:office@verein-agit.at">office@verein-agit.at</a></p>
            </div>

            <div className="footer-legal">
              <h4>{t.impressum_title}</h4>
              <p>ZVR-Zahl: (bitte einfügen)<br/>Behörde: LPD Wien</p>
              <p className="small-text"><a href="/datenschutz">Datenschutzerklärung</a></p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Verein AGIT. Alle Rechte vorbehalten.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
